function createPageContent(data, pageStyles, menuItem, currentLanguage) {
    var contentContainer = document.createElement("div");
    contentContainer.id = "contentContainer";
    applyStyles(contentContainer, pageStyles.contentContainer);
    document.body.appendChild(contentContainer);
    belhardSiteData.currentMenuItem = menuItem;

    var menuText = "";
    // console.log(menuItem)
    // console.log(menuItem.source)
    if (menuItem.source === "navigation") {
        if (data.navBar.navBarText[currentLanguage] && data.navBar.navBarText[currentLanguage][parseInt(menuItem.id) - 1]) {
            menuText = data.navBar.navBarText[currentLanguage][parseInt(menuItem.id) - 1];
        } else if (data.form.defaultTitle[currentLanguage]) {
            menuText = data.form.defaultTitle[currentLanguage];
        } else {
            menuText = data.form.defaultTitle["ru"] || "";
        }
    } else if (menuItem.source === "search") {
        if (belhardSiteData.navBar.searchResultText[currentLanguage]) {
            menuText = belhardSiteData.navBar.searchResultText[currentLanguage];
        } else {
            menuText = belhardSiteData.navBar.searchResultText["ru"] || "";
        }
    } else if (menuItem.source === "news" || menuItem.source === "announcement") {
        if (menuItem.textIndex !== undefined && data.news.texts[currentLanguage] && data.news.texts[currentLanguage][menuItem.textIndex]) {
            menuText = data.news.texts[currentLanguage][menuItem.textIndex];
        } else if (data.form.defaultTitle[currentLanguage]) {
            menuText = data.form.defaultTitle[currentLanguage];
        } else {
            menuText = data.form.defaultTitle["ru"] || "";
        }
    } else {
        if (menuItem.text) {
            menuText = menuItem.text;
        } else if (data.form.defaultTitle[currentLanguage]) {
            menuText = data.form.defaultTitle[currentLanguage];
        } else {
            menuText = data.form.defaultTitle["ru"] || "";
        }
    }

    document.title = menuText;

    var mainTitleContainer = createMainTitle(menuText, pageStyles);
    contentContainer.appendChild(mainTitleContainer);

    var leftColumn = document.createElement("div");
    applyStyles(leftColumn, pageStyles.leftColumn);

    var servicesDiv = calendar(pageStyles, belhardSiteData.calendarData, currentLanguage);
    leftColumn.appendChild(servicesDiv);

    var rightColumn = document.createElement("div");
    applyStyles(rightColumn, pageStyles.rightColumn);
    
    var newsDiv = createNewsDiv(data.news.leftColumn, pageStyles, currentLanguage);
    if (newsDiv) {
        leftColumn.appendChild(newsDiv);
    }

    var testingDiv = createRightTopgDiv(data, pageStyles, menuItem.formId, menuItem.source, currentLanguage);
    rightColumn.appendChild(testingDiv);

    var twoColumnsContainer = document.createElement("div");
    applyStyles(twoColumnsContainer, pageStyles.twoColumns);
    twoColumnsContainer.appendChild(leftColumn);
    twoColumnsContainer.appendChild(rightColumn);

    contentContainer.appendChild(twoColumnsContainer);

    setTimeout(function() {
        adjustFooterPosition();
    }, 100);

    function applyResponsiveStyles() {
        var mainTitle = document.getElementById('mainTitle');
        var mainTitleContainer = document.querySelector(".mainTitleContainer");
        if (!mainTitle || !mainTitleContainer || !leftColumn || !rightColumn) return;

        var isMobile = document.documentElement.clientWidth <= belhardSiteData.mobileSizes.formLeftColumn;

        if (isMobile) {
            applyStyles(leftColumn, pageStyles.leftColumnMobile);
            applyStyles(rightColumn, pageStyles.rightColumnMobile);
            applyStyles(mainTitle, pageStyles.mainTitleMobile);
        } else {
            applyStyles(leftColumn, pageStyles.leftColumn);
            applyStyles(rightColumn, pageStyles.rightColumn);
            applyStyles(mainTitle, pageStyles.mainTitle);
        }

        var fontSize = parseInt(window.getComputedStyle(mainTitle).fontSize);
        while (mainTitle.scrollWidth > document.documentElement.clientWidth && fontSize > 16) {
            fontSize -= 1;
            mainTitle.style.fontSize = fontSize + "px";
        }

        adjustFooterPosition();
    }

    applyResponsiveStyles();

    window.addEventListener("resize", function() {
        applyResponsiveStyles();
        adjustFooterPosition();
    });

    window.addEventListener("load", function() {
        adjustFooterPosition();
    });

    var observer = new MutationObserver(function() {
        adjustFooterPosition();
    });
    observer.observe(contentContainer, { childList: true, subtree: true });

    scrollToTop();
}

