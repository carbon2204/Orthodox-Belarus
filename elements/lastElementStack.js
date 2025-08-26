// Функция для добавления элемента в стек
function addElementInStack(source, id) {
    if(belhardSiteData.currentNavbarMode == 0){
        const lastItem = belhardSiteData.lastItemsStack[belhardSiteData.lastItemsStack.length - 1];
        if (!lastItem || lastItem[0] !== source || lastItem[1] !== id) {
            belhardSiteData.lastItemsStack.push([source, id]);
        }
    }
    // console.log(belhardSiteData.lastItemsStack);
}

function loadItemsStackData() {
    const savedStack = sessionStorage.getItem('lastItemsStack');
    var arrayFromElementsStack;
    if (savedStack) {
        try {
            arrayFromElementsStack = JSON.parse(savedStack);
            belhardSiteData.lastItemsStack = arrayFromElementsStack;
            // console.log(belhardSiteData.lastItemsStack);
        } catch (e) {
            console.error('Error parsing savedStack:', e);
            arrayFromElementsStack = [];
        }
    }

    // console.log('Loaded stack:', belhardSiteData.lastItemsStack);
}

function initializePage(stack) {
    // console.log("init " + belhardSiteData.lastItemsStack[belhardSiteData.lastItemsStack.length - 1])
    if (!Array.isArray(stack) || stack.length === 0) {
        console.warn("Stack is empty or invalid");
        return;
    }

    if (stack.length > 1) {
        var lastItem = stack[stack.length - 1];
        var itemId = Array.isArray(lastItem) && lastItem.length === 2 ? lastItem[1] : (lastItem && lastItem.id);

        if (lastItem[0] === undefined) {
            console.warn("Invalid last item format:", lastItem);
            return;
        }

        var navBarElements = belhardSiteData.navBar.navBarElements;
        var newsData = belhardSiteData.news; // Предполагается, что ваша структура данных доступна через belhardSiteData
        var matchedItem = null;

        // Приведение ID к строковому типу для корректного сравнения
        if (stack[stack.length - 1][0] == "navigation") {
            for (var i = 0; i < navBarElements.length; i++) {
                if (navBarElements[i].id === String(itemId)) {
                    matchedItem = navBarElements[i];
                    break;
                }
            }
        }
        // Поиск в зависимости от типа
        else if (stack[stack.length - 1][0] === "news") {
            // Поиск в левой колонке (news)
            for (var i = 0; i < newsData.leftColumn.items.length; i++) {
                if (String(newsData.leftColumn.items[i].id) === String(itemId)) {
                    matchedItem = newsData.leftColumn.items[i];
                    break;
                }
            }
        }
        else if (stack[stack.length - 1][0] === "announcement") {
            // Поиск в правой колонке (announcements)
            for (var i = 0; i < newsData.rightColumn.details.length; i++) {
                if (String(newsData.rightColumn.details[i].id) === String(itemId)) {
                    matchedItem = newsData.rightColumn.details[i];
                    break;
                }
            }
        }
        else if (stack[stack.length - 1][0] === "search") {
            processSearch(stack[stack.length - 1][1], belhardSiteData.currentLanguage);
        }
        else if (stack[stack.length - 1][0] === "profile") {
            buildProfilePage(belhardSiteData.navBar.profileScripts);
        }

        if (stack[stack.length - 1][0] != "search" && stack[stack.length - 1][0] != "profile") {
            if (matchedItem) {
                rebuildPage(null, matchedItem, matchedItem.scripts || []);
                //добавить удаление для последнего элемента
            } else {
                console.warn("No matching item found for ID:", itemId);
            }
        }
    }
}

// Опционально: сохранение перед перезагрузкой (если нужно дополнительное сохранение)
window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('lastItemsStack', JSON.stringify(belhardSiteData.lastItemsStack));
});

function goBackInItemsStack() {
    if (belhardSiteData.lastItemsStack && belhardSiteData.lastItemsStack.length > 1) { // Проверяем, что стек существует и не пуст
        // Проверяем currentNavbarMode
        if (belhardSiteData.currentNavbarMode == 1) {
            // Показываем диалоговое окно с вопросом
            const userConfirmed = confirm(belhardSiteData.navBarProfile.goBackMessages[belhardSiteData.currentLanguage]);
            if (!userConfirmed) {
                // Если пользователь нажал "Нет" (Отмена), ничего не делаем
                return;
            }
        }
        // Если currentNavbarMode !== 1 или пользователь подтвердил выход, выполняем логику возвращения
        belhardSiteData.lastItemsStack.pop(); // Удаляем последний элемент
        if (belhardSiteData.lastItemsStack.length === 1) {
            document.body.innerHTML = "";
            createMainPage();
            reInitializeNavigation();
        } else {
            initializePage(belhardSiteData.lastItemsStack);
        }
        // console.log(belhardSiteData.lastItemsStack); // Выводим обновленный стек для проверки
    }
}

