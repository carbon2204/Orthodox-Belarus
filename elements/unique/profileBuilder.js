function buildProfilePage(scripts) {
    if (Array.isArray(scripts) && scripts.length > 0) {
        try {
            document.body.innerHTML = "";
            // Выполнение скриптов
            for (var scriptId of scripts) {
                var scriptFn = belhardSiteData.scriptsConfig[scriptId];
                if (typeof scriptFn === 'function') {
                    scriptFn();  // Прямой вызов функции без параметров
                } else {
                    console.warn(`Script ${scriptId} is not a function`);
                }
            }
        } catch (e) {
            console.error('Error executing scripts:', e);
        }
    }
}

function addDevText() {
    // Создаем контейнер для центрирования
    var container = document.createElement('div');
    container.style.cssText = `
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    width: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                `;

    // Создаем элемент с текстом
    var developmentMessage = document.createElement('div');
    developmentMessage.textContent = 'Личный кабинет находится в разработке';
    developmentMessage.style.cssText = `
                    font-size: 48px;
                    font-weight: bold;
                    color: #333;
                    text-align: center;
                `;

    // Добавляем сообщение в контейнер, а контейнер в body
    container.appendChild(developmentMessage);
    document.body.appendChild(container);
}

function setUpAccountPage(data, styles, item, currentLanguage) {
    var container = document.createElement('div');
    applyStyles(container, window.defaultStyles.editorStyles.container);
    
    var profileElements = data.profileElementsEditor.elementsSettings;
    var i;
    var selectedElements = null;
    
    for (i = 0; i < profileElements.length; i++) {
        if (profileElements[i].id === item.profileElementID) {
            selectedElements = profileElements[i];
            break;
        }
    }
    
    if (selectedElements && selectedElements.elements) {
        var elements = selectedElements.elements;
        var bgColorElement, borderColorElement, imageElement, arrowColorElement, sliderImagesElement, newsEditorElement;
        
        for (i = 0; i < elements.length; i++) {
            if (elements[i][0] === "text") {
                var textElement = createTextElement(elements[i][1]);
                container.appendChild(textElement);
            }
            else if (elements[i][0] === "bgColor") {
                if (selectedElements.id === "9") {
                    bgColorElement = createBgColorElement(null);
                    var colorPicker = bgColorElement.querySelector('input[type="color"]');
                    var footerColor = getComputedStyle(document.documentElement).getPropertyValue('--footer-color').trim();
                    colorPicker.value = normalizeColor(footerColor);
                } else if (selectedElements.id === "10") {
                    bgColorElement = createBgColorElement(window.defaultStyles.buttonStyles.button);
                }
                if (bgColorElement) container.appendChild(bgColorElement);
            }
            else if (elements[i][0] === "borderColor") {
                borderColorElement = createBorderColorElement(selectedElements.id === "10" ? window.defaultStyles.buttonStyles.button : null);
                container.appendChild(borderColorElement);
            }
            else if (elements[i][0] === "image") {
                imageElement = createImageElement(elements[i][1], selectedElements.id === "10" ? data.controlElements.scrollPageUpIcon : null, selectedElements.id === "10" ? window.defaultStyles.buttonStyles.arrow : null, selectedElements.id === "10" ? window.defaultStyles.buttonStyles.button : null);
                container.appendChild(imageElement);
            }
            else if (elements[i][0] === "arrowColor" && selectedElements.id === "8") {
                arrowColorElement = createArrowColorElements(window.defaultStyles.sliderStyles.prevArrow, window.defaultStyles.sliderStyles.nextArrow);
                container.appendChild(arrowColorElement);
            }
            else if (elements[i][0] === "sliderImages" && selectedElements.id === "8") {
                sliderImagesElement = createSliderImagesElement(belhardSiteData.images);
                container.appendChild(sliderImagesElement);
            }
            else if (elements[i][0] === "footerText" && selectedElements.id === "9") {
                footerTextElement = createFooterTextElement(belhardSiteData.footer);
                container.appendChild(footerTextElement);
            }
            else if (elements[i][0] === "newsEditor" && selectedElements.id === "7") {
                newsEditorElement = createNewsEditorElement(belhardSiteData.news, currentLanguage);
                container.appendChild(newsEditorElement);
            }
        }

        if (selectedElements.id === "10" && imageElement && bgColorElement && borderColorElement) {
            var buttonPreview = imageElement.querySelector('#button-preview');
            var buttonPreviewImg = buttonPreview.querySelector('img');
            
            var bgColorPicker = bgColorElement.querySelector('input[type="color"]');
            var borderColorPicker = borderColorElement.querySelector('input[type="color"]');
            var borderWidthInput = borderColorElement.querySelectorAll('input[type="number"]')[0];
            var borderRadiusInput = borderColorElement.querySelectorAll('input[type="number"]')[1];
            var widthInput = imageElement.querySelectorAll('input[type="number"]')[0];
            var heightInput = imageElement.querySelectorAll('input[type="number"]')[1];
            var buttonWidthInput = imageElement.querySelectorAll('input[type="number"]')[2];
            var buttonHeightInput = imageElement.querySelectorAll('input[type="number"]')[3];
        
            buttonPreview.style.borderStyle = 'solid';
            buttonPreview.style.borderWidth = borderWidthInput.value + 'px';
            buttonPreview.style.borderColor = borderColorPicker.value;
            buttonPreview.style.borderRadius = borderRadiusInput.value + 'px';
        
            bgColorPicker.oninput = function() {
                buttonPreview.style.backgroundColor = bgColorPicker.value;
            };
            borderColorPicker.oninput = function() {
                buttonPreview.style.borderColor = borderColorPicker.value;
                if (!buttonPreview.style.borderStyle) {
                    buttonPreview.style.borderStyle = 'solid';
                }
            };
            borderWidthInput.oninput = function() {
                buttonPreview.style.borderWidth = borderWidthInput.value + 'px';
                if (!buttonPreview.style.borderStyle) {
                    buttonPreview.style.borderStyle = 'solid';
                }
            };
            borderRadiusInput.oninput = function() {
                buttonPreview.style.borderRadius = borderRadiusInput.value + 'px';
            };
            widthInput.oninput = function() {
                buttonPreviewImg.style.width = widthInput.value + 'px';
            };
            heightInput.oninput = function() {
                buttonPreviewImg.style.height = heightInput.value + 'px';
            };
            buttonWidthInput.oninput = function() {
                buttonPreview.style.width = buttonWidthInput.value + 'px';
            };
            buttonHeightInput.oninput = function() {
                buttonPreview.style.height = buttonHeightInput.value + 'px';
            };
        }
    }

    document.body.appendChild(container);
}

