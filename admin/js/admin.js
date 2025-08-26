import {
    styles,
    applyStyles,
    createStyledElement,
    createButton,
    createFormGroup,
    createInput,
    createTextarea,
    createSelect,
    createTable
} from './utils/styles.js';

// Admin Panel JavaScript
class AdminPanel {
    constructor() {
        this.currentSection = null;
        this.currentLanguage = 'ru';
        this.isAuthenticated = false;
        this.initializeStyles();
        this.initializeEventListeners();
        this.checkAuth();
    }

    initializeStyles() {
        // Apply base styles to body
        applyStyles(document.body, styles.body);
        
        // Create and style login form container
        const loginForm = document.getElementById('loginForm');
        applyStyles(loginForm, {
            maxWidth: '500px',
            margin: '5rem auto',
            padding: '0 1rem'
        });

        // Create and style admin panel container
        const adminPanel = document.getElementById('adminPanel');
        applyStyles(adminPanel, {
            minHeight: '100vh'
        });
    }

    initializeEventListeners() {
        // Login form
        document.getElementById('adminLoginForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // Navigation
        document.querySelectorAll('[data-section]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.dataset.section;
                this.loadSection(section);
            });
        });

        // Logout
        document.getElementById('logoutBtn')?.addEventListener('click', () => {
            this.handleLogout();
        });
    }

    createLoginForm() {
        const loginForm = document.getElementById('loginForm');
        loginForm.innerHTML = '';

        const card = createStyledElement('div', styles.card);
        const cardHeader = createStyledElement('div', {
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #dee2e6',
            borderRadius: '0.25rem 0.25rem 0 0'
        });
        const cardBody = createStyledElement('div', {
            padding: '1rem'
        });

        const title = createStyledElement('h3', {
            textAlign: 'center',
            margin: 0
        });
        title.textContent = 'Вход в админ-панель';

        const form = createStyledElement('form', {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        });
        form.id = 'adminLoginForm';

        const usernameInput = createInput('text', 'username', true);
        const passwordInput = createInput('password', 'password', true);
        const submitButton = createButton('Войти', null, 'primary');
        submitButton.type = 'submit';
        submitButton.style.width = '100%';

        form.appendChild(createFormGroup('Имя пользователя', usernameInput));
        form.appendChild(createFormGroup('Пароль', passwordInput));
        form.appendChild(submitButton);

        cardHeader.appendChild(title);
        cardBody.appendChild(form);
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        loginForm.appendChild(card);
    }

    createAdminPanel() {
        const adminPanel = document.getElementById('adminPanel');
        adminPanel.innerHTML = '';

        // Create navbar
        const navbar = createStyledElement('nav', {
            backgroundColor: '#343a40',
            padding: '1rem',
            color: 'white',
            marginBottom: '2rem'
        });

        const navbarContent = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem'
        });

        const brand = createStyledElement('a', {
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.25rem',
            fontWeight: 'bold'
        });
        brand.textContent = 'Админ-панель';
        brand.href = '#';

        const navItems = createStyledElement('ul', {
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '1rem'
        });

        const sections = [
            { id: 'news', text: 'Новости' },
            { id: 'announcements', text: 'Анонсы' },
            { id: 'churches', text: 'Храмы' },
            { id: 'saints', text: 'Святые' },
            { id: 'navigation', text: 'Навигация' }
        ];

        sections.forEach(section => {
            const li = document.createElement('li');
            const a = createStyledElement('a', {
                color: 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                cursor: 'pointer'
            });
            a.textContent = section.text;
            a.dataset.section = section.id;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadSection(section.id);
            });
            li.appendChild(a);
            navItems.appendChild(li);
        });

        const logoutButton = createButton('Выйти', () => this.handleLogout(), 'danger');
        logoutButton.style.marginLeft = '1rem';

        navbarContent.appendChild(brand);
        navbarContent.appendChild(navItems);
        navbarContent.appendChild(logoutButton);
        navbar.appendChild(navbarContent);

        // Create content area
        const contentArea = createStyledElement('div', {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem'
        });
        contentArea.id = 'contentArea';

        adminPanel.appendChild(navbar);
        adminPanel.appendChild(contentArea);
    }

    async checkAuth() {
        const token = localStorage.getItem('adminToken');
        if (token) {
            // Verify token validity here
            this.isAuthenticated = true;
            this.showAdminPanel();
        } else {
            this.showLoginForm();
        }
    }

    async handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // In a real application, this would be an API call
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('adminToken', 'dummy-token');
            this.isAuthenticated = true;
            this.showAdminPanel();
            this.loadSection('news');
        } else {
            alert('Неверные учетные данные');
        }
    }

    handleLogout() {
        localStorage.removeItem('adminToken');
        this.isAuthenticated = false;
        this.showLoginForm();
    }

    showLoginForm() {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('adminPanel').style.display = 'none';
        this.createLoginForm();
    }

    showAdminPanel() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        this.createAdminPanel();
    }

    async loadSection(section) {
        this.currentSection = section;
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const loadingSpinner = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px'
        });
        const spinner = createStyledElement('div', {
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        });
        loadingSpinner.appendChild(spinner);
        contentArea.appendChild(loadingSpinner);

        switch (section) {
            case 'news':
                await this.loadNewsSection();
                break;
            case 'announcements':
                await this.loadAnnouncementsSection();
                break;
            case 'churches':
                await this.loadChurchesSection();
                break;
            case 'saints':
                await this.loadSaintsSection();
                break;
            case 'navigation':
                await this.loadNavigationSection();
                break;
        }
    }

    async loadNewsSection() {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Управление новостями';

        const addButton = createButton('Добавить новость', () => this.showAddNewsForm(), 'primary');
        header.appendChild(title);
        header.appendChild(addButton);

        const table = createTable([
            { key: 'id', label: 'ID' },
            { key: 'title', label: 'Заголовок' },
            { key: 'date', label: 'Дата' },
            { key: 'actions', label: 'Действия' }
        ]);

        const tbody = table.querySelector('tbody');
        belhardSiteData.news.forEach(news => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${news.id}</td>
                <td>${news.title[this.currentLanguage]}</td>
                <td>${news.date}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="adminPanel.editNews(${news.id})">Редактировать</button>
                    <button class="btn btn-sm btn-danger" onclick="adminPanel.deleteNews(${news.id})">Удалить</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        contentArea.appendChild(header);
        contentArea.appendChild(table);
    }

    async loadAnnouncementsSection() {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Управление анонсами';

        const addButton = createButton('Добавить анонс', () => this.showAddAnnouncementForm(), 'primary');
        header.appendChild(title);
        header.appendChild(addButton);

        const table = createTable([
            { key: 'id', label: 'ID' },
            { key: 'title', label: 'Заголовок' },
            { key: 'date', label: 'Дата' },
            { key: 'actions', label: 'Действия' }
        ]);

        const tbody = table.querySelector('tbody');
        belhardSiteData.announcements.forEach(announcement => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${announcement.id}</td>
                <td>${announcement.title[this.currentLanguage]}</td>
                <td>${announcement.date}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="adminPanel.editAnnouncement(${announcement.id})">Редактировать</button>
                    <button class="btn btn-sm btn-danger" onclick="adminPanel.deleteAnnouncement(${announcement.id})">Удалить</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        contentArea.appendChild(header);
        contentArea.appendChild(table);
    }

    async loadChurchesSection() {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Управление храмами';

        const addButton = createButton('Добавить храм', () => this.showAddChurchForm(), 'primary');
        header.appendChild(title);
        header.appendChild(addButton);

        const table = createTable([
            { key: 'id', label: 'ID' },
            { key: 'name', label: 'Название' },
            { key: 'location', label: 'Местоположение' },
            { key: 'actions', label: 'Действия' }
        ]);

        const tbody = table.querySelector('tbody');
        belhardSiteData.churches.forEach(church => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${church.id}</td>
                <td>${church.name[this.currentLanguage]}</td>
                <td>${church.location[this.currentLanguage]}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="adminPanel.editChurch(${church.id})">Редактировать</button>
                    <button class="btn btn-sm btn-danger" onclick="adminPanel.deleteChurch(${church.id})">Удалить</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        contentArea.appendChild(header);
        contentArea.appendChild(table);
    }

    async loadSaintsSection() {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Управление святыми';

        const addButton = createButton('Добавить святого', () => this.showAddSaintForm(), 'primary');
        header.appendChild(title);
        header.appendChild(addButton);

        const table = createTable([
            { key: 'id', label: 'ID' },
            { key: 'name', label: 'Имя' },
            { key: 'feastDay', label: 'День памяти' },
            { key: 'actions', label: 'Действия' }
        ]);

        const tbody = table.querySelector('tbody');
        belhardSiteData.saints.forEach(saint => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${saint.id}</td>
                <td>${saint.name[this.currentLanguage]}</td>
                <td>${saint.feastDay[this.currentLanguage]}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="adminPanel.editSaint(${saint.id})">Редактировать</button>
                    <button class="btn btn-sm btn-danger" onclick="adminPanel.deleteSaint(${saint.id})">Удалить</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        contentArea.appendChild(header);
        contentArea.appendChild(table);
    }

    async loadNavigationSection() {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Управление навигацией';

        const addButton = createButton('Добавить пункт меню', () => this.showAddNavItemForm(), 'primary');
        header.appendChild(title);
        header.appendChild(addButton);

        const table = createTable([
            { key: 'id', label: 'ID' },
            { key: 'title', label: 'Название' },
            { key: 'parent', label: 'Родитель' },
            { key: 'actions', label: 'Действия' }
        ]);

        const tbody = table.querySelector('tbody');
        belhardSiteData.navBar.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.id}</td>
                <td>${item.title[this.currentLanguage]}</td>
                <td>${item.parent || '-'}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="adminPanel.editNavItem(${item.id})">Редактировать</button>
                    <button class="btn btn-sm btn-danger" onclick="adminPanel.deleteNavItem(${item.id})">Удалить</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        contentArea.appendChild(header);
        contentArea.appendChild(table);
    }

    showAddNewsForm() {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Добавить новость';

        const backButton = createButton('Назад', () => this.loadSection('news'), 'secondary');
        header.appendChild(title);
        header.appendChild(backButton);

        const form = createStyledElement('form', {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
        });
        form.id = 'addNewsForm';

        const languageTabs = createStyledElement('div', {
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem'
        });

        ['ru', 'en', 'be'].forEach(lang => {
            const tab = createButton(lang.toUpperCase(), () => this.switchLanguage(lang), this.currentLanguage === lang ? 'primary' : 'secondary');
            languageTabs.appendChild(tab);
        });

        const titleInput = createInput('text', 'title', true);
        const contentInput = createTextarea('content', true);
        const dateInput = createInput('date', 'date', true);

        form.appendChild(languageTabs);
        form.appendChild(createFormGroup('Заголовок', titleInput));
        form.appendChild(createFormGroup('Содержание', contentInput));
        form.appendChild(createFormGroup('Дата', dateInput));

        const submitButton = createButton('Добавить', null, 'primary');
        submitButton.type = 'submit';
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddNews(new FormData(form));
        });

        contentArea.appendChild(header);
        contentArea.appendChild(form);
    }

    showAddAnnouncementForm() {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Добавить анонс';

        const backButton = createButton('Назад', () => this.loadSection('announcements'), 'secondary');
        header.appendChild(title);
        header.appendChild(backButton);

        const form = createStyledElement('form', {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
        });
        form.id = 'addAnnouncementForm';

        const languageTabs = createStyledElement('div', {
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem'
        });

        ['ru', 'en', 'be'].forEach(lang => {
            const tab = createButton(lang.toUpperCase(), () => this.switchLanguage(lang), this.currentLanguage === lang ? 'primary' : 'secondary');
            languageTabs.appendChild(tab);
        });

        const titleInput = createInput('text', 'title', true);
        const contentInput = createTextarea('content', true);
        const dateInput = createInput('date', 'date', true);

        form.appendChild(languageTabs);
        form.appendChild(createFormGroup('Заголовок', titleInput));
        form.appendChild(createFormGroup('Содержание', contentInput));
        form.appendChild(createFormGroup('Дата', dateInput));

        const submitButton = createButton('Добавить', null, 'primary');
        submitButton.type = 'submit';
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddAnnouncement(new FormData(form));
        });

        contentArea.appendChild(header);
        contentArea.appendChild(form);
    }

    showAddChurchForm() {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Добавить храм';

        const backButton = createButton('Назад', () => this.loadSection('churches'), 'secondary');
        header.appendChild(title);
        header.appendChild(backButton);

        const form = createStyledElement('form', {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
        });
        form.id = 'addChurchForm';

        const languageTabs = createStyledElement('div', {
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem'
        });

        ['ru', 'en', 'be'].forEach(lang => {
            const tab = createButton(lang.toUpperCase(), () => this.switchLanguage(lang), this.currentLanguage === lang ? 'primary' : 'secondary');
            languageTabs.appendChild(tab);
        });

        const nameInput = createInput('text', 'name', true);
        const locationInput = createInput('text', 'location', true);
        const descriptionInput = createTextarea('description', true);

        form.appendChild(languageTabs);
        form.appendChild(createFormGroup('Название', nameInput));
        form.appendChild(createFormGroup('Местоположение', locationInput));
        form.appendChild(createFormGroup('Описание', descriptionInput));

        const submitButton = createButton('Добавить', null, 'primary');
        submitButton.type = 'submit';
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddChurch(new FormData(form));
        });

        contentArea.appendChild(header);
        contentArea.appendChild(form);
    }

    showAddSaintForm() {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Добавить святого';

        const backButton = createButton('Назад', () => this.loadSection('saints'), 'secondary');
        header.appendChild(title);
        header.appendChild(backButton);

        const form = createStyledElement('form', {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
        });
        form.id = 'addSaintForm';

        const languageTabs = createStyledElement('div', {
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem'
        });

        ['ru', 'en', 'be'].forEach(lang => {
            const tab = createButton(lang.toUpperCase(), () => this.switchLanguage(lang), this.currentLanguage === lang ? 'primary' : 'secondary');
            languageTabs.appendChild(tab);
        });

        const nameInput = createInput('text', 'name', true);
        const feastDayInput = createInput('text', 'feastDay', true);
        const descriptionInput = createTextarea('description', true);

        form.appendChild(languageTabs);
        form.appendChild(createFormGroup('Имя', nameInput));
        form.appendChild(createFormGroup('День памяти', feastDayInput));
        form.appendChild(createFormGroup('Описание', descriptionInput));

        const submitButton = createButton('Добавить', null, 'primary');
        submitButton.type = 'submit';
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddSaint(new FormData(form));
        });

        contentArea.appendChild(header);
        contentArea.appendChild(form);
    }

    showAddNavItemForm() {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Добавить пункт меню';

        const backButton = createButton('Назад', () => this.loadSection('navigation'), 'secondary');
        header.appendChild(title);
        header.appendChild(backButton);

        const form = createStyledElement('form', {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
        });
        form.id = 'addNavItemForm';

        const languageTabs = createStyledElement('div', {
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem'
        });

        ['ru', 'en', 'be'].forEach(lang => {
            const tab = createButton(lang.toUpperCase(), () => this.switchLanguage(lang), this.currentLanguage === lang ? 'primary' : 'secondary');
            languageTabs.appendChild(tab);
        });

        const titleInput = createInput('text', 'title', true);
        const parentSelect = createSelect('parent', false);
        parentSelect.innerHTML = '<option value="">Нет родителя</option>';
        belhardSiteData.navBar.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.title[this.currentLanguage];
            parentSelect.appendChild(option);
        });

        form.appendChild(languageTabs);
        form.appendChild(createFormGroup('Название', titleInput));
        form.appendChild(createFormGroup('Родительский пункт', parentSelect));

        const submitButton = createButton('Добавить', null, 'primary');
        submitButton.type = 'submit';
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddNavItem(new FormData(form));
        });

        contentArea.appendChild(header);
        contentArea.appendChild(form);
    }

    editNews(id) {
        const news = belhardSiteData.news.find(item => item.id === id);
        if (!news) return;

        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Редактировать новость';

        const backButton = createButton('Назад', () => this.loadSection('news'), 'secondary');
        header.appendChild(title);
        header.appendChild(backButton);

        const form = createStyledElement('form', {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
        });
        form.id = 'editNewsForm';

        const languageTabs = createStyledElement('div', {
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem'
        });

        ['ru', 'en', 'be'].forEach(lang => {
            const tab = createButton(lang.toUpperCase(), () => this.switchLanguage(lang), this.currentLanguage === lang ? 'primary' : 'secondary');
            languageTabs.appendChild(tab);
        });

        const titleInput = createInput('text', 'title', true);
        titleInput.value = news.title[this.currentLanguage] || '';
        const contentInput = createTextarea('content', true);
        contentInput.value = news.content[this.currentLanguage] || '';
        const dateInput = createInput('date', 'date', true);
        dateInput.value = news.date;

        form.appendChild(languageTabs);
        form.appendChild(createFormGroup('Заголовок', titleInput));
        form.appendChild(createFormGroup('Содержание', contentInput));
        form.appendChild(createFormGroup('Дата', dateInput));

        const submitButton = createButton('Сохранить', null, 'primary');
        submitButton.type = 'submit';
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleEditNews(id, new FormData(form));
        });

        contentArea.appendChild(header);
        contentArea.appendChild(form);
    }

    deleteNews(id) {
        if (!confirm('Вы уверены, что хотите удалить эту новость?')) return;

        const index = belhardSiteData.news.findIndex(item => item.id === id);
        if (index !== -1) {
            belhardSiteData.news.splice(index, 1);
            this.loadNewsSection();
        }
    }

    handleAddNews(formData) {
        const newsData = {
            id: Date.now(),
            title: {
                ru: formData.get('title'),
                en: formData.get('title'),
                be: formData.get('title')
            },
            content: {
                ru: formData.get('content'),
                en: formData.get('content'),
                be: formData.get('content')
            },
            date: formData.get('date')
        };

        belhardSiteData.news.push(newsData);
        this.loadNewsSection();
    }

    handleEditNews(id, formData) {
        const index = belhardSiteData.news.findIndex(item => item.id === id);
        if (index !== -1) {
            belhardSiteData.news[index] = {
                ...belhardSiteData.news[index],
                title: {
                    ...belhardSiteData.news[index].title,
                    [this.currentLanguage]: formData.get('title')
                },
                content: {
                    ...belhardSiteData.news[index].content,
                    [this.currentLanguage]: formData.get('content')
                },
                date: formData.get('date')
            };
            this.loadNewsSection();
        }
    }

    editAnnouncement(id) {
        const announcement = belhardSiteData.announcements.find(item => item.id === id);
        if (!announcement) return;

        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Редактировать анонс';

        const backButton = createButton('Назад', () => this.loadSection('announcements'), 'secondary');
        header.appendChild(title);
        header.appendChild(backButton);

        const form = createStyledElement('form', {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
        });
        form.id = 'editAnnouncementForm';

        const languageTabs = createStyledElement('div', {
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem'
        });

        ['ru', 'en', 'be'].forEach(lang => {
            const tab = createButton(lang.toUpperCase(), () => this.switchLanguage(lang), this.currentLanguage === lang ? 'primary' : 'secondary');
            languageTabs.appendChild(tab);
        });

        const titleInput = createInput('text', 'title', true);
        titleInput.value = announcement.title[this.currentLanguage] || '';
        const contentInput = createTextarea('content', true);
        contentInput.value = announcement.content[this.currentLanguage] || '';
        const dateInput = createInput('date', 'date', true);
        dateInput.value = announcement.date;

        form.appendChild(languageTabs);
        form.appendChild(createFormGroup('Заголовок', titleInput));
        form.appendChild(createFormGroup('Содержание', contentInput));
        form.appendChild(createFormGroup('Дата', dateInput));

        const submitButton = createButton('Сохранить', null, 'primary');
        submitButton.type = 'submit';
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleEditAnnouncement(id, new FormData(form));
        });

        contentArea.appendChild(header);
        contentArea.appendChild(form);
    }

    deleteAnnouncement(id) {
        if (!confirm('Вы уверены, что хотите удалить этот анонс?')) return;

        const index = belhardSiteData.announcements.findIndex(item => item.id === id);
        if (index !== -1) {
            belhardSiteData.announcements.splice(index, 1);
            this.loadAnnouncementsSection();
        }
    }

    handleAddAnnouncement(formData) {
        const announcementData = {
            id: Date.now(),
            title: {
                ru: formData.get('title'),
                en: formData.get('title'),
                be: formData.get('title')
            },
            content: {
                ru: formData.get('content'),
                en: formData.get('content'),
                be: formData.get('content')
            },
            date: formData.get('date')
        };

        belhardSiteData.announcements.push(announcementData);
        this.loadAnnouncementsSection();
    }

    handleEditAnnouncement(id, formData) {
        const index = belhardSiteData.announcements.findIndex(item => item.id === id);
        if (index !== -1) {
            belhardSiteData.announcements[index] = {
                ...belhardSiteData.announcements[index],
                title: {
                    ...belhardSiteData.announcements[index].title,
                    [this.currentLanguage]: formData.get('title')
                },
                content: {
                    ...belhardSiteData.announcements[index].content,
                    [this.currentLanguage]: formData.get('content')
                },
                date: formData.get('date')
            };
            this.loadAnnouncementsSection();
        }
    }

    editChurch(id) {
        const church = belhardSiteData.churches.find(item => item.id === id);
        if (!church) return;

        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Редактировать храм';

        const backButton = createButton('Назад', () => this.loadSection('churches'), 'secondary');
        header.appendChild(title);
        header.appendChild(backButton);

        const form = createStyledElement('form', {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
        });
        form.id = 'editChurchForm';

        const languageTabs = createStyledElement('div', {
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem'
        });

        ['ru', 'en', 'be'].forEach(lang => {
            const tab = createButton(lang.toUpperCase(), () => this.switchLanguage(lang), this.currentLanguage === lang ? 'primary' : 'secondary');
            languageTabs.appendChild(tab);
        });

        const nameInput = createInput('text', 'name', true);
        nameInput.value = church.name[this.currentLanguage] || '';
        const locationInput = createInput('text', 'location', true);
        locationInput.value = church.location[this.currentLanguage] || '';
        const descriptionInput = createTextarea('description', true);
        descriptionInput.value = church.description[this.currentLanguage] || '';

        form.appendChild(languageTabs);
        form.appendChild(createFormGroup('Название', nameInput));
        form.appendChild(createFormGroup('Местоположение', locationInput));
        form.appendChild(createFormGroup('Описание', descriptionInput));

        const submitButton = createButton('Сохранить', null, 'primary');
        submitButton.type = 'submit';
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleEditChurch(id, new FormData(form));
        });

        contentArea.appendChild(header);
        contentArea.appendChild(form);
    }

    deleteChurch(id) {
        if (!confirm('Вы уверены, что хотите удалить этот храм?')) return;

        const index = belhardSiteData.churches.findIndex(item => item.id === id);
        if (index !== -1) {
            belhardSiteData.churches.splice(index, 1);
            this.loadChurchesSection();
        }
    }

    handleAddChurch(formData) {
        const churchData = {
            id: Date.now(),
            name: {
                ru: formData.get('name'),
                en: formData.get('name'),
                be: formData.get('name')
            },
            location: {
                ru: formData.get('location'),
                en: formData.get('location'),
                be: formData.get('location')
            },
            description: {
                ru: formData.get('description'),
                en: formData.get('description'),
                be: formData.get('description')
            }
        };

        belhardSiteData.churches.push(churchData);
        this.loadChurchesSection();
    }

    handleEditChurch(id, formData) {
        const index = belhardSiteData.churches.findIndex(item => item.id === id);
        if (index !== -1) {
            belhardSiteData.churches[index] = {
                ...belhardSiteData.churches[index],
                name: {
                    ...belhardSiteData.churches[index].name,
                    [this.currentLanguage]: formData.get('name')
                },
                location: {
                    ...belhardSiteData.churches[index].location,
                    [this.currentLanguage]: formData.get('location')
                },
                description: {
                    ...belhardSiteData.churches[index].description,
                    [this.currentLanguage]: formData.get('description')
                }
            };
            this.loadChurchesSection();
        }
    }

    editSaint(id) {
        const saint = belhardSiteData.saints.find(item => item.id === id);
        if (!saint) return;

        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Редактировать святого';

        const backButton = createButton('Назад', () => this.loadSection('saints'), 'secondary');
        header.appendChild(title);
        header.appendChild(backButton);

        const form = createStyledElement('form', {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
        });
        form.id = 'editSaintForm';

        const languageTabs = createStyledElement('div', {
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem'
        });

        ['ru', 'en', 'be'].forEach(lang => {
            const tab = createButton(lang.toUpperCase(), () => this.switchLanguage(lang), this.currentLanguage === lang ? 'primary' : 'secondary');
            languageTabs.appendChild(tab);
        });

        const nameInput = createInput('text', 'name', true);
        nameInput.value = saint.name[this.currentLanguage] || '';
        const feastDayInput = createInput('text', 'feastDay', true);
        feastDayInput.value = saint.feastDay[this.currentLanguage] || '';
        const descriptionInput = createTextarea('description', true);
        descriptionInput.value = saint.description[this.currentLanguage] || '';

        form.appendChild(languageTabs);
        form.appendChild(createFormGroup('Имя', nameInput));
        form.appendChild(createFormGroup('День памяти', feastDayInput));
        form.appendChild(createFormGroup('Описание', descriptionInput));

        const submitButton = createButton('Сохранить', null, 'primary');
        submitButton.type = 'submit';
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleEditSaint(id, new FormData(form));
        });

        contentArea.appendChild(header);
        contentArea.appendChild(form);
    }

    deleteSaint(id) {
        if (!confirm('Вы уверены, что хотите удалить этого святого?')) return;

        const index = belhardSiteData.saints.findIndex(item => item.id === id);
        if (index !== -1) {
            belhardSiteData.saints.splice(index, 1);
            this.loadSaintsSection();
        }
    }

    handleAddSaint(formData) {
        const saintData = {
            id: Date.now(),
            name: {
                ru: formData.get('name'),
                en: formData.get('name'),
                be: formData.get('name')
            },
            feastDay: {
                ru: formData.get('feastDay'),
                en: formData.get('feastDay'),
                be: formData.get('feastDay')
            },
            description: {
                ru: formData.get('description'),
                en: formData.get('description'),
                be: formData.get('description')
            }
        };

        belhardSiteData.saints.push(saintData);
        this.loadSaintsSection();
    }

    handleEditSaint(id, formData) {
        const index = belhardSiteData.saints.findIndex(item => item.id === id);
        if (index !== -1) {
            belhardSiteData.saints[index] = {
                ...belhardSiteData.saints[index],
                name: {
                    ...belhardSiteData.saints[index].name,
                    [this.currentLanguage]: formData.get('name')
                },
                feastDay: {
                    ...belhardSiteData.saints[index].feastDay,
                    [this.currentLanguage]: formData.get('feastDay')
                },
                description: {
                    ...belhardSiteData.saints[index].description,
                    [this.currentLanguage]: formData.get('description')
                }
            };
            this.loadSaintsSection();
        }
    }

    editNavItem(id) {
        const navItem = belhardSiteData.navBar.find(item => item.id === id);
        if (!navItem) return;

        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        const header = createStyledElement('div', {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
        });

        const title = createStyledElement('h2', {
            margin: 0
        });
        title.textContent = 'Редактировать пункт меню';

        const backButton = createButton('Назад', () => this.loadSection('navigation'), 'secondary');
        header.appendChild(title);
        header.appendChild(backButton);

        const form = createStyledElement('form', {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
        });
        form.id = 'editNavItemForm';

        const languageTabs = createStyledElement('div', {
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem'
        });

        ['ru', 'en', 'be'].forEach(lang => {
            const tab = createButton(lang.toUpperCase(), () => this.switchLanguage(lang), this.currentLanguage === lang ? 'primary' : 'secondary');
            languageTabs.appendChild(tab);
        });

        const titleInput = createInput('text', 'title', true);
        titleInput.value = navItem.title[this.currentLanguage] || '';
        const parentSelect = createSelect('parent', false);
        parentSelect.innerHTML = '<option value="">Нет родителя</option>';
        belhardSiteData.navBar.forEach(item => {
            if (item.id !== id) { // Don't allow self as parent
                const option = document.createElement('option');
                option.value = item.id;
                option.textContent = item.title[this.currentLanguage];
                option.selected = item.id === navItem.parent;
                parentSelect.appendChild(option);
            }
        });

        form.appendChild(languageTabs);
        form.appendChild(createFormGroup('Название', titleInput));
        form.appendChild(createFormGroup('Родительский пункт', parentSelect));

        const submitButton = createButton('Сохранить', null, 'primary');
        submitButton.type = 'submit';
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleEditNavItem(id, new FormData(form));
        });

        contentArea.appendChild(header);
        contentArea.appendChild(form);
    }

    deleteNavItem(id) {
        if (!confirm('Вы уверены, что хотите удалить этот пункт меню?')) return;

        const index = belhardSiteData.navBar.findIndex(item => item.id === id);
        if (index !== -1) {
            belhardSiteData.navBar.splice(index, 1);
            this.loadNavigationSection();
        }
    }

    handleAddNavItem(formData) {
        const navItemData = {
            id: Date.now(),
            title: {
                ru: formData.get('title'),
                en: formData.get('title'),
                be: formData.get('title')
            },
            parent: formData.get('parent') || null,
            state: '1'
        };

        belhardSiteData.navBar.push(navItemData);
        this.loadNavigationSection();
    }

    handleEditNavItem(id, formData) {
        const index = belhardSiteData.navBar.findIndex(item => item.id === id);
        if (index !== -1) {
            belhardSiteData.navBar[index] = {
                ...belhardSiteData.navBar[index],
                title: {
                    ...belhardSiteData.navBar[index].title,
                    [this.currentLanguage]: formData.get('title')
                },
                parent: formData.get('parent') || null
            };
            this.loadNavigationSection();
        }
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        this.loadSection(this.currentSection);
    }
}

// Initialize admin panel
const adminPanel = new AdminPanel(); 