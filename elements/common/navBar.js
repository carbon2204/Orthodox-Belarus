function getAccountType(classSuffix){
    classSuffix = '';
    if (belhardSiteData.currentAccountType === 0) {
        classSuffix = '-type-zero';
    } else if(belhardSiteData.currentAccountType === 1){
        classSuffix = '-type-one';
    }
    return classSuffix;
}

// Функция создания навигационной панели с поддержкой мультиязычности и адаптивности
function createNavBar(navBarInfo, currentLanguage, mode) {
    // Создаём элемент <nav> с id "navbar" и добавляем его в body
    const navBar = createElement('nav', { id: 'navbar' }, document.body);

    // Создаём список <ul> внутри навбара для хранения видимых элементов меню
    const ulVisible = createElement('ul', { class: "visible-menu" }, navBar);

    // Создаём кнопку бургер-меню (скрытое по умолчанию)
    const burgerButton = createElement("button", { class: "burger hidden", id: "burger-button" }, navBar);

    // Добавляем изображение и счетчик для бургер-меню
    const dotsImg = createElement("img", { src: belhardSiteData.controlElements.dotsSidebarIcon }, burgerButton);
    const burgerCount = createElement("div", { class: "burger-count" }, burgerButton);

    // Создаём скрытое меню <ul>
    const ulHidden = createElement('ul', { class: "hidden-menu" }, navBar);

    // Создаём кнопку закрытия боковой панели внутри элемента списка
    const closeButton = createElement('button', {
        id: 'close-sidebar-button',
        'aria-label': 'Закрыть панель навигации'
    }, createElement('li', {}, ulVisible));

    // Добавляем иконку кнопки закрытия боковой панели
    const closeImg = createElement('img', {
        src: belhardSiteData.controlElements.closeSidebarIcon,
        alt: 'Кнопка закрытия панели навигации',
        width: belhardSiteData.controlElementsSizes.closeSidebarIcon,
        height: belhardSiteData.controlElementsSizes.closeSidebarIcon
    }, closeButton);

    // Создаём затемняющий фон для открытого меню
    const overlay = createElement('div', { id: 'overlay' }, document.body);

    // Создаём кнопку для открытия боковой панели
    const openSideBarButton = createElement('button', {
        id: 'open-sidebar-button',
        'aria-label': 'Открыть панель навигации',
        'aria-expanded': 'false',
        'aria-controls': 'navbar'
    }, document.body);

    // Добавляем иконку кнопки открытия боковой панели
    const openImg = createElement('img', {
        src: belhardSiteData.controlElements.openSidebarIcon,
        alt: 'Кнопка открытия панели навигации',
        width: belhardSiteData.controlElementsSizes.openSidebarIcon,
        height: belhardSiteData.controlElementsSizes.openSidebarIcon
    }, openSideBarButton);

    const goBackImg = createElement('img', {
        src: belhardSiteData.controlElements.goBackIcon,
        alt: 'Вернуться назад',
        class: 'go-back-icon hidden', // изначально скрыта
        width: belhardSiteData.controlElementsSizes.goBackIconWidth,
        height: belhardSiteData.controlElementsSizes.goBackIconHeight
    }, document.body);

    goBackImg.onclick = function () {
        goBackInItemsStack();
    };

    // Заполняем меню элементами из navBarInfo
    buildMenu(navBarInfo.navBarElements, '0', ulVisible, navBarInfo, currentLanguage);

    // Функция для обновления сдвига первого элемента меню
    function updateFirstItemPosition() {
        const firstItem = ulVisible.querySelector('li:not(#close-sidebar-button)') || ulVisible.querySelector('li');
        if (firstItem && window.innerWidth > belhardSiteData.mobileSizes.navBar) {
            if (belhardSiteData.lastItemsStack && belhardSiteData.lastItemsStack.length > 1) {
                goBackImg.classList.remove('hidden'); // Показываем иконку "Назад"
                firstItem.classList.add('shifted');   // Добавляем класс для сдвига
            } else {
                goBackImg.classList.add('hidden');    // Скрываем иконку "Назад"
                firstItem.classList.remove('shifted'); // Убираем класс сдвига
            }
        } else if (belhardSiteData.lastItemsStack.length > 1) {
            goBackImg.classList.remove('hidden');     // Показываем иконку "Назад"
            firstItem.classList.remove('shifted');    // Убираем класс сдвига
        } else {
            goBackImg.classList.add('hidden');        // Скрываем иконку "Назад"
            firstItem.classList.remove('shifted');    // Убираем класс сдвига
        }
    }

    // Вызываем функцию после построения меню
    updateFirstItemPosition();

    // Условная логика в зависимости от mode
    if (mode == 0) {
        // Добавляем класс для последнего элемента только в mode 0
        const menuItems = ulVisible.querySelectorAll('li:not(#close-sidebar-button)');

        // Определяем суффикс классов в зависимости от currentAccountType
        var classSuffix = getAccountType(classSuffix);
        // Создаём контейнер для строки поиска
        const searchWrapper = createElement('div', { class: 'search-wrapper' + classSuffix }, document.body);

        // Создаём поле ввода для поиска с плейсхолдером на текущем языке
        const searchInput = createElement('input', {
            type: 'text',
            id: 'search-input',
            class: 'search-input' + classSuffix,
            placeholder: belhardSiteData.controlElements.searchPlaceholder[currentLanguage] || belhardSiteData.controlElements.searchPlaceholder["ru"]
        }, searchWrapper);

        // Добавляем иконку поиска
        const searchIcon = createElement('img', {
            src: belhardSiteData.controlElements.searchIcon,
            alt: 'Поиск',
            class: 'search-icon' + classSuffix
        }, searchWrapper);

        // Обработчик клика по иконке поиска
        searchIcon.onclick = function () {
            handleSearch(searchInput, currentLanguage);
        };

        // Обработчик нажатия клавиши "Enter" в поле поиска
        searchInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                handleSearch(searchInput, currentLanguage);
            }
        });

        var profileButtonSrc = "";
        var profileButtonSizes = [0, 0];
        if(belhardSiteData.currentAccountType == 0){
            profileButtonSrc = belhardSiteData.controlElements.profileIconTypeZero;
            profileButtonSizes[0] = belhardSiteData.controlElementsSizes.profileIconTypeZero;
            profileButtonSizes[1] = belhardSiteData.controlElementsSizes.profileIconTypeZero;
        } else if(belhardSiteData.currentAccountType == 1){
            profileButtonSrc = belhardSiteData.controlElements.profileIconTypeOne + belhardSiteData.currentLanguage + ".png";
            profileButtonSizes[0] = belhardSiteData.controlElementsSizes.profileIconWidthTypeOne;
            profileButtonSizes[1] = belhardSiteData.controlElementsSizes.profileIconHeightTypeOne;
        }
        // Создаём кнопку профиля
        const profileButton = createElement('img', {
            src: profileButtonSrc,
            alt: 'Аккаунт',
            class: 'profile-icon' + classSuffix,
            width: profileButtonSizes[0],
            height: profileButtonSizes[1]
        }, document.body);

        profileButton.addEventListener("click", function (event) {
            addElementInStack('profile', 0);
            buildProfilePage(navBarInfo.profileScripts);
        });
    }

    // Назначаем обработчики событий для открытия и закрытия боковой панели
    openSideBarButton.onclick = openSideBar;
    closeButton.onclick = closeSideBar;
    overlay.onclick = closeSideBar;

    // Обработчик изменения размеров экрана для сброса состояния меню
    window.addEventListener('resize', function () {
        if (window.innerWidth > belhardSiteData.mobileSizes.navBar) {
            const openElements = document.querySelectorAll('.open');
            for (var i = 0; i < openElements.length; i++) {
                openElements[i].classList.remove('open');
            }
            navBar.classList.remove('show');
        }
        updateFirstItemPosition();
    });
}