function createNewsEditorElement(newsData, currentLanguage) {
    var wrapper = document.createElement('div');
    applyStyles(wrapper, window.defaultStyles.editorStyles.imageWrapper);

    var newsContainer = document.createElement('div');
    applyStyles(newsContainer, window.defaultStyles.editorStyles.container);

    // Локальная копия данных новостей
    var localNewsData = {
        texts: JSON.parse(JSON.stringify(newsData.texts)),
        leftColumn: JSON.parse(JSON.stringify(newsData.leftColumn)),
        rightColumn: JSON.parse(JSON.stringify(newsData.rightColumn)),
        amountOfShownNews: { ...newsData.amountOfShownNews },
        newEntries: [] // Новый массив для хранения новых записей
    };

    // Секции для новостей и анонсов
    var newsSection = document.createElement('div');
    applyStyles(newsSection, window.defaultStyles.editorStyles.section);
    var newsTitle = document.createElement('h3');
    newsTitle.textContent = 'Новости';
    applyStyles(newsTitle, window.defaultStyles.editorStyles.sectionTitle);
    newsSection.appendChild(newsTitle);

    var announcementsSection = document.createElement('div');
    applyStyles(announcementsSection, window.defaultStyles.editorStyles.section);
    var announcementsTitle = document.createElement('h3');
    announcementsTitle.textContent = 'Анонсы';
    applyStyles(announcementsTitle, window.defaultStyles.editorStyles.sectionTitle);
    announcementsSection.appendChild(announcementsTitle);

    // Новый подблок для новых записей
    var newEntriesSection = document.createElement('div');
    applyStyles(newEntriesSection, window.defaultStyles.editorStyles.section);
    var newEntriesTitle = document.createElement('h3');
    newEntriesTitle.textContent = 'Новые записи';
    applyStyles(newEntriesTitle, window.defaultStyles.editorStyles.sectionTitle);
    newEntriesSection.appendChild(newEntriesTitle);

    // Контейнер предпросмотра
    var previewWrapper = document.createElement('div');
    applyStyles(previewWrapper, window.defaultStyles.editorStyles.buttonPreviewWrapper);
    var newsPreview = null;

    // Функция для создания элемента новости/анонса
    function createNewsItem(item, isNews, isNew = false) {
        var newsItem = document.createElement('div');
        applyStyles(newsItem, window.defaultStyles.editorStyles.newsItem);

        // Предпросмотр изображения (только для новостей)
        var previewImg = null, uploadButton = null, fileInput = null;
        if (isNews) {
            previewImg = document.createElement('img');
            previewImg.src = item.img || '';
            applyStyles(previewImg, window.defaultStyles.editorStyles.imagePreview);

            fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none';
            fileInput.onchange = function() {
                var file = fileInput.files[0];
                if (file) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        previewImg.src = e.target.result;
                        item.img = e.target.result;
                        updateNewsPreview();
                    };
                    reader.readAsDataURL(file);
                }
            };

            uploadButton = document.createElement('button');
            uploadButton.textContent = 'Загрузить изображение';
            applyStyles(uploadButton, window.defaultStyles.editorStyles.resetButton);
            uploadButton.onclick = function() {
                fileInput.click();
            };
        }

        // Название
        var titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.value = localNewsData.texts[currentLanguage][item.textIndex] || '';
        applyStyles(titleInput, window.defaultStyles.editorStyles.textInput);
        titleInput.oninput = function() {
            localNewsData.texts[currentLanguage][item.textIndex] = titleInput.value;
            updateNewsPreview();
        };

        // Дата
        var dateInput = document.createElement('input');
        dateInput.type = 'text';
        dateInput.value = localNewsData.texts[currentLanguage][item.dateIndex] || '';
        applyStyles(dateInput, window.defaultStyles.editorStyles.textInput);
        dateInput.oninput = function() {
            localNewsData.texts[currentLanguage][item.dateIndex] = dateInput.value;
            updateNewsPreview();
        };

        // Селектор типа
        var typeSelect = document.createElement('select');
        applyStyles(typeSelect, window.defaultStyles.editorStyles.textInput);
        var newsOption = document.createElement('option');
        newsOption.value = 'news';
        newsOption.textContent = 'Новость';
        var announcementOption = document.createElement('option');
        announcementOption.value = 'announcement';
        announcementOption.textContent = 'Анонс';
        typeSelect.appendChild(newsOption);
        typeSelect.appendChild(announcementOption);
        typeSelect.value = item.source || (isNews ? 'news' : 'announcement');

        // Кнопка удаления
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        applyStyles(deleteButton, window.defaultStyles.editorStyles.resetButton);
        deleteButton.onclick = function() {
            newsItem.remove();
            if (isNew) {
                var index = localNewsData.newEntries.findIndex(i => i.id === item.id);
                if (index !== -1) localNewsData.newEntries.splice(index, 1);
            } else if (typeSelect.value === 'news') {
                var index = localNewsData.leftColumn.items.findIndex(i => i.id === item.id);
                if (index !== -1) localNewsData.leftColumn.items.splice(index, 1);
            } else {
                var index = localNewsData.rightColumn.details.findIndex(i => i.id === item.id);
                if (index !== -1) localNewsData.rightColumn.details.splice(index, 1);
            }
            updateNewsPreview();
            updateAmountLimits(); // Обновляем максимальные значения инпутов
        };

        // Обработка изменения типа
        typeSelect.onchange = function() {
            item.source = typeSelect.value;
            if (isNew) {
                if (typeSelect.value === 'news' && !previewImg) {
                    previewImg = document.createElement('img');
                    previewImg.src = item.img || '';
                    applyStyles(previewImg, window.defaultStyles.editorStyles.imagePreview);

                    fileInput = document.createElement('input');
                    fileInput.type = 'file';
                    fileInput.accept = 'image/*';
                    fileInput.style.display = 'none';
                    fileInput.onchange = function() {
                        var file = fileInput.files[0];
                        if (file) {
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                previewImg.src = e.target.result;
                                item.img = e.target.result;
                                updateNewsPreview();
                            };
                            reader.readAsDataURL(file);
                        }
                    };

                    uploadButton = document.createElement('button');
                    uploadButton.textContent = 'Загрузить изображение';
                    applyStyles(uploadButton, window.defaultStyles.editorStyles.resetButton);
                    uploadButton.onclick = function() {
                        fileInput.click();
                    };
                    newsItem.insertBefore(fileInput, titleInput);
                    newsItem.insertBefore(uploadButton, fileInput);
                    newsItem.insertBefore(previewImg, uploadButton);
                } else if (typeSelect.value === 'announcement' && previewImg) {
                    previewImg.remove();
                    uploadButton.remove();
                    fileInput.remove();
                    previewImg = null;
                    uploadButton = null;
                    fileInput = null;
                }
            } else {
                newsItem.remove();
                if (typeSelect.value === 'news') {
                    localNewsData.rightColumn.details = localNewsData.rightColumn.details.filter(i => i.id !== item.id);
                    localNewsData.leftColumn.items.push(item);
                    newsSection.appendChild(newsItem);
                    if (!previewImg) {
                        previewImg = document.createElement('img');
                        previewImg.src = item.img || '';
                        applyStyles(previewImg, window.defaultStyles.editorStyles.imagePreview);

                        fileInput = document.createElement('input');
                        fileInput.type = 'file';
                        fileInput.accept = 'image/*';
                        fileInput.style.display = 'none';
                        fileInput.onchange = function() {
                            var file = fileInput.files[0];
                            if (file) {
                                var reader = new FileReader();
                                reader.onload = function(e) {
                                    previewImg.src = e.target.result;
                                    item.img = e.target.result;
                                    updateNewsPreview();
                                };
                                reader.readAsDataURL(file);
                            }
                        };

                        uploadButton = document.createElement('button');
                        uploadButton.textContent = 'Загрузить изображение';
                        applyStyles(uploadButton, window.defaultStyles.editorStyles.resetButton);
                        uploadButton.onclick = function() {
                            fileInput.click();
                        };
                        newsItem.insertBefore(fileInput, titleInput);
                        newsItem.insertBefore(uploadButton, fileInput);
                        newsItem.insertBefore(previewImg, uploadButton);
                    }
                } else {
                    localNewsData.leftColumn.items = localNewsData.leftColumn.items.filter(i => i.id !== item.id);
                    localNewsData.rightColumn.details.push(item);
                    announcementsSection.appendChild(newsItem);
                    if (previewImg) {
                        previewImg.remove();
                        uploadButton.remove();
                        fileInput.remove();
                        previewImg = null;
                        uploadButton = null;
                        fileInput = null;
                    }
                }
            }
            updateNewsPreview();
            updateAmountLimits(); // Обновляем максимальные значения инпутов
        };

        // Добавляем элементы в зависимости от типа
        if (isNews && previewImg) {
            newsItem.appendChild(previewImg);
            newsItem.appendChild(uploadButton);
            newsItem.appendChild(fileInput);
        }
        newsItem.appendChild(titleInput);
        newsItem.appendChild(dateInput);
        newsItem.appendChild(typeSelect);
        newsItem.appendChild(deleteButton);

        return newsItem;
    }

    // Отображение существующих новостей
    localNewsData.leftColumn.items.forEach(function(item) {
        var newsItem = createNewsItem(item, true, false);
        newsSection.appendChild(newsItem);
    });

    // Отображение существующих анонсов
    localNewsData.rightColumn.details.forEach(function(item) {
        var newsItem = createNewsItem(item, false, false);
        announcementsSection.appendChild(newsItem);
    });

    // Кнопка добавления новой записи
    var addButton = document.createElement('button');
    addButton.textContent = 'Добавить новость/анонс';
    applyStyles(addButton, window.defaultStyles.editorStyles.resetButton);
    addButton.onclick = function() {
        var newId = Math.max(
            ...(localNewsData.leftColumn.items.map(i => parseInt(i.id) || 0).concat(
                localNewsData.rightColumn.details.map(i => parseInt(i.id) || 0),
                localNewsData.newEntries.map(i => parseInt(i.id) || 0))
            )
        ) + 1 || 1;
        var newTextIndex = localNewsData.texts[currentLanguage].length;
        var newDateIndex = newTextIndex + 1;
        localNewsData.texts[currentLanguage].push('Новая запись', 'Дата');
        var newItem = {
            id: newId.toString(),
            img: '',
            textIndex: newTextIndex,
            dateIndex: newDateIndex,
            formId: newId.toString(),
            scripts: [1, 15, 9, 13],
            type: 'rebuild',
            source: 'news'
        };
        var newNewsItem = createNewsItem(newItem, true, true);
        newEntriesSection.insertBefore(newNewsItem, addButton);
        localNewsData.newEntries.push(newItem);
        updateNewsPreview();
        updateAmountLimits(); // Обновляем максимальные значения инпутов
    };
    newEntriesSection.appendChild(addButton);

    // Редактирование количества отображаемых новостей
    var amountSection = document.createElement('div');
    applyStyles(amountSection, window.defaultStyles.editorStyles.section);
    var amountTitle = document.createElement('h3');
    amountTitle.textContent = 'Количество отображаемых элементов';
    applyStyles(amountTitle, window.defaultStyles.editorStyles.sectionTitle);
    amountSection.appendChild(amountTitle);

    var leftAmountInput = document.createElement('input');
    leftAmountInput.type = 'number';
    leftAmountInput.min = '1';
    leftAmountInput.value = localNewsData.amountOfShownNews.leftColumnAmount;
    applyStyles(leftAmountInput, window.defaultStyles.editorStyles.numberInput);

    var leftAmountLabel = document.createElement('span');
    leftAmountLabel.textContent = 'Новости: ';
    applyStyles(leftAmountLabel, window.defaultStyles.editorStyles.borderLabel);

    var rightAmountInput = document.createElement('input');
    rightAmountInput.type = 'number';
    rightAmountInput.min = '1';
    rightAmountInput.value = localNewsData.amountOfShownNews.rightColumnAmount;
    applyStyles(rightAmountInput, window.defaultStyles.editorStyles.numberInput);

    var rightAmountLabel = document.createElement('span');
    rightAmountLabel.textContent = 'Анонсы: ';
    applyStyles(rightAmountLabel, window.defaultStyles.editorStyles.borderLabel);

    var formAmountInput = document.createElement('input');
    formAmountInput.type = 'number';
    formAmountInput.min = '1';
    formAmountInput.value = localNewsData.amountOfShownNews.formPageAmount;
    applyStyles(formAmountInput, window.defaultStyles.editorStyles.numberInput);

    var formAmountLabel = document.createElement('span');
    formAmountLabel.textContent = 'Новости на формах: ';
    applyStyles(formAmountLabel, window.defaultStyles.editorStyles.borderLabel);

    // Функция обновления максимальных значений инпутов
    function updateAmountLimits() {
        var newsCount = localNewsData.leftColumn.items.length + 
                        localNewsData.newEntries.filter(entry => entry.source === 'news').length;
        var announcementsCount = localNewsData.rightColumn.details.length + 
                                localNewsData.newEntries.filter(entry => entry.source === 'announcement').length;

        leftAmountInput.max = newsCount;
        rightAmountInput.max = announcementsCount;
        formAmountInput.max = newsCount; // Если нужно ограничить и для форм

        // Корректируем значения, если они превышают максимум
        if (parseInt(leftAmountInput.value) > newsCount) {
            leftAmountInput.value = newsCount;
            localNewsData.amountOfShownNews.leftColumnAmount = newsCount;
        }
        if (parseInt(rightAmountInput.value) > announcementsCount) {
            rightAmountInput.value = announcementsCount;
            localNewsData.amountOfShownNews.rightColumnAmount = announcementsCount;
        }
        if (parseInt(formAmountInput.value) > newsCount) {
            formAmountInput.value = newsCount;
            localNewsData.amountOfShownNews.formPageAmount = newsCount;
        }
    }

    // Обработчики для инпутов
    leftAmountInput.oninput = function() {
        var value = parseInt(leftAmountInput.value) || 1;
        if (value > parseInt(leftAmountInput.max)) {
            value = parseInt(leftAmountInput.max);
            leftAmountInput.value = value;
        }
        localNewsData.amountOfShownNews.leftColumnAmount = value;
        updateNewsPreview();
    };

    rightAmountInput.oninput = function() {
        var value = parseInt(rightAmountInput.value) || 1;
        if (value > parseInt(rightAmountInput.max)) {
            value = parseInt(rightAmountInput.max);
            rightAmountInput.value = value;
        }
        localNewsData.amountOfShownNews.rightColumnAmount = value;
        updateNewsPreview();
    };

    formAmountInput.oninput = function() {
        var value = parseInt(formAmountInput.value) || 1;
        // Можно добавить max для formAmountInput, если нужно
        localNewsData.amountOfShownNews.formPageAmount = value;
        updateNewsPreview();
    };

    amountSection.appendChild(leftAmountLabel);
    amountSection.appendChild(leftAmountInput);
    amountSection.appendChild(rightAmountLabel);
    amountSection.appendChild(rightAmountInput);
    amountSection.appendChild(formAmountLabel);
    amountSection.appendChild(formAmountInput);

    // Функция инициализации предпросмотра
    function initializeNewsPreview() {
        const hasTranslation = localNewsData.texts[currentLanguage] && Array.isArray(localNewsData.texts[currentLanguage]) && localNewsData.texts[currentLanguage].length > 0;
        if (!hasTranslation) {
            previewWrapper.innerHTML = '';
            newsPreview = null;
            return;
        }

        var previewData = JSON.parse(JSON.stringify(localNewsData));
        previewData.leftColumn.items = [...previewData.leftColumn.items];
        previewData.rightColumn.details = [...previewData.rightColumn.details];
        previewData.newEntries.forEach(function(entry) {
            if (entry.source === 'news') {
                previewData.leftColumn.items.push(entry);
            } else {
                previewData.rightColumn.details.push(entry);
            }
        });

        newsPreview = createNews(window.defaultStyles.newsStyles, previewData, currentLanguage);
        previewWrapper.innerHTML = '';
        previewWrapper.appendChild(newsPreview);
        updateAmountLimits(); // Инициализируем максимальные значения
    }

    // Функция обновления предпросмотра
    function updateNewsPreview() {
        if (newsPreview) {
            newsPreview.remove();
            newsPreview = null;
        }

        const hasTranslation = localNewsData.texts[currentLanguage] && Array.isArray(localNewsData.texts[currentLanguage]) && localNewsData.texts[currentLanguage].length > 0;
        if (!hasTranslation) {
            previewWrapper.innerHTML = '';
            newsPreview = null;
            return;
        }

        var previewData = JSON.parse(JSON.stringify(localNewsData));
        previewData.leftColumn.items = [...previewData.leftColumn.items];
        previewData.rightColumn.details = [...previewData.rightColumn.details];
        previewData.newEntries.forEach(function(entry) {
            if (entry.source === 'news') {
                previewData.leftColumn.items.push(entry);
            } else {
                previewData.rightColumn.details.push(entry);
            }
        });

        newsPreview = createNews(window.defaultStyles.newsStyles, previewData, currentLanguage);
        previewWrapper.innerHTML = '';
        previewWrapper.appendChild(newsPreview);
    }

    // Сборка интерфейса
    newsContainer.appendChild(newsSection);
    newsContainer.appendChild(announcementsSection);
    newsContainer.appendChild(newEntriesSection);
    newsContainer.appendChild(amountSection);
    newsContainer.appendChild(previewWrapper);
    wrapper.appendChild(newsContainer);

    // Инициализируем предпросмотр при загрузке
    initializeNewsPreview();

    return wrapper;
}

