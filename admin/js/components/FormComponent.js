class FormComponent {
    constructor(type, data = null) {
        this.type = type;
        this.data = data;
        this.currentLanguage = 'ru';
    }

    render() {
        const form = document.createElement('form');
        form.className = 'needs-validation';
        form.noValidate = true;

        // Language selector
        const languageSelector = this.createLanguageSelector();
        form.appendChild(languageSelector);

        // Form fields based on type
        switch (this.type) {
            case 'news':
                this.addNewsFields(form);
                break;
            case 'announcement':
                this.addAnnouncementFields(form);
                break;
            case 'church':
                this.addChurchFields(form);
                break;
            case 'saint':
                this.addSaintFields(form);
                break;
            case 'navItem':
                this.addNavItemFields(form);
                break;
        }

        // Submit button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.className = 'btn btn-primary mt-3';
        submitButton.textContent = this.data ? 'Сохранить изменения' : 'Добавить';
        form.appendChild(submitButton);

        return form;
    }

    createLanguageSelector() {
        const container = document.createElement('div');
        container.className = 'mb-4';

        const nav = document.createElement('ul');
        nav.className = 'nav nav-tabs language-tabs';

        const languages = [
            { code: 'ru', name: 'Русский' },
            { code: 'en', name: 'English' },
            { code: 'by', name: 'Беларуская' }
        ];

        languages.forEach(lang => {
            const li = document.createElement('li');
            li.className = 'nav-item';

            const a = document.createElement('a');
            a.className = `nav-link ${lang.code === this.currentLanguage ? 'active' : ''}`;
            a.href = '#';
            a.textContent = lang.name;
            a.dataset.lang = lang.code;

            a.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchLanguage(lang.code);
            });

            li.appendChild(a);
            nav.appendChild(li);
        });

        container.appendChild(nav);
        return container;
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        // Update form fields with new language
        this.updateFormFields();
    }

    updateFormFields() {
        // Implementation for updating form fields when language changes
    }

    addNewsFields(form) {
        const fields = [
            { name: 'title', label: 'Заголовок', type: 'text', required: true },
            { name: 'content', label: 'Содержание', type: 'textarea', required: true },
            { name: 'date', label: 'Дата', type: 'date', required: true },
            { name: 'image', label: 'Изображение', type: 'file', required: false }
        ];

        this.addFieldsToForm(form, fields);
    }

    addAnnouncementFields(form) {
        const fields = [
            { name: 'title', label: 'Заголовок', type: 'text', required: true },
            { name: 'content', label: 'Содержание', type: 'textarea', required: true },
            { name: 'date', label: 'Дата', type: 'date', required: true },
            { name: 'location', label: 'Место проведения', type: 'text', required: true }
        ];

        this.addFieldsToForm(form, fields);
    }

    addChurchFields(form) {
        const fields = [
            { name: 'name', label: 'Название храма', type: 'text', required: true },
            { name: 'city', label: 'Город', type: 'text', required: true },
            { name: 'address', label: 'Адрес', type: 'text', required: true },
            { name: 'description', label: 'Описание', type: 'textarea', required: true },
            { name: 'image', label: 'Изображение', type: 'file', required: false }
        ];

        this.addFieldsToForm(form, fields);
    }

    addSaintFields(form) {
        const fields = [
            { name: 'name', label: 'Имя святого', type: 'text', required: true },
            { name: 'memoryDate', label: 'Дата памяти', type: 'date', required: true },
            { name: 'description', label: 'Житие', type: 'textarea', required: true },
            { name: 'image', label: 'Икона', type: 'file', required: false }
        ];

        this.addFieldsToForm(form, fields);
    }

    addNavItemFields(form) {
        const fields = [
            { name: 'text', label: 'Текст пункта меню', type: 'text', required: true },
            { name: 'parent', label: 'Родительский пункт', type: 'select', required: false },
            { name: 'state', label: 'Состояние', type: 'select', required: true }
        ];

        this.addFieldsToForm(form, fields);
    }

    addFieldsToForm(form, fields) {
        fields.forEach(field => {
            const formGroup = document.createElement('div');
            formGroup.className = 'mb-3';

            const label = document.createElement('label');
            label.className = 'form-label';
            label.htmlFor = field.name;
            label.textContent = field.label;

            let input;
            if (field.type === 'textarea') {
                input = document.createElement('textarea');
                input.className = 'form-control';
                input.rows = 5;
            } else if (field.type === 'select') {
                input = document.createElement('select');
                input.className = 'form-select';
                
                if (field.name === 'parent') {
                    // Add parent options
                    const navItems = belhardSiteData.navBar.navBarElements;
                    const option = document.createElement('option');
                    option.value = '0';
                    option.textContent = 'Нет родителя';
                    input.appendChild(option);

                    navItems.forEach(item => {
                        const option = document.createElement('option');
                        option.value = item.id;
                        option.textContent = belhardSiteData.navBar.navBarText[this.currentLanguage][item.id - 1];
                        input.appendChild(option);
                    });
                } else if (field.name === 'state') {
                    const states = [
                        { value: '1', text: 'Активен' },
                        { value: '0', text: 'Скрыт' }
                    ];
                    states.forEach(state => {
                        const option = document.createElement('option');
                        option.value = state.value;
                        option.textContent = state.text;
                        input.appendChild(option);
                    });
                }
            } else {
                input = document.createElement('input');
                input.type = field.type;
                input.className = 'form-control';
            }

            input.id = field.name;
            input.name = field.name;
            input.required = field.required;

            if (this.data && this.data[field.name]) {
                if (typeof this.data[field.name] === 'object') {
                    input.value = this.data[field.name][this.currentLanguage] || '';
                } else {
                    input.value = this.data[field.name];
                }
            }

            formGroup.appendChild(label);
            formGroup.appendChild(input);
            form.appendChild(formGroup);
        });
    }
} 