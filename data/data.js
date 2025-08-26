var path = ""; // /test/mp/to_redirect_folder/pr_bel/

// Объект для хранения данных используемых на страницу
const belhardSiteData = {
  // Default language
  currentLanguage: "ru",
  languages: [
    ["ru", path + "src/assets/controlElements/ru.png"],
    ["by", path + "src/assets/controlElements/by.png"],
    ["en", path + "src/assets/controlElements/en.png"],
  ],

  currentMenuItem: 0,
  currentNavbarMode: 0, //0 - обычное, 1 - админ
  currentAccountType: 1, //0 - иконка, 1 - текст
  currentSearchExpandedType: 0, //0 - закрыт, 1 - раскрыт

  lastItemsStack: [["navigation", "1"]],
  // lastItemsStack: [["navigation", 1], ["news", 1], ["announcement", 1], ["search", "текст инпута"]],
  visiblePointTypes: [
    1, //церкви
    1, //святые
    1, //монументы
  ],

  // заголовок главной страницы
  title: {
    ru: [
      "Православная Беларусь",
    ],
    en: [
      "Orthodox Belarus",
    ],
    by: [
      "Праваслаўная Беларусь",
    ]
  },

  favicon: path + "src/assets/favicon/favicon.png", // путь для иконки страницы, папки src - assets - favicon и затем название изоюражения.расширение

  targetY: 200,     // Координата по Y (в пикселях), с которой будет доступна кнопка для прокрутки страницы вверх
  searchWidthTypeZeroExpanded: 300, // Ширина поля поиска (в пикселях)
  searchWidthTypeZero: 150, // Ширина поля поиска (в пикселях)
  searchWidthTypeOneExpanded: 360, // Ширина поля поиска (в пикселях)
  searchWidthTypeOne: 200, // Ширина поля поиска (в пикселях)

  // под-объект для хранения путей к иконкам поиска, открытия, закрытия меню и кнопки прокрутки страницы вверх, а также шаблон для пустого поля поиска
  controlElements: {
    searchIcon: path + "src/assets/controlElements/searchMenuButton.png", // путь к иконке для поиска, папки src - assets - controlElements и затем название изоюражения.расширение
    scrollPageUpIcon: path + "src/assets/controlElements/scrollUpButton.png", // путь к иконке для прокрутки страницы вверх, папки src - assets - controlElements и затем название изоюражения.расширение
    openSidebarIcon: path + "src/assets/controlElements/openMenuButton.png", // путь к иконке для открытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    dotsSidebarIcon: path + "src/assets/controlElements/dots.png", // путь к иконке для открытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    closeSidebarIcon: path + "src/assets/controlElements/closeMenuButton.png", // путь к иконке для закрытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    profileIconTypeZero: path + "src/assets/controlElements/profileMenuButton.png", // путь к иконке для закрытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    profileIconTypeOne: path + "src/assets/controlElements/profileMenuButton_", // путь к иконке для закрытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    goBackIcon: path + "src/assets/controlElements/leftNavbar.png", // путь к иконке для закрытия меню, папки src - assets - controlElements и затем название изоюражения.расширение
    searchPlaceholder: {
      ru: [
        "Поиск...", // шаблонный текст, который будет содежать пустое поле поиска
      ],
      en: [
        "Search...",
      ],
      by: [
        "Пошук...",
      ],
    },
  },

  // под-объект для хранения размеров иконок поиска, открытия, закрытия меню
  controlElementsSizes: {
    //должны быть указаны еденицы измерения
    searchIcon: "24px", //размер иконки поиска
    openSidebarIcon: "40px", //размер иконки открытия меню
    closeSidebarIcon: "32px", //размер иконки закрытия меню
    profileIconTypeZero: "36px", //размер иконки закрытия меню
    profileIconWidthTypeOne: "90px", //размер иконки закрытия меню
    profileIconHeightTypeOne: "36px", //размер иконки закрытия меню
    goBackIconWidth: "12px", //размер иконки закрытия меню
    goBackIconHeight: "30px", //размер иконки закрытия меню
  },

  /**
   * navBar — массив объектов, представляющих структуру меню навигации.
   * Каждый объект в массиве — это пункт меню, который содержит следующие поля:
   *
   * id (string) — Уникальный идентификатор пункта меню.
   * text (string) — Отображаемый текст пункта меню.
   * parent (string) — ID родительского элемента (если "0", то это корневой пункт меню).
   * state (string) — Состояние элемента (1 - активен, 0 - скрыт).
   * href (string) — Ссылка, на которую ведет пункт меню (может быть #, если не задана).
   */
  navBar: {
    navBarElements: [
      { "id": "1", "parent": "0", "state": "1", "formId": "0", "scripts": [0, 13], "type": "rebuild" },
      { "id": "2", "parent": "0", "state": "1", "formId": "2", "scripts": [], "type": "none" },
      { "id": "4", "parent": "0", "state": "1", "formId": "2", "scripts": [], "type": "none" },
      { "id": "5", "parent": "0", "state": "1", "formId": "11", "scripts": [1, 15, 9, 13], "type": "rebuild" },
      { "id": "6", "parent": "0", "state": "1", "formId": "0", "scripts": [14], "type": "show" },
      { "id": "7", "parent": "4", "state": "1", "formId": "6", "scripts": [1, 15, 9, 13], "type": "rebuild" },
      { "id": "8", "parent": "4", "state": "1", "formId": "7", "scripts": [1, 15, 9, 13], "type": "rebuild" },
      { "id": "9", "parent": "4", "state": "1", "formId": "8", "scripts": [1, 15, 9, 13], "type": "rebuild" },
      { "id": "10", "parent": "4", "state": "1", "formId": "9", "scripts": [1, 15, 9, 13], "type": "rebuild" },
      { "id": "11", "parent": "0", "state": "1", "formId": "10", "scripts": [1, 15, 9, 13], "type": "rebuild" },
      { "id": "12", "parent": "2", "state": "1", "formId": "1", "scripts": [1, 15, 9, 13], "type": "rebuild" },
      { "id": "13", "parent": "2", "state": "1", "formId": "2", "scripts": [1, 15, 9, 13], "type": "rebuild" },
      { "id": "14", "parent": "3", "state": "1", "formId": "3", "scripts": [1, 15, 9, 13], "type": "rebuild" },
      { "id": "15", "parent": "3", "state": "1", "formId": "13", "scripts": [1, 15, 9, 13], "type": "rebuild" },
      { "id": "16", "parent": "3", "state": "1", "formId": "4", "scripts": [1, 15, 9, 13], "type": "rebuild" },
      { "id": "17", "parent": "3", "state": "1", "formId": "5", "scripts": [1, 15, 9, 13], "type": "rebuild" },
      { "id": "3", "parent": "0", "state": "1", "formId": "2", "scripts": [], "type": "none" },
      /////////////////////////////
      // { "id": "18", "parent": "0", "state": "1", "formId": "12", "scripts": [18, 17, 13], "type": "rebuild" },
    ],
    navBarText: {
      ru: [
        "Православная Беларусь",      // id: 1 (index 0)
        "Публичные выступления",      // id: 2 (index 1)
        "Литература",                     // id: 3 (index 2)
        "Услуги",                    // id: 4 (index 3)
        "Ответы на вопросы",         // id: 5 (index 4)
        "Страны",                    // id: 6 (index 5)
        "Сувенирная лавка",          // id: 7 (index 6)
        "Книжный магазин",           // id: 8 (index 7)
        "Пожертвования",             // id: 9 (index 8)
        "Экскурсии",                 // id: 10 (index 9)
        "Календарь событий",         // id: 11 (index 10)
        "Церковные деятели",         // id: 12 (index 11)
        "Православные Святые",       // id: 13 (index 12)
        "Каталог исторических дат",  // id: 14 (index 13)
        "Храмы",                     // id: 15 (index 14)
        "Статьи",          // id: 16 (index 15)
        "Летописи",         // id: 17 (index 16)
        "Кабинет"             // id: 18 (index 17)
      ],
      en: [
        "Orthodox Belarus",          // id: 1 (index 0)
        "Public Speeches",           // id: 2 (index 1)
        "Literature",                  // id: 3 (index 2)
        "Services",                 // id: 4 (index 3)
        "Answers to Questions",      // id: 5 (index 4)
        "Countries",                 // id: 6 (index 5)
        "Souvenir Shop",             // id: 7 (index 6)
        "Bookstore",                 // id: 8 (index 7)
        "Donations",                 // id: 9 (index 8)
        "Excursions",                // id: 10 (index 9)
        "Event Calendar",            // id: 11 (index 10)
        "Church Figures",            // id: 12 (index 11)
        "Orthodox Saints",           // id: 13 (index 12)
        "Catalog of Historical Dates", // id: 14 (index 13)
        "Temples",                   // id: 15 (index 14)
        "Articles",              // id: 16 (index 15)
        "Chronicles",            // id: 17 (index 16)
        "Account"           // id: 18 (index 17)
      ],
      by: [
        "Праваслаўная Беларусь",       // id: 1 (index 0)
        "Публічныя выступленні",       // id: 2 (index 1)
        "Літаратура",                  // id: 3 (index 2)
        "Паслугі",                     // id: 4 (index 3)
        "Адказы на пытанні",           // id: 5 (index 4)
        "Краіны",                      // id: 6 (index 5)
        "Сувенірная лаўка",            // id: 7 (index 6)
        "Кнігарня",                    // id: 8 (index 7)
        "Ахвяраванні",                 // id: 9 (index 8)
        "Экскурсіі",                   // id: 10 (index 9)
        "Каляндар падзей",             // id: 11 (index 10)
        "Царкоўныя дзеячы",            // id: 12 (index 11)
        "Праваслаўныя святыя",         // id: 13 (index 12)
        "Каталог гістарычных дат",     // id: 14 (index 13)
        "Храмы",                       // id: 15 (index 14)
        "Артыкулы",                    // id: 16 (index 15)
        "Летапісы",                    // id: 17 (index 16)
        "Кабінет"             // id: 18 (index 17)
      ]
    },
    searchConfig: [1, 16, 9, 13],
    searchResultText: {
      ru: "Результаты поиска",
      en: "Search results",
      by: "Вынікі пошуку",
    },
    searchType: {
      ru: [
        "Новость",
        "Анонс",
      ],
      en: [
        "News",
        "Announcement",
      ],
      by: [
        "Навіна",
        "Анонс"
      ],
    },
    searchMessages: {
      ru: [
        'Введите текст для поиска',
        'Ничего не найдено'
      ],
      en: [
        'Enter the search text',
        'Nothing to show'
      ],
      by: [
        "Увядзіце тэкст для пошуку",
        "Нічога не знойдзена"
      ],
    },
    profileScripts: [18, 17, 13],
  },

  /**
     * scriptsConfig — объект, содержащий функции для выполнения различных действий на сайте.
     * Ключи — это идентификаторы скриптов (числа), которые соответствуют массиву scripts в navBar.
     * Значения — это функции, которые вызываются для реализации функциональности пунктов меню.
     */
  scriptsConfig: {
    0: function () {
      createMainPage();
      scrollToTop();
    },
    1: function () {
      belhardSiteData.currentNavbarMode = 0;
      createNavBar(belhardSiteData.navBar, belhardSiteData.currentLanguage, belhardSiteData.currentNavbarMode);
    },
    2: function () {
      createSiteHeader(belhardSiteData.siteTitles.title, window.defaultStyles.headerStyles, belhardSiteData.currentLanguage, 0);
    },
    3: function () {
      createTimeline(belhardSiteData.timeLine, window.defaultStyles.timeLineStyles);
    },
    4: function () {
      createSiteHeader(belhardSiteData.siteTitles.title, window.defaultStyles.headerStyles, belhardSiteData.currentLanguage, 1);
    },
    5: function () {
      createSaintsSlider(belhardSiteData.saintsData, belhardSiteData.currentLanguage);
    },
    6: function () {
      createMap();
    },
    7: function () {
      createNews(window.defaultStyles.newsStyles, belhardSiteData.news, belhardSiteData.currentLanguage);
    },
    8: function () {
      createSlider(window.defaultStyles.sliderStyles, belhardSiteData.images);
    },
    9: function () {
      createFooter(belhardSiteData, window.defaultStyles.footerStyles, belhardSiteData.currentLanguage);
    },
    10: function () {
      applyGlobalStyles(globalStyles);
    },
    11: function () {
      applyGlobalStyles(navBarCss);
    },
    12: function () {
      createScrollToTopButton(window.defaultStyles.buttonStyles, belhardSiteData.controlElements.scrollPageUpIcon);
    },
    13: function () {
      createLanguageSelect(belhardSiteData.languages);
      reInitializeNavigation();
    },
    14: function () {
      showCountries(belhardSiteData.currentLanguage);
    },
    15: function (menuItem) {
      createPageContent(belhardSiteData, window.defaultStyles.pageStyles, menuItem, belhardSiteData.currentLanguage);
    },
    16: function (itemData) {
      createPageContent(itemData.data, window.defaultStyles.pageStyles, itemData, belhardSiteData.currentLanguage);
    },
    17: function () {
      addDevText();
    },
    18: function () {
      belhardSiteData.currentNavbarMode = 1;
      createNavBar(belhardSiteData.navBarProfile, belhardSiteData.currentLanguage, belhardSiteData.currentNavbarMode);
    },
    19: function (menuItemProfile) {
      setUpAccountPage(belhardSiteData, window.defaultStyles.editorStyles, menuItemProfile, belhardSiteData.currentLanguage);
    },
  },

  navBarProfile: {
    navBarElements: [
      { "id": "1", "parent": "0", "state": "1", "profileElementID": "1", "scripts": [18, 19, 13], "type": "rebuild" },
      { "id": "2", "parent": "0", "state": "1", "profileElementID": "2", "scripts": [18, 19, 13], "type": "rebuild" },
      { "id": "3", "parent": "0", "state": "1", "profileElementID": "3", "scripts": [18, 19, 13], "type": "rebuild" },
      { "id": "4", "parent": "0", "state": "1", "profileElementID": "4", "scripts": [18, 19, 13], "type": "rebuild" },
      { "id": "5", "parent": "0", "state": "1", "profileElementID": "5", "scripts": [18, 19, 13], "type": "rebuild" },
      { "id": "6", "parent": "0", "state": "1", "profileElementID": "6", "scripts": [18, 19, 13], "type": "rebuild" },
      { "id": "7", "parent": "0", "state": "1", "profileElementID": "7", "scripts": [18, 19, 13], "type": "rebuild" },
      { "id": "8", "parent": "0", "state": "1", "profileElementID": "8", "scripts": [18, 19, 13], "type": "rebuild" },
      { "id": "9", "parent": "0", "state": "1", "profileElementID": "9", "scripts": [18, 19, 13], "type": "rebuild" },
      { "id": "10", "parent": "0", "state": "1", "profileElementID": "10", "scripts": [18, 19, 13], "type": "rebuild" },
    ],
    navBarText: {
      ru: [
        "Навигационное меню",      // id: 1 (index 0)
        "Заголовки",               // id: 2 (index 1)
        "Временные линии",         // id: 3 (index 2)
        "Святые",                  // id: 4 (index 3)
        "Карта",                   // id: 5 (index 4)
        "Книги",                   // id: 6 (index 5)
        "Новости",                 // id: 7 (index 6)
        "Слайдер",                 // id: 8 (index 7)
        "Подвал",                  // id: 9 (index 8)
        "Вверх",                  // id: 10 (index 9)
      ],
      en: [
        "Navigation menu",      // id: 1 (index 0)
        "Headings",             // id: 2 (index 1)
        "Timelines",            // id: 3 (index 2)
        "Saints",               // id: 4 (index 3)
        "Map",                  // id: 5 (index 4)
        "Books",                // id: 6 (index 5)
        "News",                 // id: 7 (index 6)
        "Slider",               // id: 8 (index 7)
        "Footer",               // id: 9 (index 8)
        "Up",                   // id: 10 (index 9)
      ],
      by: [
        "Навігацыйнае меню",    // id: 1 (index 0)
        "Загалоўкі",            // id: 2 (index 1)
        "Часовыя лініі",        // id: 3 (index 2)
        "Святыя",              // id: 4 (index 3)
        "Карта",               // id: 5 (index 4)
        "Кнігі",               // id: 6 (index 5)
        "Навіны",              // id: 7 (index 6)
        "Слайдер",             // id: 8 (index 7)
        "Ніжняя частка",       // id: 9 (index 8)
        "Уверх",              // id: 10 (index 9)
      ]
    },
    searchConfig: [1, 16, 9, 13],
    searchResultText: {
      ru: "Результаты поиска",
      en: "Search results",
      by: "Вынікі пошуку",
    },
    goBackMessages: {
      ru: [
        'Вы уверены, что хотите выйти? Несохраненные изменения будут утеряны!',
      ],
      en: [
        "Are you sure you want to exit? Unsaved changes will be lost!",
      ],
      by: [
        "Вы ўпэўнены, што хочаце выйсці? Незахаваныя змены будуць страчаны!"
      ],
    },
    searchType: {
      ru: [
        "Новость",
        "Анонс",
      ],
      en: [
        "News",
        "Announcement",
      ],
      by: [
        "Навіна",
        "Анонс"
      ],
    },
    searchMessages: {
      ru: [
        'Введите текст для поиска',
        'Ничего не найдено'
      ],
      en: [
        'Enter the search text',
        'Nothing to show'
      ],
      by: [
        "Увядзіце тэкст для пошуку",
        "Нічога не знойдзена"
      ],
    },
    profileScripts: [18, 17, 13],
  },

  profileElementsEditor: {
    elementsSettings: [
      { "id": "1", "elements": [["text", "Элемент 1"], ["text", "Элемент 1/1"]] },
      { "id": "2", "elements": [["text", "Элемент 2"], ["text", "Элемент 1/1"]] },
      { "id": "3", "elements": [["text", "Элемент 3"], ["text", "Элемент 1/1"]] },
      { "id": "4", "elements": [["text", "Элемент 4"], ["text", "Элемент 1/1"]] },
      { "id": "5", "elements": [["text", "Элемент 5"], ["text", "Элемент 1/1"]] },
      { "id": "6", "elements": [["text", "Элемент 6"], ["text", "Элемент 1/1"]] },
      { "id": "7", "elements": [["newsEditor"]] },
      { "id": "8", "elements": [["sliderImages"]]},
      { "id": "9", "elements": [["footerText"]] },
      { "id": "10", "elements": [["bgColor"], ["borderColor"], ["image", "Placeholder"],]},
    ],
  },
  //Промежуток времени через который картинка в слайдере измениться
  sliderTimer: {
    time: 5000,
  },

  centurySelector: {
    ru: [
        "Выбранный век",
        "Сбросить"
    ],
    en: [
        "Selected century",
        "Reset"
    ],
    by: [
        "Выбраны век",
        "Скінуць"
    ]
},

  //Картинки которые используяться в слайдере
  images: [
    path + "src/assets/pictures/slider/1.jpg",
    path + "src/assets/pictures/slider/2.jpg",
    path + "src/assets/pictures/slider/3.jpg",
    path + "src/assets/pictures/slider/4.jpg",
  ],

  /**
 * siteTitles — объект, содержащий заголовки сайта.
 * Каждый ключ — это идентификатор заголовка, а значение — строка с текстом заголовка.
 *
 * title1 (string) — Первый вариант заголовка сайта.
 * title2 (string) — Второй вариант заголовка сайта.
 */
  siteTitles: {
    // Первый заголовок сайта
    title: {
      ru: [
        "История Православия",
        "Святые Беларуси",
      ],
      en: [
        "The History of Orthodoxy",
        "Saints of Belarus",
      ],
      by: [
        "Гісторыя Праваслаўя",
        "Святыя Беларусі",
      ],
    },
  },

  /**
 * saintsData — объект, содержащий данные о святых.
 * Свойство saints — массив объектов, каждый из которых описывает одного святого с полями:
 *
 * name (string) — Имя святого.
 * years (string) — Годы жизни святого (может содержать "Нет информации" или "????", если данные неизвестны).
 * description (string) — Краткое описание жизни или значимости святого.
 * image (string) — Путь к изображению святого, сформированный с использованием переменной path.
 */
  saintsData: {
    textData: {
      ru: [
        "Евфросиния Полоцкая", "1104 - 1167", "Дочь Георгия, младшего сына Всеслава Брячиславича, инокиня и просветительница периода Полоцкого княжества.", "XII",
        "Валентина Минская", "1888 - 1966", "Валентина Минская (урождённая Валентина Феодоровна Сулковская) — местночтимая святая Белорусской православной церкви.", "XX",
        "Кирилл Туровский", "1130 – 1182", "Епископ Турова, православный богослов, церковный деятель, писатель, один из видных духовных деятелей Древнерусского государства в XII веке.", "XII",
        "Гавриил Белостокский", "Нет информации", "Православный святой, мученик, согласно представлениям, распространенным среди верующих православной церкви, замученный иудеями.", "XVII",
        "Геннадий Костромской", "???? - 1565", "Основатель Спасо-Геннадиева монастыря, ныне в Ярославской епархии.", "XVI",
        "Иулиания Ольшанская", "1550 – 1566", "Святая русской православной церкви, праведная княжна, дева из рода Гольшанских-Дубровицких.", "XVI",
        "София Слуцкая", "1585 - 1612", "Святая праведная София, княжна, а затем княгиня Слуцкая происходила из древнего рода Олельковичей, княживших в городе Слуцке.", "XVII",
        "Харитина Литовская", "1221 - 1281", "Святая Русской православной церкви, покровительница Литвы.", "XIII",
        "Годы жизни",
        "Читать информацию",
      ],
      en: [
        "Euphrosyne of Polotsk", "1104 - 1167", "Daughter of George, youngest son of Vseslav Bryachislavich, nun and enlightener of the Polotsk Principality period.", "XII",
        "Valentina of Minsk", "1888 - 1966", "Valentina of Minsk (born Valentina Feodorovna Sulkovskaya) — a locally venerated saint of the Belarusian Orthodox Church.", "XX",
        "Cyril of Turov", "1130 – 1182", "Bishop of Turov, Orthodox theologian, church figure, writer, one of the prominent spiritual figures of the Old Russian state in the 12th century.", "XII",
        "Gabriel of Białystok", "No information", "Orthodox saint, martyr, according to beliefs widespread among Orthodox Church faithful, tortured by Jews.", "XVII",
        "Gennadius of Kostroma", "???? - 1565", "Founder of the Spaso-Gennadiev Monastery, now in the Yaroslavl Diocese.", "XVI",
        "Juliana of Olshansk", "1550 – 1566", "Saint of the Russian Orthodox Church, righteous princess, virgin from the Golshansky-Dubrovitsky family.", "XVI",
        "Sophia of Slutsk", "1585 - 1612", "Holy Righteous Sophia, princess and later Duchess of Slutsk, descended from the ancient Olelkovich family that ruled in Slutsk.", "XVII",
        "Charitina of Lithuania", "1221 - 1281", "Saint of the Russian Orthodox Church, patroness of Lithuania.", "XIII",
        "Years of life",
        "Read information",
      ],
      by: [
        "Еўфрасіння Полацкая", "1104 - 1167", "Дачка Георгія, малодшага сына Усевалада Брачыславіча, манашка і асветніца перыяду Полацкага княства.", "XII",
        "Валянціна Мінская", "1888 - 1966", "Валянціна Мінская (у дзявоцтве Валянціна Фёдараўна Сулкоўская) — мясцовашанаваная святая Беларускай праваслаўнай царквы.", "XX",
        "Кірыл Тураўскі", "1130 – 1182", "Біскуп Турава, праваслаўны багаслоў, царкоўны дзеяч, пісьменнік, адзін з вядомых духоўных дзеячаў Старажытнарускай дзяржавы ў XII стагоддзі.", "XII",
        "Габрыэль Беластоцкі", "Няма інфармацыі", "Праваслаўны святы, мучанік, паводле ўяўленняў, распаўсюджаных сярод вернікаў праваслаўнай царквы, замучаны юдэямі.", "XVII",
        "Генадзь Касцюмскі", "???? - 1565", "Заснавальнік Спаса-Генадзевага манастыра, цяпер у Яраслаўскай епархіі.", "XVI",
        "Юліяна Альшанская", "1550 – 1566", "Святая рускай праваслаўнай царквы, праведная князёўна, дзева з роду Гальшанскіх-Дубравіцкіх.", "XVI",
        "Сафія Слуцкая", "1585 - 1612", "Святая праведная Сафія, князёўна, а потым княгіня Слуцкая, паходзіла з старажытнага роду Алелькавічаў, якія княжылі ў горадзе Слуцку.", "XVII",
        "Харыціна Літоўская", "1221 - 1281", "Святая Рускай праваслаўнай царквы, апякунка Літвы.", "XIII",
        "Гады жыцця",
        "Чытаць інфармацыю",
      ]
    },
    content: {
      images: [
        path + "src/assets/pictures/saints/s1.png",
        path + "src/assets/pictures/saints/s2.png",
        path + "src/assets/pictures/saints/s3.png",
        path + "src/assets/pictures/saints/s4.png",
        path + "src/assets/pictures/saints/s5.png",
        path + "src/assets/pictures/saints/s6.png",
        path + "src/assets/pictures/saints/s7.png",
        path + "src/assets/pictures/saints/s8.png",
      ],
      ru: [
        path + "src/assets/books/692474616011.pdf",
        path + "src/assets/books/data-documents-MIRO_FEVRAL_15_.pdf",
        "",
        path + "src/assets/books/Cvyatoy-mladenets-muchenik-Gavriil-Belostokskiy.pdf",
        path + "src/assets/books/Lyubimskij-Spaso-Preobrazhenskij-Gennadiev-monastyr..pdf",
        "",
        path + "src/assets/books/zhitieSvSofii.pdf",
        "",
      ],
      en: [
        path + "src/assets/books/692474616011.pdf",
        path + "src/assets/books/data-documents-MIRO_FEVRAL_15_.pdf",
        "",
        path + "src/assets/books/Cvyatoy-mladenets-muchenik-Gavriil-Belostokskiy.pdf",
        path + "src/assets/books/Lyubimskij-Spaso-Preobrazhenskij-Gennadiev-monastyr..pdf",
        "",
        path + "src/assets/books/zhitieSvSofii.pdf",
        "",
      ],
      by: [
        path + "src/assets/books/692474616011.pdf",
        path + "src/assets/books/data-documents-MIRO_FEVRAL_15_.pdf",
        "",
        path + "src/assets/books/Cvyatoy-mladenets-muchenik-Gavriil-Belostokskiy.pdf",
        path + "src/assets/books/Lyubimskij-Spaso-Preobrazhenskij-Gennadiev-monastyr..pdf",
        "",
        path + "src/assets/books/zhitieSvSofii.pdf",
        "",
      ],
    },
  },

  /**
   * news — объект, содержащий новости и информацию о последних разработках.
   * Разделён на две колонки: новости (leftColumn) и последние разработки (rightColumn).
   *
   * @property {Object} news - Основной объект с новостными данными.
   *
   * @property {Object} news.leftColumn - Левая колонка с новостями.
   * @property {string} news.leftColumn.title - Заголовок новостного блока.
   * @property {string} news.leftColumn.image - Путь к изображению заголовка.
   * @property {Array<Object>} news.leftColumn.items - Список новостей.
   * @property {string} news.leftColumn.items[].img - Путь к изображению новости.
   * @property {string} news.leftColumn.items[].text - Текст новости.
   * @property {string} news.leftColumn.items[].date - Дата публикации.
   * @property {Array<string>} news.leftColumn.items[].tags - Список тегов, относящихся к новости.
   *
   * @property {Object} news.rightColumn - Правая колонка с информацией о разработках.
   * @property {string} news.rightColumn.title - Заголовок блока разработок.
   * @property {string} news.rightColumn.image - Путь к изображению заголовка.
   * @property {Array<string>} news.rightColumn.highlights - Краткий список ключевых разработок.
   * @property {Array<string>} news.rightColumn.details - Подробное описание разработок.
   *
   * @property {string} news.extraInfornation - Текст ссылки на дополнительную информацию.
   */
  news: {
    texts: {
      ru: [
        "Новости", // leftColumn.title [index 0]
        "Анонсы", // rightColumn.title [index 1]
        "Подробнее", // extraInformation [index 2]
        "Патриарший Экзарх возглавил престольное торжество храма святого равноапостольного Николая Японского города Минска", // leftColumn.items[0].textIndex [index 3]
        "Продолжается прием заявок на Международный открытый грантовый конкурс «Православная инициатива – 2025»", // leftColumn.items[1].textIndex [index 4]
        "Патриаршее обращение по случаю празднования Дня православной молодежи", // leftColumn.items[2].textIndex [index 5]
        "Краткий обзор основных событий в епархиях Белорусской Православной Церкви: главное за неделю", // leftColumn.items[3].textIndex [index 6]
        "Новая новость", // leftColumn.items[4].textIndex [index 7]
        "Новая новость2", // leftColumn.items[5].textIndex [index 8]
        "Белорусский фонд мира ведет сбор средств на строительство храма-часовни на месте упокоения святой блаженной Валентины Минской.", // rightColumn.details[0].textIndex [index 9]
        "Начался прием заявок на Международный открытый грантовый конкурс «Праваслаўная ініцыятыва – 2025»", // rightColumn.details[1].textIndex [index 10]
        "Открыт прием заявок на конкурс «Волонтер преподобного Серафима Саровского»", // rightColumn.details[2].textIndex [index 11]
        "Календарь событий и дат в Белорусской Православной Церкви: февраль 2025 года", // rightColumn.details[3].textIndex [index 12]
        "Новый анонс", // rightColumn.details[4].textIndex [index 13]
        "16 февраля 2025", // leftColumn.items[0].dateIndex [index 14]
        "17 февраля 2025", // leftColumn.items[1].dateIndex [index 15]
        "15 февраля 2025", // leftColumn.items[2].dateIndex [index 16]
        "17 февраля 2025", // leftColumn.items[3].dateIndex [index 17]
        "26 февраля 2025", // leftColumn.items[4].dateIndex [index 18]
        "1 марта 2025", // leftColumn.items[5].dateIndex [index 19]
        "16 февраля 2025", // rightColumn.details[0].dateIndex [index 20]
        "17 февраля 2025", // rightColumn.details[1].dateIndex [index 21]
        "15 февраля 2025", // rightColumn.details[2].dateIndex [index 22]
        "1 февраля 2025", // rightColumn.details[3].dateIndex [index 23]
        "26 февраля 2025" // rightColumn.details[4].dateIndex [index 24]
      ],
      en: [
        "News", // leftColumn.title [index 0]
        "Announcements", // rightColumn.title [index 1]
        "Details", // extraInformation [index 2]
        "The Patriarchal Exarch led the patronal feast of the Church of Saint Nicholas of Japan in Minsk", // leftColumn.items[0].textIndex [index 3]
        "Applications are still being accepted for the International Open Grant Competition 'Orthodox Initiative – 2025'", // leftColumn.items[1].textIndex [index 4]
        "Patriarchal address on the occasion of the celebration of Orthodox Youth Day", // leftColumn.items[2].textIndex [index 5]
        "A brief overview of the main events in the dioceses of the Belarusian Orthodox Church: highlights of the week", // leftColumn.items[3].textIndex [index 6]
        "New news", // leftColumn.items[4].textIndex [index 7]
        "New news 2", // leftColumn.items[5].textIndex [index 8]
        "The Belarusian Peace Fund is collecting funds to build a chapel church at the resting place of Saint Blessed Valentina of Minsk.", // rightColumn.details[0].textIndex [index 9]
        "The acceptance of applications for the International Open Grant Competition 'Orthodox Initiative – 2025' has begun", // rightColumn.details[1].textIndex [index 10]
        "Applications are now open for the 'Volunteer of Saint Seraphim of Sarov' competition", // rightColumn.details[2].textIndex [index 11]
        "Calendar of events and dates in the Belarusian Orthodox Church: February 2025", // rightColumn.details[3].textIndex [index 12]
        "New announcement", // rightColumn.details[4].textIndex [index 13]
        "February 16, 2025", // leftColumn.items[0].dateIndex [index 14]
        "February 17, 2025", // leftColumn.items[1].dateIndex [index 15]
        "February 15, 2025", // leftColumn.items[2].dateIndex [index 16]
        "February 17, 2025", // leftColumn.items[3].dateIndex [index 17]
        "February 26, 2025", // leftColumn.items[4].dateIndex [index 18]
        "March 1, 2025", // leftColumn.items[5].dateIndex [index 19]
        "February 16, 2025", // rightColumn.details[0].dateIndex [index 20]
        "February 17, 2025", // rightColumn.details[1].dateIndex [index 21]
        "February 15, 2025", // rightColumn.details[2].dateIndex [index 22]
        "February 1, 2025", // rightColumn.details[3].dateIndex [index 23]
        "February 26, 2025" // rightColumn.details[4].dateIndex [index 24]
      ],
      by: [
        "Навіны", // leftColumn.title [index 0]
        "Анонсы", // rightColumn.title [index 1]
        "Падрабязней", // extraInformation [index 2]
        "Патрыяршы Экзарх усеяліў прастольнае ўрачыстасць храма святога раўнаапостальнага Мікалая Японскага горада Мінска", // leftColumn.items[0].textIndex [index 3]
        "Працягваецца прыём заявак на Міжнародны адкрыты грантавы конкурс «Праваслаўная ініцыятыва – 2025»", // leftColumn.items[1].textIndex [index 4]
        "Патрыяршае зварот па выпадку ўсеялення Дня праваслаўнай моладзі", // leftColumn.items[2].textIndex [index 5]
        "Кароткі агляд асноўных падзей у епархіях Беларускай Праваслаўнай Царквы: галоўнае за тыдзень", // leftColumn.items[3].textIndex [index 6]
        "Новая навіна", // leftColumn.items[4].textIndex [index 7]
        "Новая навіна2", // leftColumn.items[5].textIndex [index 8]
        "Беларускі фонд міру ўсеяляе збор сродкаў на будаўніцтва храма-капліцы на месцы ўсеялення святой блажэннай Валянціны Мінскай.", // rightColumn.details[0].textIndex [index 9]
        "Пачаўся прыём заявак на Міжнародны адкрыты грантавы конкурс «Праваслаўная ініцыятыва – 2025»", // rightColumn.details[1].textIndex [index 10]
        "Адкрыты прыём заявак на конкурс «Валанцёр прападобнага Серафіма Саравскага»", // rightColumn.details[2].textIndex [index 11]
        "Каляндар падзей і дат у Беларускай Праваслаўнай Царкве: люты 2025 года", // rightColumn.details[3].textIndex [index 12]
        "Новы анонс", // rightColumn.details[4].textIndex [index 13]
        "16 лютага 2025", // leftColumn.items[0].dateIndex [index 14]
        "17 лютага 2025", // leftColumn.items[1].dateIndex [index 15]
        "15 лютага 2025", // leftColumn.items[2].dateIndex [index 16]
        "17 лютага 2025", // leftColumn.items[3].dateIndex [index 17]
        "26 лютага 2025", // leftColumn.items[4].dateIndex [index 18]
        "1 сакавіка 2025", // leftColumn.items[5].dateIndex [index 19]
        "16 лютага 2025", // rightColumn.details[0].dateIndex [index 20]
        "17 лютага 2025", // rightColumn.details[1].dateIndex [index 21]
        "15 лютага 2025", // rightColumn.details[2].dateIndex [index 22]
        "1 лютага 2025", // rightColumn.details[3].dateIndex [index 23]
        "26 лютага 2025" // rightColumn.details[4].dateIndex [index 24]
      ]
    },
    leftColumn: {
      image: path + "src/assets/pictures/news/newspaper2.png",
      items: [
        { "id": 1, "img": path + "src/assets/pictures/news/church4.jpg", "textIndex": 3, "dateIndex": 14, "formId": "1", "scripts": [1, 15, 9, 13], "type": "rebuild", "source": "news" },
        { "id": 2, "img": path + "src/assets/pictures/news/church2.jpg", "textIndex": 4, "dateIndex": 15, "formId": "2", "scripts": [1, 15, 9, 13], "type": "rebuild", "source": "news" },
        { "id": 3, "img": path + "src/assets/pictures/news/church3.jpg", "textIndex": 5, "dateIndex": 16, "formId": "3", "scripts": [1, 15, 9, 13], "type": "rebuild", "source": "news" },
        { "id": 4, "img": path + "src/assets/pictures/news/church1.jpg", "textIndex": 6, "dateIndex": 17, "formId": "4", "scripts": [1, 15, 9, 13], "type": "rebuild", "source": "news" },
        { "id": 5, "img": path + "src/assets/pictures/news/church4.jpg", "textIndex": 7, "dateIndex": 18, "formId": "5", "scripts": [1, 15, 9, 13], "type": "rebuild", "source": "news" },
        { "id": 6, "img": path + "src/assets/pictures/news/church4.jpg", "textIndex": 8, "dateIndex": 19, "formId": "6", "scripts": [1, 15, 9, 13], "type": "rebuild", "source": "news" },
      ]
    },
    rightColumn: {
      image: path + "src/assets/pictures/news/anons.png",
      highlights: [],
      details: [
        { "id": 1, "textIndex": 9, "dateIndex": 20, "formId": "1", "scripts": [1, 15, 9, 13], "type": "rebuild", "source": "announcement" },
        { "id": 2, "textIndex": 10, "dateIndex": 21, "formId": "2", "scripts": [1, 15, 9, 13], "type": "rebuild", "source": "announcement" },
        { "id": 3, "textIndex": 11, "dateIndex": 22, "formId": "3", "scripts": [1, 15, 9, 13], "type": "rebuild", "source": "announcement" },
        { "id": 4, "textIndex": 12, "dateIndex": 23, "formId": "4", "scripts": [1, 15, 9, 13], "type": "rebuild", "source": "announcement" },
        { "id": 5, "textIndex": 13, "dateIndex": 24, "formId": "5", "scripts": [1, 15, 9, 13], "type": "rebuild", "source": "announcement" }
      ]
    },
    amountOfShownNews: {
      leftColumnAmount: 4,
      rightColumnAmount: 4,
      formPageAmount: 4
    }
  },

  /**
   * footer — объект, содержащий контактную информацию и авторские права.
   *
   * @property {Object} footer - Основной объект с данными подвала.
   *
   * @property {string} footer.phone - Контактный телефон.
   * @property {string} footer.email - Контактный email.
   * @property {string} footer.copyright - Текст с указанием авторских прав.
   */
  footer: {
    ru: [
      "Официальный портал Белорусской православной Церкви",
      "© Белорусская Православная Церковь 2025"
    ],
    en: [
      "Official portal of the Belarusian Orthodox Church",
      "© Belarusian Orthodox Church 2025"
    ],
    by: [
      "Афіцыйны партал Беларускай праваслаўнай Царквы",
      "© Беларуская Праваслаўная Царква 2025"
    ],
  },

  //Размер экрна при котором активируються стили для телефона
  mobileSizes: {
    footer: 800,
    navBar: 650,
    slider: 900,
    news: 800,
    table: 800,
    formLeftColumn: 900,
    map: 1200,
    timeline: 800,
  },

  /**
 * timeLine — объект, представляющий временную шкалу с возможностью переключения между различными масштабами времени.
 * Содержит кнопки для изменения масштаба и структуру с датами и событиями.
 *
 * @property {Object} timeLine - Основной объект временной шкалы.
 *
 * @property {Array<Object>} timeLine.scaleButtons - Список кнопок для изменения масштаба временной шкалы.
 * @property {string} timeLine.scaleButtons[].label - Отображаемое название кнопки.
 * @property {string} timeLine.scaleButtons[].scale - Масштаб времени (например, "centuries", "decades", "years").
 *
 * @property {Object} timeLine.dates - Объект, содержащий исторические события, отсортированные по векам, десятилетиям и годам.
 *
 * @property {Object} timeLine.dates["21в"] - Раздел, представляющий 21 век.
 * @property {Object} timeLine.dates["21в"]["2000е"] - Подраздел для 2000-х годов.
 * @property {Object} timeLine.dates["21в"]["2010е"] - Подраздел для 2010-х годов.
 *
 * @property {Array<Object>} timeLine.dates["21в"]["2000е"]["2000"] - Список событий, произошедших в 2000 году.
 * @property {string} timeLine.dates["21в"]["2000е"]["2000"][].title - Название события.
 * @property {string} timeLine.dates["21в"]["2000е"]["2000"][].description - Описание события.
 *
 * @property {Array<Object>} timeLine.dates["21в"]["2000е"]["2005"] - Список событий за 2005 год.
 * @property {string} timeLine.dates["21в"]["2000е"]["2005"][].title - Название события.
 * @property {string} timeLine.dates["21в"]["2000е"]["2005"][].description - Описание события.
 *
 * @property {Array<Object>} timeLine.dates["21в"]["2010е"]["2010"] - Список событий за 2010 год.
 * @property {string} timeLine.dates["21в"]["2010е"]["2010"][].title - Название события.
 * @property {string} timeLine.dates["21в"]["2010е"]["2010"][].description - Описание события.
 *
 * @property {Array<Object>} timeLine.dates["21в"]["2010е"]["2015"] - Список событий за 2015 год.
 * @property {string} timeLine.dates["21в"]["2010е"]["2015"][].title - Название события.
 * @property {string} timeLine.dates["21в"]["2010е"]["2015"][].description - Описание события.
 */
  timelineReligion: {
    ru: [
      "Увеличить масштаб", // 0
      "×",               // 1
      "←",              // 2
      "→",              // 3
      "Век: ",          // 4
      "Десятилетие: ",  // 5
      "Год: ",          // 6
      "Дата: ",         // 7
      "II до н.э.",     // 8
      "I до н.э.",      // 9
      "I",              // 10
      "II",             // 11
      "III",            // 12
      "IV",             // 13
      "V",              // 14
      "VI",             // 15
      "VII",            // 16
      "VIII",           // 17
      "IX",             // 18
      "X",              // 19
      "XI",             // 20
      "XII",            // 21
      "XIII",           // 22
      "XIV",            // 23
      "XV",             // 24
      "XVI",            // 25
      "XVII",           // 26
      "XVIII",          // 27
      "XIX",            // 28
      "XX",             // 29
      "XXI",            // 30
      "150е до н.э.",   // 31
      "50е до н.э.",    // 32
      "0е",             // 33
      "110е",           // 34
      "220е",           // 35
      "330е",           // 36
      "440е",           // 37
      "550е",           // 38
      "660е",           // 39
      "770е",           // 40
      "880е",           // 41
      "980е",           // 42
      "1100е",          // 43
      "1150е",          // 44
      "1260е",          // 45
      "1350е",          // 46
      "1470е",          // 47
      "1510е",          // 48
      "1660е",          // 49
      "1770е",          // 50
      "1830е",          // 51
      "1930е",          // 52
      "2010е",          // 53
      "2020е",          // 54
      // Добавлены краткие названия годов
      "150 до н.э.",    // 55
      "50 до н.э.",     // 56
      "1",              // 57
      "110",            // 58
      "220",            // 59
      "330",            // 60
      "440",            // 61
      "550",            // 62
      "660",            // 63
      "770",            // 64
      "888",            // 65
      "988",            // 66
      "1100",           // 67
      "1150",           // 68
      "1265",           // 69
      "1350",           // 70
      "1470",           // 71
      "1517",           // 72
      "1660",           // 73
      "1770",           // 74
      "1839",           // 75
      "1939",           // 76
      "2010",           // 77
      "2020",           // 78
      // Даты событий и их описания
      "15 января 150 до н.э.", // 79
      "Религиозные обряды на землях будущей Беларуси", // 80
      "На территории современной Беларуси проводились языческие обряды, связанные с культом природы.", // 81
      "10 февраля 50 до н.э.", // 82
      "Появление первых торговых путей", // 83
      "Через земли современной Беларуси начали проходить торговые пути, способствующие обмену культур и религиозных идей.", // 84
      "5 марта 1",      // 85
      "Ранние контакты с христианством", // 86
      "На землях современной Беларуси могли появляться первые миссионеры христианства.", // 87
      "12 апреля 110",  // 88
      "Укрепление языческих традиций", // 89
      "Языческие традиции продолжали доминировать на землях современной Беларуси.", // 90
      "20 мая 220",     // 91
      "Первые упоминания о местных культах", // 92
      "Записаны первые свидетельства о местных языческих культах на территории современной Беларуси.", // 93
      "8 июня 330",     // 94
      "Влияние христианства из Византии", // 95
      "Начало проникновения христианских идей через торговые связи с Византией.", // 96
      "15 июля 440",    // 97
      "Укрепление языческих святилищ", // 98
      "На землях современной Беларуси продолжали существовать языческие святилища.", // 99
      "22 августа 550", // 100
      "Первые христианские общины", // 101
      "Возможное появление первых христианских общин на торговых путях.", // 102
      "30 сентября 660", // 103
      "Влияние соседних христианских государств", // 104
      "Начало влияния христианства через соседние территории.", // 105
      "18 октября 770", // 106
      "Ранние миссионерские походы", // 107
      "Первые попытки миссионеров обратить местное население в христианство.", // 108
      "28 июля 888",    // 109
      "Распространение православия на Руси", // 110
      "В этом году в Киеве началось массовое принятие христианства, что стало ключевым событием для утверждения православия на землях Киевской Руси, включая территории современной Беларуси.", // 111
      "28 июля 988",    // 112
      "Крещение Руси князем Владимиром", // 113
      "Великий князь Владимир Святославич крестил Русь в Киеве, что стало началом распространения православия на земли современной Беларуси, входившие в состав Киевской Руси.", // 114
      "1 мая 1100",     // 115
      "Постройка Софийского собора в Полоцке", // 116
      "Возведение Софийского собора в Полоцке (примерно XI век), одного из первых каменных храмов на белорусских землях, символизирующего расцвет православия.", // 117
      "1 июня 1150",    // 118
      "Основание Спасского монастыря Евфросинией Полоцкой", // 119
      "Преподобная Евфросиния Полоцкая основала Спасо-Преображенский монастырь в Полоцке, ставший важным центром православия и просвещения.", // 120
      "10 января 1265", // 121
      "Попытка крещения Литвы Войшелком", // 122
      "Князь Войшелк, сын Миндовга, стремился крестить Литву по православному обряду, основав монастырь на Немане.", // 123
      "20 февраля 1350", // 124
      "Распространение православия в Великом княжестве Литовском", // 125
      "Православие продолжало укрепляться в Великом княжестве Литовском.", // 126
      "1 мая 1470",     // 127
      "Явление Жировицкой иконы Божией Матери", // 128
      "Обретение чудотворной Жировицкой иконы в ветвях груши, ставшей одной из главных православных святынь Беларуси.", // 129
      "20 октября 1517", // 130
      "Издание первой книги на белорусском языке Франциском Скориной", // 131
      "Франциск Скорина издал первую книгу на белорусском языке — Библию, что стало важным событием в развитии культуры и письменности.", // 132
      "25 января 1660", // 133
      "Влияние Реформации на православие", // 134
      "Реформация затронула религиозную жизнь Беларуси, вызвав укрепление православных традиций.", // 135
      "15 февраля 1770", // 136
      "Возрождение православных традиций", // 137
      "Начало возрождения православных традиций после сложного периода.", // 138
      "25 марта 1839",  // 139
      "Воссоединение униатов с православием", // 140
      "Соборное постановление в Полоцке о возвращении униатов в лоно Православной Церкви, укрепившее православие в Беларуси.", // 141
      "25 марта 1939",  // 142
      "Закрытие церквей и репрессии против духовенства в Западной Белоруссии после присоединения к СССР", // 143
      "После присоединения Западной Белоруссии к СССР в сентябре 1939 года советские власти начали активную антирелигиозную кампанию. Были закрыты многие церкви, конфискованы церковные здания, а духовенство подверглось репрессиям. В рамках этой политики вводились уроки атеизма в школах, запрещались религиозные обряды и праздники, что значительно ограничило религиозную жизнь местного населения.", // 144
      "15 июня 2010",   // 145
      "Освящение Храма-Памятника всех святых в Минске", // 146
      "В Минске состоялось освящение Храма-памятника в честь Всех святых, построенного как символ единства православных верующих.", // 147
      "28 июля 2020",   // 148
      "Празднование 1032-летия крещения Руси в Беларуси", // 149
      "В 2020 году в Беларуси прошли торжественные мероприятия, посвященные 1032-летию крещения Руси, с участием духовенства и верующих по всей стране.", // 150
      "Открыть PDF"     // 151
    ],
    en: [
      "Zoom Out",       // 0
      "×",             // 1
      "←",            // 2
      "→",            // 3
      "Century: ",    // 4
      "Decade: ",     // 5
      "Year: ",       // 6
      "Date: ",       // 7
      "2nd BC",       // 8
      "1st BC",       // 9
      "1st",          // 10
      "2nd",          // 11
      "3rd",          // 12
      "4th",          // 13
      "5th",          // 14
      "6th",          // 15
      "7th",          // 16
      "8th",          // 17
      "9th",          // 18
      "10th",         // 19
      "11th",         // 20
      "12th",         // 21
      "13th",         // 22
      "14th",         // 23
      "15th",         // 24
      "16th",         // 25
      "17th",         // 26
      "18th",         // 27
      "19th",         // 28
      "20th",         // 29
      "21st",         // 30
      "150s BC",      // 31
      "50s BC",       // 32
      "0s",           // 33
      "110s",         // 34
      "220s",         // 35
      "330s",         // 36
      "440s",         // 37
      "550s",         // 38
      "660s",         // 39
      "770s",         // 40
      "880s",         // 41
      "980s",         // 42
      "1100s",        // 43
      "1150s",        // 44
      "1260s",        // 45
      "1350s",        // 46
      "1470s",        // 47
      "1510s",        // 48
      "1660s",        // 49
      "1770s",        // 50
      "1830s",        // 51
      "1930s",        // 52
      "2010s",        // 53
      "2020s",        // 54
      // Добавлены краткие названия годов
      "150 BC",         // 55
      "50 BC",          // 56
      "1",              // 57
      "110",            // 58
      "220",            // 59
      "330",            // 60
      "440",            // 61
      "550",            // 62
      "660",            // 63
      "770",            // 64
      "888",            // 65
      "988",            // 66
      "1100",           // 67
      "1150",           // 68
      "1265",           // 69
      "1350",           // 70
      "1470",           // 71
      "1517",           // 72
      "1660",           // 73
      "1770",           // 74
      "1839",           // 75
      "1939",           // 76
      "2010",           // 77
      "2020",           // 78
      // Даты событий и их описания
      "January 15, 150 BC", // 79
      "Religious Rituals in Future Belarus Lands", // 80
      "Pagan rituals related to nature worship were practiced in the territory of modern Belarus.", // 81
      "February 10, 50 BC", // 82
      "Emergence of Early Trade Routes", // 83
      "Trade routes began passing through the lands of modern Belarus, fostering cultural and religious exchange.", // 84
      "March 5, 1",   // 85
      "Early Contacts with Christianity", // 86
      "The first Christian missionaries may have appeared in the lands of modern Belarus.", // 87
      "April 12, 110", // 88
      "Strengthening of Pagan Traditions", // 89
      "Pagan traditions continued to dominate the lands of modern Belarus.", // 90
      "May 20, 220",  // 91
      "First Mentions of Local Cults", // 92
      "The first recorded evidence of local pagan cults in the territory of modern Belarus.", // 93
      "June 8, 330",  // 94
      "Influence of Christianity from Byzantium", // 95
      "The beginning of Christian ideas penetrating through trade connections with Byzantium.", // 96
      "July 15, 440", // 97
      "Strengthening of Pagan Sanctuaries", // 98
      "Pagan sanctuaries continued to exist in the lands of modern Belarus.", // 99
      "August 22, 550", // 100
      "First Christian Communities", // 101
      "Possible emergence of the first Christian communities along trade routes.", // 102
      "September 30, 660", // 103
      "Influence of Neighboring Christian States", // 104
      "The beginning of Christian influence through neighboring territories.", // 105
      "October 18, 770", // 106
      "Early Missionary Campaigns", // 107
      "The first attempts by missionaries to convert the local population to Christianity.", // 108
      "July 28, 888", // 109
      "The Spread of Orthodoxy in Rus", // 110
      "In this year, the mass adoption of Christianity began in Kyiv, marking a pivotal moment for the establishment of Orthodoxy in the lands of Kyivan Rus, including the territories of modern-day Belarus.", // 111
      "July 28, 988", // 112
      "Baptism of Rus by Prince Vladimir", // 113
      "Grand Prince Vladimir Svyatoslavich baptized Rus in Kiev, marking the beginning of the spread of Orthodoxy to the lands of modern Belarus, which were part of Kievan Rus.", // 114
      "May 1, 1100",  // 115
      "Construction of the Sofia Cathedral in Polotsk", // 116
      "The construction of the Sofia Cathedral in Polotsk (circa 11th century), one of the first stone churches in Belarusian lands, symbolizing the flourishing of Orthodoxy.", // 117
      "June 1, 1150", // 118
      "Founding of the Spassky Monastery by Euphrosyne of Polotsk", // 119
      "Saint Euphrosyne of Polotsk founded the Transfiguration Monastery in Polotsk, which became an important center of Orthodoxy and education.", // 120
      "January 10, 1265", // 121
      "Attempted Baptism of Lithuania by Voishelk", // 122
      "Prince Voishelk, son of Mindaugas, sought to baptize Lithuania according to the Orthodox rite, founding a monastery on the Neman.", // 123
      "February 20, 1350", // 124
      "Spread of Orthodoxy in the Grand Duchy of Lithuania", // 125
      "Orthodoxy continued to strengthen in the Grand Duchy of Lithuania.", // 126
      "May 1, 1470",  // 127
      "Appearance of the Zhirovichi Icon of the Mother of God", // 128
      "The discovery of the miraculous Zhirovichi Icon in the branches of a pear tree, which became one of the main Orthodox shrines of Belarus.", // 129
      "October 20, 1517", // 130
      "Publication of the First Book in Belarusian by Francysk Skaryna", // 131
      "Francysk Skaryna published the first book in the Belarusian language — the Bible, marking an important milestone in the development of culture and literacy.", // 132
      "January 25, 1660", // 133
      "Impact of the Reformation on Orthodoxy", // 134
      "The Reformation affected religious life in Belarus, prompting a strengthening of Orthodox traditions.", // 135
      "February 15, 1770", // 136
      "Revival of Orthodox Traditions", // 137
      "The beginning of the revival of Orthodox traditions after a challenging period.", // 138
      "March 25, 1839", // 139
      "Reunion of Uniates with Orthodoxy", // 140
      "The conciliar decision in Polotsk to return Uniates to the Orthodox Church, strengthening Orthodoxy in Belarus.", // 141
      "March 25, 1939", // 142
      "Closure of Churches and Repression of Clergy in Western Belarus After Its Annexation to the USSR", // 143
      "Following the annexation of Western Belarus to the USSR in September 1939, Soviet authorities launched an active anti-religious campaign. Many churches were closed, church buildings were confiscated, and the clergy faced repression. As part of this policy, atheism lessons were introduced in schools, religious ceremonies and holidays were banned, significantly restricting the religious life of the local population.", // 144
      "June 15, 2010", // 145
      "Consecration of the All Saints Memorial Church in Minsk", // 146
      "The All Saints Memorial Church in Minsk was consecrated, built as a symbol of unity among Orthodox believers.", // 147
      "July 28, 2020", // 148
      "Celebration of the 1032nd Anniversary of the Baptism of Rus in Belarus", // 149
      "In 2020, Belarus held solemn events dedicated to the 1032nd anniversary of the Baptism of Rus, involving clergy and believers across the country.", // 150
      "Open PDF"       // 151
    ],
    by: [
      "Павялічыць маштаб", // 0
      "×",               // 1
      "←",              // 2
      "→",              // 3
      "Стагоддзе: ",    // 4
      "Дзесяцігоддзе: ", // 5
      "Год: ",          // 6
      "Дата: ",         // 7
      "II да н.э.",     // 8
      "I да н.э.",      // 9
      "I",              // 10
      "II",             // 11
      "III",            // 12
      "IV",             // 13
      "V",              // 14
      "VI",             // 15
      "VII",            // 16
      "VIII",           // 17
      "IX",             // 18
      "X",              // 19
      "XI",             // 20
      "XII",            // 21
      "XIII",           // 22
      "XIV",            // 23
      "XV",             // 24
      "XVI",            // 25
      "XVII",           // 26
      "XVIII",          // 27
      "XIX",            // 28
      "XX",             // 29
      "XXI",            // 30
      "150-я да н.э.",  // 31
      "50-я да н.э.",   // 32
      "0-я",            // 33
      "110-я",          // 34
      "220-я",          // 35
      "330-я",          // 36
      "440-я",          // 37
      "550-я",          // 38
      "660-я",          // 39
      "770-я",          // 40
      "880-я",          // 41
      "980-я",          // 42
      "1100-я",         // 43
      "1150-я",         // 44
      "1260-я",         // 45
      "1350-я",         // 46
      "1470-я",         // 47
      "1510-я",         // 48
      "1660-я",         // 49
      "1770-я",         // 50
      "1830-я",         // 51
      "1930-я",         // 52
      "2010-я",         // 53
      "2020-я",         // 54
      // Добавлены краткие названия годов
      "150 да н.э.",    // 55
      "50 да н.э.",     // 56
      "1",              // 57
      "110",            // 58
      "220",            // 59
      "330",            // 60
      "440",            // 61
      "550",            // 62
      "660",            // 63
      "770",            // 64
      "888",            // 65
      "988",            // 66
      "1100",           // 67
      "1150",           // 68
      "1265",           // 69
      "1350",           // 70
      "1470",           // 71
      "1517",           // 72
      "1660",           // 73
      "1770",           // 74
      "1839",           // 75
      "1939",           // 76
      "2010",           // 77
      "2020",           // 78
      // Даты событий и их описания
      "15 студзеня 150 да н.э.", // 79
      "Рэлігійныя абрады на землях будучай Беларусі", // 80
      "На тэрыторыі сучаснай Беларусі праводзіліся язычніцкія абрады, звязаныя з культам прыроды.", // 81
      "10 лютага 50 да н.э.", // 82
      "З’яўленне першых гандлёвых шляхоў", // 83
      "Праз землі сучаснай Беларусі пачалі праходзіць гандлёвыя шляхі, якія спрыялі абмену культур і рэлігійных ідэй.", // 84
      "5 сакавіка 1", // 85
      "Раннія кантакты з хрысціянствам", // 86
      "На землях сучаснай Беларусі маглі з’яўляцца першыя місіянеры хрысціянства.", // 87
      "12 красавіка 110", // 88
      "Утацаванне язычніцкіх традыцый", // 89
      "Язычніцкія традыцыі працягвалі дамінаваць на землях сучаснай Беларусі.", // 90
      "20 мая 220",   // 91
      "Першыя ўпаміны пра мясцовыя культы", // 92
      "Запісаны першыя сведчанні пра мясцовыя язычніцкія культы на тэрыторыі сучаснай Беларусі.", // 93
      "8 чэрвеня 330", // 94
      "Уплыў хрысціянства з Візантыі", // 95
      "Пачатак пранікнення хрысціянскіх ідэй праз гандлёвыя сувязі з Візантыяй.", // 96
      "15 ліпеня 440", // 97
      "Утацаванне язычніцкіх свяцілішчаў", // 98
      "На землях сучаснай Беларусі працягвалі існаваць язычніцкія свяцілішчы.", // 99
      "22 жніўня 550", // 100
      "Першыя хрысціянскія супольнасці", // 101
      "Магчымае з’яўленне першых хрысціянскіх супольнасцей на гандлёвых шляхах.", // 102
      "30 верасня 660", // 103
      "Уплыў суседніх хрысціянскіх дзяржаў", // 104
      "Пачатак уплыву хрысціянства праз суседнія тэрыторыі.", // 105
      "18 кастрычніка 770", // 106
      "Раннія місіянерскія паходы", // 107
      "Першыя спробы місіянераў навярнуць мясцовае насельніцтва ў хрысціянства.", // 108
      "28 ліпеня 888", // 109
      "Пашырэнне праваслаўя на Русі", // 110
      "У гэтым годзе ў Кіеве пачалося масавае прыняцце хрысціянства, што стала ключавой падзеяй для ўтаявання праваслаўя на землях Кіеўскай Русі, уключаючы тэрыторыі сучаснай Беларусі.", // 111
      "28 ліпеня 988", // 112
      "Хрышчэнне Русі князем Уладзімірам", // 113
      "Вялікі князь Уладзімір Святаславіч хрысціў Русь у Кіеве, што стала пачаткам распаўсюджвання праваслаўя на землі сучаснай Беларусі, якія ўваходзілі ў склад Кіеўскай Русі.", // 114
      "1 мая 1100",   // 115
      "Будаўніцтва Сафійскага сабора ў Полацку", // 116
      "Узвядзенне Сафійскага сабора ў Полацку (прыкладна XI стагоддзе), аднаго з першых каменных храмаў на беларускіх землях, які сімвалізаваў росквіт праваслаўя.", // 117
      "1 чэрвеня 1150", // 118
      "Заснаванне Спаскага манастыра Еўфрасінняй Полацкай", // 119
      "Прападобная Еўфрасіння Полацкая заснавала Спаса-Праабражэнскі манастыр у Полацку, які стаў важным цэнтрам праваслаўя і асветы.", // 120
      "10 студзеня 1265", // 121
      "Спроба хрышчэння Літвы Войшалкам", // 122
      "Князь Войшалк, сын Міндоўга, імкнуўся хрысціць Літву па праваслаўным абрадзе, заснаваўшы манастыр на Нёмане.", // 123
      "20 лютага 1350", // 124
      "Распаўсюджванне праваслаўя ў Вялікім княстве Літоўскім", // 125
      "Праваслаўе працягвала ўтацоўвацца ў Вялікім княстве Літоўскім.", // 126
      "1 мая 1470",   // 127
      "З’яўленне Жыровіцкай іконы Божай Маці", // 128
      "Набыццё цудатворнай Жыровіцкай іконы ў галінах грушавага дрэва, якая стала адной з галоўных праваслаўных святынь Беларусі.", // 129
      "20 кастрычніка 1517", // 130
      "Выданне першай кнігі на беларускай мове Францыскам Скарынам", // 131
      "Францыск Скарына выдаў першую кнігу на беларускай мове — Біблію, што стала важным падзеяй у развіцці культуры і пісьменнасці.", // 132
      "25 студзеня 1660", // 133
      "Уплыў Рэфармацыі на праваслаўе", // 134
      "Рэфармацыя закранула рэлігійнае жыццё Беларусі, выклікаўшы ўтацаванне праваслаўных традыцый.", // 135
      "15 лютага 1770", // 136
      "Адраджэнне праваслаўных традыцый", // 137
      "Пачатак адраджэння праваслаўных традыцый пасля складанага перыяду.", // 138
      "25 сакавіка 1839", // 139
      "Уз’яднанне ўніятаў з праваслаўем", // 140
      "Саборнае пастановішча ў Полацку аб вяртанні ўніятаў у лона Праваслаўнай Царквы, што ўтацавала праваслаўе ў Беларусі.", // 141
      "25 сакавіка 1939", // 142
      "Закрыццё цэркваў і рэпрэсіі супраць духавенства ў Заходняй Беларусі пасля далучэння да СССР", // 143
      "Пасля далучэння Заходняй Беларусі да СССР у верасні 1939 года савецкія ўлады пачалі актыўную антырэлігійную кампанію. Было зачынена шмат цэркваў, канфіскаваны царкоўныя будынкі, а духавенства падвергнулася рэпрэсіям. У рамках гэтай палітыкі ў школах уводзіліся ўрокі атэізму, забараняліся рэлігійныя абрады і святы, што значна абмежавала рэлігійнае жыццё мясцовага насельніцтва.", // 144
      "15 чэрвеня 2010", // 145
      "Асвячэнне Храма-Памятніка ўсех святых у Мінску", // 146
      "У Мінску адбылося асвячэнне Храма-памятніка ў гонар Усех святых, пабудаванага як сімвал еднасці праваслаўных вернікаў.", // 147
      "28 ліпеня 2020", // 148
      "Урачыстасці з нагоды 1032-годдзя хрышчэння Русі ў Беларусі", // 149
      "У 2020 годзе ў Беларусі прайшлі ўрачыстыя мерапрыемствы, прысвечаныя 1032-годдзю хрышчэння Русі, з удзелам духавенства і вернікаў па ўсёй краіне.", // 150
      "Адкрыць PDF"     // 151
    ],
    timelineSettings: [
      ["buttons", "zoomOut", 0],
      ["buttons", "close", 1],
      ["navigation", "prevArrow", 2],
      ["navigation", "nextArrow", 3],
      ["headers", "century", 4],
      ["headers", "decade", 5],
      ["headers", "year", 6],
      ["headers", "date", 7],
      ["amountOfEvents", "century", 5],
      ["amountOfEvents", "decade", 4],
      ["amountOfEvents", "year", 3],
      ["links", "openPdf", 151] // Индекс "Открыть PDF" остался прежним
    ],
    centuries: [
      [1, 8],  // "II до н.э."
      [2, 9],  // "I до н.э."
      [3, 10], // "I"
      [4, 11], // "II"
      [5, 12], // "III"
      [6, 13], // "IV"
      [7, 14], // "V"
      [8, 15], // "VI"
      [9, 16], // "VII"
      [10, 17], // "VIII"
      [11, 18], // "IX"
      [12, 19], // "X"
      [13, 20], // "XI"
      [14, 21], // "XII"
      [15, 22], // "XIII"
      [16, 23], // "XIV"
      [17, 24], // "XV"
      [18, 25], // "XVI"
      [19, 26], // "XVII"
      [20, 27], // "XVIII"
      [21, 28], // "XIX"
      [22, 29], // "XX"
      [23, 30]  // "XXI"
    ],
    decades: [
      [1, 31, 1],  // "150-е до н.э." связано с веком II до н.э. (id: 1)
      [2, 32, 2],  // "50-е до н.э." связано с веком I до н.э. (id: 2)
      [3, 33, 3],  // "0-е" связано с веком I (id: 3)
      [4, 34, 4],  // "110-е" связано с веком II (id: 4)
      [5, 35, 5],  // "220-е" связано с веком III (id: 5)
      [6, 36, 6],  // "330-е" связано с веком IV (id: 6)
      [7, 37, 7],  // "440-е" связано с веком V (id: 7)
      [8, 38, 8],  // "550-е" связано с веком VI (id: 8)
      [9, 39, 9],  // "660-е" связано с веком VII (id: 9)
      [10, 40, 10], // "770-е" связано с веком VIII (id: 10)
      [11, 41, 11], // "880-е" связано с веком IX (id: 11)
      [12, 42, 12], // "980-е" связано с веком X (id: 12)
      [13, 43, 13], // "1100-е" связано с веком XI (id: 13)
      [14, 44, 14], // "1150-е" связано с веком XII (id: 14)
      [15, 45, 15], // "1260-е" связано с веком XIII (id: 15)
      [16, 46, 16], // "1350-е" связано с веком XIV (id: 16)
      [17, 47, 17], // "1470-е" связано с веком XV (id: 17)
      [18, 48, 18], // "1510-е" связано с веком XVI (id: 18)
      [19, 49, 19], // "1660-е" связано с веком XVII (id: 19)
      [20, 50, 20], // "1770-е" связано с веком XVIII (id: 20)
      [21, 51, 21], // "1830-е" связано с веком XIX (id: 21)
      [22, 52, 22], // "1930-е" связано с веком XX (id: 22)
      [23, 53, 23], // "2010-е" связано с веком XXI (id: 23)
      [24, 54, 23]  // "2020-е" связано с веком XXI (id: 23)
    ],
    years: [
      [1, 55, 1],   // "150 до н.э." связано с десятилетием 150-е до н.э. (id: 1)
      [2, 56, 2],   // "50 до н.э." связано с десятилетием 50-е до н.э. (id: 2)
      [3, 57, 3],   // "1" связано с десятилетием 0-е (id: 3)
      [4, 58, 4],   // "110" связано с десятилетием 110-е (id: 4)
      [5, 59, 5],   // "220" связано с десятилетием 220-е (id: 5)
      [6, 60, 6],   // "330" связано с десятилетием 330-е (id: 6)
      [7, 61, 7],   // "440" связано с десятилетием 440-е (id: 7)
      [8, 62, 8],   // "550" связано с десятилетием 550-е (id: 8)
      [9, 63, 9],   // "660" связано с десятилетием 660-е (id: 9)
      [10, 64, 10], // "770" связано с десятилетием 770-е (id: 10)
      [11, 65, 11], // "888" связано с десятилетием 880-е (id: 11)
      [12, 66, 12], // "988" связано с десятилетием 980-е (id: 12)
      [13, 67, 13], // "1100" связано с десятилетием 1100-е (id: 13)
      [14, 68, 14], // "1150" связано с десятилетием 1150-е (id: 14)
      [15, 69, 15], // "1265" связано с десятилетием 1260-е (id: 15)
      [16, 70, 16], // "1350" связано с десятилетием 1350-е (id: 16)
      [17, 71, 17], // "1470" связано с десятилетием 1470-е (id: 17)
      [18, 72, 18], // "1517" связано с десятилетием 1510-е (id: 18)
      [19, 73, 19], // "1660" связано с десятилетием 1660-е (id: 19)
      [20, 74, 20], // "1770" связано с десятилетием 1770-е (id: 20)
      [21, 75, 21], // "1839" связано с десятилетием 1830-е (id: 21)
      [22, 76, 22], // "1939" связано с десятилетием 1930-е (id: 22)
      [23, 77, 23], // "2010" связано с десятилетием 2010-е (id: 23)
      [24, 78, 24]  // "2020" связано с десятилетием 2020-е (id: 24)
    ],
    books: {
      uniati: path + "src/assets/books/uniati.pdf",
      "150BC": path + "src/assets/books/150BC.pdf",
      "50BC": path + "src/assets/books/50BC.pdf",
      "1AD": path + "src/assets/books/1AD.pdf",
      "110AD": path + "src/assets/books/110AD.pdf",
      "220AD": path + "src/assets/books/220AD.pdf",
      "330AD": path + "src/assets/books/330AD.pdf",
      "440AD": path + "src/assets/books/440AD.pdf",
      "550AD": path + "src/assets/books/550AD.pdf",
      "660AD": path + "src/assets/books/660AD.pdf",
      "770AD": path + "src/assets/books/770AD.pdf",
      "888AD": path + "src/assets/books/888AD.pdf",
      "988AD": path + "src/assets/books/988AD.pdf",
      "1100AD": path + "src/assets/books/1100AD.pdf",
      "1150AD": path + "src/assets/books/1150AD.pdf",
      "1265AD": path + "src/assets/books/1265AD.pdf",
      "1350AD": path + "src/assets/books/1350AD.pdf",
      "1470AD": path + "src/assets/books/1470AD.pdf",
      "1517AD": path + "src/assets/books/1517AD.pdf",
      "1660AD": path + "src/assets/books/1660AD.pdf",
      "1770AD": path + "src/assets/books/1770AD.pdf",
      "1839AD": path + "src/assets/books/1839AD.pdf",
      "1939AD": path + "src/assets/books/1939AD.pdf",
      "2010AD": path + "src/assets/books/2010AD.pdf",
      "2020AD": path + "src/assets/books/2020AD.pdf"
    },
    events: [
      [1, 79, 80, 81, [path + "src/assets/pictures/timeline/150BC.jpg", path + "src/assets/pictures/timeline/1BC.jpg"], 1, "150BC"],
      [2, 82, 83, 84, [path + "src/assets/pictures/timeline/1BC.jpg"], 2, "50BC"],
      [3, 85, 86, 87, [path + "src/assets/pictures/timeline/1ADR.jpg"], 1, "1AD"],
      [4, 88, 89, 90, [path + "src/assets/pictures/timeline/110ADR.jpg"], 2, "110AD"],
      [5, 91, 92, 93, [path + "src/assets/pictures/timeline/220ADR.png"], 1, "220AD"],
      [6, 94, 95, 96, [path + "src/assets/pictures/timeline/330ADR.jpg"], 2, "330AD"],
      [7, 97, 98, 99, [path + "src/assets/pictures/timeline/440ADR.jpg"], 1, "440AD"],
      [8, 100, 101, 102, [path + "src/assets/pictures/timeline/550ADR.jpg"], 2, "550AD"],
      [9, 103, 104, 105, [path + "src/assets/pictures/timeline/660ADR.jpg"], 1, "660AD"],
      [10, 106, 107, 108, [path + "src/assets/pictures/timeline/770ADR.jpg"], 2, "770AD"],
      [11, 109, 110, 111, [path + "src/assets/pictures/timeline/888ADR.jpg"], 1, "888AD"],
      [12, 112, 113, 114, [path + "src/assets/pictures/timeline/baptism.jpg"], 1, "988AD"],
      [13, 115, 116, 117, [path + "src/assets/pictures/timeline/soborpolotsk.jpg"], 2, "1100AD"],
      [14, 118, 119, 120, [path + "src/assets/pictures/timeline/1150.06.01.jpg"], 2, "1150AD"],
      [15, 121, 122, 123, [path + "src/assets/pictures/timeline/1265ADR.jpg"], 5, "1265AD"],
      [16, 124, 125, 126, [path + "src/assets/pictures/timeline/1350ADR.jpg"], 2, "1350AD"],
      [17, 127, 128, 129, [path + "src/assets/pictures/timeline/1470.05.01.jpg"], 2, "1470AD"],
      [18, 130, 131, 132, [path + "src/assets/pictures/timeline/skaryna.jpg"], 3, "1517AD"],
      [19, 133, 134, 135, [path + "src/assets/pictures/timeline/1660ADR.png"], 2, "1660AD"],
      [20, 136, 137, 138, [path + "src/assets/pictures/timeline/1770ADR.jpg"], 1, "1770AD"],
      [21, 139, 140, 141, [path + "src/assets/pictures/timeline/1839AD.jpg", path + "src/assets/pictures/timeline/1839AD_additional.jpg"], 1, "1839AD"],
      [22, 142, 143, 144, [path + "src/assets/pictures/timeline/1939ADR.jpg"], 1, "1939AD"],
      [23, 145, 146, 147, [path + "src/assets/pictures/timeline/2010AD.jpg"], 1, "2010AD"],
      [24, 148, 149, 150, [path + "src/assets/pictures/timeline/2020AD.jpg"], 2, "2020AD"]
    ]
  },

  timelineHistory: {
    ru: [
      "Увеличить масштаб",
      "×",
      "←",
      "→",
      "Век: ",
      "Десятилетие: ",
      "Год: ",
      "Дата: ",
      "II до н.э.",
      "I до н.э.",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
      "XII",
      "XIII",
      "XIV",
      "XV",
      "XVI",
      "XVII",
      "XVIII",
      "XIX",
      "XX",
      "XXI",
      "150е до н.э.",
      "50е до н.э.",
      "0е",
      "110е",
      "220е",
      "330е",
      "440е",
      "550е",
      "660е",
      "770е",
      "880е",
      "890е",
      "980е",
      "990е",
      "1100е",
      "1150е",
      "1180е",
      "1260е",
      "1350е",
      "1470е",
      "1490е",
      "1500е",
      "1510е",
      "1550е",
      "1660е",
      "1770е",
      "1790е",
      "1810е",
      "1830е",
      "1860е",
      "1930е",
      "1960е",
      "2000е",
      "2010е",
      "2020е",
      // Добавлены краткие названия годов
      "150 до н.э.",
      "50 до н.э.",
      "1",
      "110",
      "220",
      "330",
      "440",
      "550",
      "660",
      "770",
      "888",
      "892",
      "988",
      "992",
      "1100",
      "1150",
      "1159",
      "1182",
      "1265",
      "1350",
      "1470",
      "1496",
      "1498",
      "1499",
      "1500",
      "1502",
      "1517",
      "1550",
      "1660",
      "1770",
      "1795",
      "1812",
      "1839",
      "1864",
      "1939",
      "1944",
      "2009",
      "2010",
      "2020",
      // Даты событий и их описания
      "15 января 150 до н.э.",
      "Первые поселения на землях современной Беларуси",
      "На территории современной Беларуси начали формироваться первые археологические культуры, связанные с ранними племенами.",
      "10 февраля 50 до н.э.",
      "Торговые пути через белорусские земли",
      "Через земли современной Беларуси начали проходить торговые пути, связывающие Балтику и Черное море.",
      "5 марта 1",
      "Ранние следы римского влияния",
      "На землях современной Беларуси обнаружены следы торговых связей с Римской империей.",
      "12 апреля 110",
      "Укрепление местных племен",
      "Местные племена начали формировать более сложные социальные структуры.",
      "20 мая 220",
      "Появление первых укрепленных поселений",
      "На белорусских землях начали появляться укрепленные поселения.",
      "8 июня 330",
      "Влияние Великого переселения народов",
      "Великое переселение народов затронуло земли современной Беларуси.",
      "15 июля 440",
      "Формирование ранних славянских общин",
      "На белорусских землях начали формироваться ранние славянские общины.",
      "22 августа 550",
      "Укрепление славянских традиций",
      "Славянские традиции начали доминировать на землях современной Беларуси.",
      "30 сентября 660",
      "Ранние конфликты с кочевниками",
      "Местные племена сталкивались с кочевниками на южных границах.",
      "18 октября 770",
      "Первые упоминания о торговле с викингами",
      "На белорусских землях зафиксированы следы торговых контактов с викингами.",
      "28 июля 888",
      "Первые упоминания о славянах на землях Беларуси",
      "Восточные славяне (Кривичи, Дреговичи, Радимичи) начали заселять территорию современной Беларуси, формируя основу будущего этноса.",
      "15 ноября 892",
      "Формирование Полоцкого княжества",
      "Появление первых княжеских структур в Полоцке, одного из древнейших городов Беларуси, в конце IX века.",
      "28 июля 988",
      "Крещение Руси и влияние на белорусские земли",
      "Крещение Руси князем Владимиром в Киеве положило начало христианизации земель современной Беларуси, входивших в состав Киевской Руси.",
      "10 декабря 992",
      "Правление Рогнеды и Изяслава в Полоцке",
      "Рогнеда и ее сын Изяслав укрепляли Полоцкое княжество, ставшее важным центром на белорусских землях.",
      "1 мая 1100",
      "Строительство Софийского собора в Полоцке",
      "Возведение Софийского собора в Полоцке в XI веке стало символом расцвета христианства и культуры на белорусских землях.",
      "1 июня 1150",
      "Основание монастыря Евфросинией Полоцкой",
      "Евфросиния Полоцкая основала Спасо-Преображенский монастырь, ставший центром просвещения и православия.",
      "23 мая 1159",
      "Создание креста Евфросинии Полоцкой",
      "Евфросиния заказала знаменитый крест-ковчег, шедевр ювелирного искусства, около 1161 года.",
      "12 июля 1182",
      "Обретение Купятичской иконы Божией Матери",
      "Чудотворная икона была явлена близ Пинска, став одной из древнейших святынь Беларуси.",
      "5 августа 1265",
      "Вхождение земель в Великое княжество Литовское",
      "Белорусские земли начали интегрироваться в состав Великого княжества Литовского после ослабления Киевской Руси.",
      "20 сентября 1350",
      "Укрепление позиций ВКЛ на белорусских землях",
      "Великое княжество Литовское укрепило контроль над белорусскими территориями.",
      "1 мая 1470",
      "Явление Жировицкой иконы Божией Матери",
      "Обретение чудотворной иконы в Жировичах стало важным событием для православия в Беларуси.",
      "15 октября 1496",
      "Основание Супрасльского монастыря",
      "Создание Супрасльского монастыря, ставшего центром православия и письменности.",
      "22 ноября 1498",
      "Укрепление Минска как центра",
      "Минск получил развитие как административный центр в составе ВКЛ.",
      "30 декабря 1499",
      "Расцвет Полоцка в ВКЛ",
      "Полоцк сохранял значение как культурный и религиозный центр Великого княжества Литовского.",
      "14 марта 1500",
      "Получение Минском магдебургского права",
      "Минск получил самоуправление по магдебургскому праву, что укрепило его статус.",
      "25 апреля 1502",
      "Развитие торговли в ВКЛ",
      "Белорусские земли стали важным торговым узлом в составе Великого княжества Литовского.",
      "6 августа 1517",
      "Печать первой книги Франциском Скориной в Праге",
      "Франциск Скорина напечатал 'Псалтырь' в Праге, ставшую первой книгой на восточнославянском языке.",
      "18 сентября 1550",
      "Укрепление культурных центров ВКЛ",
      "Белорусские города продолжали развиваться как культурные центры ВКЛ.",
      "10 октября 1660",
      "Влияние войн на белорусские земли",
      "Войны XVII века (например, с Московским царством) затронули белорусские земли.",
      "15 ноября 1770",
      "Начало упадка Речи Посполитой",
      "Упадок Речи Посполитой начал влиять на белорусские земли.",
      "26 октября 1795",
      "Третий раздел Речи Посполитой",
      "Белорусские земли полностью вошли в состав Российской империи после раздела Речи Посполитой.",
      "27 июня 1812",
      "Наполеон в Беларуси",
      "Войска Наполеона пересекли Неман, начав вторжение в Россию через белорусские земли.",
      "25 марта 1839",
      "Полоцкий собор и воссоединение униатов",
      "Воссоединение униатов с Православной церковью укрепило позиции православия в Беларуси.",
      "22 января 1864",
      "Восстание Кастуся Калиновского",
      "Кастусь Калиновский возглавил восстание против Российской империи за национальные права белорусов.",
      "17 сентября 1939",
      "Воссоединение Западной Беларуси",
      "Западная Беларусь была присоединена к БССР после вступления советских войск в Польшу.",
      "1 июля 1944",
      "Освобождение Минска во Второй Мировой Войне",
      "Минск был освобожден от немецкой оккупации в ходе операции 'Багратион'.",
      "15 февраля 2009",
      "Экономический кризис и его влияние на Беларусь",
      "Глобальный экономический кризис 2008–2009 годов затронул экономику Беларуси, вызвав спад производства и рост цен.",
      "19 декабря 2010",
      "Президентские выборы 2010 года и протесты",
      "После президентских выборов в декабре 2010 года в Минске прошли массовые протесты против фальсификации результатов.",
      "9 августа 2020",
      "Президентские выборы 2020 года и массовые протесты",
      "Президентские выборы в августе 2020 года сопровождались массовыми протестами против официальных результатов, приведших к политическому кризису.",
      "Открыть PDF"
    ],
    en: [
      "Zoom Out",
      "×",
      "←",
      "→",
      "Century: ",
      "Decade: ",
      "Year: ",
      "Date: ",
      "2nd BC",
      "1st BC",
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
      "11th",
      "12th",
      "13th",
      "14th",
      "15th",
      "16th",
      "17th",
      "18th",
      "19th",
      "20th",
      "21st",
      "150s BC",
      "50s BC",
      "0s",
      "110s",
      "220s",
      "330s",
      "440s",
      "550s",
      "660s",
      "770s",
      "880s",
      "890s",
      "980s",
      "990s",
      "1100s",
      "1150s",
      "1180s",
      "1260s",
      "1350s",
      "1470s",
      "1490s",
      "1500s",
      "1510s",
      "1550s",
      "1660s",
      "1770s",
      "1790s",
      "1810s",
      "1830s",
      "1860s",
      "1930s",
      "1960s",
      "2000s",
      "2010s",
      "2020s",
      // Добавлены краткие названия годов
      "150 BC",
      "50 BC",
      "1",
      "110",
      "220",
      "330",
      "440",
      "550",
      "660",
      "770",
      "888",
      "892",
      "988",
      "992",
      "1100",
      "1150",
      "1159",
      "1182",
      "1265",
      "1350",
      "1470",
      "1496",
      "1498",
      "1499",
      "1500",
      "1502",
      "1517",
      "1550",
      "1660",
      "1770",
      "1795",
      "1812",
      "1839",
      "1864",
      "1939",
      "1944",
      "2009",
      "2010",
      "2020",
      // Даты событий и их описания
      "January 15, 150 BC",
      "First Settlements in Modern Belarus Lands",
      "The territory of modern Belarus saw the formation of early archaeological cultures linked to ancient tribes.",
      "February 10, 50 BC",
      "Trade Routes Through Belarusian Lands",
      "Trade routes connecting the Baltic and Black Seas began passing through the lands of modern Belarus.",
      "March 5, 1",
      "Early Traces of Roman Influence",
      "Traces of trade connections with the Roman Empire were found in the lands of modern Belarus.",
      "April 12, 110",
      "Strengthening of Local Tribes",
      "Local tribes began forming more complex social structures.",
      "May 20, 220",
      "Appearance of Fortified Settlements",
      "Fortified settlements began appearing in Belarusian lands.",
      "June 8, 330",
      "Impact of the Great Migration of Peoples",
      "The Great Migration of Peoples affected the lands of modern Belarus.",
      "July 15, 440",
      "Formation of Early Slavic Communities",
      "Early Slavic communities began forming in Belarusian lands.",
      "August 22, 550",
      "Strengthening of Slavic Traditions",
      "Slavic traditions began to dominate the lands of modern Belarus.",
      "September 30, 660",
      "Early Conflicts with Nomads",
      "Local tribes clashed with nomads on the southern borders.",
      "October 18, 770",
      "First Mentions of Trade with Vikings",
      "Evidence of trade contacts with Vikings was recorded in Belarusian lands.",
      "July 28, 888",
      "First Mentions of Slavs in Belarusian Lands",
      "Eastern Slavs (Krivichi, Dregovichi, Radimichi) began settling the territory of modern Belarus, forming the basis of the future ethnos.",
      "November 15, 892",
      "Formation of the Polotsk Principality",
      "The emergence of the first princely structures in Polotsk, one of the oldest cities in Belarus, at the end of the 9th century.",
      "July 28, 988",
      "Baptism of Rus and Its Impact on Belarusian Lands",
      "The baptism of Rus by Prince Vladimir in Kiev marked the beginning of the Christianization of the lands of modern Belarus, which were part of Kievan Rus.",
      "December 10, 992",
      "Reign of Rogneda and Iziaslav in Polotsk",
      "Rogneda and her son Iziaslav strengthened the Polotsk Principality, which became an important center in Belarusian lands.",
      "May 1, 1100",
      "Construction of the Sofia Cathedral in Polotsk",
      "The construction of the Sofia Cathedral in Polotsk in the 11th century became a symbol of the flourishing of Christianity and culture in Belarusian lands.",
      "June 1, 1150",
      "Founding of the Monastery by Euphrosyne of Polotsk",
      "Euphrosyne of Polotsk founded the Transfiguration Monastery, which became a center of enlightenment and Orthodoxy.",
      "May 23, 1159",
      "Creation of the Cross of Euphrosyne of Polotsk",
      "Euphrosyne commissioned the famous reliquary cross, a masterpiece of jewelry art, around 1161.",
      "July 12, 1182",
      "Discovery of the Kupyatichi Icon of the Mother of God",
      "The miraculous icon was revealed near Pinsk, becoming one of the oldest shrines in Belarus.",
      "August 5, 1265",
      "Integration of Lands into the Grand Duchy of Lithuania",
      "Belarusian lands began to integrate into the Grand Duchy of Lithuania after the weakening of Kievan Rus.",
      "September 20, 1350",
      "Strengthening of the Grand Duchy of Lithuania in Belarusian Lands",
      "The Grand Duchy of Lithuania solidified control over Belarusian territories.",
      "May 1, 1470",
      "Appearance of the Zhirovichi Icon of the Mother of God",
      "The discovery of the miraculous icon in Zhirovichi became a significant event for Orthodoxy in Belarus.",
      "October 15, 1496",
      "Founding of the Suprasl Monastery",
      "The establishment of the Suprasl Monastery, which became a center of Orthodoxy and literacy.",
      "November 22, 1498",
      "Strengthening of Minsk as a Center",
      "Minsk developed as an administrative center within the Grand Duchy of Lithuania.",
      "December 30, 1499",
      "Flourishing of Polotsk in the Grand Duchy of Lithuania",
      "Polotsk retained its significance as a cultural and religious center of the Grand Duchy of Lithuania.",
      "March 14, 1500",
      "Minsk Receives Magdeburg Rights",
      "Minsk gained self-governance under Magdeburg Law, strengthening its status.",
      "April 25, 1502",
      "Development of Trade in the Grand Duchy of Lithuania",
      "Belarusian lands became an important trade hub within the Grand Duchy of Lithuania.",
      "August 6, 1517",
      "Printing of the First Book by Francysk Skaryna in Prague",
      "Francysk Skaryna printed the 'Psalter' in Prague, which became the first book in an East Slavic language.",
      "September 18, 1550",
      "Strengthening of Cultural Centers in the Grand Duchy of Lithuania",
      "Belarusian cities continued to develop as cultural centers of the Grand Duchy of Lithuania.",
      "October 10, 1660",
      "Impact of Wars on Belarusian Lands",
      "Wars of the 17th century (e.g., with the Tsardom of Muscovy) affected Belarusian lands.",
      "November 15, 1770",
      "Beginning of the Decline of the Polish-Lithuanian Commonwealth",
      "The decline of the Polish-Lithuanian Commonwealth began affecting Belarusian lands.",
      "October 26, 1795",
      "Third Partition of the Polish-Lithuanian Commonwealth",
      "Belarusian lands fully became part of the Russian Empire after the partition of the Polish-Lithuanian Commonwealth.",
      "June 27, 1812",
      "Napoleon in Belarus",
      "Napoleon's troops crossed the Neman, beginning the invasion of Russia through Belarusian lands.",
      "March 25, 1839",
      "Polotsk Council and Reunion of Uniates",
      "The reunion of Uniates with the Orthodox Church strengthened Orthodoxy's position in Belarus.",
      "January 22, 1864",
      "Kastus Kalinowski's Uprising",
      "Kastus Kalinowski led an uprising against the Russian Empire for the national rights of Belarusians.",
      "September 17, 1939",
      "Reunion of Western Belarus",
      "Western Belarus was annexed to the BSSR after Soviet troops entered Poland.",
      "July 1, 1944",
      "Liberation of Minsk in WWII",
      "Minsk was liberated from German occupation during Operation Bagration.",
      "February 15, 2009",
      "Economic Crisis and Its Impact on Belarus",
      "The global economic crisis of 2008–2009 affected Belarus's economy, leading to a decline in production and rising prices.",
      "December 19, 2010",
      "Presidential Election of 2010 and Protests",
      "Following the presidential election in December 2010, mass protests erupted in Minsk against the alleged falsification of results.",
      "August 9, 2020",
      "Presidential Election of 2020 and Mass Protests",
      "The presidential election in August 2020 was followed by mass protests against the official results, leading to a political crisis.",
      "Open PDF"
    ],
    by: [
      "Павялічыць маштаб",
      "×",
      "←",
      "→",
      "Стагоддзе: ",
      "Дзесяцігоддзе: ",
      "Год: ",
      "Дата: ",
      "II да н.э.",
      "I да н.э.",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
      "XII",
      "XIII",
      "XIV",
      "XV",
      "XVI",
      "XVII",
      "XVIII",
      "XIX",
      "XX",
      "XXI",
      "150-я да н.э.",
      "50-я да н.э.",
      "0-я",
      "110-я",
      "220-я",
      "330-я",
      "440-я",
      "550-я",
      "660-я",
      "770-я",
      "880-я",
      "890-я",
      "980-я",
      "990-я",
      "1100-я",
      "1150-я",
      "1180-я",
      "1260-я",
      "1350-я",
      "1470-я",
      "1490-я",
      "1500-я",
      "1510-я",
      "1550-я",
      "1660-я",
      "1770-я",
      "1790-я",
      "1810-я",
      "1830-я",
      "1860-я",
      "1930-я",
      "1960-я",
      "2000-я",
      "2010-я",
      "2020-я",
      // Добавлены краткие названия годов
      "150 да н.э.",
      "50 да н.э.",
      "1",
      "110",
      "220",
      "330",
      "440",
      "550",
      "660",
      "770",
      "888",
      "892",
      "988",
      "992",
      "1100",
      "1150",
      "1159",
      "1182",
      "1265",
      "1350",
      "1470",
      "1496",
      "1498",
      "1499",
      "1500",
      "1502",
      "1517",
      "1550",
      "1660",
      "1770",
      "1795",
      "1812",
      "1839",
      "1864",
      "1939",
      "1944",
      "2009",
      "2010",
      "2020",
      // Даты событий и их описания
      "15 студзеня 150 да н.э.",
      "Першыя пасяленні на землях сучаснай Беларусі",
      "На тэрыторыі сучаснай Беларусі пачалі фарміравацца першыя археалагічныя культуры, звязаныя з раннімі плямёнамі.",
      "10 лютага 50 да н.э.",
      "Гандлёвыя шляхі праз беларускія землі",
      "Праз землі сучаснай Беларусі пачалі праходзіць гандлёвыя шляхі, якія злучалі Балтыку і Чорнае мора.",
      "5 сакавіка 1",
      "Раннія сляды рымскага ўплыву",
      "На землях сучаснай Беларусі выяўлены сляды гандлёвых сувязяў з Рымскай імперыяй.",
      "12 красавіка 110",
      "Утацаванне мясцовых плямёнаў",
      "Мясцовыя плямёны пачалі фарміраваць больш складаныя сацыяльныя структуры.",
      "20 мая 220",
      "З'яўленне ўтачнёных пасяленняў",
      "На беларускіх землях пачалі з'яўляцца ўтачнёныя пасяленні.",
      "8 чэрвеня 330",
      "Уплыў Вялікага перасялення народаў",
      "Вялікае перасяленне народаў закранула землі сучаснай Беларусі.",
      "15 ліпеня 440",
      "Фарміраванне ранніх славянскіх супольнасцяў",
      "На беларускіх землях пачалі фарміравацца раннія славянскія супольнасці.",
      "22 жніўня 550",
      "Утацаванне славянскіх традыцый",
      "Славянскія традыцыі пачалі дамінаваць на землях сучаснай Беларусі.",
      "30 верасня 660",
      "Раннія канфлікты з качэўнікамі",
      "Мясцовыя плямёны сутыкаліся з качэўнікамі на паўднёвых межах.",
      "18 кастрычніка 770",
      "Першыя ўпамінанні пра гандаль з вікінгамі",
      "На беларускіх землях зафіксаваны сляды гандлёвых кантактаў з вікінгамі。",
      "28 ліпеня 888",
      "Першыя ўпамінанні пра славян на землях Беларусі",
      "Усходнія славяне (Крывічы, Дрэгавічы, Радзімічы) пачалі ўсеяляць тэрыторыю сучаснай Беларусі, ствараючы аснову будучага этнасу.",
      "15 лістапада 892",
      "Фарміраванне Полацкага княства",
      "Узнікненне першых княскіх структур у Полацку, адным з найстаражытных гарадоў Беларусі, у канцы IX стагоддзя.",
      "28 ліпеня 988",
      "Хрышчэнне Русі і ўплыў на беларускія землі",
      "Хрышчэнне Русі князем Уладзімірам у Кіеве паклала пачатак хрысціянізацыі зямель сучаснай Беларусі, якія ўваходзілі ў склад Кіеўскай Русі.",
      "10 снежня 992",
      "Праўленне Рагнеды і Ізяслава ў Полацку",
      "Рагнеда і яе сын Ізяслаў умацоўвалі Полацкае княства, якое стала важным цэнтрам на беларускіх землях.",
      "1 мая 1100",
      "Будаўніцтва Сафійскага сабора ў Полацку",
      "Узвядзенне Сафійскага сабора ў Полацку ў XI стагоддзі стала сімвалам росквіту хрысціянства і культуры на беларускіх землях.",
      "1 чэрвеня 1150",
      "Заснаванне манастыра Еўфрасінняй Полацкай",
      "Еўфрасіння Полацкая заснавала Спаса-Праабражэнскі манастыр, які стаў цэнтрам адукацыі і праваслаўя.",
      "23 мая 1159",
      "Стварэнне крыжа Еўфрасінні Полацкай",
      "Еўфрасіння заказала знакаміты крыж-ковчэг, шэдэўр ювелірнага мастацтва, каля 1161 года.",
      "12 ліпеня 1182",
      "Набыццё Купяціцкай іконы Божай Маці",
      "Цудатворная ікона была явлена каля Пінска, стаўшы адной з найстаражытнейшых святынь Беларусі.",
      "5 жніўня 1265",
      "Усеяленне зямель у Вялікае княства Літоўскае",
      "Беларускія землі пачалі ўсеяляцца ў склад Вялікага княства Літоўскага пасля аслаблення Кіеўскай Русі.",
      "20 верасня 1350",
      "Утачненне пазіцый ВКЛ на беларускіх землях",
      "Вялікае княства Літоўскае ўтачняла кантроль над беларускімі тэрыторыямі.",
      "1 мая 1470",
      "Яўленне Жыровіцкай іконы Божай Маці",
      "Набыццё цудатворнай іконы ў Жыровічах стала важнай падзеяй для праваслаўя ў Беларусі.",
      "15 кастрычніка 1496",
      "Заснаванне Супрасльскага манастыра",
      "Стварэнне Супрасльскага манастыра, які стаў цэнтрам праваслаўя і пісьменнасці.",
      "22 лістапада 1498",
      "Утачненне Мінска як цэнтра",
      "Мінск атрымаў развіццё як адміністрацыйны цэнтр у складзе ВКЛ.",
      "30 снежня 1499",
      "Росквіт Полацка ў ВКЛ",
      "Полацк захоўваў значэнне як культурны і рэлігійны цэнтр Вялікага княства Літоўскага.",
      "14 сакавіка 1500",
      "Атрыманне Мінскам магдэбургскага права",
      "Мінск атрымаў самакіраванне па магдэбургскаму праву, што ўтачняла яго статус.",
      "25 красавіка 1502",
      "Развіццё гандлю ў ВКЛ",
      "Беларускія землі сталі важным гандлёвым вузлом у складзе Вялікага княства Літоўскага.",
      "6 жніўня 1517",
      "Друк першай кнігі Францыскам Скарынам у Празе",
      "Францыск Скарына надрукаваў 'Псалтыр' у Празе, які стаў першай кнігай на ўсходнеславянскай мове.",
      "18 верасня 1550",
      "Утачненне культурных цэнтраў ВКЛ",
      "Беларускія гарады працягвалі развівацца як культурныя цэнтры ВКЛ.",
      "10 кастрычніка 1660",
      "Уплыў войн на беларускія землі",
      "Войны XVII стагоддзя (напрыклад, з Маскоўскім царствам) закранулі беларускія землі.",
      "15 лістапада 1770",
      "Пачатак заняпаду Рэчы Паспалітай",
      "Заняпад Рэчы Паспалітай пачаў уплываць на беларускія землі.",
      "26 кастрычніка 1795",
      "Трэці падзел Рэчы Паспалітай",
      "Беларускія землі цалкам усеяліся ў склад Расійскай імперыі пасля падзелу Рэчы Паспалітай.",
      "27 чэрвеня 1812",
      "Напалеон у Беларусі",
      "Войскі Напалеона перасеклі Нёман, пачаўшы ўсеяленне ў Расію праз беларускія землі.",
      "25 сакавіка 1839",
      "Полацкі сабор і ўсеяленне уніятаў",
      "Усеяленне уніятаў з Праваслаўнай царквой умацавала пазіцыі праваслаўя ў Беларусі.",
      "22 студзеня 1864",
      "Паўстанне Кастуся Каліноўскага",
      "Кастусь Каліноўскі ўсеяліў паўстанне супраць Расійскай імперыі за нацыянальныя правы беларусаў.",
      "17 верасня 1939",
      "Усеяленне Заходняй Беларусі",
      "Заходняя Беларусь была ўсеялена ў БССР пасля ўсеялення савецкіх войск у Польшчу.",
      "1 ліпеня 1944",
      "Вызваленне Мінска ў Другой сусветнай вайне",
      "Мінск быў вызвалены ад нямецкай акупацыі ў ходзе аперацыі 'Баграціён'.",
      "15 лютага 2009",
      "Эканамічны крызіс і яго ўплыў на Беларусь",
      "Глабальны эканамічны крызіс 2008–2009 гадоў закрануў эканоміку Беларусі, выклікаўшы спад вытворчасці і рост цэн.",
      "19 снежня 2010",
      "Прэзідэнцкія выбары 2010 года і пратэсты",
      "Пасля прэзідэнцкіх выбараў у снежні 2010 года ў Мінску прайшлі масавыя пратэсты супраць фальсіфікацыі вынікаў.",
      "9 жніўня 2020",
      "Прэзідэнцкія выбары 2020 года і масавыя пратэсты",
      "Прэзідэнцкія выбары ў жніўні 2020 года суправаджаліся масавымі пратэстамі супраць афіцыйных вынікаў, што прывяло да палітычнага крызісу.",
      "Адкрыць PDF"
    ],
    timelineSettings: [
      ["buttons", "zoomOut", 0],
      ["buttons", "close", 1],
      ["navigation", "prevArrow", 2],
      ["navigation", "nextArrow", 3],
      ["headers", "century", 4],
      ["headers", "decade", 5],
      ["headers", "year", 6],
      ["headers", "date", 7],
      ["amountOfEvents", "century", 100],
      ["amountOfEvents", "decade", 4],
      ["amountOfEvents", "year", 3],
      ["links", "openPdf", 224] // Обновлённый индекс для "Открыть PDF"
    ],
    centuries: [
      [1, 8],  // "II до н.э."
      [2, 9],  // "I до н.э."
      [3, 10], // "I"
      [4, 11], // "II"
      [5, 12], // "III"
      [6, 13], // "IV"
      [7, 14], // "V"
      [8, 15], // "VI"
      [9, 16], // "VII"
      [10, 17], // "VIII"
      [11, 18], // "IX"
      [12, 19], // "X"
      [13, 20], // "XI"
      [14, 21], // "XII"
      [15, 22], // "XIII"
      [16, 23], // "XIV"
      [17, 24], // "XV"
      [18, 25], // "XVI"
      [19, 26], // "XVII"
      [20, 27], // "XVIII"
      [21, 28], // "XIX"
      [22, 29], // "XX"
      [23, 30]  // "XXI"
    ],
    decades: [
      [1, 31, 1],  // "150-е до н.э." связано с веком II до н.э. (id: 1)
      [2, 32, 2],  // "50-е до н.э." связано с веком I до н.э. (id: 2)
      [3, 33, 3],  // "0-е" связано с веком I (id: 3)
      [4, 34, 4],  // "110-е" связано с веком II (id: 4)
      [5, 35, 5],  // "220-е" связано с веком III (id: 5)
      [6, 36, 6],  // "330-е" связано с веком IV (id: 6)
      [7, 37, 7],  // "440-е" связано с веком V (id: 7)
      [8, 38, 8],  // "550-е" связано с веком VI (id: 8)
      [9, 39, 9],  // "660-е" связано с веком VII (id: 9)
      [10, 40, 10], // "770-е" связано с веком VIII (id: 10)
      [11, 41, 11], // "880-е" связано с веком IX (id: 11)
      [12, 42, 11], // "890-е" связано с веком IX (id: 11)
      [13, 43, 12], // "980-е" связано с веком X (id: 12)
      [14, 44, 12], // "990-е" связано с веком X (id: 12)
      [15, 45, 13], // "1100-е" связано с веком XI (id: 13)
      [16, 46, 14], // "1150-е" связано с веком XII (id: 14)
      [17, 47, 14], // "1180-е" связано с веком XII (id: 14)
      [18, 48, 15], // "1260-е" связано с веком XIII (id: 15)
      [19, 49, 16], // "1350-е" связано с веком XIV (id: 16)
      [20, 50, 17], // "1470-е" связано с веком XV (id: 17)
      [21, 51, 17], // "1490-е" связано с веком XV (id: 17)
      [22, 52, 17], // "1500-е" связано с веком XV (id: 17)
      [23, 53, 18], // "1510-е" связано с веком XVI (id: 18)
      [24, 54, 18], // "1550-е" связано с веком XVI (id: 18)
      [25, 55, 19], // "1660-е" связано с веком XVII (id: 19)
      [26, 56, 20], // "1770-е" связано с веком XVIII (id: 20)
      [27, 57, 20], // "1790-е" связано с веком XVIII (id: 20)
      [28, 58, 20], // "1810-е" связано с веком XVIII (id: 20)
      [29, 59, 21], // "1830-е" связано с веком XIX (id: 21)
      [30, 60, 21], // "1860-е" связано с веком XIX (id: 21)
      [31, 61, 22], // "1930-е" связано с веком XX (id: 22)
      [32, 62, 22], // "1960-е" связано с веком XX (id: 22)
      [33, 63, 23], // "2000-е" связано с веком XXI (id: 23)
      [34, 64, 23], // "2010-е" связано с веком XXI (id: 23)
      [35, 65, 23]  // "2020-е" связано с веком XXI (id: 23)
    ],
    years: [
      [1, 66, 1],   // "150 до н.э." связано с десятилетием 150-е до н.э. (id: 1)
      [2, 67, 2],   // "50 до н.э." связано с десятилетием 50-е до н.э. (id: 2)
      [3, 68, 3],   // "1" связано с десятилетием 0-е (id: 3)
      [4, 69, 4],   // "110" связано с десятилетием 110-е (id: 4)
      [5, 70, 5],   // "220" связано с десятилетием 220-е (id: 5)
      [6, 71, 6],   // "330" связано с десятилетием 330-е (id: 6)
      [7, 72, 7],   // "440" связано с десятилетием 440-е (id: 7)
      [8, 73, 8],   // "550" связано с десятилетием 550-е (id: 8)
      [9, 74, 9],   // "660" связано с десятилетием 660-е (id: 9)
      [10, 75, 10], // "770" связано с десятилетием 770-е (id: 10)
      [11, 76, 11], // "888" связано с десятилетием 880-е (id: 11)
      [12, 77, 12], // "892" связано с десятилетием 890-е (id: 12)
      [13, 78, 13], // "988" связано с десятилетием 980-е (id: 13)
      [14, 79, 14], // "992" связано с десятилетием 990-е (id: 14)
      [15, 80, 15], // "1100" связано с десятилетием 1100-е (id: 15)
      [16, 81, 16], // "1150" связано с десятилетием 1150-е (id: 16)
      [17, 82, 16], // "1159" связано с десятилетием 1150-е (id: 16)
      [18, 83, 17], // "1182" связано с десятилетием 1180-е (id: 17)
      [19, 84, 18], // "1265" связано с десятилетием 1260-е (id: 18)
      [20, 85, 19], // "1350" связано с десятилетием 1350-е (id: 19)
      [21, 86, 20], // "1470" связано с десятилетием 1470-е (id: 20)
      [22, 87, 21], // "1496" связано с десятилетием 1490-е (id: 21)
      [23, 88, 21], // "1498" связано с десятилетием 1490-е (id: 21)
      [24, 89, 21], // "1499" связано с десятилетием 1490-е (id: 21)
      [25, 90, 22], // "1500" связано с десятилетием 1500-е (id: 22)
      [26, 91, 22], // "1502" связано с десятилетием 1500-е (id: 22)
      [27, 92, 23], // "1517" связано с десятилетием 1510-е (id: 23)
      [28, 93, 24], // "1550" связано с десятилетием 1550-е (id: 24)
      [29, 94, 25], // "1660" связано с десятилетием 1660-е (id: 25)
      [30, 95, 26], // "1770" связано с десятилетием 1770-е (id: 26)
      [31, 96, 27], // "1795" связано с десятилетием 1790-е (id: 27)
      [32, 97, 28], // "1812" связано с десятилетием 1810-е (id: 28)
      [33, 98, 29], // "1839" связано с десятилетием 1830-е (id: 29)
      [34, 99, 30], // "1864" связано с десятилетием 1860-е (id: 30)
      [35, 100, 31], // "1939" связано с десятилетием 1930-е (id: 31)
      [36, 101, 32], // "1944" связано с десятилетием 1960-е (id: 32)
      [37, 102, 33], // "2009" связано с десятилетием 2000-е (id: 33)
      [38, 103, 34], // "2010" связано с десятилетием 2010-е (id: 34)
      [39, 104, 35]  // "2020" связано с десятилетием 2020-е (id: 35)
    ],
    books: {
      uniati: path + "src/assets/books/uniati.pdf",
      skaryna: path + "src/assets/books/skaryna.pdf",
      "150BCH": path + "src/assets/books/150BCH.pdf",
      "50BC": path + "src/assets/books/50BC.pdf",
      "1ADH": path + "src/assets/books/1ADH.pdf",
      "110ADH": path + "src/assets/books/110ADH.pdf",
      "220ADH": path + "src/assets/books/220ADH.pdf",
      "330ADH": path + "src/assets/books/330ADH.pdf",
      "440ADH": path + "src/assets/books/440ADH.pdf",
      "550ADH": path + "src/assets/books/550ADH.pdf",
      "660ADH": path + "src/assets/books/660ADH.pdf",
      "770ADH": path + "src/assets/books/770ADH.pdf",
      "888ADH": path + "src/assets/books/888ADH.pdf",
      "892ADH": path + "src/assets/books/892ADH.pdf",
      "988ADH": path + "src/assets/books/988ADH.pdf",
      "992ADH": path + "src/assets/books/992ADH.pdf",
      "1100AD": path + "src/assets/books/1100AD.pdf",
      "1150AD": path + "src/assets/books/1150AD.pdf",
      "1159ADH": path + "src/assets/books/1159ADH.pdf",
      "1182ADH": path + "src/assets/books/1182ADH.pdf",
      "1265ADH": path + "src/assets/books/1265ADH.pdf",
      "1350ADH": path + "src/assets/books/1350ADH.pdf",
      "1470ADH": path + "src/assets/books/1470ADH.pdf",
      "1496ADH": path + "src/assets/books/1496ADH.pdf",
      "1498ADH": path + "src/assets/books/1498ADH.pdf",
      "1499ADH": path + "src/assets/books/1499ADH.pdf",
      "1500ADH": path + "src/assets/books/1500ADH.pdf",
      "1502ADH": path + "src/assets/books/1502ADH.pdf",
      "1517ADH": path + "src/assets/books/1517ADH.pdf",
      "1550ADH": path + "src/assets/books/1550ADH.pdf",
      "1660ADH": path + "src/assets/books/1660ADH.pdf",
      "1770ADH": path + "src/assets/books/1770ADH.pdf",
      "1795ADH": path + "src/assets/books/1795ADH.pdf",
      "1812ADH": path + "src/assets/books/1812ADH.pdf",
      "1839ADH": path + "src/assets/books/1839ADH.pdf",
      "1864ADH": path + "src/assets/books/1864ADH.pdf",
      "1939ADH": path + "src/assets/books/1939ADH.pdf",
      "1944ADH": path + "src/assets/books/1944ADH.pdf",
      "2009AD": path + "src/assets/books/2009AD.pdf",
      "2010AD": path + "src/assets/books/2010AD.pdf",
      "2020AD": path + "src/assets/books/2020AD.pdf"
    },
    events: [
      [1, 105, 106, 107, [path + "src/assets/pictures/timeline/2BC.jpg", path + "src/assets/pictures/timeline/1BC.jpg"], 1, "150BCH"],
      [2, 108, 109, 110, [path + "src/assets/pictures/timeline/1BC.jpg"], 2, "50BC"],
      [3, 111, 112, 113, [path + "src/assets/pictures/timeline/1AD.jpg"], 1, "1ADH"],
      [4, 114, 115, 116, [path + "src/assets/pictures/timeline/110AD.png"], 2, "110ADH"],
      [5, 117, 118, 119, [path + "src/assets/pictures/timeline/220AD.jpg"], 1, "220ADH"],
      [6, 120, 121, 122, [path + "src/assets/pictures/timeline/330AD.jpg"], 2, "330ADH"],
      [7, 123, 124, 125, [path + "src/assets/pictures/timeline/440AD.jpg"], 1, "440ADH"],
      [8, 126, 127, 128, [path + "src/assets/pictures/timeline/550AD.jpg"], 2, "550ADH"],
      [9, 129, 130, 131, [path + "src/assets/pictures/timeline/660AD.jpg"], 1, "660ADH"],
      [10, 132, 133, 134, [path + "src/assets/pictures/timeline/770AD.jpg"], 2, "770ADH"],
      [11, 135, 136, 137, [path + "src/assets/pictures/timeline/888.07.28.jpg"], 2, "888ADH"],
      [12, 138, 139, 140, [path + "src/assets/pictures/timeline/892AD.jpg"], 3, "892ADH"],
      [13, 141, 142, 143, [path + "src/assets/pictures/timeline/baptism.jpg"], 1, "988ADH"],
      [14, 144, 145, 146, [path + "src/assets/pictures/timeline/992AD.jpg"], 2, "992ADH"],
      [15, 147, 148, 149, [path + "src/assets/pictures/timeline/soborpolotsk.jpg"], 1, "1100AD"],
      [16, 150, 151, 152, [path + "src/assets/pictures/timeline/1150.06.01.jpg"], 1, "1150AD"],
      [17, 153, 154, 155, [path + "src/assets/pictures/timeline/1159.05.23.jpg"], 2, "1159ADH"],
      [18, 156, 157, 158, [path + "src/assets/pictures/timeline/1182AD.jpg"], 3, "1182ADH"],
      [19, 159, 160, 161, [path + "src/assets/pictures/timeline/1265AD.png"], 2, "1265ADH"],
      [20, 162, 163, 164, [path + "src/assets/pictures/timeline/1350AD.png"], 1, "1350ADH"],
      [21, 165, 166, 167, [path + "src/assets/pictures/timeline/1470.05.01.jpg"], 1, "1470ADH"],
      [22, 168, 169, 170, [path + "src/assets/pictures/timeline/1496AD.jpg"], 2, "1496ADH"],
      [23, 171, 172, 173, [path + "src/assets/pictures/timeline/1498AD.jpg"], 3, "1498ADH"],
      [24, 174, 175, 176, [path + "src/assets/pictures/timeline/1499AD.jpg"], 4, "1499ADH"],
      [25, 177, 178, 179, [path + "src/assets/pictures/timeline/1500AD.jpg"], 2, "1500ADH"],
      [26, 180, 181, 182, [path + "src/assets/pictures/timeline/1502AD.jpg"], 3, "1502ADH"],
      [27, 183, 184, 185, [path + "src/assets/pictures/timeline/skaryna.jpg"], 1, "1517ADH"],
      [28, 186, 187, 188, [path + "src/assets/pictures/timeline/1550AD.png"], 2, "1550ADH"],
      [29, 189, 190, 191, [path + "src/assets/pictures/timeline/1660AD.jpg"], 1, "1660ADH"],
      [30, 192, 193, 194, [path + "src/assets/pictures/timeline/1770AD.jpg"], 1, "1770ADH"],
      [31, 195, 196, 197, [path + "src/assets/pictures/timeline/1795AD.jpg"], 1, "1795ADH"],
      [32, 198, 199, 200, [path + "src/assets/pictures/timeline/1812AD.jpg"], 2, "1812ADH"],
      [33, 201, 202, 203, [path + "src/assets/pictures/timeline/1839AD.jpg"], 1, "1839ADH"],
      [34, 204, 205, 206, [path + "src/assets/pictures/timeline/1864AD.jpg"], 1, "1864ADH"],
      [35, 207, 208, 209, [path + "src/assets/pictures/timeline/1939AD.jpg"], 1, "1939ADH"],
      [36, 210, 211, 212, [path + "src/assets/pictures/timeline/1944AD.jpg"], 1, "1944ADH"],
      [37, 213, 214, 215, [path + "src/assets/pictures/timeline/2009AD.jpg"], 1, "2009AD"],
      [38, 216, 217, 218, [path + "src/assets/pictures/timeline/2010AD.jpg"], 1, "2010AD"],
      [39, 219, 220, 221, [path + "src/assets/pictures/timeline/2020AD.jpg"], 1, "2020AD"]
    ]
  },
  /**
 * map — объект, представляющий карту с возможностью отображения меток и настроек отображения.
 * Содержит параметры для центрирования карты, зума, меток и управления картой.
 *
 * @property {string} mapCenter - Местоположение центра карты (город Минск).
 * @property {number} mapZoom - Уровень зума карты.
 *
 * @property {Array<Object>} map.poins - Список меток на карте.
 * @property {Array<number>} map.poins[].coordinates - Координаты местоположения метки (широта и долгота).
 * @property {string} map.poins[].name - Название метки (например, "Минск").
 * @property {string} map.poins[].description - Описание метки (например, "Столицу Беларуси").
 *
 * @property {Array<string>} map.controlsToRemove - Список элементов управления карты, которые нужно удалить.
 * @property {string} map.controlsToRemove[] - Название элемента управления, который будет удален (например, 'geolocationControl').
 *
 * @property {Array<string>} map.colors - Список цветов, которые могут быть использованы для обозначения различных объектов или меток на карте.
 * @property {string} map.colors[] - Цвет в формате HEX (например, '#FF0000' для красного).
 */
  map: {
    mapCenter: {
      ru: "Минск",
      en: "Minsk",
      by: "Мінск",
    },
    mapIcons: [
      path + 'src/assets/pictures/mapIcons/church.png',
      path + 'src/assets/pictures/mapIcons/saint.png',
      path + 'src/assets/pictures/mapIcons/monument.png',
    ],
    iconSizes: [
      [30, 42],
      [42, 42],
      [30, 42]
    ],
    mapZoom: 8,
    buttonText: {
      ru: "Закрыть",
      en: "Close",
      by: "Закрыць",
    },
    pointTypeConfig: {
      church: {
        id: 0,
        pointsKey: 'churchPoints',
        categoryKey: 'churchCategories',
        mainTextId: 0, // Индекс для "Церкви" / "Churches"
        categories: [1, 2, 3, 4, 5, 6, 7, 8] // Индексы категорий в textContent
      },
      saints: {
        id: 1,
        pointsKey: 'saintsPoints',
        categoryKey: 'saintsCategories',
        mainTextId: 9, // Индекс для "Личности" / "Persons"
        categories: [10, 11, 12, 13, 14, 15, 16] // Индексы категорий в textContent
      },
      monument: {
        id: 2,
        pointsKey: 'monumentPoints',
        categoryKey: 'monumentCategories',
        mainTextId: 17, // Индекс для "Монументы" / "Monuments"
        categories: [18, 19, 20, 21] // Индексы категорий в textContent
      },
    },
    checkboxTextContent: {
      ru: [
        'Церкви', // 0
        'Действующие', // 1 
        'Недействующие', // 2 
        'Строящиеся', // 3
        'Потерянные', // 4 
        'Исторические', // 5
        'Современные', // 6
        'Запланированные', // 7 
        'Восстановленные', // 8 
        'Личности', // 9
        'Святые', // 10
        'Просветители', // 11 
        'Поэты и писатели', // 12
        'Художники', // 13 
        'Государственные деятели', // 14 
        'Спортсмены', // 15
        'Миротворцы', // 16 
        'Монументы', // 17
        'Военные мемориалы', // 18 
        'Литературные памятники', // 19 
        'Духовные памятники', // 20 
        'Трудовые мемориалы' // 21 
      ],
      en: [
        'Churches', // 0 
        'Active', // 1 
        'Inactive', // 2 
        'Under Construction', // 3
        'Lost', // 4
        'Historical', // 5
        'Modern', // 6
        'Planned', // 7 
        'Restored', // 8
        'Persons', // 9 
        'Saints', // 10 
        'Educators', // 11 -
        'Poets and Writers', // 12 
        'Artists', // 13 
        'Statesmen', // 14 
        'Athletes', // 15 
        'Peacemakers', // 16 
        'Monuments', // 17 -
        'Military Memorials', // 18 
        'Literary Memorials', // 19
        'Spiritual Memorials', // 20
        'Labor Memorials' // 21
      ],
      by: [
        'Цэрквы', // 0
        'Дзеючыя', // 1
        'Недзеючыя', // 2
        'Будаваныя', // 3
        'Страчаныя', // 4
        'Гістарычныя', // 5
        'Сучасныя', // 6
        'Запланаваныя', // 7
        'Аднаўленыя', // 8
        'Асобы', // 9
        'Святыя', // 10
        'Асьветнікі', // 11
        'Паэты і пісьменьнікі', // 12
        'Мастакі', // 13
        'Дзяржаўныя дзеячы', // 14
        'Спартоўцы', // 15
        'Міратворцы', // 16
        'Манументы', // 17
        'Вайсковыя мэмарыялы', // 18
        'Літаратурныя помнікі', // 19
        'Духоўныя помнікі', // 20
        'Працоўныя мэмарыялы' // 21
      ]

    },
    langMap: { "ru": "ru_RU", "en": "en_US", "by": "be_BY" },
    clusterInfo: {
      contentHeader: {
        ru: "Объекты в данной области:",
        en: "Objects in the area",
        by: "Аб'екты ў гэтай галіне:",
      },
      timeOfClosingHint: 300,
    },
    churchCategories: [
      [],     // 0 -Не отображается вовсе
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],     // 1 - Действующие
      [],     // 2 - Недействующие
      [],     // 3 - Строящиеся
      [],     // 4 - Потерянные
      [1, 2, 6, 7, 12],     // 5 - Исторические
      [9, 10, 13, 14],     // 6 - Современные
      [],     // 7 - Запланированные
      [3, 8],     // 8 - Восстановленные
    ],
    saintsCategories: [
      [],     // 0 - Не отображается вовсе
      [1, 9],  // 1 - Святые 
      [2, 3, 4], // 2 - Просветители
      [6, 7, 8, 11, 12, 13, 14], // 3 - Поэты и писатели
      [10],   // 4 - Художники и творцы 
      [5, 15], // 5 - Государственные деятели 
      [],     // 6 - Спортсмены 
      [13],   // 7 - Миротворцы 
    ],
    monumentCategories: [
      [],     // 0 - Не отображается вовсе
      [1, 2, 3, 4, 5, 6, 9, 14], // 1 - Военные мемориалы
      [7, 8, 10, 11],                // 2 - Литературные памятники
      [8, 12, 15],                          // 3 - Духовные памятники
      [2, 13]                                // 4 - Трудовые мемориалы
    ],
    churchPoints: [
      {
        id: 1,
        coordinates: [53.600116, 25.824076], // Церковь Святых Бориса и Глеба, Новогрудок
        name: 0,
        description: 1,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/BorisAndGleb.jpg", path + "src/assets/pictures/churches/SvyatoDyhov.jpg"], alt: 2, style: "image" },
          { type: "text", content: 3, style: "text" },
          { type: "text", content: 4 },
          { type: "text", content: 5 },
          { type: "text", content: 6 }
        ],
        imageInfo: [{ type: "text", content: 7 }],
        century: "XII" // Основана в XII веке
      },
      {
        id: 2,
        coordinates: [53.904989, 27.556297], // Свято-Духов собор, Минск
        name: 8,
        description: 9,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/SvyatoDyhov.jpg"], alt: 10, style: "image" },
          { type: "text", content: 11, style: "text" },
          { type: "text", content: 12 },
          { type: "text", content: 13 }
        ],
        imageInfo: [
          { type: "text", content: 14 },
          { type: "text", content: 15 },
          { type: "text", content: 16 }
        ],
        century: "XVII" // Построен в 1633—1642 годах
      },
      {
        id: 3,
        coordinates: [55.195935, 30.202600], // Свято-Успенский собор, Витебск
        name: 17,
        description: 18,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/SoborYspenia.jpg"], alt: 19, style: "image" },
          { type: "text", content: 20, style: "text" },
          { type: "text", content: 21 },
          { type: "text", content: 22 }
        ],
        imageInfo: [
          { type: "text", content: 23 },
          { type: "text", content: 24 },
          { type: "text", content: 25 }
        ],
        century: "XVIII" // Основан в XVIII веке
      },
      {
        id: 4,
        coordinates: [53.566905, 23.8713905], // Свято-Успенская церковь, Гродно
        name: 26,
        description: 27,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/HramYspenia.jpg"], alt: 28, style: "image" },
          { type: "text", content: 29, style: "text" },
          { type: "text", content: 30 },
          { type: "text", content: 31 }
        ],
        imageInfo: [
          { type: "text", content: 32 },
          { type: "text", content: 33 }
        ],
        century: "XVII" // Построена в XVII веке
      },
      {
        id: 5,
        coordinates: [55.170239, 30.198881], // Церковь Святого Георгия, Витебск
        name: 34,
        description: 35,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/SvyatoGrigorevskiHram.jpg"], alt: 36, style: "image" },
          { type: "text", content: 37, style: "text" },
          { type: "text", content: 38 },
          { type: "text", content: 39 }
        ],
        imageInfo: [
          { type: "text", content: 40 },
          { type: "text", content: 41 }
        ],
        century: "XIX" // Построена в XIX веке
      },
      {
        id: 6,
        coordinates: [53.904697, 27.551689], // Свято-Петропавловская церковь, Минск
        name: 42,
        description: 43,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/PetrAndPavel.jpg"], alt: 44, style: "image" },
          { type: "text", content: 45, style: "text" },
          { type: "text", content: 46 },
          { type: "text", content: 47 }
        ],
        imageInfo: [
          { type: "text", content: 48 },
          { type: "text", content: 49 }
        ],
        century: "XVII" // Построена в 1612 году
      },
      {
        id: 7,
        coordinates: [53.963150, 30.383781], // Церковь Святой Троицы, Могилёв
        name: 50,
        description: 51,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/SvyatoiTroi.jpg"], alt: 52, style: "image" },
          { type: "text", content: 53, style: "text" },
          { type: "text", content: 54 },
          { type: "text", content: 55 }
        ],
        imageInfo: [{ type: "text", content: 56 }],
        century: "XVIII" // Построена в XVIII веке
      },
      {
        id: 8,
        coordinates: [54.245229, 28.504685], // Церковь Святой Варвары, Борисов
        name: 57,
        description: 58,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/SoborVoskresenia.jpg"], alt: 59, style: "image" },
          { type: "text", content: 60, style: "text" },
          { type: "text", content: 61 },
          { type: "text", content: 62 }
        ],
        imageInfo: [
          { type: "text", content: 63 },
          { type: "text", content: 64 }
        ],
        century: "XIX" // Построена в XIX веке
      },
      {
        id: 9,
        coordinates: [53.845195, 27.504815], // Сафиянская церковь, Минск
        name: 65,
        description: 66,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/SofiiSlytskoy.jpg"], alt: 67, style: "image" },
          { type: "text", content: 68, style: "text" },
          { type: "text", content: 69 },
          { type: "text", content: 70 }
        ],
        imageInfo: [
          { type: "text", content: 71 },
          { type: "text", content: 72 },
          { type: "text", content: 73 },
          { type: "text", content: 74 }
        ],
        categories: [1, 6],
        century: "XVII" // Построена в XVII веке
      },
      {
        id: 10,
        coordinates: [53.859663, 27.476770], // Спасо-Преображенская церковь, Минск
        name: 75,
        description: 76,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/PreobrajenieGospodnya.jpg"], alt: 77, style: "image" },
          { type: "text", content: 78, style: "text" }
        ],
        imageInfo: [
          { type: "text", content: 79 },
          { type: "text", content: 80 }
        ],
        century: "XX" // Построена в XX веке
      },
      {
        id: 11,
        coordinates: [55.247780, 30.129540], // Вознесенский собор, Витебск
        name: 81,
        description: 82,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/VozneseniaGospodnya.jpg"], alt: 83, style: "image" },
          { type: "text", content: 84, style: "text" },
          { type: "text", content: 85 }
        ],
        imageInfo: [{ type: "text", content: 86 }],
        century: "XIX" // Построен в XIX веке
      },
      {
        id: 12,
        coordinates: [52.440556, 30.985068], // Свято-Никольская церковь, Гомель
        name: 87,
        description: 88,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/SvyatoiNikolay.jpg"], alt: 89, style: "image" },
          { type: "text", content: 90, style: "text" },
          { type: "text", content: 91 }
        ],
        imageInfo: [
          { type: "text", content: 92 },
          { type: "text", content: 93 }
        ],
        century: "XIX" // Построена в XIX веке
      },
      {
        id: 13,
        coordinates: [53.849509, 27.572835], // Богоявленский собор, Минск
        name: 94,
        description: 95,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/BogoyavleniaGospodnia.jpg"], alt: 96, style: "image" },
          { type: "text", content: 97, style: "text" },
          { type: "text", content: 98 }
        ],
        imageInfo: [
          { type: "text", content: 99 },
          { type: "text", content: 100 }
        ],
        century: "XX" // Построен в XX веке
      },
      {
        id: 14,
        coordinates: [53.741420, 27.696138], // Храм святителя Димитрия Ростовского
        name: 101,
        description: 102,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/DmitriyRostovskiy.jpg"], alt: 103, style: "image" },
          { type: "text", content: 104, style: "text" }
        ],
        imageInfo: [
          { type: "text", content: 105 },
          { type: "text", content: 106 }
        ],
        century: "XX" // Построен в XX веке
      },
      {
        id: 15,
        coordinates: [52.379666, 31.031852], // Церковь святого Александра Невского
        name: 107,
        description: 108,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/AleksandrNevskiy.jpg"], alt: 109, style: "image" },
          { type: "text", content: 110, style: "text" },
          { type: "text", content: 111 },
          { type: "text", content: 112 }
        ],
        imageInfo: [
          { type: "text", content: 113 },
          { type: "text", content: 114 }
        ],
        century: "XIX" // Построена в XIX веке
      }
    ],
    
    saintsPoints: [
      {
        id: 1,
        coordinates: [55.504219, 28.781622], // Полоцк (Евфросиния Полоцкая)
        name: 115,
        description: 116,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/EfrosinyaPolotskaya.jpg"], alt: 117, style: "image" },
          { type: "text", content: 118, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 119 }],
        century: "XII" // Годы жизни: около 1101-1173
      },
      {
        id: 2,
        coordinates: [55.484116, 28.778033], // Минск (Франциск Скорина)
        name: 120,
        description: 121,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/FranciskScorina.jpg"], alt: 122, style: "image" },
          { type: "text", content: 123, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 124 }],
        century: "XV" // Годы жизни: около 1490-1551
      },
      {
        id: 3,
        coordinates: [52.066329, 27.740578], // Туров (Кирилл Туровский)
        name: 125,
        description: 126,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/kirillTyrovskiy.png"], alt: 127, style: "image" },
          { type: "text", content: 128, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 129 }],
        century: "XII" // Годы жизни: около 1130-1182
      },
      {
        id: 4,
        coordinates: [55.485515, 28.773542], // Минск (Симеон Полоцкий)
        name: 130,
        description: 131,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/simeonPolotskiy.png"], alt: 132, style: "image" },
          { type: "text", content: 133, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 134 }],
        century: "XVII" // Годы жизни: 1629-1680
      },
      {
        id: 5,
        coordinates: [52.767407, 25.125582], // Гродно (Тадеуш Костюшко)
        name: 135,
        description: 136,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/tadeysKostysko.jpg"], alt: 137, style: "image" },
          { type: "text", content: 138, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 139 }],
        century: "XVIII" // Годы жизни: 1746-1817
      },
      {
        id: 6,
        coordinates: [53.463905, 26.775721], // Молодечно (Якуб Колас)
        name: 140,
        description: 141,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/yakubKolas.jpg"], alt: 142, style: "image" },
          { type: "text", content: 143, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 144 }],
        century: "XIX" // Годы жизни: 1882-1956
      },
      {
        id: 7,
        coordinates: [54.099149, 27.195013], // Лида (Янка Купала)
        name: 145,
        description: 146,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/yankaKupala.png"], alt: 147, style: "image" },
          { type: "text", content: 148, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 149 }],
        century: "XIX" // Годы жизни: 1882-1942
      },
      {
        id: 8,
        coordinates: [53.910390, 27.559261], // Гомель (Максим Богданович)
        name: 150,
        description: 151,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/maksimBogdanovich.png"], alt: 152, style: "image" },
          { type: "text", content: 153, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 154 }],
        century: "XIX" // Годы жизни: 1891-1917
      },
      {
        id: 9,
        coordinates: [53.026441, 27.553579], // Минск (София Слуцкая)
        name: 155,
        description: 156,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/sofiaySlutskaya.png"], alt: 157, style: "image" },
          { type: "text", content: 158, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 159 }],
        century: "XVI" // Годы жизни: 1585-1612
      },
      {
        id: 10,
        coordinates: [55.196971, 30.191233], // Витебск (Марк Шагал)
        name: 160,
        description: 161,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/markShagal.png"], alt: 162, style: "image" },
          { type: "text", content: 163, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 164 }],
        century: "XIX" // Годы жизни: 1887-1985
      },
      {
        id: 11,
        coordinates: [55.203064, 30.205398], // Борисов (Владимир Короткевич)
        name: 165,
        description: 166,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/vladimirKorotkevich.png"], alt: 167, style: "image" },
          { type: "text", content: 168, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 169 }],
        century: "XX" // Годы жизни: 1930-1984
      },
      {
        id: 12,
        coordinates: [53.900499, 27.549678], // Новогрудок (Адам Мицкевич)
        name: 170,
        description: 171,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/adamMickevich.png"], alt: 172, style: "image" },
          { type: "text", content: 173, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 174 }],
        century: "XVIII" // Годы жизни: 1798-1855
      },
      {
        id: 13,
        coordinates: [53.683628, 23.837256], // Волковыск (Элиза Ожешко)
        name: 175,
        description: 176,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/elizaOzheshko.png"], alt: 177, style: "image" },
          { type: "text", content: 178, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 179 }],
        century: "XIX" // Годы жизни: 1841-1910
      },
      {
        id: 14,
        coordinates: [53.906958, 27.538134], // Солигорск (Василь Быков)
        name: 180,
        description: 181,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/vasilBykov.jpg"], alt: 182, style: "image" },
          { type: "text", content: 183, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 184 }],
        century: "XX" // Годы жизни: 1924-2003
      },
      {
        id: 15,
        coordinates: [53.092741, 25.319364], // Вилейка (Лев Сапега)
        name: 185,
        description: 186,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/levSapega.png"], alt: 187, style: "image" },
          { type: "text", content: 188, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 189 }],
        century: "XVI" // Годы жизни: 1557-1633
      }
    ],
    
    monumentPoints: [
      {
        id: 1,
        coordinates: [53.908676, 27.575086], // Минск (Памятник Победы)
        name: 190,
        description: 191,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/pamyatnikPobedy.png"], alt: 192, style: "image" },
          { type: "text", content: 193, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 194 }],
        century: "XX" // Установлен в 1954 году
      },
      {
        id: 2,
        coordinates: [52.083315, 23.659571], // Брест (Брестская крепость)
        name: 195,
        description: 196,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/brestskayaKrepost.jpg"], alt: 197, style: "image" },
          { type: "text", content: 198, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 199 }],
        century: "XX" // Мемориал открыт в 1971 году
      },
      {
        id: 3,
        coordinates: [53.675826, 23.828946], // Гродно (Памятник воинам-освободителям)
        name: 200,
        description: 201,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/pamiaynikOsvoboditelyam.png"], alt: 202, style: "image" },
          { type: "text", content: 203, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 204 }],
        century: "XX" // Установлен в XX веке
      },
      {
        id: 4,
        coordinates: [55.199480, 30.202968], // Витебск (Памятник героям Отечественной войны 1812 года)
        name: 205,
        description: 206,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/pamiaynikGeroyamVitebsk.png"], alt: 207, style: "image" },
          { type: "text", content: 208, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 209 }],
        century: "XIX" // Установлен в 1812 году
      },
      {
        id: 5,
        coordinates: [52.407001, 30.981583], // Гомель (Памятник воинам-интернационалистам)
        name: 210,
        description: 211,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/pamiaynikVoinamGomel.jpg"], alt: 212, style: "image" },
          { type: "text", content: 213, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 214 }],
        century: "XX" // Установлен в XX веке (после Афганской войны)
      },
      {
        id: 6,
        coordinates: [54.231643, 28.497687], // Борисов (Памятник батарее 1812 года)
        name: 215,
        description: 216,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/pamiaynikBatarei.png"], alt: 217, style: "image" },
          { type: "text", content: 218, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 219 }],
        century: "XIX" // Установлен в XIX веке
      },
      {
        id: 7,
        coordinates: [53.598711, 25.825082], // Новогрудок (Курган Адама Мицкевича)
        name: 220,
        description: 221,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/kyrganMickevicha.png"], alt: 222, style: "image" },
          { type: "text", content: 223, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 224 }],
        century: "XX" // Установлен в XX веке
      },
      {
        id: 8,
        coordinates: [53.887995, 25.302299], // Лида (Памятник Франциску Скорине)
        name: 225,
        description: 226,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/FranciskScorinaLida.png"], alt: 227, style: "image" },
          { type: "text", content: 228, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 229 }],
        century: "XX" // Установлен в XX веке
      },
      {
        id: 9,
        coordinates: [54.302036, 26.836154], // Молодечно (Памятник воинам-освободителям)
        name: 230,
        description: 231,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/pamiaynikVoinamInrenacionalistam.png"], alt: 232, style: "image" },
          { type: "text", content: 233, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 234 }],
        century: "XX" // Установлен в XX веке
      },
      {
        id: 10,
        coordinates: [53.913470, 27.575342], // Минск (Памятник Якубу Коласу)
        name: 235,
        description: 236,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/yakubKolasMinsk.png"], alt: 237, style: "image" },
          { type: "text", content: 238, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 239 }],
        century: "XX" // Установлен в 1972 году
      },
      {
        id: 11,
        coordinates: [53.906628, 27.567059], // Минск (Памятник Янке Купале)
        name: 240,
        description: 241,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/yankaKupalaMInsk.png"], alt: 242, style: "image" },
          { type: "text", content: 243, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 244 }],
        century: "XX" // Установлен в 1972 году
      },
      {
        id: 12,
        coordinates: [55.486810, 28.780333], // Полоцк (Памятник Евфросинии Полоцкой)
        name: 245,
        description: 246,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/EfrosinyaPolotskayaPamiyatnik.png"], alt: 247, style: "image" },
          { type: "text", content: 248, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 249 }],
        century: "XX" // Установлен в XX веке
      },
      {
        id: 13,
        coordinates: [52.783149, 27.547799], // Солигорск (Памятник шахтёрам)
        name: 250,
        description: 251,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/pamiaynikShahteram.png"], alt: 252, style: "image" },
          { type: "text", content: 253, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 254 }],
        century: "XX" // Установлен в XX веке
      },
      {
        id: 14,
        coordinates: [54.488802, 26.917119], // Вилейка (Памятник воинам-освободителям)
        name: 255,
        description: 256,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/pamuatnikVoinamVileyka.png"], alt: 257, style: "image" },
          { type: "text", content: 258, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 259 }],
        century: "XX" // Установлен в XX веке
      },
      {
        id: 15,
        coordinates: [52.072999, 27.722563], // Туров (Памятник Кириллу Туровскому)
        name: 260,
        description: 261,
        elements: [
          { type: "image", content: [path + "src/assets/pictures/churches/kirillTyrovskiyPamyatnik.png"], alt: 262, style: "image" },
          { type: "text", content: 263, style: "text" }
        ],
        imageInfo: [{ type: "text", content: 264 }],
        century: "XX" // Установлен в XX веке
      } 
    ],
    formTextContent: {
      ru: [
        // 0-7: Церковь Святых Бориса и Глеба, Новогрудок
        "Церковь Святых Бориса и Глеба", // 0
        "Одно из старейших культовых сооружений в Беларуси, построенное в XI веке, является символом истории и архитектуры. Это выдающийся памятник древнерусской архитектуры, имеющий не только историческое, но и духовное значение для верующих.", // 1
        "Главная картинка", // 2
        "Церковь Святых Бориса и Глеба в Новогрудке является не только архитектурным памятником, но и культурным наследием, которое пережило множество исторических событий, сохраняя свою уникальность и дух эпохи. Это место привлекает паломников и туристов, желающих прикоснуться к древней культуре и православным традициям.", // 3
        "Дата основания: XII век", // 4
        "Строительство: 1517—1519 годы", // 5
        "Реликвии и святыни: Православная чудотворная икона Божией Матери Новогрудской", // 6
        "Адрес: Новогрудок, Почтовая ул., 10", // 7
        // 8-16: Свято-Духов собор, Минск
        "Минский Свято-Духов кафедральный собор", // 8
        "Главный православный храм Минска, построенный в конце XIX века, с красивой архитектурой и богатыми историческими традициями. Он играет ключевую роль в религиозной жизни города и является символом духовного возрождения Белоруссии.", // 9
        "Главная картинка", // 10
        "Свято-Духов собор в Минске — это великолепное произведение архитектуры, которое сочетает элементы русско-византийского стиля и местные традиции. Его строительство стало важным событием для белорусской православной церкви и символом духовной силы народа. Собор привлекает многочисленных верующих и туристов, которые могут насладиться его величием и духовной атмосферой.", // 11
        "Строительство: 1633—1642 годы", // 12
        "Реликвии и святыни: Минская икона Божией Матери, мощи Софии Слуцкой", // 13
        "Адрес: Минск, ул. Кирилла и Мефодия, 3", // 14
        "Время работы: пн-пт 07:00-20:00", // 15
        "сб-вс 06:00-21:00", // 16
        // 17-25: Свято-Успенский собор, Витебск
        "Кафедральный собор Успения Пресвятой Богородицы", // 17
        "Памятник архитектуры в стиле барокко, построенный в XVIII веке, один из самых величественных храмов Витебска. Собор считается важным центром православной духовности и привлекает многочисленных верующих и туристов.", // 18
        "Главная картинка", // 19
        "Успенский собор в Витебске является не только важной частью культурного наследия города, но и духовным центром, который играет значительную роль в жизни местных жителей. Его архитектура впечатляет своей гармонией и величием, а внутреннее убранство создает особую атмосферу для молитвы и размышлений.", // 20
        "Автор проекта: И. Родько и А. Михайлюков", // 21
        "Реликвии и святыни: Минская икона Божией Матери, мощи Софии Слуцкой", // 22
        "Адрес: Витебск, ул. Комиссара Крылова, 9", // 23
        "Время работы: пн-сб 08:00-19:00", // 24
        "вс 06:00-19:00", // 25
        // 26-33: Свято-Успенская церковь, Гродно
        "Храм Успения Пресвятой Богородицы", // 26
        "Древний храм, основанный в XV веке, с выдающейся архитектурой и исторической значимостью для города Гродно. Церковь сыграла ключевую роль в истории православия на территории Беларуси.", // 27
        "Главная картинка", // 28
        "Храм Успения Пресвятой Богородицы в Гродно является ярким примером средневекового зодчества, с уникальными архитектурными особенностями, которые сохранились до наших дней. Он несет в себе глубокие религиозные и культурные традиции, что делает его важным не только для верующих, но и для всех, кто интересуется историей региона.", // 29
        "Окончание строительства: 1960 год", // 30
        "Материал: кирпич", // 31
        "Адрес: агрогородок Коптёвка, ул. Победы, 46А", // 32
        "Время работы: 09:00-17:00", // 33
        // 34-41: Церковь Святого Георгия, Витебск
        "Свято-Георгиевский храм-памятник", // 34
        "Исторический храм в Витебске, построенный в XVIII веке, обладающий важным культурным и духовным значением. Это один из символов православной веры в регионе, привлекающий тысячи паломников и туристов.", // 35
        "Главная картинка", // 36
        "Церковь Святого Георгия в Витебске — это не только памятник архитектуры, но и важный центр духовной жизни. Внутреннее убранство храма впечатляет своей красотой и благоговейной атмосферой, что делает его одним из самых посещаемых религиозных объектов города.", // 37
        "Годы строительства: 1990-е годы", // 38
        "Автор проекта: Ю. Соколовский и А. Нейман", // 39
        "Адрес: Витебск, ул. Воинов-Интернационалистов, 10", // 40
        "Время работы: вс 09:00-12:00", // 41
        // 42-49: Свято-Петропавловская церковь, Минск
        "Собор Петра и Павла", // 42
        "Один из наиболее известных храмов Минска, возведённый в XIX веке, памятник архитектуры с уникальными особенностями. Церковь является не только объектом культурного наследия, но и важным духовным центром для верующих.", // 43
        "Главная картинка", // 44
        "Собор Петра и Павла в Минске — это яркий пример православной архитектуры XIX века, который привлекает внимание своей уникальной стилистикой и значимостью для истории города. Храм представляет собой важный элемент духовной жизни Минска и является популярным местом для паломников и туристов.", // 45
        "Строительство: 1612-1620-е", // 46
        "Реликвии и святыни: Иконы святых Виленских Мучеников Антония, Иоанна и Евстафия, святителя Феодосия Черниговского с частицей мощей", // 47
        "Адрес: Минск, Раковская ул., 4", // 48
        "Время работы: 08:00-20:00", // 49
        // 50-56: Церковь Святой Троицы, Могилёв
        "Церковь Святой Троицы", // 50
        "Церковь, построенная в стиле барокко, являющаяся значимой архитектурной достопримечательностью города Могилёв. Ее архитектурная уникальность и историческое значение делают ее одним из самых посещаемых объектов в регионе.", // 51
        "Главная картинка", // 52
        "Церковь Святой Троицы в Могилёве является выдающимся примером барочной архитектуры, сочетающей в себе элементы величия и утонченности. Ее посещают не только верующие, но и любители архитектурных памятников, стремящиеся узнать больше о культуре и истории региона.", // 53
        "Дата основания: 1914", // 54
        "Строительство: 1903—1914 годы", // 55
        "Адрес: агрогородок Полыковичи, Центральная ул., 1Д", // 56
        // 57-64: Церковь Святой Варвары, Борисов
        "Кафедральный собор Воскресения Христова", // 57
        "Церковь, построенная в XIX веке, которая является значительным памятником белорусской архитектуры. Это место почитания святынь и сохранения культурных традиций белорусского народа.", // 58
        "Главная картинка", // 59
        "Кафедральный собор Воскресения Христова в Борисове — это великолепный образец архитектуры XIX века, который несет в себе не только эстетическую, но и глубокую духовную ценность для местных жителей. Собор является важным культурным объектом, привлекающим внимание путешественников и туристов.", // 60
        "Дата основания: 1620 год", // 61
        "Строительство: 1871—1874 годы", // 62
        "Адрес: Борисов, ул. Лопатина, 34", // 63
        "Время работы: 10:00-19:00", // 64
        // 65-74: Сафиянская церковь, Минск
        "Церковь Софии Слуцкой", // 65
        "Церковь начала XX века, известная своими архитектурными особенностями, расположенная в центре Минска. Это одно из самых ярких зданий города, которое привлекает внимание своей необычной архитектурой и исторической значимостью.", // 66
        "Главная картинка", // 67
        "Церковь Софии Слуцкой в Минске — это уникальный памятник архитектуры начала XX века, который привлекает внимание своим неповторимым стилем. Она является важной частью культурного и исторического ландшафта города, где на протяжении десятилетий встречаются старые традиции и новая архитектурная эстетика.", // 68
        "Дата основания: 1996 год", // 69
        "Строительство: 2000-2007 годы", // 70
        "Адрес: Минск, ул. Казинца, 108", // 71
        "Время работы: пн-пт 08:30-19:30", // 72
        "сб 08:30-20:30", // 73
        "вс 06:30-18:00", // 74
        // 75-80: Спасо-Преображенская церковь, Минск
        "Церковь Преображения Господня", // 75
        "Один из символов исторической части Минска, построенный в XIX веке, представляющий собой красивый образец архитектуры.", // 76
        "Главная картинка", // 77
        "Церковь Преображения Господня в Минске является важной частью исторической застройки города. Ее архитектура привлекает внимание своим величием и изяществом, а храм играет важную роль в религиозной жизни Минска, принимая прихожан и туристов со всего мира.", // 78
        "Адрес: Минск, просп. Газеты Правда, 31", // 79
        "Время работы: 08:00-20:00", // 80
        // 81-86: Вознесенский собор, Витебск
        "Церковь Вознесения Господня", // 81
        "Церковь, построенная в стиле барокко, является одной из самых красивых в Витебске, украшена уникальными архитектурными элементами.", // 82
        "Главная картинка", // 83
        "Вознесенский собор в Витебске является одним из ярчайших примеров архитектуры барокко в Беларуси. Этот храм не только привлекает своим внешним видом, но и служит важным духовным центром города, собирая верующих на службы и праздники.", // 84
        "Строительство: 1908 год", // 85
        "Адрес: д. Лужесно, ул. Лынькова, 5В", // 86
        // 87-93: Свято-Никольская церковь, Гомель
        "Церковь святого Николая Чудотворца", // 87
        "Историческая церковь Гомеля, построенная в XIX веке, с изысканной архитектурой и высоким культурным значением.", // 88
        "Главная картинка", // 89
        "Церковь святого Николая Чудотворца в Гомеле является не только памятником архитектуры XIX века, но и важным объектом культурного наследия. Этот храм с уникальными элементами декора и украшений продолжает вдохновлять многих верующих и туристов.", // 90
        "Строительство: 1801-1805 годы", // 91
        "Адрес: Гомель, Никольская ул., 4", // 92
        "Время работы: 05:30-21:00", // 93
        // 94-100: Богоявленский собор, Минск
        "Храм Богоявления Господня", // 94
        "Один из самых древних храмов Минска, памятник архитектуры конца XVIII века, важный элемент культурного наследия города.", // 95
        "Главная картинка", // 96
        "Храм Богоявления Господня является важным архитектурным памятником в Минске, который был построен в конце XVIII века. Он не только украшает городской пейзаж, но и является важным религиозным центром для местных жителей и верующих.", // 97
        "Строительство: 1896-1898 годы", // 98
        "Адрес: Минск, ул. Чижевских, 4", // 99
        "Время работы: круглосуточно", // 100
        // 101-106: Храм святителя Димитрия Ростовского
        "Храм святителя Димитрия Ростовского", // 101
        "Церковь, построенная в XIX веке, является важным историческим и архитектурным памятником, примером традиционного православного зодчества.", // 102
        "Главная картинка", // 103
        "Храм святителя Димитрия Ростовского в Минске — это прекрасный пример традиционного православного зодчества XIX века. Его архитектурное оформление и богатая внутренняя отделка делают церковь ценным памятником для истории и культуры города.", // 104
        "Адрес: агрогородок Михановичи, Советская ул., 10", // 105
        "Время работы: 09:00-15:00", // 106
        // 107-114: Церковь святого Александра Невского
        "Церковь святого Александра Невского", // 107
        "Церковь, построенная в XIX веке, имеет богатое историческое значение и является значимым памятником архитектуры, отражающим культуру того времени.", // 108
        "Главная картинка", // 109
        "Церковь святого Александра Невского в Минске — это яркий памятник архитектуры XIX века, который не только является важным местом для верующих, но и привлекает внимание своей архитектурной красотой и историческим значением.", // 110
        "Архитектор: Виктор Струев", // 111
        "Строительство: 1896—1898 годы", // 112
        "Адрес: Гомель, ул. Ильича, 126А", // 113
        "Время работы: 08:00-19:00", // 114
        "Евфросиния Полоцкая", // 115
        "Княжна и просветительница XII века, основательница монастыря в Полоцке. Известна созданием креста, который стал святыней Беларуси.", // 116
        "Портрет Евфросинии", // 117
        "Евфросиния Полоцкая - покровительница образования и духовности, её жизнь служит примером милосердия и преданности вере.", // 118
        "Годы жизни: ок. 1101-1173", // 119
        // 120-124: Франциск Скорина
        "Франциск Скорина", // 120
        "Первый восточнославянский книгопечатник, переводчик Библии на белорусский язык, гуманист эпохи Возрождения.", // 121
        "Портрет Скорины", // 122
        "Скорина заложил основы белорусской письменности и культуры, его труды способствовали распространению знаний.", // 123
        "Годы жизни: ок. 1490-1551", // 124
        // 125-129: Кирилл Туровский
        "Кирилл Туровский", // 125
        "Епископ и богослов XII века, один из первых белорусских писателей, автор знаменитых проповедей и молитв.", // 126
        "Портрет Кирилла", // 127
        "Кирилл Туровский прославился своим красноречием и духовными трудами, которые оказали влияние на развитие православия.", // 128
        "Годы жизни: ок. 1130-1182", // 129
        // 130-134: Симеон Полоцкий
        "Симеон Полоцкий", // 130
        "Просветитель и богослов XVII века, поэт и драматург, сыгравший ключевую роль в развитии культуры.", // 131
        "Портрет Симеона", // 132
        "Симеон Полоцкий способствовал распространению образования и литературы в Восточной Европе.", // 133
        "Годы жизни: 1629-1680", // 134
        // 135-139: Тадеуш Костюшко
        "Тадеуш Костюшко", // 135
        "Национальный герой Беларуси и Польши, руководитель восстания 1794 года за независимость Речи Посполитой.", // 136
        "Портрет Костюшко", // 137
        "Костюшко боролся за свободу и равенство, его идеи вдохновляли поколения.", // 138
        "Годы жизни: 1746-1817", // 139
        // 140-144: Якуб Колас
        "Якуб Колас", // 140
        "Белорусский писатель и поэт, один из основоположников современной белорусской литературы.", // 141
        "Портрет Коласа", // 142
        "Якуб Колас воспевал жизнь простого народа, его произведения стали классикой белорусской культуры.", // 143
        "Годы жизни: 1882-1956", // 144
        // 145-149: Янка Купала
        "Янка Купала", // 145
        "Народный поэт Беларуси, драматург и публицист, символ национального возрождения.", // 146
        "Портрет Купалы", // 147
        "Янка Купала укрепил белорусскую идентичность через свои поэтические и драматические произведения.", // 148
        "Годы жизни: 1882-1942", // 149
        // 150-154: Максим Богданович
        "Максим Богданович", // 150
        "Белорусский поэт, переводчик и критик, представитель символизма в белорусской литературе.", // 151
        "Портрет Богдановича", // 152
        "Богданович оставил яркий след в белорусской поэзии, несмотря на короткую жизнь.", // 153
        "Годы жизни: 1891-1917", // 154
        // 155-159: София Слуцкая
        "София Слуцкая", // 155
        "Праведная княгиня XVI века, известная своим благочестием и защитой православия в Слуцком княжестве.", // 156
        "Портрет Софии", // 157
        "Святая София Слуцкая прославилась благотворительностью и стойкостью в вере.", // 158
        "Годы жизни: 1585-1612", // 159
        // 160-164: Марк Шагал
        "Марк Шагал", // 160
        "Художник XX века, один из самых известных представителей авангарда, родившийся в Витебске.", // 161
        "Портрет Шагала", // 162
        "Шагал прославил Беларусь своими уникальными картинами, вдохновлёнными родным краем.", // 163
        "Годы жизни: 1887-1985", // 164
        // 165-169: Владимир Короткевич
        "Владимир Короткевич", // 165
        "Белорусский писатель, поэт и драматург, автор исторических романов о Беларуси.", // 166
        "Портрет Короткевича", // 167
        "Короткевич возродил интерес к белорусской истории и культуре через свои произведения.", // 168
        "Годы жизни: 1930-1984", // 169
        // 170-174: Адам Мицкевич
        "Адам Мицкевич", // 170
        "Поэт и драматург, один из величайших представителей романтизма, родился в Новогрудке.", // 171
        "Портрет Мицкевича", // 172
        "Мицкевич воспевал красоту белорусской природы и дух свободы в своих произведениях.", // 173
        "Годы жизни: 1798-1855", // 174
        // 175-179: Элиза Ожешко
        "Элиза Ожешко", // 175
        "Писательница и общественный деятель XIX века, борец за права женщин и социальную справедливость.", // 176
        "Портрет Ожешко", // 177
        "Ожешко описывала жизнь белорусского народа, её творчество имеет глубокое социальное значение.", // 178
        "Годы жизни: 1841-1910", // 179
        // 180-184: Василь Быков
        "Василь Быков", // 180
        "Белорусский писатель, автор произведений о Второй мировой войне и человеческой судьбе.", // 181
        "Портрет Быкова", // 182
        "Быков показал трагедию войны и силу духа белорусского народа в своих книгах.", // 183
        "Годы жизни: 1924-2003", // 184
        // 185-189: Лев Сапега
        "Лев Сапега", // 185
        "Канцлер Великого княжества Литовского, инициатор создания Статута 1588 года.", // 186
        "Портрет Сапеги", // 187
        "Сапега укрепил правовую систему и способствовал развитию государственности.", // 188
        "Годы жизни: 1557-1633", // 189
        "Памятник Победы", // 190
        "Обелиск в центре Минска, установленный в честь победы в Великой Отечественной войне, символ стойкости и героизма народа.", // 191
        "Изображение памятника", // 192
        "Памятник Победы на площади Победы в Минске увенчан Вечным огнём и окружён скульптурами, отражающими подвиг солдат и мирных жителей.", // 193
        "Дата установки: 1954 год", // 194
        // 195-199: Брестская крепость
        "Мемориальный комплекс Брестская крепость", // 195
        "Монументальный комплекс, посвящённый героической обороне крепости в 1941 году, символ мужества и сопротивления.", // 196
        "Изображение комплекса", // 197
        "Брестская крепость включает монументы 'Мужество' и 'Жажда', а также сохранившиеся руины, напоминающие о подвиге защитников.", // 198
        "Дата открытия: 1971 год", // 199
        // 200-204: Памятник воинам-освободителям, Гродно
        "Памятник воинам-освободителям", // 200
        "Монумент в Гродно, посвящённый советским солдатам, освободившим город от немецкой оккупации в 1944 году.", // 201
        "Изображение памятника", // 202
        "Памятник представляет собой танк Т-34 на постаменте, символизирующий победу и освобождение.", // 203
        "Дата установки: 1969 год", // 204
        // 205-209: Памятник героям 1812 года, Витебск
        "Памятник героям Отечественной войны 1812 года", // 205
        "Монумент в Витебске, посвящённый победе русских войск над армией Наполеона в 1812 году.", // 206
        "Изображение памятника", // 207
        "Памятник выполнен в виде обелиска с орлом, символизирующим победу и славу.", // 208
        "Дата установки: 1912 год", // 209
        // 210-214: Памятник воинам-интернационалистам, Гомель
        "Памятник воинам-интернационалистам", // 210
        "Монумент в Гомеле, посвящённый белорусским солдатам, погибшим в Афганистане в 1979–1989 годах.", // 211
        "Изображение памятника", // 212
        "Памятник изображает скорбящую мать и воина, символизируя память и утрату.", // 213
        "Дата установки: 1994 год", // 214
        // 215-219: Памятник батарее 1812 года, Борисов
        "Памятник батареи 1812 года", // 215
        "Монумент в Борисове, посвящённый сражению на Березине в 1812 году во время отступления армии Наполеона.", // 216
        "Изображение памятника", // 217
        "Памятник представляет собой пушки на постаменте, увековечивающие героизм русских войск.", // 218
        "Дата установки: 1962 год", // 219
        // 220-224: Курган Адама Мицкевича, Новогрудок
        "Курган Адама Мицкевича", // 220
        "Памятный курган в Новогрудке, созданный в честь поэта Адама Мицкевича, символ его связи с родиной.", // 221
        "Изображение кургана", // 222
        "Курган был насыпан местными жителями в 1920-х годах как дань уважения великому поэту.", // 223
        "Дата создания: 1924–1931 годы", // 224
        // 225-229: Памятник Франциску Скорине, Лида
        "Памятник Франциску Скорине", // 225
        "Скульптура в Лиде, посвящённая первому белорусскому книгопечатнику Франциску Скорине.", // 226
        "Изображение памятника", // 227
        "Памятник изображает Скорину с книгой, символизируя его вклад в развитие культуры.", // 228
        "Дата установки: 1990 год", // 229
        // 230-234: Памятник воинам-освободителям, Молодечно
        "Памятник воинам-освободителям", // 230
        "Монумент в Молодечно, посвящённый советским воинам, освободившим город в 1944 году.", // 231
        "Изображение памятника", // 232
        "Памятник представляет собой фигуру солдата с автоматом, символизирующую победу.", // 233
        "Дата установки: 1984 год", // 234
        // 235-239: Памятник Якубу Коласу, Минск
        "Памятник Якубу Коласу", // 235
        "Скульптура в Минске, посвящённая белорусскому писателю и поэту Якубу Коласу.", // 236
        "Изображение памятника", // 237
        "Памятник изображает Коласа с персонажами его произведений, подчёркивая его вклад в литературу.", // 238
        "Дата установки: 1972 год", // 239
        // 240-244: Памятник Янке Купале, Минск
        "Памятник Янке Купале", // 240
        "Скульптура в Минске, посвящённая народному поэту Беларуси Янке Купале.", // 241
        "Изображение памятника", // 242
        "Памятник представляет Купалу в задумчивой позе, символизируя его поэтическое вдохновение.", // 243
        "Дата установки: 1972 год", // 244
        // 245-249: Памятник Евфросинии Полоцкой, Полоцк
        "Памятник Евфросинии Полоцкой", // 245
        "Скульптура в Полоцке, посвящённая просветительнице Евфросинии Полоцкой.", // 246
        "Изображение памятника", // 247
        "Памятник изображает Евфросинию с крестом, подчёркивая её духовный подвиг.", // 248
        "Дата установки: 2000 год", // 249
        // 250-254: Памятник шахтёрам, Солигорск
        "Памятник шахтёрам", // 250
        "Монумент в Солигорске, посвящённый трудовому подвигу шахтёров калийных рудников.", // 251
        "Изображение памятника", // 252
        "Памятник представляет фигуру шахтёра с инструментами, символизирующую труд и стойкость.", // 253
        "Дата установки: 1979 год", // 254
        // 255-259: Памятник воинам-освободителям, Вилейка
        "Памятник воинам-освободителям", // 255
        "Монумент в Вилейке, посвящённый советским солдатам, освободившим город в 1944 году.", // 256
        "Изображение памятника", // 257
        "Памятник включает обелиск и Вечный огонь, увековечивающие подвиг освободителей.", // 258
        "Дата установки: 1967 год", // 259
        // 260-264: Памятник Кириллу Туровскому, Туров
        "Памятник Кириллу Туровскому", // 260
        "Скульптура в Турове, посвящённая епископу и богослову Кириллу Туровскому.", // 261
        "Изображение памятника", // 262
        "Памятник изображает Кирилла с книгой, подчёркивая его вклад в духовную литературу.", // 263
        "Дата установки: 1995 год", // 264
      ],
      en: [
        // 0-7: Церковь Святых Бориса и Глеба, Новогрудок
        "Church of Saints Boris and Gleb", // 0
        "One of the oldest religious buildings in Belarus, constructed in the 11th century, it symbolizes history and architecture. This outstanding monument of ancient Russian architecture holds not only historical but also spiritual significance for believers.", // 1
        "Main image", // 2
        "The Church of Saints Boris and Gleb in Novogrudok is not only an architectural monument but also a cultural heritage that has endured numerous historical events, preserving its uniqueness and the spirit of its era. It attracts pilgrims and tourists eager to connect with ancient culture and Orthodox traditions.", // 3
        "Date of foundation: 12th century", // 4
        "Construction: 1517–1519", // 5
        "Relics and shrines: Orthodox miraculous icon of the Mother of God of Novogrudok", // 6
        "Address: Novogrudok, Pochtovaya St., 10", // 7
        // 8-16: Свято-Духов собор, Минск
        "Minsk Holy Spirit Cathedral", // 8
        "The main Orthodox church in Minsk, built at the end of the 19th century, featuring beautiful architecture and rich historical traditions. It plays a key role in the city's religious life and symbolizes the spiritual revival of Belarus.", // 9
        "Main image", // 10
        "The Holy Spirit Cathedral in Minsk is a magnificent piece of architecture, blending Russo-Byzantine style with local traditions. Its construction marked a significant event for the Belarusian Orthodox Church and stands as a symbol of the people's spiritual strength. The cathedral attracts numerous believers and tourists who can admire its grandeur and spiritual atmosphere.", // 11
        "Construction: 1633–1642", // 12
        "Relics and shrines: Minsk Icon of the Mother of God, relics of Sophia of Slutsk", // 13
        "Address: Minsk, Kirill and Methodius St., 3", // 14
        "Opening hours: Mon-Fri 07:00-20:00", // 15
        "Sat-Sun 06:00-21:00", // 16
        // 17-25: Свято-Успенский собор, Витебск
        "Cathedral of the Assumption of the Blessed Virgin Mary", // 17
        "A Baroque architectural monument built in the 18th century, one of the most majestic churches in Vitebsk. The cathedral is a significant center of Orthodox spirituality and attracts numerous believers and tourists.", // 18
        "Main image", // 19
        "The Assumption Cathedral in Vitebsk is not only a vital part of the city's cultural heritage but also a spiritual center that plays a significant role in the lives of local residents. Its architecture impresses with harmony and grandeur, while the interior creates a special atmosphere for prayer and reflection.", // 20
        "Architects: I. Rodko and A. Mikhailyukov", // 21
        "Relics and shrines: Minsk Icon of the Mother of God, relics of Sophia of Slutsk", // 22
        "Address: Vitebsk, Commissar Krylov St., 9", // 23
        "Opening hours: Mon-Sat 08:00-19:00", // 24
        "Sun 06:00-19:00", // 25
        // 26-33: Свято-Успенская церковь, Гродно
        "Church of the Assumption of the Blessed Virgin Mary", // 26
        "An ancient church founded in the 15th century, with outstanding architecture and historical significance for Grodno. It played a key role in the history of Orthodoxy in Belarus.", // 27
        "Main image", // 28
        "The Church of the Assumption of the Blessed Virgin Mary in Grodno is a vivid example of medieval architecture, with unique features preserved to this day. It carries deep religious and cultural traditions, making it significant not only for believers but also for those interested in the region's history.", // 29
        "Construction completed: 1960", // 30
        "Material: brick", // 31
        "Address: agro-town Koptevka, Pobedy St., 46A", // 32
        "Opening hours: 09:00-17:00", // 33
        // 34-41: Церковь Святого Георгия, Витебск
        "Saint George Memorial Church", // 34
        "A historic church in Vitebsk, built in the 18th century, with significant cultural and spiritual value. It is one of the symbols of Orthodox faith in the region, attracting thousands of pilgrims and tourists.", // 35
        "Main image", // 36
        "Saint George Church in Vitebsk is not only an architectural monument but also a key center of spiritual life. Its interior impresses with beauty and reverence, making it one of the most visited religious sites in the city.", // 37
        "Construction years: 1990s", // 38
        "Architects: Yu. Sokolovsky and A. Neyman", // 39
        "Address: Vitebsk, Voinov-Internatsionalistov St., 10", // 40
        "Opening hours: Sun 09:00-12:00", // 41
        // 42-49: Свято-Петропавловская церковь, Минск
        "Peter and Paul Cathedral", // 42
        "One of Minsk's most famous churches, built in the 19th century, an architectural monument with unique features. It serves as both a cultural heritage site and a vital spiritual center for believers.", // 43
        "Main image", // 44
        "Peter and Paul Cathedral in Minsk is a striking example of 19th-century Orthodox architecture, captivating with its unique style and historical importance. The church is a crucial part of Minsk's spiritual life and a popular destination for pilgrims and tourists.", // 45
        "Construction: 1612-1620s", // 46
        "Relics and shrines: Icons of the Vilnius Martyrs Anthony, John, and Eustathius; Saint Theodosius of Chernigov with a relic fragment", // 47
        "Address: Minsk, Rakovskaya St., 4", // 48
        "Opening hours: 08:00-20:00", // 49
        // 50-56: Церковь Святой Троицы, Могилёв
        "Holy Trinity Church", // 50
        "A Baroque-style church, a significant architectural landmark in Mogilev. Its architectural uniqueness and historical value make it one of the region's most visited sites.", // 51
        "Main image", // 52
        "Holy Trinity Church in Mogilev is an outstanding example of Baroque architecture, combining grandeur and refinement. It attracts not only believers but also architecture enthusiasts eager to learn more about the region's culture and history.", // 53
        "Date of foundation: 1914", // 54
        "Construction: 1903–1914", // 55
        "Address: agro-town Polykovichi, Tsentralnaya St., 1D", // 56
        // 57-64: Церковь Святой Варвары, Борисов
        "Cathedral of the Resurrection of Christ", // 57
        "A 19th-century church, a significant monument of Belarusian architecture. It is a place of veneration for holy relics and the preservation of Belarusian cultural traditions.", // 58
        "Main image", // 59
        "The Cathedral of the Resurrection of Christ in Borisov is a magnificent example of 19th-century architecture, carrying both aesthetic and profound spiritual value for locals. It is an important cultural site, drawing the attention of travelers and tourists.", // 60
        "Date of foundation: 1620", // 61
        "Construction: 1871–1874", // 62
        "Address: Borisov, Lopatina St., 34", // 63
        "Opening hours: 10:00-19:00", // 64
        // 65-74: Сафиянская церковь, Минск
        "Church of Sophia of Slutsk", // 65
        "An early 20th-century church, renowned for its architectural features, located in central Minsk. It is one of the city's most striking buildings, drawing attention with its unusual architecture and historical significance.", // 66
        "Main image", // 67
        "The Church of Sophia of Slutsk in Minsk is a unique early 20th-century architectural monument, captivating with its distinctive style. It forms a vital part of the city's cultural and historical landscape, blending old traditions with modern architectural aesthetics over decades.", // 68
        "Date of foundation: 1996", // 69
        "Construction: 2000-2007", // 70
        "Address: Minsk, Kazintsa St., 108", // 71
        "Opening hours: Mon-Fri 08:30-19:30", // 72
        "Sat 08:30-20:30", // 73
        "Sun 06:30-18:00", // 74
        // 75-80: Спасо-Преображенская церковь, Минск
        "Church of the Transfiguration of the Lord", // 75
        "A symbol of Minsk's historic district, built in the 19th century, it is a beautiful example of architecture.", // 76
        "Main image", // 77
        "The Church of the Transfiguration of the Lord in Minsk is an essential part of the city's historical fabric. Its architecture captivates with grandeur and elegance, playing a vital role in Minsk's religious life and welcoming parishioners and tourists from around the world.", // 78
        "Address: Minsk, Gazety Pravda Ave., 31", // 79
        "Opening hours: 08:00-20:00", // 80
        // 81-86: Вознесенский собор, Витебск
        "Church of the Ascension of the Lord", // 81
        "A Baroque-style church, one of the most beautiful in Vitebsk, adorned with unique architectural elements.", // 82
        "Main image", // 83
        "The Ascension Cathedral in Vitebsk is one of the finest examples of Baroque architecture in Belarus. It not only captivates with its appearance but also serves as a key spiritual center in the city, gathering believers for services and celebrations.", // 84
        "Construction: 1908", // 85
        "Address: Luzhesno village, Lynkova St., 5V", // 86
        // 87-93: Свято-Никольская церковь, Гомель
        "Church of Saint Nicholas the Wonderworker", // 87
        "A historic church in Gomel, built in the 19th century, with refined architecture and significant cultural value.", // 88
        "Main image", // 89
        "The Church of Saint Nicholas the Wonderworker in Gomel is not only a 19th-century architectural monument but also a vital cultural heritage site. This church, with its unique decorative elements, continues to inspire many believers and tourists.", // 90
        "Construction: 1801-1805", // 91
        "Address: Gomel, Nikolskaya St., 4", // 92
        "Opening hours: 05:30-21:00", // 93
        // 94-100: Богоявленский собор, Минск
        "Church of the Epiphany of the Lord", // 94
        "One of Minsk's oldest churches, a late 18th-century architectural monument and a key element of the city's cultural heritage.", // 95
        "Main image", // 96
        "The Church of the Epiphany of the Lord is a significant architectural monument in Minsk, built at the end of the 18th century. It not only enhances the cityscape but also serves as an important religious center for locals and believers.", // 97
        "Construction: 1896-1898", // 98
        "Address: Minsk, Chizhevskikh St., 4", // 99
        "Opening hours: 24/7", // 100
        // 101-106: Храм святителя Димитрия Ростовского
        "Church of Saint Demetrius of Rostov", // 101
        "A 19th-century church, an important historical and architectural monument exemplifying traditional Orthodox architecture.", // 102
        "Main image", // 103
        "The Church of Saint Demetrius of Rostov in Minsk is a fine example of 19th-century traditional Orthodox architecture. Its design and rich interior make it a valuable monument of the city's history and culture.", // 104
        "Address: agro-town Mikhanovichi, Sovetskaya St., 10", // 105
        "Opening hours: 09:00-15:00", // 106
        // 107-114: Церковь святого Александра Невского
        "Church of Saint Alexander Nevsky", // 107
        "A 19th-century church with rich historical significance, it is a notable architectural monument reflecting the culture of its time.", // 108
        "Main image", // 109
        "The Church of Saint Alexander Nevsky in Minsk is a vivid 19th-century architectural monument, significant for both believers and those drawn to its architectural beauty and historical value.", // 110
        "Architect: Viktor Struyev", // 111
        "Construction: 1896–1898", // 112
        "Address: Gomel, Ilyicha St., 126A", // 113
        "Opening hours: 08:00-19:00", // 114
        "Euphrosyne of Polotsk", // 115
        "A princess and enlightener of the 12th century, founder of a monastery in Polotsk. Known for creating a cross that became a Belarusian relic.", // 116
        "Portrait of Euphrosyne", // 117
        "Euphrosyne of Polotsk is a patroness of education and spirituality; her life is an example of mercy and devotion to faith.", // 118
        "Years of life: ca. 1101-1173", // 119
        // 120-124: Francis Skorina
        "Francis Skorina", // 120
        "The first East Slavic printer, translator of the Bible into Belarusian, and a Renaissance humanist.", // 121
        "Portrait of Skorina", // 122
        "Skorina laid the foundations of Belarusian literacy and culture, his works promoted the spread of knowledge.", // 123
        "Years of life: ca. 1490-1551", // 124
        // 125-129: Cyril of Turov
        "Cyril of Turov", // 125
        "A bishop and theologian of the 12th century, one of the first Belarusian writers, author of renowned sermons and prayers.", // 126
        "Portrait of Cyril", // 127
        "Cyril of Turov became famous for his eloquence and spiritual works that influenced the development of Orthodoxy.", // 128
        "Years of life: ca. 1130-1182", // 129
        // 130-134: Simeon of Polotsk
        "Simeon of Polotsk", // 130
        "An enlightener and theologian of the 17th century, poet and playwright who played a key role in cultural development.", // 131
        "Portrait of Simeon", // 132
        "Simeon of Polotsk contributed to the spread of education and literature in Eastern Europe.", // 133
        "Years of life: 1629-1680", // 134
        // 135-139: Tadeusz Kościuszko
        "Tadeusz Kościuszko", // 135
        "A national hero of Belarus and Poland, leader of the 1794 uprising for the independence of the Polish-Lithuanian Commonwealth.", // 136
        "Portrait of Kościuszko", // 137
        "Kościuszko fought for freedom and equality, his ideas inspired generations.", // 138
        "Years of life: 1746-1817", // 139
        // 140-144: Yakub Kolas
        "Yakub Kolas", // 140
        "A Belarusian writer and poet, one of the founders of modern Belarusian literature.", // 141
        "Portrait of Kolas", // 142
        "Yakub Kolas celebrated the life of ordinary people; his works became classics of Belarusian culture.", // 143
        "Years of life: 1882-1956", // 144
        // 145-149: Yanka Kupala
        "Yanka Kupala", // 145
        "The national poet of Belarus, playwright, and publicist, a symbol of national revival.", // 146
        "Portrait of Kupala", // 147
        "Yanka Kupala strengthened Belarusian identity through his poetic and dramatic works.", // 148
        "Years of life: 1882-1942", // 149
        // 150-154: Maxim Bogdanovich
        "Maxim Bogdanovich", // 150
        "A Belarusian poet, translator, and critic, a representative of symbolism in Belarusian literature.", // 151
        "Portrait of Bogdanovich", // 152
        "Bogdanovich left a vivid mark on Belarusian poetry despite his short life.", // 153
        "Years of life: 1891-1917", // 154
        // 155-159: Sophia of Slutsk
        "Sophia of Slutsk", // 155
        "A righteous princess of the 16th century, known for her piety and defense of Orthodoxy in the Slutsk Principality.", // 156
        "Portrait of Sophia", // 157
        "Saint Sophia of Slutsk became renowned for her charity and steadfastness in faith.", // 158
        "Years of life: 1585-1612", // 159
        // 160-164: Marc Chagall
        "Marc Chagall", // 160
        "A 20th-century artist, one of the most famous avant-garde figures, born in Vitebsk.", // 161
        "Portrait of Chagall", // 162
        "Chagall brought fame to Belarus with his unique paintings inspired by his homeland.", // 163
        "Years of life: 1887-1985", // 164
        // 165-169: Vladimir Korotkevich
        "Vladimir Korotkevich", // 165
        "A Belarusian writer, poet, and playwright, author of historical novels about Belarus.", // 166
        "Portrait of Korotkevich", // 167
        "Korotkevich revived interest in Belarusian history and culture through his works.", // 168
        "Years of life: 1930-1984", // 169
        // 170-174: Adam Mickiewicz
        "Adam Mickiewicz", // 170
        "A poet and playwright, one of the greatest Romantic figures, born in Novogrudok.", // 171
        "Portrait of Mickiewicz", // 172
        "Mickiewicz celebrated the beauty of Belarusian nature and the spirit of freedom in his works.", // 173
        "Years of life: 1798-1855", // 174
        // 175-179: Eliza Orzeszkowa
        "Eliza Orzeszkowa", // 175
        "A 19th-century writer and activist, advocate for women’s rights and social justice.", // 176
        "Portrait of Orzeszkowa", // 177
        "Orzeszkowa depicted the life of the Belarusian people; her work has deep social significance.", // 178
        "Years of life: 1841-1910", // 179
        // 180-184: Vasil Bykov
        "Vasil Bykov", // 180
        "A Belarusian writer, author of works about World War II and human destiny.", // 181
        "Portrait of Bykov", // 182
        "Bykov portrayed the tragedy of war and the resilience of the Belarusian spirit in his books.", // 183
        "Years of life: 1924-2003", // 184
        // 185-189: Lev Sapega
        "Lev Sapega", // 185
        "Chancellor of the Grand Duchy of Lithuania, initiator of the Statute of 1588.", // 186
        "Portrait of Sapega", // 187
        "Sapega strengthened the legal system and contributed to the development of statehood.", // 188
        "Years of life: 1557-1633", // 189
        "Victory Monument", // 190
        "An obelisk in the center of Minsk, erected to honor the victory in the Great Patriotic War, a symbol of resilience and heroism.", // 191
        "Image of the monument", // 192
        "The Victory Monument on Victory Square in Minsk is crowned with an Eternal Flame and surrounded by sculptures reflecting the valor of soldiers and civilians.", // 193
        "Date of installation: 1954", // 194
        // 195-199: Brest Fortress
        "Brest Fortress Memorial Complex", // 195
        "A monumental complex dedicated to the heroic defense of the fortress in 1941, a symbol of courage and resistance.", // 196
        "Image of the complex", // 197
        "The Brest Fortress includes the 'Courage' and 'Thirst' monuments, as well as preserved ruins, commemorating the defenders' feat.", // 198
        "Date of opening: 1971", // 199
        // 200-204: Monument to Liberators, Grodno
        "Monument to Liberators", // 200
        "A monument in Grodno dedicated to Soviet soldiers who liberated the city from German occupation in 1944.", // 201
        "Image of the monument", // 202
        "The monument features a T-34 tank on a pedestal, symbolizing victory and liberation.", // 203
        "Date of installation: 1969", // 204
        // 205-209: Monument to Heroes of 1812, Vitebsk
        "Monument to Heroes of the Patriotic War of 1812", // 205
        "A monument in Vitebsk dedicated to the victory of Russian troops over Napoleon’s army in 1812.", // 206
        "Image of the monument", // 207
        "The monument is an obelisk topped with an eagle, symbolizing victory and glory.", // 208
        "Date of installation: 1912", // 209
        // 210-214: Monument to Internationalist Warriors, Gomel
        "Monument to Internationalist Warriors", // 210
        "A monument in Gomel dedicated to Belarusian soldiers who died in Afghanistan between 1979 and 1989.", // 211
        "Image of the monument", // 212
        "The monument depicts a grieving mother and a soldier, symbolizing memory and loss.", // 213
        "Date of installation: 1994", // 214
        // 215-219: Monument to the Battery of 1812, Borisov
        "Monument to the Battery of 1812", // 215
        "A monument in Borisov dedicated to the battle on the Berezina in 1812 during Napoleon’s retreat.", // 216
        "Image of the monument", // 217
        "The monument features cannons on a pedestal, commemorating the heroism of Russian troops.", // 218
        "Date of installation: 1962", // 219
        // 220-224: Adam Mickiewicz Mound, Novogrudok
        "Adam Mickiewicz Mound", // 220
        "A commemorative mound in Novogrudok created in honor of the poet Adam Mickiewicz, symbolizing his connection to his homeland.", // 221
        "Image of the mound", // 222
        "The mound was built by local residents in the 1920s as a tribute to the great poet.", // 223
        "Date of creation: 1924–1931", // 224
        // 225-229: Monument to Francis Skorina, Lida
        "Monument to Francis Skorina", // 225
        "A sculpture in Lida dedicated to the first Belarusian printer, Francis Skorina.", // 226
        "Image of the monument", // 227
        "The monument depicts Skorina with a book, symbolizing his contribution to culture.", // 228
        "Date of installation: 1990", // 229
        // 230-234: Monument to Liberators, Molodechno
        "Monument to Liberators", // 230
        "A monument in Molodechno dedicated to Soviet soldiers who liberated the city in 1944.", // 231
        "Image of the monument", // 232
        "The monument features a soldier with a machine gun, symbolizing victory.", // 233
        "Date of installation: 1984", // 234
        // 235-239: Monument to Yakub Kolas, Minsk
        "Monument to Yakub Kolas", // 235
        "A sculpture in Minsk dedicated to the Belarusian writer and poet Yakub Kolas.", // 236
        "Image of the monument", // 237
        "The monument depicts Kolas with characters from his works, highlighting his literary contribution.", // 238
        "Date of installation: 1972", // 239
        // 240-244: Monument to Yanka Kupala, Minsk
        "Monument to Yanka Kupala", // 240
        "A sculpture in Minsk dedicated to the national poet of Belarus, Yanka Kupala.", // 241
        "Image of the monument", // 242
        "The monument shows Kupala in a thoughtful pose, symbolizing his poetic inspiration.", // 243
        "Date of installation: 1972", // 244
        // 245-249: Monument to Euphrosyne of Polotsk, Polotsk
        "Monument to Euphrosyne of Polotsk", // 245
        "A sculpture in Polotsk dedicated to the enlightener Euphrosyne of Polotsk.", // 246
        "Image of the monument", // 247
        "The monument depicts Euphrosyne with a cross, emphasizing her spiritual legacy.", // 248
        "Date of installation: 2000", // 249
        // 250-254: Monument to Miners, Soligorsk
        "Monument to Miners", // 250
        "A monument in Soligorsk dedicated to the labor feat of potassium miners.", // 251
        "Image of the monument", // 252
        "The monument features a miner with tools, symbolizing labor and resilience.", // 253
        "Date of installation: 1979", // 254
        // 255-259: Monument to Liberators, Vileyka
        "Monument to Liberators", // 255
        "A monument in Vileyka dedicated to Soviet soldiers who liberated the city in 1944.", // 256
        "Image of the monument", // 257
        "The monument includes an obelisk and an Eternal Flame, honoring the liberators’ feat.", // 258
        "Date of installation: 1967", // 259
        // 260-264: Monument to Cyril of Turov, Turov
        "Monument to Cyril of Turov", // 260
        "A sculpture in Turov dedicated to the bishop and theologian Cyril of Turov.", // 261
        "Image of the monument", // 262
        "The monument depicts Cyril with a book, highlighting his contribution to spiritual literature.", // 263
        "Date of installation: 1995", // 264
      ],
      by: [
        // 0-7: Царква Святых Барысa i Глеба, Навагрудак
        "Царква Святых Барыса і Глеба", // 0
        "Адна з найстарэйшых культавых пабудоў у Беларусі, пабудаваная ў XI стагоддзі, з’яўляецца сімвалам гісторыі і архітэктуры. Гэта выдатны помнік старажытнарускай архітэктуры, які мае не толькі гістарычнае, але і духоўнае значэнне для вернікаў.", // 1
        "Галоўная выява", // 2
        "Царква Святых Барыса і Глеба ў Навагрудку з’яўляецца не толькі архітэктурным помнікам, але і культурнай спадчынай, якая перажыла мноства гістарычных падзей, захоўваючы сваю ўнікальнасць і дух эпохі. Гэта месца прыцягвае паломнікаў і турыстаў, якія жадаюць дакрануцца да старажытнай культуры і праваслаўных традыцый.", // 3
        "Дата заснавання: XII стагоддзе", // 4
        "Будаўніцтва: 1517—1519 гады", // 5
        "Рэліквіі і святыні: Праваслаўная цудатворная ікона Божай Маці Навагрудскай", // 6
        "Адрас: Навагрудак, вул. Паштовая, 10", // 7
        // 8-16: Свята-Духаў сабор, Мінск
        "Мінскі Свята-Духаў кафедральны сабор", // 8
        "Галоўны праваслаўны храм Мінска, пабудаваны ў канцы XIX стагоддзя, з прыгожай архітэктурай і багатымі гістарычнымі традыцыямі. Ён адыгрывае ключавую ролю ў рэлігійным жыцці горада і з’яўляецца сімвалам духоўнага ўсеадраджэння Беларусі.", // 9
        "Галоўная выява", // 10
        "Свята-Духаў сабор у Мінску — гэта цудоўны твор архітэктуры, які спалучае элементы руска-візантыйскага стылю і мясцовыя традыцыі. Яго будаўніцтва стала важнай падзеяй для беларускай праваслаўнай царквы і сімвалам духоўнай моцы народа. Сабор прыцягвае шматлікіх вернікаў і турыстаў, якія могуць атрымаць асалоду ад яго велічы і духоўнай атмасферы.", // 11
        "Будаўніцтва: 1633—1642 гады", // 12
        "Рэліквіі і святыні: Мінская ікона Божай Маці, мошчы Сафіі Слуцкай", // 13
        "Адрас: Мінск, вул. Кірыла і Мефодзія, 3", // 14
        "Час працы: пн-пт 07:00-20:00", // 15
        "сб-нд 06:00-21:00", // 16
        // 17-25: Свята-Успенскі сабор, Віцебск
        "Кафедральны сабор Успення Прасвятой Багародзіцы", // 17
        "Помнік архітэктуры ў стылі барока, пабудаваны ў XVIII стагоддзі, адзін з самых велічных храмаў Віцебска. Сабор лічыцца важным цэнтрам праваслаўнай духоўнасці і прыцягвае шматлікіх вернікаў і турыстаў.", // 18
        "Галоўная выява", // 19
        "Успенскі сабор у Віцебску з’яўляецца не толькі важнай часткай культурнай спадчыны горада, але і духоўным цэнтрам, які адыгрывае значную ролю ў жыцці мясцовых жыхароў. Яго архітэктура ўражвае сваёй гармоніяй і веліччу, а ўнутранае ўбранне стварае асаблівую атмасферу для малітвы і разважанняў.", // 20
        "Аўтар праекта: І. Родзька і А. Міхайлюкаў", // 21
        "Рэліквіі і святыні: Мінская ікона Божай Маці, мошчы Сафіі Слуцкай", // 22
        "Адрас: Віцебск, вул. Камісара Крылава, 9", // 23
        "Час працы: пн-сб 08:00-19:00", // 24
        "нд 06:00-19:00", // 25
        // 26-33: Свята-Успенская царква, Гродна
        "Храм Успення Прасвятой Багародзіцы", // 26
        "Старажытны храм, заснаваны ў XV стагоддзі, з выдатнай архітэктурай і гістарычным значэннем для горада Гродна. Царква адыграла ключавую ролю ў гісторыі праваслаўя на тэрыторыі Беларусі.", // 27
        "Галоўная выява", // 28
        "Храм Успення Прасвятой Багародзіцы ў Гродне з’яўляецца яркім прыкладам сярэдневяковага дойлідства, з унікальнымі архітэктурнымі асаблівасцямі, якія захаваліся да нашых дзён. Ён нясе ў сабе глыбокія рэлігійныя і культурныя традыцыі, што робіць яго важным не толькі для вернікаў, але і для ўсіх, хто цікавіцца гісторыяй рэгіёна.", // 29
        "Скончана будаўніцтва: 1960 год", // 30
        "Матэрыял: цэгла", // 31
        "Адрас: аграгарадок Капцёўка, вул. Перамогі, 46А", // 32
        "Час працы: 09:00-17:00", // 33
        // 34-41: Царква Святога Георгія, Віцебск
        "Свята-Георгіеўскі храм-помнік", // 34
        "Гістарычны храм у Віцебску, пабудаваны ў XVIII стагоддзі, які мае важнае культурнае і духоўнае значэнне. Гэта адзін з сімвалаў праваслаўнай веры ў рэгіёне, які прыцягвае тысячы паломнікаў і турыстаў.", // 35
        "Галоўная выява", // 36
        "Царква Святога Георгія ў Віцебску — гэта не толькі помнік архітэктуры, але і важны цэнтр духоўнага жыцця. Унутранае ўбранне храма ўражвае сваёй прыгажосцю і ўсеабдымнай атмасферай, што робіць яго адным з самых наведвальных рэлігійных аб’ектаў горада.", // 37
        "Гады будаўніцтва: 1990-я гады", // 38
        "Аўтар праекта: Ю. Сакалоўскі і А. Нейман", // 39
        "Адрас: Віцебск, вул. Воінаў-Інтэрнацыяналістаў, 10", // 40
        "Час працы: нд 09:00-12:00", // 41
        // 42-49: Свята-Петрапаўлаўская царква, Мінск
        "Сабор Пятра і Паўла", // 42
        "Адзін з найбольш вядомых храмаў Мінска, узведзены ў XIX стагоддзі, помнік архітэктуры з унікальнымі асаблівасцямі. Царква з’яўляецца не толькі аб’ектам культурнай спадчыны, але і важным духоўным цэнтрам для вернікаў.", // 43
        "Галоўная выява", // 44
        "Сабор Пятра і Паўла ў Мінску — гэта яркі прыклад праваслаўнай архітэктуры XIX стагоддзя, які прыцягвае ўвагу сваёй унікальнай стылістыкай і значнасцю для гісторыі горада. Храм уяўляе сабой важны элемент духоўнага жыцця Мінска і з’яўляецца папулярным месцам для паломнікаў і турыстаў.", // 45
        "Будаўніцтва: 1612-1620-я", // 46
        "Рэліквіі і святыні: Іконы святых Віленскіх Мучанікаў Антонія, Іаана і Еўстафія, святога Феадосія Чарнігаўскага з часціцай мошчаў", // 47
        "Адрас: Мінск, вул. Ракаўская, 4", // 48
        "Час працы: 08:00-20:00", // 49
        // 50-56: Царква Святой Тройцы, Магілёў
        "Царква Святой Тройцы", // 50
        "Царква, пабудаваная ў стылі барока, якая з’яўляецца значнай архітэктурнай славутасцю горада Магілёва. Яе архітэктурная ўнікальнасць і гістарычнае значэнне робяць яе адным з самых наведвальных аб’ектаў у рэгіёне.", // 51
        "Галоўная выява", // 52
        "Царква Святой Тройцы ў Магілёве з’яўляецца выдатным прыкладам барочнай архітэктуры, якая спалучае ў сабе элементы велічы і ўсеабдымнасці. Яе наведваюць не толькі вернікі, але і аматары архітэктурных помнікаў, якія імкнуцца даведацца больш пра культуру і гісторыю рэгіёна.", // 53
        "Дата заснавання: 1914", // 54
        "Будаўніцтва: 1903—1914 гады", // 55
        "Адрас: аграгарадок Палыкавічы, вул. Цэнтральная, 1Д", // 56
        // 57-64: Царква Святой Варвары, Барысаў
        "Кафедральны сабор Уваскрэсення Хрыстова", // 57
        "Царква, пабудаваная ў XIX стагоддзі, якая з’яўляецца значным помнікам беларускай архітэктуры. Гэта месца ўсеашанавання святынь і захавання культурных традыцый беларускага народа.", // 58
        "Галоўная выява", // 59
        "Кафедральны сабор Уваскрэсення Хрыстова ў Барысаве — гэта цудоўны ўзор архітэктуры XIX стагоддзя, які нясе ў сабе не толькі эстэтычную, але і глыбокую духоўную каштоўнасць для мясцовых жыхароў. Сабор з’яўляецца важным культурным аб’ектам, які прыцягвае ўвагу падарожнікаў і турыстаў.", // 60
        "Дата заснавання: 1620 год", // 61
        "Будаўніцтва: 1871—1874 гады", // 62
        "Адрас: Барысаў, вул. Лапаціна, 34", // 63
        "Час працы: 10:00-19:00", // 64
        // 65-74: Сафійская царква, Мінск
        "Царква Сафіі Слуцкай", // 65
        "Царква пачатку XX стагоддзя, вядомая сваімі архітэктурнымі асаблівасцямі, размешчаная ў цэнтры Мінска. Гэта адна з самых яркіх пабудоў горада, якая прыцягвае ўвагу сваёй незвычайнай архітэктурай і гістарычным значэннем.", // 66
        "Галоўная выява", // 67
        "Царква Сафіі Слуцкай у Мінску — гэта ўнікальны помнік архітэктуры пачатку XX стагоддзя, які прыцягвае ўвагу сваім непаўторным стылем. Яна з’яўляецца важнай часткай культурнага і гістарычнага ландшафту горада, дзе на працягу дзесяцігоддзяў сустракаюцца старыя традыцыі і новая архітэктурная эстэтыка.", // 68
        "Дата заснавання: 1996 год", // 69
        "Будаўніцтва: 2000-2007 гады", // 70
        "Адрас: Мінск, вул. Казінца, 108", // 71
        "Час працы: пн-пт 08:30-19:30", // 72
        "сб 08:30-20:30", // 73
        "нд 06:30-18:00", // 74
        // 75-80: Спаса-Праабражэнская царква, Мінск
        "Царква Праабражэння Гасподняга", // 75
        "Адзін з сімвалаў гістарычнай часткі Мінска, пабудаваны ў XIX стагоддзі, які ўяўляе сабой прыгожы ўзор архітэктуры.", // 76
        "Галоўная выява", // 77
        "Царква Праабражэння Гасподняга ў Мінску з’яўляецца важнай часткай гістарычнай забудовы горада. Яе архітэктура прыцягвае ўвагу сваім велічам і ўсеабдымнасцю, а храм адыгрывае важную ролю ў рэлігійным жыцці Мінска, прымаючы прыхаджан і турыстаў з усяго свету.", // 78
        "Адрас: Мінск, прасп. Газеты Праўда, 31", // 79
        "Час працы: 08:00-20:00", // 80
        // 81-86: Усеўсеадскі сабор, Віцебск
        "Царква Усеўсеадсення Гасподняга", // 81
        "Царква, пабудаваная ў стылі барока, з’яўляецца адной з самых прыгожых у Віцебску, упрыгожана ўнікальнымі архітэктурнымі элементамі.", // 82
        "Галоўная выява", // 83
        "Усеўсеадскі сабор у Віцебску з’яўляецца адным з найяркіх прыкладаў архітэктуры барока ў Беларусі. Гэты храм не толькі прыцягвае сваім знешнім выглядам, але і служыць важным духоўным цэнтрам горада, збіраючы вернікаў на службы і святы.", // 84
        "Будаўніцтва: 1908 год", // 85
        "Адрас: в. Лужасна, вул. Лынькова, 5В", // 86
        // 87-93: Свята-Мікольская царква, Гомель
        "Царква святога Мікалая Цудатворца", // 87
        "Гістарычная царква Гомеля, пабудаваная ў XIX стагоддзі, з вытанчанай архітэктурай і высокім культурным значэннем.", // 88
        "Галоўная выява", // 89
        "Царква святога Мікалая Цудатворца ў Гомелі з’яўляецца не толькі помнікам архітэктуры XIX стагоддзя, але і важным аб’ектам культурнай спадчыны. Гэты храм з унікальнымі элементамі дэкору і ўпрыгожванняў працягвае ўсеўсеадушаўляць многіх вернікаў і турыстаў.", // 90
        "Будаўніцтва: 1801-1805 гады", // 91
        "Адрас: Гомель, вул. Мікалаеўская, 4", // 92
        "Час працы: 05:30-21:00", // 93
        // 94-100: Багаяўленскі сабор, Мінск
        "Храм Багаяўлення Гасподняга", // 94
        "Адзін з найстарэйшых храмаў Мінска, помнік архітэктуры канца XVIII стагоддзя, важны элемент культурнай спадчыны горада.", // 95
        "Галоўная выява", // 96
        "Храм Багаяўлення Гасподняга з’яўляецца важным архітэктурным помнікам у Мінску, які быў пабудаваны ў канцы XVIII стагоддзя. Ён не толькі ўсеўсеадушаўляе гарадскі пейзаж, але і з’яўляецца важным рэлігійным цэнтрам для мясцовых жыхароў і вернікаў.", // 97
        "Будаўніцтва: 1896-1898 гады", // 98
        "Адрас: Мінск, вул. Чыжэўскіх, 4", // 99
        "Час працы: кругласутачна", // 100
        // 101-106: Храм святога Дзімітрыя Растоўскага
        "Храм святога Дзімітрыя Растоўскага", // 101
        "Царква, пабудаваная ў XIX стагоддзі, з’яўляецца важным гістарычным і архітэктурным помнікам, прыкладам традыцыйнага праваслаўнага дойлідства.", // 102
        "Галоўная выява", // 103
        "Храм святога Дзімітрыя Растоўскага ў Мінску — гэта цудоўны прыклад традыцыйнага праваслаўнага дойлідства XIX стагоддзя. Яго архітэктурнае ўсеўсеад афармленне і багатая ўнутраная аздабленне робяць царкву каштоўным помнікам для гісторыі і культуры горада.", // 104
        "Адрас: аграгарадок Міханавічы, вул. Савецкая, 10", // 105
        "Час працы: 09:00-15:00", // 106
        // 107-114: Царква святога Аляксандра Неўскага
        "Царква святога Аляксандра Неўскага", // 107
        "Царква, пабудаваная ў XIX стагоддзі, мае багатае гістарычнае значэнне і з’яўляецца значным помнікам архітэктуры, які ўсеўсеадлюстроўвае культуру таго часу.", // 108
        "Галоўная выява", // 109
        "Царква святога Аляксандра Неўскага ў Мінску — гэта яркі помнік архітэктуры XIX стагоддзя, які не толькі з’яўляецца важным месцам для вернікаў, але і прыцягвае ўвагу сваёй архітэктурнай прыгажосцю і гістарычным значэннем.", // 110
        "Архітэктар: Віктар Струеў", // 111
        "Будаўніцтва: 1896—1898 гады", // 112
        "Адрас: Гомель, вул. Ільіча, 126А", // 113
        "Час працы: 08:00-19:00", // 114
        "Еўфрасіння Полацкая", // 115
        "Князёўна і асветніца XII стагоддзя, заснавальніца манастыра ў Полацку. Вядомая стварэннем крыжа, які стаў святыняй Беларусі.", // 116
        "Партрэт Еўфрасінні", // 117
        "Еўфрасіння Полацкая - апякунка адукацыі і духоўнасці, яе жыццё служыць прыкладам міласэрнасці і ўсеадданасці веры.", // 118
        "Гады жыцця: каля 1101-1173", // 119
        // 120-124: Францыск Скарына
        "Францыск Скарына", // 120
        "Першы ўсходнеславянскі кнігадрукар, перакладчык Бібліі на беларускую мову, гуманіст эпохі Адраджэння.", // 121
        "Партрэт Скарыны", // 122
        "Скарына заклаў асновы беларускай пісьменнасці і культуры, яго працы ўсеўсеадспрыялі распаўсюджванню ведаў.", // 123
        "Гады жыцця: каля 1490-1551", // 124
        // 125-129: Кірыл Тураўскі
        "Кірыл Тураўскі", // 125
        "Біскуп і багаслоў XII стагоддзя, адзін з першых беларускіх пісьменнікаў, аўтар вядомых прапаведзяў і малітваў.", // 126
        "Партрэт Кірыла", // 127
        "Кірыл Тураўскі ўсеўсеадславіўся сваім красамоўствам і духоўнымі працамі, якія ўсеўсеададдалі ўсеўсеаддзел на развіццё праваслаўя.", // 128
        "Гады жыцця: каля 1130-1182", // 129
        // 130-134: Сімяон Полацкі
        "Сімяон Полацкі", // 130
        "Асветнік і багаслоў XVII стагоддзя, паэт і драматург, які ўсеўсеадаграў ключавую ролю ў развіцці культуры.", // 131
        "Партрэт Сімяона", // 132
        "Сімяон Полацкі ўсеўсеадспрыяў распаўсюджванню адукацыі і літаратуры ў Усходняй Еўропе.", // 133
        "Гады жыцця: 1629-1680", // 134
        // 135-139: Тадэвуш Касцюшка
        "Тадэвуш Касцюшка", // 135
        "Нацыянальны герой Беларусі і Польшчы, кіраўнік паўстання 1794 года за незалежнасць Рэчы Паспалітай.", // 136
        "Партрэт Касцюшкі", // 137
        "Касцюшка ўсеўсеадбароўся за свабоду і роўнасць, яго ідэі ўсеўсеаднатхнялі пакаленні.", // 138
        "Гады жыцця: 1746-1817", // 139
        // 140-144: Якуб Колас
        "Якуб Колас", // 140
        "Беларускі пісьменнік і паэт, адзін з заснавальнікаў сучаснай беларускай літаратуры.", // 141
        "Партрэт Коласа", // 142
        "Якуб Колас ўсеўсеадаспяваў жыццё простага народа, яго творы сталі класікай беларускай культуры.", // 143
        "Гады жыцця: 1882-1956", // 144
        // 145-149: Янка Купала
        "Янка Купала", // 145
        "Народны паэт Беларусі, драматург і публіцыст, сімвал нацыянальнага ўсеадраджэння.", // 146
        "Партрэт Купалы", // 147
        "Янка Купала ўсеўсеадмацаваў беларускую ідэнтычнасць праз свае паэтычныя і драматычныя творы.", // 148
        "Гады жыцця: 1882-1942", // 149
        // 150-154: Максім Багдановіч
        "Максім Багдановіч", // 150
        "Беларускі паэт, перакладчык і крытык, прадстаўнік сімвалізму ў беларускай літаратуры.", // 151
        "Партрэт Багдановіча", // 152
        "Багдановіч пакінуў яркі след у беларускай паэзіі, нягледзячы на кароткае жыццё.", // 153
        "Гады жыцця: 1891-1917", // 154
        // 155-159: Сафія Слуцкая
        "Сафія Слуцкая", // 155
        "Праведная княгіня XVI стагоддзя, вядомая сваім усеабдымнасцем і абаронай праваслаўя ў Слуцкім княстве.", // 156
        "Партрэт Сафіі", // 157
        "Святая Сафія Слуцкая ўсеўсеадславілася дабрачыннасцю і ўсеабдымнасцю ў веры.", // 158
        "Гады жыцця: 1585-1612", // 159
        // 160-164: Марк Шагал
        "Марк Шагал", // 160
        "Мастацтва XX стагоддзя, адзін з самых вядомых прадстаўнікоў авангарду, нарадзіўся ў Віцебску.", // 161
        "Партрэт Шагала", // 162
        "Шагал ўсеўсеадславіў Беларусь сваімі ўнікальнымі карцінамі, натхнёнымі родным краем.", // 163
        "Гады жыцця: 1887-1985", // 164
        // 165-169: Уладзімір Караткевіч
        "Уладзімір Караткевіч", // 165
        "Беларускі пісьменнік, паэт і драматург, аўтар гістарычных раманаў пра Беларусь.", // 166
        "Партрэт Караткевіча", // 167
        "Караткевіч ўсеадрадзіў цікавасць да беларускай гісторыі і культуры праз свае творы.", // 168
        "Гады жыцця: 1930-1984", // 169
        // 170-174: Адам Міцкевіч
        "Адам Міцкевіч", // 170
        "Паэт і драматург, адзін з найвялікшых прадстаўнікоў рамантызму, нарадзіўся ў Навагрудку.", // 171
        "Партрэт Міцкевіча", // 172
        "Міцкевіч ўсеўсеадаспяваў прыгажосць беларускай прыроды і дух свабоды ў сваіх творах.", // 173
        "Гады жыцця: 1798-1855", // 174
        // 175-179: Эліза Ажэшка
        "Эліза Ажэшка", // 175
        "Пісьменніца і грамадскі дзеяч XIX стагоддзя, борец за правы жанчын і сацыяльную справядлівасць.", // 176
        "Партрэт Ажэшкі", // 177
        "Ажэшка ўсеўсеадапісвала жыццё беларускага народа, яе творчасць мае глыбокае сацыяльнае значэнне.", // 178
        "Гады жыцця: 1841-1910", // 179
        // 180-184: Васіль Быкаў
        "Васіль Быкаў", // 180
        "Беларускі пісьменнік, аўтар твораў пра Другую сусветную вайну і чалавечы лёс.", // 181
        "Партрэт Быкава", // 182
        "Быкаў паказаў трагедыю вайны і сілу духу беларускага народа ў сваіх кнігах.", // 183
        "Гады жыцця: 1924-2003", // 184
        // 185-189: Леў Сапега
        "Леў Сапега", // 185
        "Канцлер Вялікага Княства Літоўскага, ініцыятар стварэння Статута 1588 года.", // 186
        "Партрэт Сапегі", // 187
        "Сапега ўсеўсеадмацаваў прававую сістэму і ўсеўсеадспрыяў развіццю дзяржаўнасці.", // 188
        "Гады жыцця: 1557-1633", // 189
        "Помнік Перамогі", // 190
        "Абеліск у цэнтры Мінска, усталяваны ў гонар перамогі ў Вялікай Айчыннай вайне, сімвал стойкасці і гераізму народа.", // 191
        "Выява помніка", // 192
        "Помнік Перамогі на плошчы Перамогі ў Мінску ўсеўсеадусечан Вечным агнём і ўсеўсеадакружаны скульптурамі, якія ўсеўсеадлюстроўваюць подзвіг салдат і мірных жыхароў.", // 193
        "Дата ўстаноўкі: 1954 год", // 194
        // 195-199: Брэсцкая крэпасць
        "Мемарыяльны комплекс Брэсцкая крэпасць", // 195
        "Манументальны комплекс, прысвечаны гераічнай абароне крэпасці ў 1941 годзе, сімвал мужнасці і супраціву.", // 196
        "Выява комплексу", // 197
        "Брэсцкая крэпасць уключае манументы 'Мужнасць' і 'Жаданне', а таксама захаваныя руіны, якія ўсеўсеаднагадваюць пра подзвіг абаронцаў.", // 198
        "Дата адкрыцця: 1971 год", // 199
        // 200-204: Помнік воінам-вызваліцелям, Гродна
        "Помнік воінам-вызваліцелям", // 200
        "Манумент у Гродне, прысвечаны савецкім салдатам, якія ўсеўсеадвызвалілі горад ад нямецкай акупацыі ў 1944 годзе.", // 201
        "Выява помніка", // 202
        "Помнік усеўсеадусечаны ў выглядзе танка Т-34 на пастаменце, які ўсеўсеадлюструе перамогу і ўсеўсеадвызваленне.", // 203
        "Дата ўстаноўкі: 1969 год", // 204
        // 205-209: Помнік героям 1812 года, Віцебск
        "Помнік героям Айчыннай вайны 1812 года", // 205
        "Манумент у Віцебску, прысвечаны перамозе рускіх войскаў над арміяй Напалеона ў 1812 годзе.", // 206
        "Выява помніка", // 207
        "Помнік выкананы ў выглядзе абеліска з арлом, які ўсеўсеадлюструе перамогу і славу.", // 208
        "Дата ўстаноўкі: 1912 год", // 209
        // 210-214: Помнік воінам-інтэрнацыяналістам, Гомель
        "Помнік воінам-інтэрнацыяналістам", // 210
        "Манумент у Гомелі, прысвечаны беларускім салдатам, якія загінулі ў Афганістане ў 1979–1989 гадах.", // 211
        "Выява помніка", // 212
        "Помнік усеўсеадусечаны ў выглядзе смуткуючай маці і воіна, які ўсеўсеадлюструе памяць і страту.", // 213
        "Дата ўстаноўкі: 1994 год", // 214
        // 215-219: Помнік батарэі 1812 года, Барысаў
        "Помнік батарэі 1812 года", // 215
        "Манумент у Барысаве, прысвечаны бітве на Бярэзіне ў 1812 годзе падчас ўсеўсеадступлення арміі Напалеона.", // 216
        "Выява помніка", // 217
        "Помнік усеўсеадусечаны ў выглядзе гармат на пастаменце, якія ўсеўсеадвекавечваюць гераізм рускіх войскаў.", // 218
        "Дата ўстаноўкі: 1962 год", // 219
        // 220-224: Курган Адама Міцкевіча, Навагрудак
        "Курган Адама Міцкевіча", // 220
        "Памятны курган у Навагрудку, створаны ў гонар паэта Адама Міцкевіча, сімвал яго ўсеўсеадсувязі з радзімай.", // 221
        "Выява кургана", // 222
        "Курган быў насыпаны мясцовымі жыхарамі ў 1920-х гадах як даніна ўсеўсеадпавагі вялікаму паэту.", // 223
        "Дата стварэння: 1924–1931 гады", // 224
        // 225-229: Помнік Францыску Скарыне, Ліда
        "Помнік Францыску Скарыне", // 225
        "Скульптура ў Лідзе, прысвечаная першаму беларускаму кнігадрукару Францыску Скарыне.", // 226
        "Выява помніка", // 227
        "Помнік усеўсеадусечаны ў выглядзе Скарыны з кнігай, які ўсеўсеадлюструе яго ўсеўсеадклад у развіццё культуры.", // 228
        "Дата ўстаноўкі: 1990 год", // 229
        // 230-234: Помнік воінам-вызваліцелям, Маладзечна
        "Помнік воінам-вызваліцелям", // 230
        "Манумент у Маладзечне, прысвечаны савецкім воінам, якія ўсеўсеадвызвалілі горад у 1944 годзе.", // 231
        "Выява помніка", // 232
        "Помнік усеўсеадусечаны ў выглядзе фігуры салдата з аўтаматам, які ўсеўсеадлюструе перамогу.", // 233
        "Дата ўстаноўкі: 1984 год", // 234
        // 235-239: Помнік Якубу Коласу, Мінск
        "Помнік Якубу Коласу", // 235
        "Скульптура ў Мінску, прысвечаная беларускаму пісьменніку і паэту Якубу Коласу.", // 236
        "Выява помніка", // 237
        "Помнік усеўсеадусечаны ў выглядзе Коласа з персанажамі яго твораў, падкрэсліваючы яго ўсеўсеадклад у літаратуру.", // 238
        "Дата ўстаноўкі: 1972 год", // 239
        // 240-244: Помнік Янке Купале, Мінск
        "Помнік Янке Купале", // 240
        "Скульптура ў Мінску, прысвечаная народнаму паэту Беларусі Янке Купале.", // 241
        "Выява помніка", // 242
        "Помнік усеўсеадусечаны ў выглядзе Купалы ў задуменнай позе, які ўсеўсеадлюструе яго паэтычнае натхненне.", // 243
        "Дата ўстаноўкі: 1972 год", // 244
        // 245-249: Помнік Еўфрасінні Полацкай, Полацк
        "Помнік Еўфрасінні Полацкай", // 245
        "Скульптура ў Полацку, прысвечаная асветніцы Еўфрасінні Полацкай.", // 246
        "Выява помніка", // 247
        "Помнік усеўсеадусечаны ў выглядзе Еўфрасінні з крыжам, падкрэсліваючы яе духоўны подзвіг.", // 248
        "Дата ўстаноўкі: 2000 год", // 249
        // 250-254: Помнік шахцёрам, Салігорск
        "Помнік шахцёрам", // 250
        "Манумент у Салігорску, прысвечаны працоўнаму подзвігу шахцёраў калійных руднікаў.", // 251
        "Выява помніка", // 252
        "Помнік усеўсеадусечаны ў выглядзе фігуры шахцёра з інструментамі, які ўсеўсеадлюструе працу і стойкасць.", // 253
        "Дата ўстаноўкі: 1979 год", // 254
        // 255-259: Помнік воінам-вызваліцелям, Вілейка
        "Помнік воінам-вызваліцелям", // 255
        "Манумент у Вілейцы, прысвечаны савецкім салдатам, якія ўсеўсеадвызвалілі горад у 1944 годзе.", // 256
        "Выява помніка", // 257
        "Помнік уключае абеліск і Вечны агонь, якія ўсеўсеадвекавечваюць подзвіг вызваліцеляў.", // 258
        "Дата ўстаноўкі: 1967 год", // 259
        // 260-264: Помнік Кірылу Тураўскаму, Тураў
        "Помнік Кірылу Тураўскаму", // 260
        "Скульптура ў Тураве, прысвечаная біскупу і багаслову Кірылу Тураўскаму.", // 261
        "Выява помніка", // 262
        "Помнік усеўсеадусечаны ў выглядзе Кірыла з кнігай, падкрэсліваючы яго ўсеўсеадклад у духоўную літаратуру.", // 263
        "Дата ўстаноўкі: 1995 год", // 264
      ],
    },
    controlsToRemove: [
      'geolocationControl',
      'searchControl',
      'trafficControl',
      'typeSelector',
      'fullscreenControl',
      'zoomControl',
      'rulerControl'
    ],
    colors: [
      '#FF0000', // Красный
      '#00FF00', // Зеленый
      '#0000FF', // Синий
      '#FFFF00', // Желтый
      '#FF00FF', // Розовый
      '#00FFFF', // Голубой
      '#800000', // Темно-красный
      '#008000', // Темно-зеленый
      '#000080', // Темно-синий
      '#808000', // Оливковый
      '#800080', // Пурпурный
      '#008080', // Бирюзовый
      '#FF6347', // Томатный
      '#ADFF2F', // Лаймовый
      '#FF1493', // Розовый
    ],
    cluster: [
      {
        color: 'Blue', // Blue — Синий
        // Допустимые цвета:
        // 'Red' — Красный
        // 'Green' — Зелёный
        // 'Orange' — Оранжевый
        // 'Violet' — Фиолетовый
        // 'Black' — Чёрный
        // 'Yellow' — Жёлтый
        // 'Pink' — Розовый
        // 'LightBlue' — Светло-синий
        // 'DarkOrange' — Тёмно-оранжевый
        // 'Blue' — Синий


        groupByCoordinates: false, // Можно задать true, если точки с одинаковыми координатами должны объединяться всегда
        clusterDisableClickZoom: false, // Разрешает зум при клике на кластер
        clusterOpenBalloonOnClick: true, // Показывает балун с инфой о точках при клике
      },
    ],
    pointsRegionTexts: {
      ru: [
        "Республика Беларусь", // ID 0
        "Гродненская область", // ID 1
        "Минская область",     // ID 2
        "Витебская область",   // ID 3
        "Могилёвская область", // ID 4
        "Гомельская область",  // ID 5
        "Новогрудок",          // ID 6
        "Минск",               // ID 7
        "Витебск",             // ID 8
        "Гродно",              // ID 9
        "Могилёв",             // ID 10
        "Борисов",             // ID 11
        "Гомель",              // ID 12
        "Полоцк",              // ID 13
        "Лида",                // ID 14
        "Молодечно",           // ID 15
        "Солигорск",           // ID 16
        "Вилейка",             // ID 17
        "Туров",               // ID 18
        "Слуцк",               // ID 19
        "д. Вязынка",          // ID 20
        "Столбцы",             // ID 21
        "Слоним",              // ID 22
        "Брестская область",   // ID 23
        "Коссово",             // ID 24
        "Брест",               // ID 25
      ],
      en: [
        "Republic of Belarus", // ID 0
        "Grodno Region",       // ID 1
        "Minsk Region",        // ID 2
        "Vitebsk Region",      // ID 3
        "Mogilev Region",      // ID 4
        "Gomel Region",        // ID 5
        "Novogrudok",          // ID 6
        "Minsk",               // ID 7
        "Vitebsk",             // ID 8
        "Grodno",              // ID 9
        "Mogilev",             // ID 10
        "Borisov",             // ID 11
        "Gomel",               // ID 12
        "Polotsk",             // ID 13
        "Lida",                // ID 14
        "Molodechno",          // ID 15
        "Soligorsk",           // ID 16
        "Vileyka",             // ID 17
        "Turov",               // ID 18
        "Slutsk",              // ID 19
        "v. Vyazynka",         // ID 20
        "Stolbtsy",            // ID 21
        "Slonim",              // ID 22
        "Brest Region",        // ID 23
        "Kossovo",             // ID 24
        "Brest",               // ID 25
      ],
      by: [
        "Рэспубліка Беларусь", // ID 0
        "Гродзенская вобласць", // ID 1
        "Мінская вобласць",    // ID 2
        "Віцебская вобласць",  // ID 3
        "Магілёўская вобласць", // ID 4
        "Гомельская вобласць", // ID 5
        "Навагрудак",          // ID 6
        "Мінск",               // ID 7
        "Віцебск",             // ID 8
        "Гродна",              // ID 9
        "Магілёў",             // ID 10
        "Барысаў",             // ID 11
        "Гомель",              // ID 12
        "Полацк",              // ID 13
        "Ліда",                // ID 14
        "Маладзечна",          // ID 15
        "Салігорск",           // ID 16
        "Вілейка",             // ID 17
        "Тураў",               // ID 18
        "Слуцк",               // ID 19
        "в. Вязынка",          // ID 20
        "Стоўбцы",             // ID 21
        "Слонім",              // ID 22
        "Брэсцкая вобласць",   // ID 23
        "Коссава",             // ID 24
        "Брэст",               // ID 25
      ],
      regionCoordinates: [
        [53.7098, 27.9534],  // ID 0 - Республика Беларусь
        [53.6694, 23.8131],  // ID 1 - Гродненская область (Гродно как центр)
        [53.9006, 27.5590],  // ID 2 - Минская область (Минск как центр)
        [55.1904, 30.2049],  // ID 3 - Витебская область (Витебск как центр)
        [53.8945, 30.3306],  // ID 4 - Могилёвская область (Могилёв как центр)
        [52.4412, 31.0000],  // ID 5 - Гомельская область (Гомель как центр)
        [53.600116, 25.824076], // ID 6 - Новогрудок (церковь Бориса и Глеба)
        [53.904989, 27.556297], // ID 7 - Минск (Свято-Духов собор)
        [55.195935, 30.202600], // ID 8 - Витебск (Свято-Успенский собор)
        [53.675826, 23.828946], // ID 9 - Гродно (памятник воинам-освободителям)
        [53.963150, 30.383781], // ID 10 - Могилёв (церковь Святой Троицы)
        [54.245229, 28.504685], // ID 11 - Борисов (церковь Святой Варвары)
        [52.440556, 30.985068], // ID 12 - Гомель (Свято-Никольская церковь)
        [55.486810, 28.780333], // ID 13 - Полоцк (памятник Евфросинии Полоцкой)
        [53.887995, 25.302299], // ID 14 - Лида (памятник Франциску Скорине)
        [54.302036, 26.836154], // ID 15 - Молодечно (памятник воинам-освободителям)
        [52.783149, 27.547799], // ID 16 - Солигорск (памятник шахтёрам)
        [54.488802, 26.917119], // ID 17 - Вилейка (памятник воинам-освободителям)
        [52.072999, 27.722563], // ID 18 - Туров (памятник Кириллу Туровскому)
        [53.026441, 27.553579], // ID 19 - Слуцк (София Слуцкая)
        [54.099149, 27.195013], // ID 20 - д. Вязынка (Янка Купала)
        [53.463905, 26.775721], // ID 21 - Столбцы (Якуб Колас)
        [53.092741, 25.319364], // ID 22 - Слоним (Лев Сапега)
        [52.1346, 23.9113],   // ID 23 - Брестская область (примерный центр)
        [52.767407, 25.125582], // ID 24 - Коссово (Тадеуш Костюшко)
        [52.083315, 23.659571]  // ID 25 - Брест (Брестская крепость)
      ],
      regionZoomLevels: [
        [5, [0]], // Зум 5 для страны (Республика Беларусь)
        [8, [1, 2, 3, 4, 5, 23]], // Зум 8 для областей
        [10, [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25]], // Зум 10 для городов и точек
        [14, []], // Зум 14 для точек
      ]
    },
    regionLinks: [
      [0, -1],  // 0 - Республика Беларусь → корень
      [1, 0],   // 1 - Гродненская область → Республика Беларусь
      [2, 0],   // 2 - Минская область → Республика Беларусь
      [3, 0],   // 3 - Витебская область → Республика Беларусь
      [4, 0],   // 4 - Могилёвская область → Республика Беларусь
      [5, 0],   // 5 - Гомельская область → Республика Беларусь
      [6, 1],   // 6 - Новогрудок → Гродненская область
      [7, 2],   // 7 - Минск → Минская область
      [8, 3],   // 8 - Витебск → Витебская область
      [9, 1],   // 9 - Гродно → Гродненская область
      [10, 4],  // 10 - Могилёв → Могилёвская область
      [11, 2],  // 11 - Борисов → Минская область
      [12, 5],  // 12 - Гомель → Гомельская область
      [13, 3],  // 13 - Полоцк → Витебская область
      [14, 1],  // 14 - Лида → Гродненская область
      [15, 2],  // 15 - Молодечно → Минская область
      [16, 2],  // 16 - Солигорск → Минская область
      [17, 2],  // 17 - Вилейка → Минская область
      [18, 5],  // 18 - Туров → Гомельская область
      [19, 2],   // 19 - Слуцк → Минская область
      [20, 2],   // 20 - Вязынка → Минская область
      [21, 2],   // 21 - Столбцы → Минская область
      [22, 1],   // 22 - Столбцы → Минская область
      [23, 0],   // 23 - Бресткая область → Республика Беларусь
      [24, 23],   // 24 - Коссово → Бресткая область
      [25, 23],   // 25 - Брест → Бресткая область
    ],
    pointsLocationLink: [
      // churchPoints
      [0, 1, 6],   // Церковь Святых Бориса и Глеба → Новогрудок
      [0, 2, 7],   // Свято-Духов собор → Минск
      [0, 3, 8],   // Свято-Успенский собор → Витебск
      [0, 4, 9],   // Свято-Успенская церковь → Гродно
      [0, 5, 8],   // Церковь Святого Георгия → Витебск
      [0, 6, 7],   // Свято-Петропавловская церковь → Минск
      [0, 7, 10],  // Церковь Святой Троицы → Могилёв
      [0, 8, 11],  // Кафедральный собор Воскресения Христова → Борисов
      [0, 9, 7],   // Церковь Софии Слуцкой → Минск
      [0, 10, 7],  // Спасо-Преображенская церковь → Минск
      [0, 11, 8],  // Вознесенский собор → Витебск
      [0, 12, 12], // Свято-Никольская церковь → Гомель
      [0, 13, 7],  // Богоявленский собор → Минск
      [0, 14, 2],  // Храм святителя Димитрия Ростовского → Минская область
      [0, 15, 12], // Церковь святого Александра Невского → Гомель

      // saintsPoints
      [1, 1, 13],  // Евфросиния Полоцкая → Полоцк
      [1, 2, 13],   // Франциск Скорина → Минск
      [1, 3, 18],  // Кирилл Туровский → Туров
      [1, 4, 13],   // Симеон Полоцкий → Минск
      [1, 5, 24],   // Тадеуш Костюшко → Гродно
      [1, 6, 21],  // Якуб Колас → Молодечно
      [1, 7, 20],  // Янка Купала → вязынка
      [1, 8, 7],  // Максим Богданович → Гомель
      [1, 9, 19],   // София Слуцкая → Минск
      [1, 10, 8],  // Марк Шагал → Витебск
      [1, 11, 8], // Владимир Короткевич → Борисов
      [1, 12, 7],  // Адам Мицкевич → Новогрудок
      [1, 13, 9],  // Элиза Ожешко → Гродненская область
      [1, 14, 7], // Василь Быков → Солигорск
      [1, 15, 22], // Лев Сапега → Вилейка

      // monumentPoints
      [2, 1, 7],   // Памятник Победы → Минск
      [2, 2, 25],   // Брестская крепость → Бресткая область
      [2, 3, 9],   // Памятник воинам-освободителям → Гродно
      [2, 4, 8],   // Памятник героям 1812 года → Витебск
      [2, 5, 12],  // Памятник воинам-интернационалистам → Гомель
      [2, 6, 11],  // Памятник батарее 1812 года → Борисов
      [2, 7, 6],   // Курган Адама Мицкевича → Новогрудок
      [2, 8, 14],  // Памятник Франциску Скорине → Лида
      [2, 9, 15],  // Памятник воинам-освободителям → Молодечно
      [2, 10, 7],  // Памятник Якубу Коласу → Минск
      [2, 11, 7],  // Памятник Янке Купале → Минск
      [2, 12, 13], // Памятник Евфросинии Полоцкой → Полоцк
      [2, 13, 16], // Памятник шахтёрам → Солигорск
      [2, 14, 17], // Памятник воинам-освободителям → Вилейка
      [2, 15, 18]  // Памятник Кириллу Туровскому → Туров
    ],
    regionPathJoinSymbol: " / ",
    regionPathHeader: {
      ru: "Местоположение объекта: ",
      en: "Object Location: ",
      by: "Месцазнаходжанне аб'екта: ",
    },
    regionPathNoRegionText: {
      ru: "Наведитесь на объект",
      en: "Hover over an object",
      by: "Навядзіце на аб'ект"
    },

  },

  booksData: {
    textData: {
      ru: [
        "Крест Евфросинии Полоцкой", "Коллектив авторов Белорусского Экзархата", "Книга о жизни и духовном подвиге преподобной Евфросинии Полоцкой, одной из самых почитаемых белорусских святых, и о созданном по её заказу кресте — символе белорусской православной веры.", "XII",
        "Жития белорусских святых", "Составители Белорусской Православной Церкви", "Сборник житий православных святых Беларуси, включая святителя Георгия (Конисского), праведную Софию Слуцкую, Иоанна Кормянского и других.", "XXI",
        "Детям о добре", "Коллектив авторов Белорусского Экзархата", "Серия православных книг для детей, посвящённая темам семьи, дружбы и христианских добродетелей.", "XXI",
        "На пути к Богу", "Протоиерей Владимир Башкиров", "Книга в форме бесед о православных праздниках, их истории и значении для современного человека.", "XXI",
        "Православные молитвословы", "Переводчики Белорусской Православной Церкви", "Сборники молитв, адаптированные или переведённые на белорусский язык, чтобы приблизить православную традицию к национальной культуре.", "XXI",
        "1168 вопросов и ответов о православной вере", "Священномученик епископ Горазд (Павлик)", "Книга, посвящённая основам православия, с ответами на распространённые вопросы верующих.", "XX",
        "Светлая Пасха", "Коллектив авторов Белорусской Православной Церкви", "Книга о сути праздника Пасхи, включающая пасхальные молитвы и рецепты традиционных белорусских блюд.", "XXI",
        "История Православия в Беларуси", "Александр Бендин", "Исторический очерк о развитии православия на белорусских землях, от Полоцкой епархии (992 год) до современности.", "XXI",
        "Автор книги",
        "Читать книгу"
      ],
      en: [
        "Euphrosyne of Polotsk", "Belarusian Exarchate Authors", "A book about the life and spiritual feats of Saint Euphrosyne of Polotsk, one of the most revered Belarusian saints, and the cross she commissioned — a symbol of Belarusian Orthodox faith.", "XII",
        "Lives of Belarusian Saints", "Compilers of the Belarusian Orthodox Church", "A collection of the lives of Orthodox saints of Belarus, including Saint George (Konissky), Righteous Sophia of Slutsk, John of Korma, and others.", "XXI",
        "To Children About Kindness", "Belarusian Exarchate Authors", "A series of Orthodox books for children dedicated to the themes of family, friendship, and Christian virtues.", "XXI",
        "On the Path to God", "Archpriest Vladimir Bashkirov", "A book in the form of conversations about Orthodox holidays, their history, and significance for modern people.", "XXI",
        "Orthodox Prayer Books", "Translators of the Belarusian Orthodox Church", "Collections of prayers adapted or translated into Belarusian to bring the Orthodox tradition closer to national culture.", "XXI",
        "1168 Questions and Answers About the Orthodox Faith", "Holy Martyr Bishop Gorazd (Pavlik)", "A book dedicated to the basics of Orthodoxy, with answers to common questions of the faithful.", "XX",
        "Bright Easter", "Belarusian Orthodox Church Authors", "A book about the essence of Easter, including Easter prayers and recipes for traditional Belarusian dishes.", "XXI",
        "History of Orthodoxy in Belarus", "Alexander Bendin", "A historical essay on the development of Orthodoxy in Belarusian lands, from the Polotsk Diocese (992) to the present day.", "XXI",
        "Author of a book",
        "Read a book"
      ],
      by: [
        "Крыж Еўфрасінні Полацкай", "Калектыў аўтараў Беларускага Экзархата", "Кніга пра жыццё і духоўны подзвіг прэпадобнай Еўфрасінні Полацкай, адной з самых шанаваных беларускіх святых, і пра крыж, створаны па яе заказе — сімвал беларускай праваслаўнай веры.", "XII",
        "Жыціі беларускіх святых", "Складальнікі Беларускай Праваслаўнай Царквы", "Зборнік жыціяў праваслаўных святых Беларусі, уключаючы свяціцеля Георгія (Каніскага), праведную Сафію Слуцкую, Іаана Кармянскага і іншых.", "XXI",
        "Дзецям пра дабро", "Калектыў аўтараў Беларускага Экзархата", "Серыя праваслаўных кніг для дзяцей, прысвечаная тэмам сям’і, дружбы і хрысціянскіх цнотаў.", "XXI",
        "На шляху да Бога", "Протаіерэй Уладзімір Башкіраў", "Кніга ў форме гутарок пра праваслаўныя святы, іх гісторыю і значэнне для сучаснага чалавека.", "XXI",
        "Праваслаўныя малітоўнікі", "Перакладчыкі Беларускай Праваслаўнай Царквы", "Зборнікі малітваў, адаптаваныя ці перакладзеныя на беларускую мову, каб наблізіць праваслаўную традыцыю да нацыянальнай культуры.", "XXI",
        "1168 пытанняў і адказаў пра праваслаўную веру", "Свяшчэннамучанік біскуп Горазд (Паўлік)", "Кніга, прысвечаная асновам праваслаўя, з адказамі на распаўсюджаныя пытанні вернікаў.", "XX",
        "Светлая Вялікдзень", "Калектыў аўтараў Беларускай Праваслаўнай Царквы", "Кніга пра сутнасць свята Вялікдня, якая ўключае вялікодныя малітвы і рэцэпты традыцыйных беларускіх страў.", "XXI",
        "Гісторыя Праваслаўя ў Беларусі", "Аляксандр Бендзін", "Гістарычны нарыс пра развіццё праваслаўя на беларускіх землях, ад Полацкай епархіі (992 год) да сучаснасці.", "XXI",
        "Аўтар кнігі",
        "Чытаць кнігу"
      ]
    },
    content: {
      images: [
        path + "src/assets/pictures/books/b1.png",
        path + "src/assets/pictures/books/b2.jpg",
        path + "src/assets/pictures/books/b3.jpg",
        path + "src/assets/pictures/books/b4.jpg",
        path + "src/assets/pictures/books/b5.jpg",
        path + "src/assets/pictures/books/b6.jpg",
        path + "src/assets/pictures/books/b7.jpg",
        path + "src/assets/pictures/books/b8.jpg",
      ],
      ru: [
        path + "src/assets/books/book1.pdf",
        path + "src/assets/books/book2.pdf",
        "",
        path + "src/assets/books/book4.pdf",
        path + "src/assets/books/book5.pdf",
        "",
        "",
        "",
      ],
      en: [
        path + "src/assets/books/book1.pdf",
        path + "src/assets/books/book2.pdf",
        "",
        path + "src/assets/books/book4.pdf",
        path + "src/assets/books/book5.pdf",
        "",
        "",
        "",
      ],
      by: [
        path + "src/assets/books/book1.pdf",
        path + "src/assets/books/book2.pdf",
        "",
        path + "src/assets/books/book4.pdf",
        path + "src/assets/books/book5.pdf",
        "",
        "",
        "",
      ],
    },
  },

  calendarData: {
    textData: {
      ru: [
        "2025-03-06",
        "Четверг",
        "Преподобный Тимофей Олимпийский",
        "Святитель Евстафий Антиохийский",
        "Постный день",
        "2025-03-07",
        "Пятница",
        "Священномученик Поликарп Смирнский",
        "Преподобный Александр Константинопольский",
        "Постный день",
        "2025-03-08",
        "Суббота",
        "Священномученик Поликарп Смирнский",
        "Преподобный Александр Константинопольский",
        "Постный день",
        "← Предыдущий",
        "Следующий →"
      ],
      en: [
        "2025-03-06",
        "Thursday",
        "Venerable Timothy of Olympia",
        "Saint Eustathius of Antioch",
        "Fasting day",
        "2025-03-07",
        "Friday",
        "Hieromartyr Polycarp of Smyrna",
        "Venerable Alexander of Constantinople",
        "Fasting day",
        "2025-03-08",
        "Saturday",
        "Hieromartyr Polycarp of Smyrna",
        "Venerable Alexander of Constantinople",
        "Fasting day",
        "← Previous",
        "Next →"
      ],
      by: [
        "2025-03-06",
        "Чацверг",
        "Прападобны Цімафей Алімпійскі",
        "Святы Еўстафій Антыяхійскі",
        "Посны дзень",
        "2025-03-07",
        "Пятніца",
        "Свяшчэннамучанік Палікарп Смірнскі",
        "Прападобны Аляксандр Канстанцінопальскі",
        "Посны дзень",
        "2025-03-08",
        "Субота",
        "Свяшчэннамучанік Палікарп Смірнскі",
        "Прападобны Аляксандр Канстанцінопальскі",
        "Посны дзень",
        "← Папярэдні",
        "Наступны →"
      ]
    },
    events: [
      { image: path + "src/assets/pictures/calendar/i1.png" },
      { image: path + "src/assets/pictures/calendar/i2.jpg" },
      { image: path + "src/assets/pictures/calendar/i3.jpg" }
    ]
  },

  /**
 * countriesForm — объект, содержащий настройки формы для отображения стран.
 * Содержит следующие поля:
 *
 * closeText (string) — Текст для кнопки закрытия формы.
 * maxScale (number) — Максимальный масштаб отображения (например, для карты или изображения).
 */
  countriesForm: {
    closeText: 'Х',     // Текст, отображаемый на кнопке закрытия формы
    maxScale: 5,        // Максимальное значение масштаба для формы
  },

  /**
   * form — объект, содержащий данные о сервисах, тестировании и готовых решениях.
   * Включает в себя три ключевых секции: servicesData, testingData и solutionsData.
   *
   * @property {Object} servicesData - Данные о предоставляемых услугах.
   * @property {string} servicesData.mainTitle - Основной заголовок раздела.
   * @property {string} servicesData.title - Заголовок списка услуг.
   * @property {Array<string|Object>} servicesData.items - Список услуг, включая вложенные подкатегории.
   *
   * @property {Object} testingData - Данные о тестировании программного обеспечения.
   * @property {string} testingData.title - Заголовок раздела.
   * @property {Array<string>} testingData.paragraphs - Описание процесса тестирования.
   * @property {Array<string>} testingData.services - Перечень услуг по тестированию.
   * @property {string} testingData.conclusion - Заключительное описание значимости тестирования.
   *
   * @property {Object} solutionsData - Информация о готовых решениях.
   * @property {string} solutionsData.title - Заголовок раздела.
   * @property {Array<string>} solutionsData.paragraphs - Описание различных программных решений и технологий.
   */
  form: {
    formSource: {
      navigationSource: "navigation",
      newsSource: "news",
      announcementSource: "announcement",
      searchSource: "search"
    },
    defaultTitle: {
      ru: "Информация отсутсвует",
      by: "Інфармацыя адсутнічае",
      en: "No information available"
    },
    data: {
      navigation: [
        { id: "1", title: 0, elements: [{ type: "list", content: 1, style: "list" }] },
        { id: "2", title: 2, elements: [{ type: "list", content: 3, style: "list" }] },
        { id: "3", title: 4, elements: [{ type: "text", content: 5, style: "text" }] },
        { id: "4", title: 6, elements: [{ type: "list", content: 7, style: "list" }] },
        { id: "5", title: 8, elements: [{ type: "list", content: 9, style: "list" }] },
        { id: "6", title: 10, elements: [{ type: "text", content: 11, style: "text" }] },
        { id: "7", title: 12, elements: [{ type: "text", content: 13, style: "text" }] },
        { id: "8", title: 14, elements: [{ type: "text", content: 15, style: "text" }] },
        { id: "9", title: 16, elements: [{ type: "text", content: 17, style: "text" }] },
        { id: "10", title: 18, elements: [{ type: "text", content: 19, style: "text" }] },
        { id: "11", title: 20, elements: [{ type: "text", content: 21, style: "text" }] },
        { id: "12", title: 22, elements: [{ type: "text", content: 23, style: "text" }] },
        { id: "13", title: 49, elements: [{ type: "text", content: 50, style: "text" }] },
      ],
      news: [
        {
          id: "1",
          title: 24,
          elements: [
            { type: "text", content: 25, style: "text" },
            { type: "image", content: path + "src/assets/pictures/news/news2/news1.jpg", alt: 26, style: "image" }
          ]
        },
        {
          id: "2",
          title: 27,
          elements: [
            { type: "text", content: 28, style: "text" },
            { type: "text", content: 29, style: "text" },
            { type: "image", content: path + "src/assets/pictures/news/news2/news2.jpg", alt: 30, style: "image" }
          ]
        },
        {
          id: "3",
          title: 37,
          elements: [
            { type: "text", content: 38, style: "text" },
            { type: "text", content: 39, style: "text" },
            { type: "image", content: path + "src/assets/pictures/news/news2/news3.jpg", alt: 40, style: "image" }
          ]
        },
        {
          id: "4",
          title: 41,
          elements: [
            { type: "text", content: 42, style: "text" },
            { type: "image", content: path + "src/assets/pictures/news/news2/news4.jpg", alt: 43, style: "image" },
            { type: "text", content: 44, style: "text" }
          ]
        },
        {
          id: "5",
          title: 45,
          elements: [
            { type: "text", content: 46, style: "text" }
          ]
        },
        {
          id: "6",
          title: 47,
          elements: [
            { type: "text", content: 48, style: "text" }
          ]
        },
        {
          id: "2",
          title: 27,
          elements: [
            { type: "text", content: 28, style: "text" },
            { type: "text", content: 29, style: "text" },
            { type: "image", content: path + "src/assets/pictures/news/news2/news2.jpg", alt: 30, style: "image" }
          ]
        }
        // Другие новости можно добавить аналогично
      ],
      announcement: [
        { id: "1", title: 31, elements: [{}] },
        { id: "2", title: 32, elements: [{}] },
        { id: "3", title: 33, elements: [{}] },
        { id: "4", title: 34, elements: [{}] },
        { id: "5", title: 35, elements: [{ type: "list", content: 36, style: "list" }] }
      ],
      textContent: {
        ru: [
          // navigation
          "Церковные Деятели", ["деятель 1", "деятель 2", "деятель 3"], // 0, 1
          "Православные Святые", ["Святой 1", "Святой 2", "Святой 3", "Святой 4"], // 2, 3
          "Исторические даты", "информация", // 4, 5
          "Статьи", ["статья 1", "статья 2"], // 6, 7
          "Летописи", ["летопись 1", "летопись 2"], // 8, 9
          "Сувенирная лавка", "информация", // 10, 11
          "Книжный магазин", "информация", // 12, 13
          "Пожертвования", "информация", // 14, 15
          "Экскурсии", "информация про экскурсии", // 16, 17
          "Календарь событий", "информация", // 18, 19
          "Ответы на вопросы", "информация", // 20, 21
          "Личный кабинет", "авторизация", // 22, 23
          // news
          "16 февраля 2025 года, в день памяти святого равноапостольного Николая, архиепископа Японского, Митрополит Минский и Заславский Вениамин, Патриарший Экзарх всея Беларуси, возглавил престольный праздник в одноименном храме города Минска.", // 24
          "Его Высокопреосвященству сослужили: председатель Синодального отдела Белорусской Православной Церкви по взаимодействию с казачеством, благочинный 2-го Минского городского округа, настоятель прихода храма иконы Божией Матери «Всех скорбящих Радость» города Минска протоиерей Игорь Коростелёв; секретарь Минской епархии протоиерей Андрей Волков; настоятель прихода храма протоиерей Петр Демьянчук; председатель Синодального отдела Белорусской Православной Церкви по вопросам семьи, защиты материнства и детства, председатель Приходского совета протоиерей Павел Сердюк; и.о. председателя Синодального информационного отдела Белорусской Православной Церкви, настоятель прихода храма святителя Спиридона Тримифунтского в городе Минске иерей Александр Пальчевский и клирики храма.", // 25
          "Главная картинка", // 26
          "Продолжается прием заявок на Международный открытый грантовый конкурс «Православная инициатива – 2025»", // 27
          "Начался прием заявок на Международный открытый грантовый конкурс «Православная инициатива – 2025», который проводится по благословению Святейшего Патриарха Московского и всея Руси Кирилла Координационным комитетом по поощрению социальных, образовательных, информационных, культурных и иных инициатив под эгидой Русской Православной Церкви.", // 28
          "Традиционно в рамках программы «Православная инициатива» рассматриваются заявки по четырем проектным направлениям — образование и воспитание, социальное служение, культура, информационное. При этом в нынешнем году определен ряд приоритетных тем в рамках этих направлений.", // 29
          "Главная картинка", // 30
          // announcement
          "анонс 1", // 31
          "анонс 2", // 32
          "анонс 3", // 33
          "анонс 4", // 34
          "новый анонс", ["1", "2", "3", "4"], // 35, 36
          "Святейший Патриарх Московский и всея Руси Кирилл выступил с обращением по случаю празднования Дня православной молодежи.", // 37
          "Дорогие братья и сестры!", // 38
          "Сердечно поздравляю вас с праздником Сретения Господня и Днем православной молодежи.", // 39
          "Главная картинка", // 40
          "В Минске прошёл образовательный форум для юношей и девушек из разных епархий Белорусской Православной Церкви", // 41
          "В Новогрудской епархии к 555-летию явления Жировичской иконы Божией Матери объявлен конкурс рисунков «Жировичский монастырь – святыня Беларуси»", // 42
          "Главная картинка", // 43
          "Проблемы и перспективы деятельности ресурсных центров учреждений образования по духовно-нравственному воспитанию учащихся обсудили участники диалоговой площадки в Могилеве", // 44
          "Информация о новой новости", // 45
          "информация", // 46
          "Информация о новой новости2", // 47
          "информация 2", // 48,
          "Храмы", //49
          ["потерянные храмы", "действующие храмы"], //50
        ],
        en: [
          // navigation
          "Church Figures", ["figure 1", "figure 2", "figure 3"], // 0, 1
          "Orthodox Saints", ["Saint 1", "Saint 2", "Saint 3", "Saint 4"], // 2, 3
          "Historical Dates", "information", // 4, 5
          "Articles", ["article 1", "article 2"], // 6, 7
          "Chronicles", ["1", "2"], // 8, 9
          "Souvenir Shop", "information", // 10, 11
          "Bookstore", "information", // 12, 13
          "Donations", "information", // 14, 15
          "Excursions", "information", // 16, 17
          "Event Calendar", "information", // 18, 19
          "Q&A", "information", // 20, 21
          "Personal Account", "authorization", // 22, 23
          // news
          "On February 16, 2025, on the day of commemoration of Saint Nicholas, Equal-to-the-Apostles, Archbishop of Japan, Metropolitan Veniamin of Minsk and Zaslavl, Patriarchal Exarch of All Belarus, led the patronal feast in the namesake church in Minsk.", // 24
          "His Eminence was assisted by: Chairman of the Synodal Department of the Belarusian Orthodox Church for Cooperation with the Cossacks, Dean of the 2nd Minsk City District, Rector of the Parish of the Icon of the Mother of God 'Joy of All Who Sorrow' in Minsk, Archpriest Igor Korostelev; Secretary of the Minsk Diocese, Archpriest Andrey Volkov; Rector of the parish church, Archpriest Petr Demyanchuk; Chairman of the Synodal Department of the Belarusian Orthodox Church for Family Issues, Protection of Motherhood and Childhood, Chairman of the Parish Council, Archpriest Pavel Serdyuk; Acting Chairman of the Synodal Information Department of the Belarusian Orthodox Church, Rector of the Parish of Saint Spyridon of Trimythous in Minsk, Priest Alexander Palchevsky, and the clergy of the church.", // 25
          "Main image", // 26
          "Applications are still being accepted for the International Open Grant Competition 'Orthodox Initiative – 2025'", // 27
          "The acceptance of applications has begun for the International Open Grant Competition 'Orthodox Initiative – 2025,' held with the blessing of His Holiness Patriarch Kirill of Moscow and All Russia by the Coordinating Committee for the Promotion of Social, Educational, Informational, Cultural, and Other Initiatives under the auspices of the Russian Orthodox Church.", // 28
          "Traditionally, within the 'Orthodox Initiative' program, applications are considered in four project areas: education and upbringing, social service, culture, and information. This year, a number of priority themes within these areas have been identified.", // 29
          "Main image", // 30
          // announcement
          "announcement 1", // 31
          "announcement 2", // 32
          "announcement 3", // 33
          "announcement 4", // 34
          "new announcement", ["1", "2", "3", "4"], // 35, 36
          "His Holiness Patriarch Kirill of Moscow and All Russia addressed the celebration of Orthodox Youth Day.", // 37
          "Dear brothers and sisters!", // 38
          "I heartily congratulate you on the feast of the Presentation of the Lord and Orthodox Youth Day.", // 39
          "Main image", // 40
          "An educational forum for young men and women from various dioceses of the Belarusian Orthodox Church was held in Minsk.", // 41
          "In the Novogrudok Diocese, a drawing competition 'Zhyrovichy Monastery – a shrine of Belarus' was announced to mark the 555th anniversary of the appearance of the Zhyrovichy Icon of the Mother of God.", // 42
          "Main image", // 43
          "Participants of a dialogue platform in Mogilev discussed the problems and prospects of the activities of resource centers of educational institutions for the spiritual and moral education of students.", // 44
          "Information about a new news item", // 45
          "information", // 46
          "Information about another new news item", // 47
          "information 2", // 48
          "Temples", //49
          ["losted temples", "active temples"], //50
        ],
        by: [
          // navigation
          "Царкоўныя Дзеячы", ["дзеяч 1", "дзеяч 2", "дзеяч 3"], // 0, 1
          "Праваслаўныя Святыя", ["Святы 1", "Святы 2", "Святы 3", "Святы 4"], // 2, 3
          "Гістарычныя даты", "інфармацыя", // 4, 5
          "Артыкулы", ["артыкул 1", "артыкул 2"], // 6, 7
          "Летапісы", ["летапіс 1", "летапіс 2"], // 8, 9
          "Сувенірная крама", "інфармацыя", // 10, 11
          "Кнігарня", "інфармацыя", // 12, 13
          "Ахвяраванні", "інфармацыя", // 14, 15
          "Экскурсіі", "інфармацыя пра экскурсіі", // 16, 17
          "Каляндар падзей", "інфармацыя", // 18, 19
          "Адказы на пытанні", "інфармацыя", // 20, 21
          "Асабісты кабінет", "аўтарызацыя", // 22, 23
          // news
          "16 лютага 2025 года, у дзень памяці святога роўнаапостальнага Мікалая, архіепіскапа Японскага, Мітрапаліт Мінскі і Заслаўскі Веніямін, Патрыяршы Экзарх усяе Беларусі, узначаліў прэстольнае свята ў аднайменным храме горада Мінска.", // 24
          "Яго Высокапраасвяшчэнству саслужылі: старшыня Сінадальнага аддзела Беларускай Праваслаўнай Царквы па ўзаемадзеянні з казацтвам, благачынны 2-га Мінскага гарадскога акругі, настаяцель прыхода храма іконы Божай Маці «Усіх тужлівых Радасць» горада Мінска протаіерэй Ігар Каросталеў; сакратар Мінскай епархіі протаіерэй Андрэй Волкаў; настаяцель прыхода храма протаіерэй Пётр Дземянчук; старшыня Сінадальнага аддзела Беларускай Праваслаўнай Царквы па пытаннях сям’і, абароны мацярынства і дзяцінства, старшыня Прыходскага савета протаіерэй Павел Сердзюк; в.а. старшыні Сінадальнага інфармацыйнага аддзела Беларускай Праваслаўнай Царквы, настаяцель прыхода храма святога Спірыдона Трыміфунцкага ў горадзе Мінску іерэй Аляксандр Пальчэўскі і клірыкі храма.", // 25
          "Галоўнае выява", // 26
          "Працягваецца прыём заявак на Міжнародны адкрыты грантавы конкурс «Праваслаўная ініцыятыва – 2025»", // 27
          "Пачаўся прыём заявак на Міжнародны адкрыты грантавы конкурс «Праваслаўная ініцыятыва – 2025», які праводзіцца з благаславення Святога Патрыярха Маскоўскага і ўсяе Русі Кірыла Каардынацыйным камітэтам па заахвочванні сацыяльных, адукацыйных, інфармацыйных, культурных і іншых ініцыятыў пад эгідай Рускай Праваслаўнай Царквы.", // 28
          "Традыцыйна ў рамках праграмы «Праваслаўная ініцыятыва» разглядаюцца заяўкі па чатырох праектных напрамках — адукацыя і выхаванне, сацыяльнае служэнне, культура, інфармацыйнае. Пры гэтым у гэтым годзе вызначаны шэраг прыярытэтных тэм у рамках гэтых напрамкаў.", // 29
          "Галоўнае выява", // 30
          // announcement
          "анонс 1", // 31
          "анонс 2", // 32
          "анонс 3", // 33
          "анонс 4", // 34
          "новы анонс", ["1", "2", "3", "4"], // 35, 36
          "Святы Патрыярх Маскоўскі і ўсяе Русі Кірыл выступіў з зваротам з нагоды святкавання Дня праваслаўнай моладзі.", // 37
          "Дарагія браты і сёстры!", // 38
          "Сардэчна віншую вас са святам Стрэчання Гасподняга і Днём праваслаўнай моладзі.", // 39
          "Галоўнае выява", // 40
          "У Мінску прайшоў адукацыйны форум для юнакоў і дзяўчат з розных епархій Беларускай Праваслаўнай Царквы", // 41
          "У Навагрудскай епархіі да 555-годдзя з'яўлення Жыровіцкай іконы Божай Маці абвешчаны конкурс малюнкаў «Жыровіцкі манастыр – святыня Беларусі»", // 42
          "Галоўнае выява", // 43
          "Праблемы і перспектывы дзейнасці рэсурсных цэнтраў устаноў адукацыі па духоўна-маральным выхаванні вучняў абмеркавалі ўдзельнікі дыялогавай пляцоўкі ў Магілёве", // 44
          "Інфармацыя пра новую навіну", // 45
          "інфармацыя", // 46
          "Інфармацыя пра новую навіну 2", // 47
          "інфармацыя 2", // 48
          "Храмы", // 49
          ["страчаныя храмы", "дзеючыя храмы"], // 50
        ]

      }
    }
  },

};