function createMainTitle(titleText, pageStyles) {
    var container = document.createElement("div");
    container.className = "mainTitleContainer";
    applyStyles(container, pageStyles.mainTitleContainer);

    var backgroundImage = document.createElement("div");
    backgroundImage.className = "backgroundImage";
    applyStyles(backgroundImage, pageStyles.backgroundImage);
    container.appendChild(backgroundImage);

    var mainTitle = createElement('h1', { id: 'mainTitle' });
    if (titleText) {
        mainTitle.textContent = titleText;
    } else if (belhardSiteData.form.defaultTitle[currentLanguage]) {
        mainTitle.textContent = belhardSiteData.form.defaultTitle[currentLanguage];
    } else {
        mainTitle.textContent = "Default Title";
    }
    applyStyles(mainTitle, pageStyles.mainTitle);
    container.appendChild(mainTitle);

    return container;
}

function getItemsByParent(items, parentId) {
    var result = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].parent === parentId && items[i].state === "1") {
            result.push(items[i]);
        }
    }
    return result;
}

function generateLink(item, pageStyles, currentLanguage) {
    var a = document.createElement("a");
    if (belhardSiteData.navBar.navBarText[currentLanguage] && belhardSiteData.navBar.navBarText[currentLanguage][parseInt(item.id) - 1]) {
        a.textContent = belhardSiteData.navBar.navBarText[currentLanguage][parseInt(item.id) - 1];
    } else {
        a.textContent = "Link";
    }
    applyStyles(a, pageStyles.link);
    a.href = "#";
    return a;
}

function renderItems(items, list, pageStyles, currentLanguage) {
    for (var i = 0; i < items.length; i++) {
        var listItem = document.createElement("li");
        listItem.appendChild(generateLink(items[i], pageStyles, currentLanguage));
        list.appendChild(listItem);
    }
}

function calendar(pageStyles, data, currentLanguage) {
    var container = createElement('div', { class: 'calendar-container' });
    applyStyles(container, pageStyles.servicesDiv);

    var dayContainer = createElement('div', { class: 'calendar-day-content' });

    var textArray = data.textData[currentLanguage];

    if (!textArray) {
        var navContainer = createElement('div', { class: 'nav-container' });
        container.appendChild(dayContainer);
        container.appendChild(navContainer);
        return container;
    }

    var prevButton = createElement('button');
    prevButton.textContent = textArray[textArray.length - 2];

    var nextButton = createElement('button');
    nextButton.textContent = textArray[textArray.length - 1];

    var navContainer = createElement('div', { class: 'nav-container' });
    navContainer.appendChild(prevButton);
    navContainer.appendChild(nextButton);

    var currentIndex = 0;

    function displayDay(index) {
        var event = data.events[index];
        var textStartIndex = index * 5;

        dayContainer.innerHTML = '';

        var dayDiv = createElement('div', { class: 'calendar-day' }, dayContainer);
        createElement('span', { class: 'date' }, dayDiv).textContent = textArray[textStartIndex];
        createElement('span', { class: 'day-name' }, dayDiv).textContent = textArray[textStartIndex + 1];

        if (event.image) {
            var imageDiv = createElement('div', { class: 'day-image' }, dayContainer);
            createElement('img', { src: event.image, alt: textArray[textStartIndex] }, imageDiv);
        }

        var saintsList = createElement('div', { class: 'saints-list' }, dayContainer);
        var saints = [textArray[textStartIndex + 2], textArray[textStartIndex + 3]];
        for (var i = 0; i < saints.length; i++) {
            var span = createElement('span', {}, saintsList);
            var link = createElement('a', { href: 'https://azbyka.ru/days/', target: '_blank', class: 'saint-link' }, span);
            link.textContent = saints[i];
        }

        createElement('div', { class: 'fasting-info' }, dayContainer).textContent = textArray[textStartIndex + 4];

        prevButton.disabled = index === 0;
        nextButton.disabled = index === data.events.length - 1;

        applyStyles(dayDiv, pageStyles.additionalStyles.calendarDay);
        if (event.image) {
            applyStyles(dayContainer.querySelector('.day-image'), pageStyles.additionalStyles.dayImage);
        }
        applyStyles(saintsList, pageStyles.additionalStyles.saintsList);
        applyStyles(dayContainer.querySelector('.fasting-info'), pageStyles.additionalStyles.fastingInfo);
    }

    applyStyles(prevButton, pageStyles.additionalStyles.navButtons);
    applyStyles(nextButton, pageStyles.additionalStyles.navButtons);
    applyStyles(navContainer, pageStyles.additionalStyles.navContainer);

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            displayDay(currentIndex);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < data.events.length - 1) {
            currentIndex++;
            displayDay(currentIndex);
        }
    });

    container.changeLanguage = function(newLanguage) {
        var newTextArray = data.textData[newLanguage];
        if (!newTextArray) {
            dayContainer.innerHTML = '';
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
            return;
        }
        prevButton.style.display = '';
        nextButton.style.display = '';
        prevButton.textContent = newTextArray[newTextArray.length - 2];
        nextButton.textContent = newTextArray[newTextArray.length - 1];
        displayDay(currentIndex);
    };

    container.appendChild(dayContainer);
    container.appendChild(navContainer);

    displayDay(currentIndex);

    return container;
}