// Функция построения меню на основе данных navBarInfo
function buildMenu(items, parentId, parentUl, navBarInfo, currentLanguage) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].state === "0") continue;
        if (items[i].parent !== parentId) continue;

        const li = document.createElement('li');
        const a = document.createElement('a');
        const idNum = parseInt(items[i].id, 10); // Преобразуем id в число
        const textArray = navBarInfo.navBarText[currentLanguage] || navBarInfo.navBarText["ru"] || [];
        a.textContent = textArray[idNum - 1] || "";


        // Добавляем свойство source для элемента меню
        items[i].source = belhardSiteData.form.formSource.navigationSource;

        // Привязываем обработчик события к ссылке
        attachRebuildListener(a, items[i], li);

        const childrenUl = document.createElement('ul');
        buildMenu(items, items[i].id, childrenUl, navBarInfo, currentLanguage);

        if (childrenUl.childElementCount > 0) {
            li.classList.add('has-children');
            li.appendChild(a);
            li.appendChild(childrenUl);
        } else {
            li.appendChild(a);
        }

        parentUl.appendChild(li);
    }
}

// Функция обработки действий с поиском
function handleSearch(searchInput, currentLanguage) {
    var classSuffix = getAccountType(classSuffix);
    var profileIconWrapper = document.querySelector('.profile-icon' + classSuffix);
    if (!searchInput.classList.contains('expanded' + classSuffix)) {
        // Открываем поле поиска, если оно было закрыто
        searchInput.classList.add('expanded' + classSuffix);
        searchInput.focus();
        if(belhardSiteData.currentAccountType == 1){
            profileIconWrapper.classList.add('search-open' + classSuffix);
        }
        belhardSiteData.currentSearchExpandedType = 1;
    } else {
        // Если поле уже открыто
        if (searchInput.value.trim() === '') {
            // Закрываем поле, если текст отсутствует
            searchInput.classList.remove('expanded' + classSuffix);
            if(belhardSiteData.currentAccountType == 1){
                profileIconWrapper.classList.remove('search-open' + classSuffix);
            }
            belhardSiteData.currentSearchExpandedType = 0;
        } else {
            // Обрабатываем поиск и очищаем поле
            processSearch(searchInput.value, currentLanguage);
            searchInput.value = '';
        }
    }
    initializeNavigation();
}