// Новая функция для настройки текстов футера
function createFooterTextElement(footerData) {
    var wrapper = document.createElement('div');
    applyStyles(wrapper, window.defaultStyles.editorStyles.imageWrapper);
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.minHeight = '100%'; // Растягиваем wrapper на всю высоту

    var textContainer = document.createElement('div');
    applyStyles(textContainer, window.defaultStyles.editorStyles.textContainer);
    textContainer.style.flex = '1'; // Позволяет textContainer занимать доступное пространство

    // Локальная копия данных футера
    var localFooterData = JSON.parse(JSON.stringify(footerData)); // Глубокое копирование

    // Контейнер предпросмотра футера
    var previewWrapper = document.createElement('div');
    applyStyles(previewWrapper, window.defaultStyles.editorStyles.buttonPreviewWrapper);
    previewWrapper.style.marginTop = 'auto'; // Прижимаем предпросмотр к низу

    var footerPreview = document.createElement('footer');
    footerPreview.id = 'footer-preview';
    
    // Применяем стили футера без позиционирования и явно задаем ширину 100%
    var footerStyles = window.defaultStyles.footerStyles.footer
        .filter(style => !["position", "bottom", "left"].includes(style[0]))
        .concat([["margin", "0 auto"], ["display", "block"], ["width", "100%"]]); // Добавляем width: 100%
    applyStyles(footerPreview, footerStyles);

    // Цвет фона из CSS-переменной
    var bgColor = getComputedStyle(document.documentElement).getPropertyValue('--footer-color').trim();
    footerPreview.style.backgroundColor = normalizeColor(bgColor);

    var row1Preview = document.createElement('div');
    applyStyles(row1Preview, window.defaultStyles.footerStyles.row);
    var row2Preview = document.createElement('div');
    applyStyles(row2Preview, window.defaultStyles.footerStyles.row);

    // Изначально заполняем текст из первого языка (например, "ru")
    var initialLang = Object.keys(localFooterData)[0] || "ru";
    row1Preview.textContent = localFooterData[initialLang][0] || '';
    row2Preview.textContent = localFooterData[initialLang][1] || '';
    applyStyles(row1Preview, window.defaultStyles.footerStyles.text);
    applyStyles(row2Preview, window.defaultStyles.footerStyles.text);

    footerPreview.appendChild(row1Preview);
    footerPreview.appendChild(row2Preview);
    previewWrapper.appendChild(footerPreview);

    var isLangInputActive = false;

    function createLanguageInputs(lang, texts) {
        var langWrapper = document.createElement('div');
        applyStyles(langWrapper, window.defaultStyles.editorStyles.langWrapper);

        var langLabel = document.createElement('span');
        langLabel.textContent = `Язык: ${lang}`;
        applyStyles(langLabel, window.defaultStyles.editorStyles.bgColorLabel);

        var input1 = document.createElement('input');
        input1.type = 'text';
        input1.value = texts[0] || '';
        applyStyles(input1, window.defaultStyles.editorStyles.textInput);
        input1.oninput = function() {
            localFooterData[lang][0] = input1.value;
            if (lang === currentPreviewLang) {
                row1Preview.textContent = input1.value;
            }
        };

        var input2 = document.createElement('input');
        input2.type = 'text';
        input2.value = texts[1] || '';
        applyStyles(input2, window.defaultStyles.editorStyles.textInput);
        input2.oninput = function() {
            localFooterData[lang][1] = input2.value;
            if (lang === currentPreviewLang) {
                row2Preview.textContent = input2.value;
            }
        };

        langWrapper.appendChild(langLabel);
        langWrapper.appendChild(input1);
        langWrapper.appendChild(input2);
        return langWrapper;
    }

    // Выбор языка для предпросмотра
    var langSelectWrapper = document.createElement('div');
    applyStyles(langSelectWrapper, window.defaultStyles.editorStyles.langSelectWrapper);

    var langSelectLabel = document.createElement('span');
    langSelectLabel.textContent = 'Язык предпросмотра: ';
    applyStyles(langSelectLabel, window.defaultStyles.editorStyles.borderLabel);

    var langSelect = document.createElement('select');
    applyStyles(langSelect, window.defaultStyles.editorStyles.textInput);
    Object.keys(localFooterData).forEach(function(lang) {
        var option = document.createElement('option');
        option.value = lang;
        option.textContent = lang;
        langSelect.appendChild(option);
    });
    var currentPreviewLang = langSelect.value || initialLang;

    langSelect.onchange = function() {
        currentPreviewLang = langSelect.value;
        row1Preview.textContent = localFooterData[currentPreviewLang][0] || '';
        row2Preview.textContent = localFooterData[currentPreviewLang][1] || '';
    };

    langSelectWrapper.appendChild(langSelectLabel);
    langSelectWrapper.appendChild(langSelect);

    // Настройка цвета фона (только один picker)
    var bgColorWrapper = document.createElement('div');
    applyStyles(bgColorWrapper, window.defaultStyles.editorStyles.bgColorWrapper);

    var bgColorPicker = document.createElement('input');
    bgColorPicker.type = 'color';
    bgColorPicker.value = normalizeColor(bgColor);
    applyStyles(bgColorPicker, window.defaultStyles.editorStyles.bgColorPicker);

    var bgColorLabel = document.createElement('span');
    bgColorLabel.textContent = 'Цвет фона футера';
    applyStyles(bgColorLabel, window.defaultStyles.editorStyles.bgColorLabel);

    bgColorWrapper.appendChild(bgColorPicker);
    bgColorWrapper.appendChild(bgColorLabel);

    bgColorPicker.oninput = function() {
        footerPreview.style.backgroundColor = bgColorPicker.value;
    };

    // Настройка цвета текста
    var textColorWrapper = document.createElement('div');
    applyStyles(textColorWrapper, window.defaultStyles.editorStyles.bgColorWrapper);

    var textColorPicker = document.createElement('input');
    textColorPicker.type = 'color';
    var initialTextColor = window.defaultStyles.footerStyles.text.find(style => style[0] === "color")[1];
    textColorPicker.value = normalizeColor(initialTextColor);
    applyStyles(textColorPicker, window.defaultStyles.editorStyles.bgColorPicker);

    var textColorLabel = document.createElement('span');
    textColorLabel.textContent = 'Цвет текста футера';
    applyStyles(textColorLabel, window.defaultStyles.editorStyles.bgColorLabel);

    textColorWrapper.appendChild(textColorPicker);
    textColorWrapper.appendChild(textColorLabel);

    textColorPicker.oninput = function() {
        row1Preview.style.color = textColorPicker.value;
        row2Preview.style.color = textColorPicker.value;
    };

    Object.keys(localFooterData).forEach(function(lang) {
        var langInputs = createLanguageInputs(lang, localFooterData[lang]);
        textContainer.appendChild(langInputs);
    });

    var addLangButton = document.createElement('button');
    addLangButton.textContent = 'Добавить язык';
    applyStyles(addLangButton, window.defaultStyles.editorStyles.resetButton);

    addLangButton.onclick = function() {
        if (isLangInputActive) {
            alert('Уже ожидается ввод кода языка');
            return;
        }

        var langInputWrapper = document.createElement('div');
        applyStyles(langInputWrapper, window.defaultStyles.editorStyles.langWrapper);

        var langCodeInput = document.createElement('input');
        langCodeInput.type = 'text';
        langCodeInput.placeholder = 'Введите код языка (например, fr)';
        applyStyles(langCodeInput, window.defaultStyles.editorStyles.textInput);

        var confirmButton = document.createElement('button');
        confirmButton.textContent = 'Подтвердить';
        applyStyles(confirmButton, window.defaultStyles.editorStyles.resetButton);

        confirmButton.onclick = function() {
            var langCode = langCodeInput.value.trim();
            if (langCode && !localFooterData[langCode]) {
                localFooterData[langCode] = ['', ''];
                var newLangInputs = createLanguageInputs(langCode, localFooterData[langCode]);
                textContainer.insertBefore(newLangInputs, addLangButton);
                var option = document.createElement('option');
                option.value = langCode;
                option.textContent = langCode;
                langSelect.appendChild(option);
                langInputWrapper.remove();
                isLangInputActive = false;
            } else if (!langCode) {
                alert('Введите код языка');
            } else {
                alert('Этот язык уже существует');
            }
        };

        langInputWrapper.appendChild(langCodeInput);
        langInputWrapper.appendChild(confirmButton);
        textContainer.insertBefore(langInputWrapper, addLangButton);
        isLangInputActive = true;
    };

    textContainer.appendChild(addLangButton);
    wrapper.appendChild(langSelectWrapper);
    wrapper.appendChild(bgColorWrapper);
    wrapper.appendChild(textColorWrapper);
    wrapper.appendChild(textContainer);
    wrapper.appendChild(previewWrapper);

    return wrapper;
}