function createRightTopgDiv(data, pageStyles, formId, source, currentLanguage) {
    if (currentLanguage in data.form.data.textContent) {
        currentLanguage = currentLanguage;
    } else {
        currentLanguage = "ru";
    }

    var container = document.createElement("div");
    applyStyles(container, pageStyles.testingDiv);

    var formData = null;
    if (formId && source) {
        if (source === "news") {
            for (var i = 0; i < data.form.data.news.length; i++) {
                if (data.form.data.news[i].id === formId) {
                    formData = data.form.data.news[i];
                    break;
                }
            }
        } else if (source === "announcement") {
            for (var i = 0; i < data.form.data.announcement.length; i++) {
                if (data.form.data.announcement[i].id === formId) {
                    formData = data.form.data.announcement[i];
                    break;
                }
            }
        } else if (source === "navigation") {
            for (var i = 0; i < data.form.data.navigation.length; i++) {
                if (data.form.data.navigation[i].id === formId) {
                    formData = data.form.data.navigation[i];
                    break;
                }
            }
        } else if (source === "search") {
            if (data.form.data.search && data.form.data.search.id === formId) {
                formData = data.form.data.search;
            } else {
                formData = null;
            }
        }
    }

    var title = document.createElement("h2");
    if (formData) {
        if (data.form.data.textContent[currentLanguage] && data.form.data.textContent[currentLanguage][formData.title]) {
            title.textContent = data.form.data.textContent[currentLanguage][formData.title];
        } else {
            title.textContent = data.form.defaultTitle["ru"];
        }
    } else if (data.form.defaultTitle[currentLanguage]) {
        title.textContent = data.form.defaultTitle[currentLanguage];
    } else {
        title.textContent = data.form.defaultTitle["ru"];
    }
    container.appendChild(title);

    if (formData && formData.elements && formData.elements.length > 0) {
        for (var i = 0; i < formData.elements.length; i++) {
            var element = formData.elements[i];
            if (element.type === "text") {
                var p = document.createElement("p");
                var textContent = "";
                if (data.form.data.textContent[currentLanguage] && data.form.data.textContent[currentLanguage][element.content]) {
                    textContent = data.form.data.textContent[currentLanguage][element.content];
                }
                p.textContent = textContent;

                if (element.linkData && element.scripts) {
                    var moreLink = document.createElement("a");
                    if (belhardSiteData.news.texts[currentLanguage] && belhardSiteData.news.texts[currentLanguage][2]) {
                        moreLink.textContent = ' ' + belhardSiteData.news.texts[currentLanguage][2];
                    } else if (belhardSiteData.news.texts["ru"] && belhardSiteData.news.texts["ru"][2]) {
                        moreLink.textContent = ' ' + belhardSiteData.news.texts["ru"][2];
                    } else {
                        moreLink.textContent = ' ' + "Подробнее";
                    }
                    applyStyles(moreLink, pageStyles.link);
                    attachRebuildListener(moreLink, element.linkData, null);
                    p.appendChild(moreLink);
                }
                applyStyles(p, pageStyles.textElement);
                container.appendChild(p);
            } else if (element.type === "list") {
                createListElement(element, container, pageStyles, data.form.data.textContent[currentLanguage]);
            } else if (element.type === "image") {
                createImageElement(element, container, pageStyles, data.form.data.textContent[currentLanguage]);
            }
        }
    }

    return container;
}

