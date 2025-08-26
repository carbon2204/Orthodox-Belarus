function createNews(style, data, currentLanguage) {
    // Создаем основной контейнер для новостей и добавляем его в body
    var container = createElement("div", { id: 'newsContainer' }, document.body);

    // Проверяем наличие перевода для текущего языка
    const hasTranslation = data.texts[currentLanguage] && Array.isArray(data.texts[currentLanguage]) && data.texts[currentLanguage].length > 0;

    // Если перевода нет — возвращаем пустую функцию, но контейнер уже создан
    if (!hasTranslation) {
        return () => {};
    }

    // Применяем базовые стили к контейнеру, если перевод есть
    applyStyles(container, style.container);

    // Создаем левую колонку для новостей
    var leftColumn = createElement("div", {}, container);
    applyStyles(leftColumn, style.column);

    // Создаем первую секцию левой колонки (для изображения)
    var leftSection1 = createElement("div", {}, leftColumn);
    applyStyles(leftSection1, style.section);
    var img1 = createElement("img", { src: data.leftColumn.image }, leftSection1);
    applyStyles(img1, style.image);

    // Создаем вторую секцию левой колонки (для заголовка)
    var leftSection2 = createElement("div", {}, leftColumn);
    applyStyles(leftSection2, style.section);
    var leftTitle = createElement("div", {}, leftSection2);
    leftTitle.innerText = data.texts[currentLanguage][0] || "No Title"; // Индекс 0 — leftColumn.title
    applyStyles(leftTitle, style.textTitle);

    // Создаем третью секцию левой колонки (для списка новостей)
    var leftSection3 = createElement("div", {}, leftColumn);
    applyStyles(leftSection3, style.section);

    // Инициализируем счетчик для ограничения количества новостей
    var j = 0;
    for (var i = data.leftColumn.items.length - 1; i >= 0; i--) {
        if (j >= data.amountOfShownNews.leftColumnAmount) break;
        j++;
        var news = data.leftColumn.items[i];
        news.source = belhardSiteData.form.formSource.newsSource;

        var newsItem = createElement("div", {}, leftSection3);
        applyStyles(newsItem, style.newsItem);

        var newsLinkImg = createElement("a", {}, newsItem);
        var newsImg = createElement("img", { src: news.img }, newsLinkImg);
        applyStyles(newsImg, style.newsImage);

        var newsText = createElement("div", {}, newsItem);
        var newsTextLink = createElement("a", {}, newsText);
        newsTextLink.innerText = data.texts[currentLanguage][news.textIndex] || "No text available";
        applyStyles(newsTextLink, style.linkTitle);

        var links = [newsLinkImg, newsTextLink];
        for (var k = 0; k < links.length; k++) {
            attachRebuildListener(links[k], news);
        }

        newsText.appendChild(document.createElement("br"));
        var date = createElement("div", {}, newsText);
        date.innerText = data.texts[currentLanguage][news.dateIndex] || "No date";
        applyStyles(date, style.newsDate);
    }

    // Создаем правую колонку для новостей
    var rightColumn = createElement("div", {}, container);
    applyStyles(rightColumn, style.column);

    // Создаем первую секцию правой колонки (для изображения)
    var rightSection1 = createElement("div", {}, rightColumn);
    applyStyles(rightSection1, style.section);
    var img2 = createElement("img", { src: data.rightColumn.image }, rightSection1);
    applyStyles(img2, style.image);

    // Создаем вторую секцию правой колонки (для заголовка)
    var rightSection2 = createElement("div", {}, rightColumn);
    applyStyles(rightSection2, style.section);
    var rightTitle = createElement("div", {}, rightSection2);
    rightTitle.innerText = data.texts[currentLanguage][1] || "No Title"; // Индекс 1 — rightColumn.title
    applyStyles(rightTitle, style.textTitle);

    // Инициализируем счетчик для ограничения количества деталей в правой колонке
    var j = 0;
    for (var i = data.rightColumn.details.length - 1; i >= 0; i--) {
        if (j >= data.amountOfShownNews.rightColumnAmount) break;
        j++;
        var news = data.rightColumn.details[i];
        news.source = belhardSiteData.form.formSource.announcementSource;

        var section = createElement("div", {}, rightColumn);
        applyStyles(section, style.section);

        var description = createElement("div", {}, section);
        applyStyles(description, style.textDescription);
        description.innerText = data.texts[currentLanguage][news.textIndex] || "No text available";

        var moreLink = createElement("a", {}, description);
        moreLink.innerText = " " + (data.texts[currentLanguage][2] || "More"); // Индекс 2 — extraInformation
        applyStyles(moreLink, style.linkTitle);

        attachRebuildListener(moreLink, news);
    }

    // Функция применения адаптивных стилей
    function applyResponsiveStyles() {
        if (document.documentElement.clientWidth <= belhardSiteData.mobileSizes.news) {
            applyStyles(container, style.containerMobile);
            applyStyles(rightColumn, style.rightColumnMobile);
            applyStyles(leftColumn, style.leftColumnMobile);
        } else {
            applyStyles(container, style.container);
            applyStyles(rightColumn, style.column);
            applyStyles(leftColumn, style.column);
        }
    }

    applyResponsiveStyles();
    window.addEventListener("resize", applyResponsiveStyles);

    return container;
}