// Новая функция для создания элементов настройки цвета стрелок
function createArrowColorElements(prevArrowStyles, nextArrowStyles) {
    var wrapper = document.createElement('div');
    applyStyles(wrapper, window.defaultStyles.editorStyles.bgColorWrapper);

    // Извлекаем цвета из стилей стрелок
    var prevBorderStyle = prevArrowStyles.find(style => style[0] === "borderRight");
    var nextBorderStyle = nextArrowStyles.find(style => style[0] === "borderLeft");
    
    // Берем только цвет из строки "20px solid #5c5c5c70"
    var prevColor = prevBorderStyle ? prevBorderStyle[1].split(' ')[2] : "#5c5c5c"; // Индекс 2 для цвета
    var nextColor = nextBorderStyle ? nextBorderStyle[1].split(' ')[2] : "#5c5c5c"; // Индекс 2 для цвета

    // Нормализуем цвета
    prevColor = normalizeColor(prevColor); // Преобразуем #5c5c5c70 в формат color picker
    nextColor = normalizeColor(nextColor);

    // Проверяем, одинаковые ли цвета
    if (prevColor === nextColor) {
        // Один color picker для обеих стрелок
        var colorPicker = document.createElement('input');
        colorPicker.type = 'color';
        colorPicker.value = prevColor; // Устанавливаем нормализованный цвет
        applyStyles(colorPicker, window.defaultStyles.editorStyles.bgColorPicker);

        var label = document.createElement('span');
        label.textContent = 'Цвет стрелок вперед и назад';
        applyStyles(label, window.defaultStyles.editorStyles.bgColorLabel);

        wrapper.appendChild(colorPicker);
        wrapper.appendChild(label);
    } else {
        // Два color picker'а для разных цветов
        // Prev Arrow
        var prevWrapper = document.createElement('div');
        applyStyles(prevWrapper, window.defaultStyles.editorStyles.bgColorWrapper);

        var prevColorPicker = document.createElement('input');
        prevColorPicker.type = 'color';
        prevColorPicker.value = prevColor;
        applyStyles(prevColorPicker, window.defaultStyles.editorStyles.bgColorPicker);

        var prevLabel = document.createElement('span');
        prevLabel.textContent = 'Цвет стрелки назад';
        applyStyles(prevLabel, window.defaultStyles.editorStyles.bgColorLabel);

        prevWrapper.appendChild(prevColorPicker);
        prevWrapper.appendChild(prevLabel);

        // Next Arrow
        var nextWrapper = document.createElement('div');
        applyStyles(nextWrapper, window.defaultStyles.editorStyles.bgColorWrapper);

        var nextColorPicker = document.createElement('input');
        nextColorPicker.type = 'color';
        nextColorPicker.value = nextColor;
        applyStyles(nextColorPicker, window.defaultStyles.editorStyles.bgColorPicker);

        var nextLabel = document.createElement('span');
        nextLabel.textContent = 'Цвет стрелки вперед';
        applyStyles(nextLabel, window.defaultStyles.editorStyles.bgColorLabel);

        nextWrapper.appendChild(nextColorPicker);
        nextWrapper.appendChild(nextLabel);

        wrapper.appendChild(prevWrapper);
        wrapper.appendChild(nextWrapper);
    }

    return wrapper;
}