function createNewsDiv(newsData, pageStyles, currentLanguage) {
    if (belhardSiteData.news.amountOfShownNews.formPageAmount <= 0) return null;
    if (!belhardSiteData.news.texts || !belhardSiteData.news.texts[currentLanguage]) return null;

    var container = document.createElement("div");
    applyStyles(container, pageStyles.newsDiv);

    var title = document.createElement("h2");
    if (belhardSiteData.news.texts[currentLanguage][0]) {
        title.textContent = belhardSiteData.news.texts[currentLanguage][0];
    } else {
        title.textContent = "Новости";
    }
    container.appendChild(title);

    var shownCount = 0;
    var totalNews = [];
    for (var i = 0; i < belhardSiteData.news.leftColumn.items.length; i++) {
        totalNews.push(belhardSiteData.news.leftColumn.items[i]);
    }

    for (var i = totalNews.length - 1; i >= 0 && shownCount < belhardSiteData.news.amountOfShownNews.formPageAmount; i--) {
        var newsItem = totalNews[i];
        newsItem.source = "news";

        var newsBlock = document.createElement("div");
        applyStyles(newsBlock, pageStyles.newsBlock);

        var newsLink = document.createElement("a");
        var textIndex = newsItem.textIndex;
        var dateIndex = newsItem.dateIndex;

        if (belhardSiteData.news.texts[currentLanguage][textIndex]) {
            newsLink.textContent = belhardSiteData.news.texts[currentLanguage][textIndex];
        } else {
            newsLink.textContent = "Нет данных";
        }
        applyStyles(newsLink, pageStyles.newsText);
        attachRebuildListener(newsLink, newsItem, null);
        newsBlock.appendChild(newsLink);

        var newsDate = document.createElement("span");
        if (belhardSiteData.news.texts[currentLanguage][dateIndex]) {
            newsDate.textContent = belhardSiteData.news.texts[currentLanguage][dateIndex];
        } else {
            newsDate.textContent = "Нет даты";
        }
        applyStyles(newsDate, pageStyles.newsDate);
        newsBlock.appendChild(newsDate);

        container.appendChild(newsBlock);
        shownCount++;
    }

    return container;
}

function createTextElement(element, container, pageStyles, textContent) {
    var p = document.createElement("p");
    if (textContent[element.content]) {
        p.textContent = textContent[element.content];
    } else {
        p.textContent = "";
    }
    if (element.style && pageStyles[element.style]) {
        applyStyles(p, pageStyles[element.style]);
    }
    container.appendChild(p);
}

function createListElement(element, container, pageStyles, textContent) {
    var ul = document.createElement("ul");
    if (element.style && pageStyles[element.style]) {
        applyStyles(ul, pageStyles[element.style]);
    }
    var items = textContent[element.content] || [];
    for (var i = 0; i < items.length; i++) {
        var li = document.createElement("li");
        li.textContent = items[i];
        ul.appendChild(li);
    }
    container.appendChild(ul);
}

function createImageElement(element, container, pageStyles, textContent) {
    var img = document.createElement("img");
    img.src = element.content;
    if (textContent[element.alt]) {
        img.alt = textContent[element.alt];
    } else {
        img.alt = "Image";
    }
    if (element.style && pageStyles[element.style]) {
        applyStyles(img, pageStyles[element.style]);
    }
    container.appendChild(img);
}

function updatePageContentLanguage(newLanguage) {
    var existingContent = document.getElementById('contentContainer');
    if (!existingContent) return;

    var currentMenuItem = belhardSiteData.currentMenuItem;
    if (!currentMenuItem) {
        console.warn("Текущий menuItem не найден в belhardSiteData.currentMenuItem");
        return;
    }

    existingContent.remove();
    createPageContent(belhardSiteData, window.defaultStyles.pageStyles, currentMenuItem, newLanguage);

    setTimeout(function() {
        adjustFooterPosition();
    }, 10);
}