// Функция обработки поискового запроса
function processSearch(searchInput, currentLanguage) {
    if (!searchInput) {
        var message = belhardSiteData.navBar.searchMessages[currentLanguage]?.[0] ||
            belhardSiteData.navBar.searchMessages["ru"]?.[0];
        if (typeof message === "string") {
            alert(message);
        }
        return;
    }

    const searchValue = searchInput.toLowerCase().trim();
    const newsItems = belhardSiteData.news;
    const leftColumnItems = newsItems.leftColumn.items;
    const rightColumnItems = newsItems.rightColumn.details;
    const matchingItems = [];

    // Собираем индексы текстов для новостей и анонсов из структуры данных
    const newsTextIndices = leftColumnItems.map(item => item.textIndex);
    const announcementTextIndices = rightColumnItems.map(item => item.textIndex);

    // Итерируемся только до последнего индекса текста, исключая даты
    const maxTextIndex = Math.max(...newsTextIndices, ...announcementTextIndices);
    for (let i = 3; i <= maxTextIndex; i++) { // Начинаем с 3, чтобы пропустить заголовки и "Подробнее"
        const itemText = newsItems.texts[currentLanguage][i].toLowerCase();

        if (itemText.includes(searchValue)) {
            const isNewsItem = newsTextIndices.includes(i);
            const isAnnouncementItem = announcementTextIndices.includes(i);
            let scripts = null;
            let formId = null;
            let itemSource = isNewsItem ? "news" : (isAnnouncementItem ? "announcement" : null);

            // Проверяем, есть ли элемент в leftColumnItems или rightColumnItems
            const leftItem = leftColumnItems.find(item => item.textIndex === i);
            const rightItem = rightColumnItems.find(item => item.textIndex === i);

            if (leftItem && itemSource === "news") {
                scripts = leftItem.scripts;
                formId = leftItem.formId;
            } else if (rightItem && itemSource === "announcement") {
                scripts = rightItem.scripts;
                formId = rightItem.formId;
            }

            const matchedItem = {
                text: newsItems.texts[currentLanguage][i],
                linkData: {
                    source: itemSource,
                    type: 'rebuild',
                    scripts: scripts || [],
                    textIndex: i,
                    formId: formId || `search-${i}`,
                    news: newsItems
                }
            };
            matchingItems.push(matchedItem);
        }
    }

    if (matchingItems.length > 0) {
        document.body.innerHTML = '';
        const searchResultsData = {
            form: {
                formSource: belhardSiteData.form.formSource,
                defaultTitle: belhardSiteData.form.defaultTitle,
                data: {
                    navigation: [],
                    textContent: { [currentLanguage]: [] }
                }
            },
            news: {
                leftColumn: newsItems.leftColumn,
                rightColumn: newsItems.rightColumn
            },
            navBar: belhardSiteData.navBar
        };

        const textContentArray = searchResultsData.form.data.textContent[currentLanguage];
        textContentArray.push(belhardSiteData.navBar.searchResultText[currentLanguage]);
        const elementsArray = matchingItems.map((item, i) => {
            textContentArray.push(item.text);
            return {
                type: 'text',
                content: i + 1,
                linkData: item.linkData,
                scripts: item.linkData.scripts
            };
        });

        searchResultsData.form.data.search = {
            id: 'search-results',
            title: 0,
            elements: elementsArray
        };

        const searchMenuItem = {
            text: belhardSiteData.navBar.searchResultText[currentLanguage],
            id: null,
            formId: 'search-results',
            source: 'search',
            type: 'rebuild',
            scripts: belhardSiteData.navBar.searchConfig,
            data: searchResultsData
        };

        addElementInStack("search", searchInput);
        rebuildPage({ preventDefault: function () { } }, searchMenuItem, belhardSiteData.navBar.searchConfig, window.defaultStyles.churchForm.bodyStyleScroll);
    } else {
        var message = belhardSiteData.navBar.searchMessages[currentLanguage]?.[1] ||
            belhardSiteData.navBar.searchMessages["ru"]?.[1];
        if (typeof message === "string") {
            alert(message);
        }
    }
}