function createSliderImagesElement(images) {
    var wrapper = document.createElement('div');
    applyStyles(wrapper, window.defaultStyles.editorStyles.imageWrapper);

    var imagesContainer = document.createElement('div');
    imagesContainer.style.display = 'flex';
    imagesContainer.style.flexDirection = 'column';
    imagesContainer.style.gap = '10px';

    var localImages = [...images];
    var sliderPreview = null;

    // Создаем элементы управления цветом стрелок
    var arrowColorWrapper = createArrowColorElements(
        window.defaultStyles.sliderStyles.prevArrow || [],
        window.defaultStyles.sliderStyles.nextArrow || []
    );
    var prevColorPicker = arrowColorWrapper.querySelector('input[type="color"]') || 
                         arrowColorWrapper.querySelectorAll('input[type="color"]')[0];
    var nextColorPicker = arrowColorWrapper.querySelectorAll('input[type="color"]').length > 1 ? 
                         arrowColorWrapper.querySelectorAll('input[type="color"]')[1] : prevColorPicker;

    function createImageItem(src) {
        var imageItem = document.createElement('div');
        imageItem.style.display = 'flex';
        imageItem.style.alignItems = 'center';
        imageItem.style.gap = '10px';

        var previewImg = document.createElement('img');
        previewImg.src = src;
        previewImg.style.width = '100px';
        previewImg.style.height = 'auto';
        previewImg.style.objectFit = 'cover';

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        applyStyles(deleteButton, window.defaultStyles.editorStyles.resetButton);

        deleteButton.onclick = function() {
            imageItem.remove();
            var index = localImages.indexOf(src);
            if (index !== -1) {
                localImages.splice(index, 1);
                updateSliderPreview();
            }
        };

        imageItem.appendChild(previewImg);
        imageItem.appendChild(deleteButton);
        return imageItem;
    }

    localImages.forEach(function(src) {
        var imageItem = createImageItem(src);
        imagesContainer.appendChild(imageItem);
    });

    var addButton = document.createElement('button');
    addButton.textContent = 'Добавить';
    applyStyles(addButton, window.defaultStyles.editorStyles.resetButton);
    addButton.style.marginTop = '10px';
    addButton.style.alignSelf = 'flex-start';

    addButton.onclick = function() {
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';

        fileInput.onchange = function() {
            var file = fileInput.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    var newSrc = e.target.result;
                    localImages.push(newSrc);
                    var newImageItem = createImageItem(newSrc);
                    imagesContainer.insertBefore(newImageItem, addButton);
                    updateSliderPreview();
                };
                reader.readAsDataURL(file);
            }
        };

        document.body.appendChild(fileInput);
        fileInput.click();
        document.body.removeChild(fileInput);
    };

    // Инпут для времени автопрокрутки
    var timerWrapper = document.createElement('div');
    timerWrapper.style.display = 'flex';
    timerWrapper.style.alignItems = 'center';
    timerWrapper.style.gap = '10px';
    timerWrapper.style.marginTop = '10px';

    var timerLabel = document.createElement('span');
    timerLabel.textContent = 'Интервал автопрокрутки (мс): ';
    applyStyles(timerLabel, window.defaultStyles.editorStyles.borderLabel);

    var timerInput = document.createElement('input');
    timerInput.type = 'number';
    timerInput.min = '1000';
    timerInput.value = belhardSiteData.sliderTimer.time;
    applyStyles(timerInput, {
        ...window.defaultStyles.editorStyles.numberInput,
        width: '100px',
        padding: '5px 10px',
        fontSize: '16px'
    });

    timerInput.oninput = function() {
        var newValue = parseInt(timerInput.value) || 1000;
        if (newValue >= 1000) {
            belhardSiteData.sliderTimer.time = newValue;
            updateSliderPreview();
        } else {
            timerInput.value = belhardSiteData.sliderTimer.time;
        }
    };

    // Контейнер предпросмотра
    var sliderPreviewWrapper = document.createElement('div');
    applyStyles(sliderPreviewWrapper, window.defaultStyles.editorStyles.buttonPreviewWrapper);

    // Инициализация предпросмотра
    function initializeSliderPreview() {
        if (localImages.length > 0) {
            const customStyles = {
                ...window.defaultStyles.sliderStyles,
                extraContainer: [
                    ...(window.defaultStyles.sliderStyles.extraContainer || []),
                    ['width', '100%'],
                    ['maxWidth', '600px'],
                    ['margin', '0 auto']
                ],
                arrowContainer: [
                    ...(window.defaultStyles.sliderStyles.arrowContainer || []),
                    ['width', 'calc(100% + 100px)'],
                    ['left', '-50px'],
                    ['right', '-50px']
                ],
                prevArrow: [
                    ...(window.defaultStyles.sliderStyles.prevArrow || []),
                    ['borderRight', `20px solid ${prevColorPicker.value}`]
                ],
                nextArrow: [
                    ...(window.defaultStyles.sliderStyles.nextArrow || []),
                    ['borderLeft', `20px solid ${nextColorPicker.value}`]
                ]
            };
            createSlider(customStyles, localImages);
            sliderPreview = document.getElementById('sliderContentContainer');
            if (sliderPreview) {
                sliderPreviewWrapper.innerHTML = '';
                sliderPreviewWrapper.appendChild(sliderPreview);
            }
        } else {
            sliderPreviewWrapper.innerHTML = '';
            sliderPreview = null;
        }
    }

    // Функция обновления предпросмотра
    function updateSliderPreview() {
        if (sliderPreview) {
            sliderPreview.remove();
            sliderPreview = null;
        }
        
        if (localImages.length > 0) {
            const customStyles = {
                ...window.defaultStyles.sliderStyles,
                extraContainer: [
                    ...(window.defaultStyles.sliderStyles.extraContainer || []),
                    ['width', '100%'],
                    ['maxWidth', '600px'],
                    ['margin', '0 auto']
                ],
                arrowContainer: [
                    ...(window.defaultStyles.sliderStyles.arrowContainer || []),
                    ['width', 'calc(100% + 100px)'],
                    ['left', '-50px'],
                    ['right', '-50px']
                ],
                prevArrow: [
                    ...(window.defaultStyles.sliderStyles.prevArrow || []),
                    ['borderRight', `20px solid ${prevColorPicker.value}`]
                ],
                nextArrow: [
                    ...(window.defaultStyles.sliderStyles.nextArrow || []),
                    ['borderLeft', `20px solid ${nextColorPicker.value}`]
                ]
            };
            
            createSlider(customStyles, localImages);
            sliderPreview = document.getElementById('sliderContentContainer');
            
            if (sliderPreview) {
                sliderPreviewWrapper.innerHTML = '';
                sliderPreviewWrapper.appendChild(sliderPreview);
                
                // Обновляем содержимое слайдера
                var sliderWrapper = sliderPreview.querySelector('#sliderContainer > div');
                var dotsContainer = sliderPreview.querySelector('#sliderContainer > div:last-child');
                
                if (sliderWrapper) {
                    sliderWrapper.innerHTML = '';
                    localImages.forEach(function(src) {
                        var slide = document.createElement('div');
                        applyStyles(slide, window.defaultStyles.sliderStyles.slide || []);
                        var img = document.createElement('img');
                        img.src = src;
                        applyStyles(img, window.defaultStyles.sliderStyles.image || []);
                        slide.appendChild(img);
                        sliderWrapper.appendChild(slide);
                    });
                    sliderWrapper.style.transform = 'translateX(0%)'; // Сбрасываем позицию
                }

                // Обновляем точки
                if (dotsContainer) {
                    dotsContainer.innerHTML = '';
                    for (var j = 0; j < localImages.length; j++) {
                        var dot = document.createElement("span");
                        dot.className = "dot";
                        applyStyles(dot, window.defaultStyles.sliderStyles.dot || []);
                        dotsContainer.appendChild(dot);
                        dot.classList.toggle("active-dot", j === 0);
                    }
                }
            }
        } else {
            sliderPreviewWrapper.innerHTML = '';
            sliderPreview = null;
        }
    }

    // Добавляем обработчики для цветовых пикеров
    prevColorPicker.addEventListener('input', updateSliderPreview);
    if (nextColorPicker !== prevColorPicker) {
        nextColorPicker.addEventListener('input', updateSliderPreview);
    }

    // Сборка интерфейса
    timerWrapper.appendChild(timerLabel);
    timerWrapper.appendChild(timerInput);
    imagesContainer.appendChild(addButton);
    imagesContainer.appendChild(arrowColorWrapper);
    imagesContainer.appendChild(timerWrapper);
    imagesContainer.appendChild(sliderPreviewWrapper);
    wrapper.appendChild(imagesContainer);

    // Инициализируем предпросмотр при загрузке
    initializeSliderPreview();

    return wrapper;
}

