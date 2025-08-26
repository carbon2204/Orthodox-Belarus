// Функция для создания главной страницы
function createMainPage() {
    getInitialLanguage(belhardSiteData.languages);
    // Устанавливаем заголовок страницы, используя значение из объекта belhardSiteData
    document.title = belhardSiteData.title[belhardSiteData.currentLanguage] || belhardSiteData.title["ru"];
    belhardSiteData.currentNavbarMode = 0;
    
    // Создаём навигационную панель, используя данные из belhardSiteData
    createNavBar(belhardSiteData.navBar, belhardSiteData.currentLanguage, 0);

    createLanguageSelect(belhardSiteData.languages);
    
    createSiteHeader(belhardSiteData.siteTitles.title, window.defaultStyles.headerStyles, belhardSiteData.currentLanguage, 0);

    
    // Создаём таймлайн, используя данные из belhardSiteData.timeLine и стили из window.defaultStyles.timeLineStyles
    createTimeline(belhardSiteData.timelineReligion, window.defaultStyles.timeLineReligionStyles, belhardSiteData.currentLanguage, 1, 'horizontal');
    
    createTimeline(belhardSiteData.timelineHistory, window.defaultStyles.timeLineReligionStyles, belhardSiteData.currentLanguage, 1, 'horizontal');
    
    createSiteHeader(belhardSiteData.siteTitles.title, window.defaultStyles.headerStyles, belhardSiteData.currentLanguage, 1);
    
    createSaintsSlider(belhardSiteData.saintsData, belhardSiteData.currentLanguage, style1);
    
    // Создаём карту, вызывая функцию createMap
    createMap(belhardSiteData.map, belhardSiteData.currentLanguage);
    
    createSaintsSlider(belhardSiteData.booksData, belhardSiteData.currentLanguage, style2);
    
    createCenturySelector(belhardSiteData.centurySelector, window.defaultStyles.centurySelector, belhardSiteData.currentLanguage);
    // Создаём новостной блок, используя стили из window.defaultStyles.newsStyles и данные из belhardSiteData.news
    createNews(window.defaultStyles.newsStyles, belhardSiteData.news, belhardSiteData.currentLanguage);
    
    // Создаём слайдер, передавая стили из window.defaultStyles.sliderStyles и изображения из belhardSiteData.images
    createSlider(window.defaultStyles.sliderStyles, belhardSiteData.images);
    
    // Создаём подвал (footer), используя данные из belhardSiteData и стили из window.defaultStyles.footerStyles
    createFooter(belhardSiteData, window.defaultStyles.footerStyles, belhardSiteData.currentLanguage);
    
    // Применяем глобальные стили, используя объект globalStyles
    applyGlobalStyles(globalStyles);
    
    // Применяем стили для навигационной панели, используя объект navBarCss
    applyGlobalStyles(navBarCss);
    
    // Создаём кнопку прокрутки страницы вверх, используя стили из window.defaultStyles.buttonStyles и иконку из belhardSiteData.controlElements.scrollPageUpIcon
    createScrollToTopButton(window.defaultStyles.buttonStyles, belhardSiteData.controlElements.scrollPageUpIcon);
    
    // Устанавливаем фавикон для сайта, используя путь из belhardSiteData.favicon
    addFavicon(belhardSiteData.favicon);  

    if(belhardSiteData.lastItemsStack.length >= 1){
        if(belhardSiteData.lastItemsStack[belhardSiteData.lastItemsStack.length - 1][0] != "navigation"){
            initializePage(belhardSiteData.lastItemsStack);
        } else if(belhardSiteData.lastItemsStack[belhardSiteData.lastItemsStack.length - 1][1] != 1){
            initializePage(belhardSiteData.lastItemsStack);
        }
    }
}

// Добавляем обработчик события загрузки DOM-контента
// После полной загрузки DOM вызываем функцию createMainPage
document.addEventListener("DOMContentLoaded", function () {
    loadItemsStackData();
    createMainPage();
    initializeNavigation();
});