// Функция закрытия всех вложенных подменю
function closeAllChildren(element) {
    var openChildren = element.querySelectorAll('.open'); // Находим все открытые подменю
    for (var i = 0; i < openChildren.length; i++) {
        openChildren[i].classList.remove('open'); // Закрываем каждое из них
    }
}

// Функция открытия боковой панели
function openSideBar() {
    var navBar = document.getElementById('navbar'); // Получаем <nav>
    var openSideBarButton = document.getElementById('open-sidebar-button'); // Получаем кнопку открытия
    navBar.classList.add('show'); // Добавляем класс 'show'
    openSideBarButton.setAttribute('aria-expanded', 'true'); // Обновляем атрибут доступности
    applyStyles(document.body, window.defaultStyles.churchForm.bodyStyle); // Блокируем прокрутку
}

// Функция закрытия боковой панели
function closeSideBar() {
    var navBar = document.getElementById('navbar'); // Получаем <nav>
    var openSideBarButton = document.getElementById('open-sidebar-button'); // Получаем кнопку открытия
    navBar.classList.remove('show'); // Убираем класс 'show'
    openSideBarButton.setAttribute('aria-expanded', 'false'); // Обновляем атрибут доступности
    closeAllChildren(navBar); // Закрываем все вложенные элементы меню
    applyStyles(document.body, window.defaultStyles.churchForm.bodyStyleScroll); // Восстанавливаем прокрутку
}

function showCountries(currentLanguage) {
    closeSideBar();
    var existingModal = document.getElementById('countries-modal');
    if (!existingModal) {
        var imagePath = path + 'src/assets/pictures/functions/countries_' + currentLanguage + '.jpg';

        checkImageExists(imagePath, function (exists) {
            if (!exists) {
                imagePath = path + 'src/assets/pictures/functions/countries_ru.jpg';
            }

            // Создаем контейнер для модального окна
            const modal = createElement('div', { id: 'countries-modal' }, document.body);
            applyStyles(modal, window.defaultStyles.countriesModal.modalStyle);

            const modalContent = createElement('div', {}, modal);
            applyStyles(modalContent, window.defaultStyles.countriesModal.modalContentStyle);

            const img = createElement('img', { id: 'countries-image', src: imagePath, alt: 'Карта стран' }, modalContent);
            applyStyles(img, window.defaultStyles.countriesModal.imageStyle);

            const closeButton = createElement('button', { id: 'close-countries-modal' }, modalContent);
            applyStyles(closeButton, window.defaultStyles.countriesModal.closeButtonStyle);
            closeButton.textContent = belhardSiteData.countriesForm.closeText;

            closeButton.addEventListener('click', function () { modal.remove(); });
            modal.addEventListener('click', function (event) { if (event.target === modal) modal.remove(); });

            var scale = 1;
            img.addEventListener('wheel', function (event) {
                event.preventDefault();
                const rect = img.getBoundingClientRect();
                const offsetX = event.clientX - rect.left;
                const offsetY = event.clientY - rect.top;

                scale = event.deltaY < 0 ? scale + 0.1 : scale - 0.1;
                scale = Math.max(1, Math.min(scale, belhardSiteData.countriesForm.maxScale));

                img.style.transformOrigin = `${(offsetX / rect.width) * 100}% ${(offsetY / rect.height) * 100}%`;
                img.style.transform = `scale(${scale})`;
            });
        });
    }
}

function checkImageExists(url, callback) {
    var img = new Image();
    img.onload = function () { callback(true); };
    img.onerror = function () { callback(false); };
    img.src = url;
}