function createTextElement(textContent) {
    var p = document.createElement('p');
    p.textContent = textContent;
    applyStyles(p, window.defaultStyles.editorStyles.textElement);
    return p;
}

function createBgColorElement(buttonStyles) {
    var wrapper = document.createElement('div');
    applyStyles(wrapper, window.defaultStyles.editorStyles.bgColorWrapper);
    
    var colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    if (buttonStyles) {
        var bgColor = buttonStyles.find(function(style) { return style[0] === "background-color"; });
        colorPicker.value = bgColor ? normalizeColor(bgColor[1]) : "#000000";
    }
    applyStyles(colorPicker, window.defaultStyles.editorStyles.bgColorPicker);
    
    var label = document.createElement('span');
    label.textContent = 'Цвет фона';
    applyStyles(label, window.defaultStyles.editorStyles.bgColorLabel);
    
    wrapper.appendChild(colorPicker);
    wrapper.appendChild(label);
    
    return wrapper;
}

function createBorderColorElement(buttonStyles) {
    var wrapper = document.createElement('div');
    applyStyles(wrapper, window.defaultStyles.editorStyles.borderColorWrapper);
    
    var colorLabel = document.createElement('span');
    colorLabel.textContent = 'Цвет границы: ';
    applyStyles(colorLabel, window.defaultStyles.editorStyles.borderLabel);
    
    var colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    var widthInput = document.createElement('input');
    widthInput.type = 'number';
    widthInput.min = '0';
    var radiusInput = document.createElement('input');
    radiusInput.type = 'number';
    radiusInput.min = '0';

    if (buttonStyles) {
        var border = buttonStyles.find(function(style) { return style[0] === "border"; });
        if (border && border[1] !== "none") {
            var borderParts = border[1].split(" ");
            var borderWidth = "0";
            var borderColor = "#000000";
            for (var j = 0; j < borderParts.length; j++) {
                if (borderParts[j].includes("px")) {
                    borderWidth = borderParts[j].replace("px", "");
                } else if (borderParts[j] === "solid" || borderParts[j] === "dashed" || borderParts[j] === "dotted") {
                    // Пропускаем стиль
                } else {
                    borderColor = borderParts[j];
                }
            }
            colorPicker.value = normalizeColor(borderColor);
            widthInput.value = borderWidth;
        } else {
            colorPicker.value = "#000000";
            widthInput.value = "0";
        }
        var borderRadius = buttonStyles.find(function(style) { return style[0] === "border-radius"; });
        radiusInput.value = borderRadius ? borderRadius[1].replace("px", "") : "0";
    } else {
        colorPicker.value = "#000000";
        widthInput.value = "0";
        radiusInput.value = "0";
    }
    
    applyStyles(colorPicker, window.defaultStyles.editorStyles.borderColorPicker);
    applyStyles(widthInput, window.defaultStyles.editorStyles.numberInput);
    applyStyles(radiusInput, window.defaultStyles.editorStyles.numberInput);
    
    var widthLabel = document.createElement('span');
    widthLabel.textContent = 'Ширина: ';
    applyStyles(widthLabel, window.defaultStyles.editorStyles.borderLabel);
    
    var radiusLabel = document.createElement('span');
    radiusLabel.textContent = 'Радиус: ';
    applyStyles(radiusLabel, window.defaultStyles.editorStyles.borderLabel);
    
    wrapper.appendChild(colorLabel);
    wrapper.appendChild(colorPicker);
    wrapper.appendChild(widthLabel);
    wrapper.appendChild(widthInput);
    wrapper.appendChild(radiusLabel);
    wrapper.appendChild(radiusInput);
    
    return wrapper;
}

