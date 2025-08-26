function createLanguageSelect(languages) {
    var currentLanguage = belhardSiteData.currentLanguage;

    var existingLanguageSelector = document.querySelector(".language-selector-container");
    if (existingLanguageSelector) {
        existingLanguageSelector.remove();
    }

    var container = createElement("div", { class: "language-selector-container" }, document.body);
    var selectBox = createElement("div", { class: "language-selector-box" }, container);
    var selectedFlag = createElement("img", { class: "language-selector-flag" }, selectBox);
    var arrow = createElement("span", { class: "language-selector-arrow" }, selectBox);
    arrow.textContent = "▼";
    var dropdown = createElement("div", { class: "language-selector-dropdown" }, container);

    var i = 0;
    var currentLangArray;
    while (i < languages.length) {
        if (languages[i][0] === currentLanguage) {
            currentLangArray = languages[i];
            break;
        }
        i++;
    }

    selectedFlag.src = currentLangArray[1];
    selectedFlag.alt = currentLangArray[0];

    var j = 0;
    while (j < languages.length) {
        var lang = languages[j];
        var flagItem = createElement("div", { class: "language-selector-item" }, dropdown);
        var flagImg = createElement("img", {
            class: "language-selector-item-img",
            src: lang[1]
        }, flagItem);
        flagImg.alt = lang[0];
        flagItem.dataset.lang = lang[0];

        flagItem.addEventListener("click", function (e) {
            e.stopPropagation();
            var newLanguage = this.dataset.lang;
            
            // Закрываем dropdown независимо от того, выбрали тот же язык или другой
            dropdown.classList.remove("open");
            arrow.classList.remove("open");
            setTimeout(function () {
                dropdown.style.display = 'none'; // Скрываем после анимации закрытия
            }, 300); // Соответствует времени transition в CSS
        
            // Если язык тот же, просто выходим
            if (newLanguage === belhardSiteData.currentLanguage) {
                return;
            }
        
            // Если язык новый, выполняем смену языка
            var k = 0;
            var newLangArray;
            while (k < languages.length) {
                if (languages[k][0] === newLanguage) {
                    newLangArray = languages[k];
                    break;
                }
                k++;
            }
        
            selectedFlag.src = newLangArray[1];
            selectedFlag.alt = newLangArray[0];
            changeLanguage(newLanguage);
        });
        j++;
    }

    var hideTimeout = null;
    var isTransitioning = false;

    selectBox.addEventListener("click", function (e) {
        e.stopPropagation();

        if (isTransitioning) return;

        var isOpen = dropdown.classList.contains("open");

        if (isOpen) {
            isTransitioning = true;
            dropdown.classList.remove("open");
            arrow.classList.remove("open");

            if (hideTimeout) clearTimeout(hideTimeout);
            hideTimeout = setTimeout(function () {
                dropdown.style.display = 'none';
                isTransitioning = false;
            }, 300); // таймер под анимацию закрытия
        } else {
            if (hideTimeout) clearTimeout(hideTimeout);
            dropdown.style.display = 'block';

            // используем минимальную задержку, чтобы CSS-анимация применилась
            setTimeout(function () {
                dropdown.classList.add("open");
                arrow.classList.add("open");
            }, 10);
        }
    });

    return container;
}

function changeLanguage(newLanguage) {
    if (newLanguage === belhardSiteData.currentLanguage) return;

    belhardSiteData.currentLanguage = newLanguage;
    localStorage.setItem("selectedLanguage", newLanguage);

    document.title = belhardSiteData.title[newLanguage];

    var classSuffix = getAccountType(classSuffix);
    const existingNavBar = document.getElementById('navbar');
    const existingHeaderFirst = document.getElementById('header_0');
    var timelinesRemoved = false;
    var existingTimelines = document.querySelectorAll('.timeline-container');
    const existingHeaderSecond = document.getElementById('header_1');
    const mapWrapper = document.querySelector('.map-wrapper');
    const newsDiv = document.getElementById('newsContainer');
    const existingSlider = document.getElementById('sliderContentContainer');
    const existingFooter = document.getElementById('footer');
    const goBackImg = document.querySelector('.go-back-icon');

    if (existingNavBar) {
        existingNavBar.remove();
        const overlay = document.getElementById('overlay');
        const openSideBarButton = document.getElementById('open-sidebar-button');
        const searchWrapper = document.querySelector('.search-wrapper' + classSuffix);
        const profileIconWrapper = document.querySelector('.profile-icon' + classSuffix);
        // console.log(profileIconWrapper)
        if (overlay) overlay.remove();
        if (openSideBarButton) openSideBarButton.remove();
        if (searchWrapper) searchWrapper.remove();
        if (profileIconWrapper) profileIconWrapper.remove();
        if (goBackImg) goBackImg.remove();

        if(belhardSiteData.currentNavbarMode == 0){
            createNavBar(belhardSiteData.navBar, newLanguage, belhardSiteData.currentNavbarMode);
        } else {
            createNavBar(belhardSiteData.navBarProfile, newLanguage, belhardSiteData.currentNavbarMode);
        } 
        
        createLanguageSelect(belhardSiteData.languages);
        reInitializeNavigation();
    }

    if (existingHeaderFirst) {
        existingHeaderFirst.remove();
        createSiteHeader(belhardSiteData.siteTitles.title, window.defaultStyles.headerStyles, belhardSiteData.currentLanguage, 0);
    }

    if (existingTimelines) {
        for (var i = 0; i < existingTimelines.length; i++) {
            existingTimelines[i].remove();
            timelinesRemoved = true;
        }
        if (timelinesRemoved) {
            createTimeline(belhardSiteData.timelineReligion, window.defaultStyles.timeLineReligionStyles, belhardSiteData.currentLanguage);
            createTimeline(belhardSiteData.timelineHistory, window.defaultStyles.timeLineReligionStyles, belhardSiteData.currentLanguage);
        }
    }

    if (existingHeaderSecond) {
        existingHeaderSecond.remove();
        createSiteHeader(belhardSiteData.siteTitles.title, window.defaultStyles.headerStyles, belhardSiteData.currentLanguage, 1);
    }

    var sliders = document.querySelectorAll('[class^="slider-container"]');
    if (sliders.length > 0) {
        sliders[0].remove();
        createSaintsSlider(belhardSiteData.saintsData, newLanguage, style1);
    }

    if (mapWrapper) {
        mapWrapper.remove();
        createMap(belhardSiteData.map, belhardSiteData.currentLanguage);
    }

    if (sliders.length > 1) {
        sliders[1].remove();
        createSaintsSlider(belhardSiteData.booksData, belhardSiteData.currentLanguage, style2);
    }

    if (newsDiv) {
        newsDiv.remove();
        createNews(window.defaultStyles.newsStyles, belhardSiteData.news, belhardSiteData.currentLanguage);
    }

    if (existingSlider) {
        existingSlider.remove();
        createSlider(window.defaultStyles.sliderStyles, belhardSiteData.images);
    }

    updatePageContentLanguage(newLanguage);

    if (existingFooter) {
        existingFooter.remove();
        createFooter(belhardSiteData, window.defaultStyles.footerStyles, newLanguage);
    }
}