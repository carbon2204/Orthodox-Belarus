// Объявляем флаги вне функции для сохранения состояния между вызовами
var hasClickListener = false;
var hasResizeListener = false;

function initializeNavigation() {
    var classSuffix = getAccountType(classSuffix);
    // Получаем элементы навигации
    var nav = document.querySelector('nav');
    var vMenu = document.querySelector('.visible-menu');
    var hMenu = document.querySelector('.hidden-menu');
    var burger = document.querySelector('.burger');
    var burgerCount = document.querySelector('.burger-count');
    var searchWrapper = document.querySelector('.search-wrapper' + classSuffix);
    var profileIconWrapper = document.querySelector('.profile-icon' + classSuffix);
    var languageSelectorContainer = document.querySelector('.language-selector-container');
    var goBackImg = document.querySelector('.go-back-icon');
    var isMobile;
    var isShifted;

    function updateNav() {
        var searchWidth = 0;
        if(belhardSiteData.currentSearchExpandedType == 0){
            if(belhardSiteData.currentAccountType == 0){
                searchWidth = belhardSiteData.searchWidthTypeZero;
            } else if(belhardSiteData.currentAccountType == 1){
                searchWidth = belhardSiteData.searchWidthTypeOne;
            }
        } else if(belhardSiteData.currentSearchExpandedType == 1){
            if(belhardSiteData.currentAccountType == 0){
                searchWidth = belhardSiteData.searchWidthTypeZeroExpanded;
            } else if(belhardSiteData.currentAccountType == 1){
                searchWidth = belhardSiteData.searchWidthTypeOneExpanded;
            }
        }
        if (window.innerWidth <= belhardSiteData.mobileSizes.navBar) {
            while (hMenu.children.length > 0) {
                vMenu.appendChild(hMenu.firstElementChild);
            }
            burger.classList.add('hidden');
            hMenu.classList.remove('active');
            burgerCount.innerText = '0';
        } else {
            var navWidth = nav.offsetWidth - searchWidth;
            if (!burger.classList.contains('hidden')) {
                navWidth -= burger.offsetWidth;
            }

            var vMenuWidth = vMenu.offsetWidth;

            for (var i = vMenu.children.length - 1; i >= 2 && vMenuWidth > navWidth; i--) {
                var lastChild = vMenu.lastElementChild;
                if (!lastChild) break;
                hMenu.prepend(lastChild);
                burger.classList.remove('hidden');
                vMenuWidth = vMenu.offsetWidth;
                navWidth = nav.offsetWidth - searchWidth - burger.offsetWidth;
                burgerCount.innerText = hMenu.children.length;
            }

            var keepChecking = true;
            for (var i = 0; hMenu.children.length > 0 && keepChecking; i++) {
                var firstChild = hMenu.firstElementChild;
                var tempWidth = vMenuWidth;
                vMenu.appendChild(firstChild);
                vMenuWidth = vMenu.offsetWidth;

                navWidth = nav.offsetWidth - searchWidth;
                if (hMenu.children.length > 0) {
                    navWidth -= burger.offsetWidth;
                }

                if (vMenuWidth > navWidth) {
                    hMenu.prepend(firstChild);
                    vMenuWidth = tempWidth;
                    keepChecking = false;
                } else {
                    burgerCount.innerText = hMenu.children.length;
                    if (hMenu.children.length === 0) {
                        burger.classList.add('hidden');
                        hMenu.classList.remove('active');
                        navWidth = nav.offsetWidth - searchWidth;
                        burgerCount.innerText = '0';
                    }
                }
            }
        }

        // if (hMenu.children.length < 1 && window.innerWidth > belhardSiteData.mobileSizes.navBar && belhardSiteData.currentNavbarMode === 0) {
        //     const menuItems = vMenu.querySelectorAll('li:not(#close-sidebar-button)');
        //     const lastItem = menuItems[menuItems.length - 1];
        //     if (lastItem) {
        //         hMenu.appendChild(lastItem);
        //         burger.classList.remove('hidden');
        //         burgerCount.innerText = hMenu.children.length;
        //         vMenuWidth = vMenu.offsetWidth;
        //     }
        // }

        isMobile = window.innerWidth <= belhardSiteData.mobileSizes.navBar;
        isShifted = hMenu.children.length > 0 && !isMobile;
        updateElementsPosition();
    }

    function updateElementsPosition() {
        var isMobileNow = window.innerWidth <= belhardSiteData.mobileSizes.navBar;
        var isShiftedNow = (!isMobileNow && (hMenu.children.length > 0 || hMenu.classList.contains('active')));
    
        if (searchWrapper) {
            searchWrapper.classList.remove('search-mobile' + classSuffix, 'search-shifted' + classSuffix);
            if (isMobileNow) {
                searchWrapper.classList.add('search-mobile' + classSuffix);
            } else if (isShiftedNow) {
                searchWrapper.classList.add('search-shifted' + classSuffix);
            }
        }
        if (languageSelectorContainer) {
            languageSelectorContainer.classList.remove('language-selector-mobile', 'language-selector-shifted');
            if (isMobileNow) {
                languageSelectorContainer.classList.add('language-selector-mobile');
            } else if (isShiftedNow) {
                languageSelectorContainer.classList.add('language-selector-shifted');
            }
        }
        if (profileIconWrapper) {
            profileIconWrapper.classList.remove('search-mobile' + classSuffix, 'search-shifted' + classSuffix);
            if (isMobileNow) {
                profileIconWrapper.classList.add('search-mobile' + classSuffix);
            } else if (isShiftedNow) {
                profileIconWrapper.classList.add('search-shifted' + classSuffix);
            }
        }
        if (goBackImg) {
            goBackImg.classList.remove('back-mobile');
            if (isMobileNow) {
                goBackImg.classList.add('back-mobile');
            }
        }
    }
    

    function handleBurgerClick() {
        hMenu.classList.toggle('active');
        burger.classList.toggle('active');
        updateElementsPosition();
    }

    // Добавляем слушатели только если их еще нет
    if (!hasClickListener) {
        burger.addEventListener('click', handleBurgerClick);
        hasClickListener = true; // Устанавливаем флаг после добавления
    }

    if (!hasResizeListener) {
        window.addEventListener('resize', updateNav);
        hasResizeListener = true; // Устанавливаем флаг после добавления
    }

    // Инициализируем навигацию
    updateNav();
}

function reInitializeNavigation() {
    // Сбрасываем флаги, чтобы слушатели привязались к новым элементам
    hasClickListener = false;
    hasResizeListener = false;
    initializeNavigation();
}