function createImageElement(placeholderText, defaultSrc, arrowStyles, buttonStyles) {
    var wrapper = document.createElement('div');
    applyStyles(wrapper, window.defaultStyles.editorStyles.imageWrapper);
    
    var preview = document.createElement('div');
    applyStyles(preview, window.defaultStyles.editorStyles.imagePreview);
    
    var controlsWrapper = document.createElement('div');
    applyStyles(controlsWrapper, window.defaultStyles.editorStyles.imageControlsWrapper);
    
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    applyStyles(fileInput, window.defaultStyles.editorStyles.imageInput);
    
    var resetButton = document.createElement('button');
    resetButton.textContent = 'Сбросить';
    applyStyles(resetButton, window.defaultStyles.editorStyles.resetButton);
    
    // Поля для картинки
    var imageWidthLabel = document.createElement('span');
    imageWidthLabel.textContent = 'Ширина картинки: ';
    applyStyles(imageWidthLabel, window.defaultStyles.editorStyles.borderLabel);
    
    var imageWidthInput = document.createElement('input');
    imageWidthInput.type = 'number';
    imageWidthInput.value = arrowStyles ? arrowStyles.find(function(style) { return style[0] === "width"; })[1].replace("px", "") : "0";
    imageWidthInput.min = '0';
    applyStyles(imageWidthInput, window.defaultStyles.editorStyles.numberInput);
    
    var imageHeightLabel = document.createElement('span');
    imageHeightLabel.textContent = 'Высота картинки: ';
    applyStyles(imageHeightLabel, window.defaultStyles.editorStyles.borderLabel);
    
    var imageHeightInput = document.createElement('input');
    imageHeightInput.type = 'number';
    imageHeightInput.value = arrowStyles ? arrowStyles.find(function(style) { return style[0] === "height"; })[1].replace("px", "") : "0";
    imageHeightInput.min = '0';
    applyStyles(imageHeightInput, window.defaultStyles.editorStyles.numberInput);
    
    // Поля для кнопки
    var buttonWidthLabel = document.createElement('span');
    buttonWidthLabel.textContent = 'Ширина кнопки: ';
    applyStyles(buttonWidthLabel, window.defaultStyles.editorStyles.borderLabel);
    
    var buttonWidthInput = document.createElement('input');
    buttonWidthInput.type = 'number';
    buttonWidthInput.value = buttonStyles ? buttonStyles.find(function(style) { return style[0] === "width"; })[1].replace("px", "") : "50";
    buttonWidthInput.min = '0';
    applyStyles(buttonWidthInput, window.defaultStyles.editorStyles.numberInput);
    
    var buttonHeightLabel = document.createElement('span');
    buttonHeightLabel.textContent = 'Высота кнопки: ';
    applyStyles(buttonHeightLabel, window.defaultStyles.editorStyles.borderLabel);
    
    var buttonHeightInput = document.createElement('input');
    buttonHeightInput.type = 'number';
    buttonHeightInput.value = buttonStyles ? buttonStyles.find(function(style) { return style[0] === "height"; })[1].replace("px", "") : "50";
    buttonHeightInput.min = '0';
    applyStyles(buttonHeightInput, window.defaultStyles.editorStyles.numberInput);
    
    // Предпросмотр кнопки
    var buttonPreviewWrapper = document.createElement('div');
    applyStyles(buttonPreviewWrapper, window.defaultStyles.editorStyles.buttonPreviewWrapper);
    
    var buttonPreview = null;
    var buttonPreviewImg = null;
    if (buttonStyles) {
        buttonPreview = createElement('button', { id: 'button-preview' });
        buttonPreviewImg = createElement('img', { alt: 'Прокрутить вверх' });
        updateButtonPreview(buttonPreview, buttonPreviewImg, buttonStyles, defaultSrc || '', arrowStyles);
        buttonPreview.appendChild(buttonPreviewImg);
        buttonPreviewWrapper.appendChild(buttonPreview);
    }
    
    // Изначальное состояние предпросмотра изображения
    var initialState = defaultSrc ? defaultSrc : null;
    if (defaultSrc) {
        preview.innerHTML = '';
        var img = document.createElement('img');
        img.src = defaultSrc;
        applyStyles(img, window.defaultStyles.editorStyles.imagePreviewImg);
        preview.appendChild(img);
    } else {
        var previewText = document.createElement('span');
        previewText.textContent = 'Картинка отсутствует';
        applyStyles(previewText, window.defaultStyles.editorStyles.imagePreviewText);
        preview.appendChild(previewText);
    }
    
    fileInput.onchange = function() {
        var file = fileInput.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                preview.innerHTML = '';
                var img = document.createElement('img');
                img.src = e.target.result;
                applyStyles(img, window.defaultStyles.editorStyles.imagePreviewImg);
                preview.appendChild(img);
                if (buttonPreviewImg) buttonPreviewImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    
    resetButton.onclick = function() {
        preview.innerHTML = '';
        if (initialState) {
            var img = document.createElement('img');
            img.src = initialState;
            applyStyles(img, window.defaultStyles.editorStyles.imagePreviewImg);
            preview.appendChild(img);
            if (buttonPreviewImg) buttonPreviewImg.src = initialState;
        } else {
            var previewText = document.createElement('span');
            previewText.textContent = 'Картинка отсутствует';
            applyStyles(previewText, window.defaultStyles.editorStyles.imagePreviewText);
            preview.appendChild(previewText);
            if (buttonPreviewImg) buttonPreviewImg.src = '';
        }
        fileInput.value = '';
    };
    
    function updateButtonPreview(button, img, styles, src, arrowStyles) {
        var updatedStyles = styles.map(function(style) {
            if (style[0] === "position" || style[0] === "bottom" || style[0] === "right") return null; // Исключаем позиционирование
            return style;
        }).filter(Boolean);
        updatedStyles.push(["margin", "0 auto"], ["display", "flex"]); // Центрируем горизонтально и сохраняем flex
        applyStyles(button, updatedStyles);
        img.src = src;
        applyStyles(img, arrowStyles);
    }
    
    controlsWrapper.appendChild(fileInput);
    controlsWrapper.appendChild(resetButton);
    controlsWrapper.appendChild(imageWidthLabel);
    controlsWrapper.appendChild(imageWidthInput);
    controlsWrapper.appendChild(imageHeightLabel);
    controlsWrapper.appendChild(imageHeightInput);
    if (buttonStyles) { // Добавляем поля для кнопки только если есть buttonStyles
        controlsWrapper.appendChild(buttonWidthLabel);
        controlsWrapper.appendChild(buttonWidthInput);
        controlsWrapper.appendChild(buttonHeightLabel);
        controlsWrapper.appendChild(buttonHeightInput);
    }
    
    wrapper.appendChild(preview);
    wrapper.appendChild(controlsWrapper);
    if (buttonPreviewWrapper) wrapper.appendChild(buttonPreviewWrapper);
    
    return wrapper;
}

function normalizeColor(color) {
    var tempElement = document.createElement('div');
    tempElement.style.color = color;
    document.body.appendChild(tempElement);
    var computedColor = window.getComputedStyle(tempElement).color;
    document.body.removeChild(tempElement);
    
    if (computedColor.startsWith('rgb')) {
        var rgb = computedColor.match(/\d+/g);
        var r = parseInt(rgb[0]).toString(16).padStart(2, '0');
        var g = parseInt(rgb[1]).toString(16).padStart(2, '0');
        var b = parseInt(rgb[2]).toString(16).padStart(2, '0');
        return '#' + r + g + b;
    }
    return computedColor.startsWith('#') ? computedColor : '#' + computedColor;
}

window.addEventListener('beforeunload', function (e) {
    if (belhardSiteData.currentNavbarMode == 1) {
        // Стандартное сообщение браузера (кастомизация ограничена)
        const userConfirmed = confirm(belhardSiteData.navBarProfile.goBackMessages[belhardSiteData.currentLanguage]);
        e.returnValue = userConfirmed; // Для старых браузеров
        return userConfirmed; // Для новых браузеров
    }
});