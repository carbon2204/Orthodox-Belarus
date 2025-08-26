function createTable(data, style) {
    var tabsContainer, tableContainer;

    // Функция для создания таблицы с данными выбранной категории
    function createTableForCategory(categoryData, style) {
        // Создаем контейнер для таблицы
        if (!tableContainer) {
            tableContainer = createElement("div", { id: "table-container" }, document.body);
        }
        tableContainer.innerHTML = ""; // Очищаем контейнер перед вставкой новой таблицы

        // Создаем таблицу
        var table = createElement("table", {}, tableContainer);
        applyStyles(table, style.table); // Применяем стили к таблице

        // Создаем тело таблицы (tbody)
        var tbody = createElement("tbody", {}, table);

        // Получаем параметры: количество столбцов и строк
        var numColumns = categoryData.size[0]; // Количество столбцов
        var numRows = categoryData.size[1];    // Количество строк
        var rowsData = categoryData.rows;      // Данные строк

        // Добавляем строки и ячейки в таблицу
        for (var i = 0; i < numRows; i++) {
            var row = createElement("tr", {}, tbody); // Создаем строку
            applyStyles(row, style.row); // Применяем стили к строке

            for (var j = 0; j < numColumns; j++) {
                var cellData = ""; // Данные ячейки

                // Проверяем, есть ли данные для текущей ячейки
                if (i < rowsData.length && j < rowsData[i].length) {
                    cellData = rowsData[i][j];
                }

                // Определяем тип элемента (по умолчанию "td")
                var cellTag = "td"; // По умолчанию обычная ячейка
                var cellText = cellData; // Текст, который будет в ячейке
                var isLink = false; // Флаг, является ли содержимое ссылкой

                // Если данные ячейки — объект, проверяем его содержимое
                if (typeof cellData === "object") {
                    for (var key in cellData) {
                        if (cellData.hasOwnProperty(key)) {
                            cellTag = cellData[key] || "td"; // Определяем тип элемента
                            cellText = key; // Текстовое содержимое
                            isLink = cellTag === "a"; // Проверяем, ссылка ли это
                        }
                    }
                }

                // Создаем элемент ячейки
                var cellElement = createElement("td", {}, row);
                applyStyles(cellElement, style.cell); // Применяем стили к ячейке

                // Если это ссылка, создаем элемент <a>
                if (isLink) {
                    var linkElement = createElement("a", { href: "#" }, cellElement);
                    linkElement.textContent = cellText; // Устанавливаем текст ссылки
                    applyStyles(linkElement, style.linkCell); // Применяем стили к ссылке
                } else {
                    cellElement.textContent = cellText; // Устанавливаем текст ячейки
                }
            }
        }
    }

    // Функция для создания вкладок
    function createTabs(categories, style) {
        // Создаем контейнер для вкладок
        if (!tabsContainer) {
            tabsContainer = createElement("div", {}, document.body);
            applyStyles(tabsContainer, style.tabsContainer); // Применяем стили к контейнеру вкладок
        }
        tabsContainer.innerHTML = ""; // Очищаем контейнер перед вставкой новых вкладок

        // Перебираем категории и создаем вкладки
        for (var i = 0; i < categories.length; i++) {
            var category = categories[i]; // Текущая категория

            // Создаем кнопку вкладки
            var tab = createElement("button", { class: "tab-button" }, tabsContainer);
            tab.textContent = category; // Устанавливаем текст вкладки
            applyStyles(tab, style.tabButton); // Применяем стили к вкладке

            // Обработчик клика по вкладке
            tab.onclick = (function (cat, tabElement) {
                return function () {
                    // Сбрасываем стиль активных вкладок
                    var allTabs = document.querySelectorAll(".tab-button");
                    for (var j = 0; j < allTabs.length; j++) {
                        applyStyles(allTabs[j], style.tabButton);
                    }

                    // Подсвечиваем активную вкладку
                    applyStyles(tabElement, style.tabButtonActive);

                    // Создаем таблицу для выбранной категории
                    createTableForCategory(data[cat], style);
                };
            })(category, tab); // Используем замыкание, чтобы сохранить текущую категорию
        }
    }

    // Функция для перерисовки при изменении размера экрана
    function applyResponsiveStyles() {
        // Удаляем старые вкладки и таблицу
        if (document.documentElement.clientWidth <= belhardSiteData.mobileSizes.table) {
            if (tableContainer) {
                tableContainer.innerHTML = "";
            }
            if (tabsContainer) {
                tabsContainer.innerHTML = "";
            }
        } else {
            // Пересоздаем вкладки и таблицу, если размер экрана больше 800px
            var categories = Object.keys(data);
            createTabs(categories, style); // Пересоздаем вкладки
            createTableForCategory(data[categories[0]], style); // Пересоздаем таблицу для первой категории
            applyStyles(tabsContainer.firstChild, style.tabButtonActive); // Подсвечиваем первую вкладку
        }
    }

    // Вызов функции для инициализации и при изменении размера экрана
    applyResponsiveStyles();
    window.addEventListener("resize", applyResponsiveStyles);
}
