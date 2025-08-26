const globalStyles = `
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.9); /* Небольшое уменьшение размера в начале */
    }
    to {
        opacity: 1;
        transform: scale(1); /* Возвращение к нормальному размеру */
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}


:root {
    --hiddenMenuColor: #2C4A6E; /* Цвет скрытого меню */
    --counter: rgb(250, 252, 255); /* Цвет для счетчиков */
    /* Основные цвета страницы */
    --primary-color: #1E3A5F; /* Основной цвет для меню навигации */
    --hover-color: #5A789A; /* Цвет фона пункта меню при наведении */
    --child-color: #2C4A6E; /* Цвет фона для вложенных элементов первого уровня */
    --grandChild-color: #3E5C7F; /* Цвет фона для вложенных элементов второго уровня */
    --text-color: rgb(250, 252, 255); /* Основной цвет текста */
    --footer-color: #303030; /*цвет для футера*/
}

* {
    margin: 0; /* Убираем внешние отступы у всех элементов */
    padding: 0; /* Убираем внутренние отступы */
    box-sizing: border-box; /* Границы и отступы не увеличивают размеры элементов */
}

a{
    cursor: pointer;                /* Устанавливает курсор указателя при наведении */
}

.dot {
    display: inline-block; /* Точка отображается как встроенный блочный элемент */
    width: 5px; /* Ширина точки */
    height: 5px; /* Высота точки */
    margin: 0 5px; /* Отступы слева и справа */
    border-radius: 50%; /* Делает точку круглой */
    cursor: pointer; /* Курсор в виде указателя при наведении */
    background-color: #b7bcc3; /* Цвет неактивной точки */
    transition: background-color 0.3s ease; /* Плавное изменение цвета точки */
}

/* Активная точка */
.dot.active-dot {
    background-color: #0C4DA2; /* Цвет активной точки */
}

/* Класс для фиксированного футера */
.footer-fixed {
    width: 100%; /* Ширина футера */
    background-color: var(--footer-color); /* Цвет фона футера */
    padding: 10px 0; /* Отступы внутри футера */
    position: fixed; /* Фиксированное позиционирование */
    left: 0; /* Слева прижато */
    bottom: 0; /* Снизу прижато */
}

/* Класс для обычного футера */
.footer-relative {
    width: 100%; /* Ширина футера */
    background-color: var(--footer-color); /* Цвет фона футера */
    padding: 10px 0; /* Отступы внутри футера */
    position: relative; /* Относительное позиционирование */
    margin-top: auto; /* Для того чтобы футер располагался внизу */
    left: 0; /* Слева прижато */
    bottom: 0; /* Снизу прижато */
}

body {
    background-repeat: no-repeat; /* Фон не повторяется */
    background-size: cover; /* Фон покрывает весь экран */
    background-position: center; /* Фон по центру */
    background-color: rgb(248, 248, 248); /* Цвет фона страницы */
    padding-top: 50px; /* Отступ сверху для других элементов, чтобы они не перекрывались навбаром */
    overflow-y: auto; /* Вертикальная прокрутка при необходимости */
}

/* Затемненный фон для оверлея */
#overlay {
    background: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
}

/* Основные стили для меню навигации */
nav {
    font-size: 13pt; /* Размер шрифта */
}

/* Стили для ссылок в меню */
nav a {
    padding: 1em 2em; /* Внутренние отступы */
    transition: background-color 150ms ease; /* Плавное изменение цвета при наведении */
}

/* Стрелка вниз для пунктов меню с вложенными элементами */
nav li.has-children > a::after {
    border-left: 4px solid transparent; /* Делаем треугольник (стрелку) вниз */
    border-right: 4px solid transparent; /* Левая и правая стороны треугольника прозрачные */
    border-top: 6px solid var(--text-color); /* Цвет стрелки */
    margin-left: 8px; /* Отступ от текста */
    transition: transform 0.3s ease-in-out; /* Плавный поворот стрелки */
    transform: translateY(2px); /* Смещение вниз */
}

/* Стили для подменю */
nav li ul {
    border: 1px solid var(--hover-color); /* Граница подменю */
    transition: transform 0.3s ease, opacity 0.3s ease, max-height 0.3s ease; /* Плавное появление */
    transform: scaleY(0); /* Скрываем подменю, уменьшая его по оси Y */
    transform-origin: top; /* Устанавливаем точку трансформации в верхнюю часть */
}

/* Стрелка вправо для вложенных подменю */
nav li ul li.has-children > a::after {
    border-top: 4px solid transparent; /* Верхняя часть треугольника прозрачная */
    border-bottom: 4px solid transparent; /* Нижняя часть треугольника прозрачная */
    border-left: 6px solid var(--text-color); /* Треугольник-стрелка вправо */
    margin-left: 8px; /* Отступ от текста */
    transform: translateY(2px); /* Смещение вниз */
}

.language-selector-container {
    user-select: none;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 13px;
    right: 10px;
    z-index: 11;
    color: white;
    background-color: transparent; 
    transition: right 0.3s ease-in-out;
}

.language-selector-container.language-selector-shifted {
    right: 85px;
}

.language-selector-container.language-selector-mobile {
    top: 18px;
    right: 65px;
    z-index: 8;
    color: black;
    background-color: white; 
}

.language-selector-box {
    border: 1px solid #ccc;
    padding: 2px 4px;
    width: 50px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    
}

.language-selector-flag {
    width: 28px;
    height: auto;
}

.language-selector-arrow {
    font-size: 9px;
    line-height: 1;
    transition: transform 0.3s ease; /* Added arrow rotation transition */
}

.language-selector-arrow.open {
    transform: rotate(180deg) translateY(1px); /* Rotate arrow when open */
}

.language-selector-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px;
    border: 1px solid #ccc;
    background: white;
    width: 50px;
    z-index: 10;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.language-selector-dropdown.open {
    display: block;
    max-height: 200px;
    opacity: 1;
}

.language-selector-item {
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
}

.language-selector-item-img {
    width: 28px;
    height: auto;
}

.profile-icon-type-zero {
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 10px;
    right: 67px;  
    z-index: 11;
    transition: right 0.3s ease-in-out;
}

.profile-icon-type-zero.search-shifted-type-zero {
    right: 142px;
}

.profile-icon-type-zero.search-mobile-type-zero {
    top: 15px;
    right: 122px;
    z-index: 8;
}

.profile-icon-type-one {
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 10px;
    right: 110px;  
    z-index: 11;
    transition: right 0.3s ease-in-out;
}

.profile-icon-type-one.search-shifted-type-one {
    right: 192px;
}

.profile-icon-type-one.search-open-type-one.search-shifted-type-one {
    right: 359px;
}

.profile-icon-type-one.search-open-type-one.search-mobile-type-one {
    right: 338px;
}


.profile-icon-type-one.search-open-type-one {
    right: 272px;
}

.profile-icon-type-one.search-mobile-type-one {
    top: 15px;
    right: 172px;
    z-index: 8;
}

.go-back-icon {
    position: fixed;        /* Фиксированное позиционирование относительно окна браузера */
    top: 12px;             /* Отступ сверху 10px */
    left: 19px;            /* Отступ слева 10px */
    cursor: pointer;       /* Курсор в виде указателя при наведении */
    z-index: 11;         /* Высокий z-index, чтобы быть поверх других элементов */
    user-select: none;
    transition: top 0.3s ease-in-out; /* Добавляет плавный переход для смещения вниз */
}

/* Скрытие элемента при наличии класса hidden */
.go-back-icon.hidden {
    display: none;
}

.go-back-icon.back-mobile {
    top: 18px;             /* Отступ сверху 10px */ 
    z-index: 8;                     /* Устанавливает уровень слоя ниже десктопной версии */
}

/* Десктопная версия (ширина экрана больше 1500px) */
@media screen and (min-width: 651px) {
    nav li:hover > ul {
        max-height: 5000px; /* Показываем подменю, устанавливая большую высоту */
    }
}

/* Мобильная версия (ширина экрана меньше или равна 1500px) */
@media screen and (max-width: 650px) {
    nav {
        font-size: 16pt; /* Увеличенный размер шрифта для мобильной версии */
        width: min(15em, 100%); /* Ограничиваем максимальную ширину меню */
    }

    nav.show {
        transition: right 400ms ease-out; /* Плавное появление меню */
    }

    nav li ul {
        transition: transform 0.25s ease, max-height 0.25s ease, opacity 0.25s ease; /* Плавная анимация появления подменю */
    }
}
`;

window.defaultStyles = {
    visibilityOfElement: {
        visibleElement: [
            ['visibility', ''],         // Устанавливает видимость элемента (пустое значение означает "visible" по умолчанию)
            ['pointerEvents', 'auto'],  // Разрешает взаимодействие с элементом через указатель мыши
        ],
        invisibleElement: [
            ['visibility', 'hidden'],   // Скрывает элемент, делая его невидимым
            ['pointerEvents', 'none'],  // Отключает взаимодействие с элементом через указатель мыши
        ],
    },

    countriesModal: {
        modalStyle: [
            ['position', 'fixed'],          // Фиксирует модальное окно на экране
            ['top', '0'],                   // Прижимает верхнюю часть окна к верху экрана
            ['left', '0'],                  // Прижимает левую часть окна к левому краю экрана
            ['right', '0'],                 // Прижимает правую часть окна к правому краю экрана
            ['bottom', '0'],                // Прижимает нижнюю часть окна к низу экрана
            ['background', 'rgba(0, 0, 0, 0.7)'], // Устанавливает полупрозрачный черный фон
            ['display', 'flex'],            // Использует flexbox для размещения содержимого
            ['justify-content', 'center'],  // Центрирует содержимое по горизонтали
            ['align-items', 'center'],      // Центрирует содержимое по вертикали
            ['z-index', '1000'],            // Устанавливает высокий уровень слоя для отображения поверх других элементов
            ['overflow', 'hidden'],         // Скрывает любой контент, выходящий за границы окна
        ],
        modalContentStyle: [
            ['position', 'relative'],       // Устанавливает относительное позиционирование для содержимого
            ['display', 'inline-block'],    // Делает содержимое встроенно-блочным элементом
            ['background', 'white'],        // Устанавливает белый фон для содержимого
            ['padding', '20px'],            // Добавляет внутренний отступ 20 пикселей со всех сторон
            ['max-width', '90%'],           // Ограничивает максимальную ширину до 90% от родителя
            ['max-height', '90%'],          // Ограничивает максимальную высоту до 90% от родителя
            ['overflow', 'hidden'],         // Скрывает контент, выходящий за границы блока
            ['border-radius', '10px'],      // Закругляет углы содержимого на 10 пикселей
        ],
        imageStyle: [
            ['width', '100%'],              // Устанавливает ширину изображения на 100% от контейнера
            ['height', 'auto'],             // Автоматически подстраивает высоту изображения
            ['display', 'block'],           // Отображает изображение как блочный элемент
            ['transition', 'transform 0.2s ease-in-out'], // Добавляет плавное масштабирование за 0.2 секунды
            ['cursor', 'zoom-in'],          // Устанавливает курсор увеличения при наведении
        ],
        closeButtonStyle: [
            ['position', 'absolute'],       // Абсолютное позиционирование кнопки закрытия
            ['top', '10px'],                // Отступ 10 пикселей от верха контейнера
            ['right', '10px'],              // Отступ 10 пикселей от правого края контейнера
            ['background', 'red'],          // Устанавливает красный фон кнопки
            ['color', 'white'],             // Устанавливает белый цвет текста кнопки
            ['border', 'none'],             // Убирает границу кнопки
            ['padding', '5px 10px'],        // Устанавливает внутренние отступы: 5px сверху/снизу, 10px слева/справа
            ['font-size', '16px'],          // Устанавливает размер шрифта 16 пикселей
            ['cursor', 'pointer'],          // Устанавливает курсор указателя при наведении
            ['border-radius', '5px'],       // Закругляет углы кнопки на 5 пикселей
        ]
    },

    churchForm: {
        bodyStyle: [
            ['overflow', 'hidden'],
        ],
        bodyStyleScroll: [
            ['overflow', ''],
        ],
        container: [
            ['width', '60%'],
            ['height', '90vh'],
            ['overflow-y', 'auto'],
            ['padding', '20px'],
            ['background-color', '#fff'],
            ['border', '1px solid #ccc'],
            ['box-shadow', '0px 4px 8px rgba(0, 0, 0, 0.1)'],
            ['border-radius', '8px'],
            ['position', 'fixed'],
            ['top', '50%'],
            ['left', '50%'],
            ['transform', 'translate(-50%, -50%)'],
            ['z-index', '1000'],
        ],
        title: [
            ['font-size', '24px'],
            ['margin-bottom', '10px'],
            ['font-weight', 'normal'],
        ],
        description: [
            ['font-size', '18px'],
            ['margin-bottom', '20px'],
        ],
        text: [
            ['font-size', '16px'],
            ['margin-bottom', '20px'],
        ],
        closeButton: [
            ['position', 'sticky'],
            ['top', '0'],
            ['margin-left', 'auto'],
            ['padding', '10px 20px'],
            ['background-color', 'rgb(229 48 48)'],
            ['color', '#fff'],
            ['border', 'none'],
            ['border-radius', '4px'],
            ['cursor', 'pointer'],
            ['z-index', '10'],
            ['display', 'block'],
        ],
        mobile: {
            container: [
                ['width', '90%'],
                ['height', '80vh'],
            ],
            imageWrapper: [
                ['flex-direction', 'column'],
                ['align-items', 'stretch'],
            ],
            image: [
                ['width', '100%'],
                ['height', 'auto'],
                ['margin-bottom', '10px'],
            ],
            imageInfo: [
                ['width', '100%'],
                ['height', 'auto'],
                ['margin-bottom', '20px'],
            ],
            thumbnailContainer: [
                ['display', 'flex'],
                ['flex-direction', 'row'],      // Миниатюры в ряд на мобильных
                ['justify-content', 'center'],  // Центрирование по горизонтали
                ['align-items', 'center'],      // Выравнивание по вертикали
                ['gap', '10px'],                // Промежуток между миниатюрами
                ['margin', '10px 0'],           // Вертикальные отступы
                ['width', '100%'],              // Ширина 100% для центрирования в форме
            ],
        },
        overlay: [
            ['position', 'fixed'],
            ['top', '0'],
            ['left', '0'],
            ['width', '100%'],
            ['height', '100%'],
            ['background-color', 'rgba(0, 0, 0, 0.5)'],
            ['z-index', '999'],
        ],
        image: [
            ['height', '500px'],
            ['width', '600px'],
            ['margin-bottom', '20px'],
        ],
        imageWrapper: [
            ['display', 'flex'],
            ['flex-direction', 'row'],
            ['justify-content', 'flex-start'],
            ['align-items', 'flex-start'],
            ['margin-bottom', '20px'],
            ['width', '100%'],
        ],
        imageInfo: [
            ['width', '30%'],
            ['font-size', '14px'],
            ['padding', '10px'],
            ['background-color', '#f9f9f9'],
            ['border-radius', '4px'],
            ['height', '65%'],
            ['overflow-y', 'auto'],
        ],
        imageInfoField: [
            ['font-size', '14px'],
            ['margin-bottom', '10px'],
            ['color', '#333'],
            ['line-height', '1.4'],
        ],
        thumbnailContainer: [
            ['display', 'flex'],
            ['flex-direction', 'column'],      // Миниатюры в колонку на ПК
            ['align-items', 'flex-start'],     // Прижатие к левой части родителя
            ['padding-left', '0'],             // Убраны лишние отступы слева (прижатие к краю)
            ['gap', '10px'],                   // Промежуток между миниатюрами
            ['marginInline', '5px'],              // Вертикальные отступы
        ],
        thumbnail: [
            ['width', '60px'],
            ['height', '60px'],
            ['object-fit', 'cover'],
            ['cursor', 'pointer'],
            ['border', '2px solid #ccc'],
            ['border-radius', '4px'],
            ['transition', 'border-color 0.3s ease'],
            [':hover', [['border-color', '#007BFF']]],
        ]
    },

    formElements: {
        // Стили для текста (text)
        text: [
            ["color", "gray"], // Синий цвет текста
            ["font-size", "20px"], // Размер шрифта — 24 пикселя
            ["font-weight", "normal"] // Обычный вес шрифта
        ],
        // Стили для другого текста (text1)
        text1: [
            ["color", "blue"], // Синий цвет текста
            ["font-size", "30px"], // Размер шрифта — 30 пикселей
            ["font-weight", "800"] // Жирный шрифт (вес 800)
        ],
        // Стили для ссылки (link)
        link: [
            ["color", "blue"], // Синий цвет ссылки
            ["text-decoration", "none"], // Без подчеркивания
            ["font-size", "16px"] // Размер шрифта — 16 пикселей
        ],
        // Стили для изображения (image)
        image: [
            ["width", "100%"], // Ширина изображения — 100% от родительского элемента
            ["border-radius", "8px"] // Скругленные углы изображения с радиусом 8 пикселей
        ],
        // Стили для списка (list)
        list: [
            ["list-style-type", "disc"], // Использование круглыми маркерами (диски) для элементов списка
            ["padding-left", "20px"] // Отступ слева для списка — 20 пикселей
        ]
    },

    buttonStyles: {
        // Стили для кнопки
        button: [
            ["position", "fixed"], // Фиксированное позиционирование кнопки
            ["bottom", "20px"], // Расположение кнопки на 20 пикселей выше от нижнего края
            ["right", "20px"], // Расположение кнопки на 20 пикселей от правого края
            ["z-index", "9"], // Устанавливаем высокий z-index, чтобы кнопка была поверх других элементов
            ["background-color", "#4A4A4A"], // Черный цвет фона кнопки
            ["border", "none"], // Без рамки для кнопки
            ["padding", "10px"], // Отступы внутри кнопки — 10 пикселей
            ["width", "50px"],  // Ширина кнопки
            ["height", "50px"], // Высота кнопки
            ["border-radius", "10px"],  // Скругленные углы для кнопки
            ["display", "none"],  // Кнопка скрыта по умолчанию
            ["cursor", "pointer"], // Указатель мыши при наведении
            ["text-align", "center"], // Выравнивание текста по центру кнопки
            ["font-size", "30px"],  // Размер шрифта (стрелки) на кнопке
            ["justify-content", "center"], // Горизонтальное центрирование
            ["align-items", "center"], // Вертикальное центрирование
            ["box-sizing", "border-box"]
        ],
        // Стили для стрелки на кнопке
        arrow: [
            ['width', '24px'],  // Ширина изображения стрелки
            ['height', '24px'], // Высота изображения стрелки
        ],
        // Стили для скрытия кнопки, когда нет прокрутки
        noScroll: [
            ['display', 'none'] // Кнопка скрыта, если нет прокрутки
        ],
        // Стили для отображения кнопки, когда есть прокрутка
        withScroll: [
            ['display', 'block'] // Кнопка отображается, если есть прокрутка
        ],
    },

    footerStyles: {
        text: [ // Стили для текста футера  
            ["color", "#848484"], // Устанавливаем серый цвет текста  
            ["textAlign", "center"], // Выравниваем текст по центру  
            ["fontSize", "16px"], // Размер шрифта для мобильной версии
        ],
        footer: [ // Стили для самого футера  
            ["width", "100%"], // Растягиваем футер на всю ширину страницы  
            ["padding", "10px 0"], // Добавляем вертикальные отступы по 10 пикселей  
            ["position", "relative"], // Фиксируем футер  
            ["bottom", "0"], // Размещаем футер внизу страницы  
            ["left", "0"], // Выравниваем футер по левому краю   
        ],
        row: [ // Стили для строк внутри футера  
            ["display", "flex"], // Используем flexbox для выравнивания элементов  
            ["justifyContent", "center"], // Центрируем элементы внутри строки  
            ["gap", "20px"], // Устанавливаем расстояние между элементами 20 пикселей  
            ["marginBottom", "5px"], // Добавляем нижний отступ в 5 пикселей  
        ],
        textMobile: [
            ["fontSize", "14px"], // Размер шрифта для мобильной версии
            ["color", "#848484"], // Устанавливаем серый цвет текста  
        ],
    },

    newsStyles: {
        container: [ // Стили для основного контейнера новостей  
            ["display", "flex"], // Используем flexbox для размещения колонок  
            ["gap", "20px"], // Добавляем промежуток между колонками  
            ["maxWidth", "1100px"], // Ограничиваем максимальную ширину блока  
            ["margin", "auto"], // Центрируем контейнер на странице  
            ["padding", "20px"], // Добавляем отступы внутри контейнера  
            ["flex-direction", "row"], // Располагаем элементы в ряд  
        ],
        column: [ // Стили для колонок  
            ["width", "50%"], // Каждая колонка занимает 50% ширины контейнера  
            ["height", "100%"], // Высота колонки на 100%  
            ["display", "flex"], // Используем flexbox для размещения содержимого  
            ["flexDirection", "column"], // Располагаем элементы вертикально  
            ["gap", "10px"], // Добавляем промежуток между элементами 
        ],
        section: [ // Стили для секций внутри колонок 
            ["background", "transparent"],
            ["border", "none"], // Убираем границы  
            ["padding", "10px"], // Добавляем внутренние отступы  
            ["fontSize", "16px"], // Размер шрифта 16 пикселей  
            ["color", "blue"], // Синий цвет текста  
            ["textAlign", "center"], // Выравниваем текст по центру  
        ],
        image: [ // Стили для изображений внутри секций  
            ["width", "60px"], // Устанавливаем ширину 60 пикселей  
            ["height", "60px"], // Устанавливаем высоту 60 пикселей  
            ["userSelect", "none"], // Устанавливаем высоту 60 пикселей  
        ],
        newsItem: [ // Стили для элемента новости  
            ["display", "flex"], // Используем flexbox для выравнивания элементов  
            ["alignItems", "center"], // Выравниваем элементы по центру  
            ["marginBottom", "10px"], // Добавляем отступ снизу  
            ["border-bottom", "solid"], // Добавляем нижнюю границу  
            ["border-width", "1px"], // Устанавливаем ширину границы 1 пиксель  
            ["padding-bottom", "10px"], // Добавляем нижний внутренний отступ  
            ["border-color", "#0C4DA"], // Светло-серый цвет границы  
            ["textAlign", "left"], // Выравниваем текст по левому краю  
            ["position", "relative"], // Устанавливаем относительное позиционирование  
        ],
        newsImage: [ // Стили для изображений в новостях  
            ["width", "60px"], // Ширина изображения 50 пикселей  
            ["height", "60px"], // Высота изображения 50 пикселей  
            ["marginRight", "10px"], // Отступ справа 10 пикселей  
            ["border", "solid"], // Добавляем границу  
            ["border-width", "1px"], // Ширина границы 1 пиксель  
            ["border-color", "lightgray"], // Светло-серый цвет границы  
            ["padding", "2px"], // Внутренний отступ 2 пикселя  
            ["userSelect", "none"], // Устанавливаем высоту 60 пикселей  
        ],
        newsText: [ // Стили для текста новостей  
            ["flex", "1"], // Растягиваем текст на всю доступную ширину  
            ["font-size", "10px"], // Размер шрифта 10 пикселей  
            ["position", "absolute"], // Абсолютное позиционирование  
            ["top", "0"], // Размещаем текст вверху блока  
        ],
        newsDate: [ // Стили для даты новости  
            ["fontSize", "12px"], // Размер шрифта 12 пикселей  
            ["color", "#303030"], // Серый цвет текста  
            ["line-height", "25px"], // Межстрочный интервал 25 пикселей  
        ],
        textDescription: [ // Стили для описания текста в правой колонке  
            ["fontSize", "16px"], // Размер шрифта 14 пикселей  
            ["color", "#000"], // Чёрный цвет текста  
            ["textAlign", "left"], // Выравнивание текста по левому краю  
            ["line-height", "25px"], // Межстрочный интервал 25 пикселей  
        ],
        linkTitle: [ // Стили для ссылок  
            ["text-decoration", "none"], // Убираем подчеркивание ссылки
            ["color", "#0c4da2"], // Синий цвет ссылки  
        ],
        containerMobile: [ // Стили для мобильной версии контейнера  
            ["flex-direction", "column"], // Располагаем элементы вертикально  
        ],
        leftColumnMobile: [ // Стили для мобильной версии левой колонки  
            ["width", "100%"], // Занимает всю ширину контейнера  
        ],
        rightColumnMobile: [ // Стили для мобильной версии правой колонки  
            ["width", "100%"], // Занимает всю ширину контейнера  
            ["margin-bottom", "60px"], // Отступ снизу 60 пикселей  
        ],
        textTitle: [ // Стили для ссылок  
            ["text-decoration", "none"], // Убираем подчеркивание ссылки
            ["color", "#4A4A4A"], // Синий цвет ссылки  
            ["font-size", "24px"],
            ["font-family", "Georgia, Times New Roman , serif "],
        ],
    },

    centurySelector: {
        containerStyle: [
            ['position', 'fixed'],
            ['top', '60px'],
            ['right', '10px'],
            ['background', 'rgba(255, 255, 255, 0.9)'],
            ['padding', '10px'],
            ['border-radius', '5px'],
            ['box-shadow', '0 2px 5px rgba(0,0,0,0.2)'],
            ['z-index', '2'],
            ['display', 'flex'],
            ['align-items', 'center'],
            ['gap', '10px']
        ],
        textStyle: [
            ['font-size', '16px'],
            ['color', '#333'],
            ['font-family', 'Arial, sans-serif']
        ],
        resetButtonStyle: [
            ['background', '#dc3545'],
            ['color', 'white'],
            ['border', 'none'],
            ['padding', '5px 10px'],
            ['border-radius', '3px'],
            ['cursor', 'pointer'],
            ['font-size', '14px'],
            ['transition', 'background 0.2s']
        ]
    },

    timeLineReligionStyles: {
        containerHorizontal: [
            ["width", "100%"],
            ["padding", "20px"],
            ["position", "relative"],
            ["display", "block"],
        ],
        containerVertical: [
            ["width", "450px"],
            ["padding", "20px"],
            ["position", "relative"],
            ["display", "block"],
            ["margin", "0 auto"],
        ],
        button: [
            ["padding", "10px 20px"],
            ["marginBottom", "20px"],
            ["backgroundColor", "#007BFF"],
            ["color", "white"],
            ["border", "none"],
            ["borderRadius", "5px"],
            ["cursor", "pointer"],
        ],
        sliderContainer: [
            ["position", "absolute"],
            ["left", "0"],
            ["top", "20px"],
            ["height", "calc(100% - 40px)"],
            ["width", "40px"],
            ["display", "flex"],
            ["flexDirection", "column"],
            ["alignItems", "center"],
            ["zIndex", "5"],
            ["padding", "unset"],
            ["backgroundColor", "rgb(248, 248, 248)"],
            ["cursor", "unset"],
            ["marginLeft", "10px"],
        ],
        sliderTrack: [
            ["width", "4px"],
            ["height", "100%"],
            ["backgroundColor", "#ccc"],
            ["position", "relative"],
            ["borderRadius", "2px"],
        ],
        sliderTrackVertical: [
            ["width", "4px"],
            ["height", "20%"],
            ["backgroundColor", "#ccc"],
            ["position", "relative"],
            ["borderRadius", "2px"],
        ],
        sliderThumb: [
            ["width", "20px"],
            ["height", "20px"],
            ["backgroundColor", "#007BFF"],
            ["borderRadius", "50%"],
            ["position", "absolute"],
            ["cursor", "grab"],
            ["left", "-8px"],
            ["boxShadow", "0 2px 4px rgba(0,0,0,0.2)"],
            ["top", "0"],
        ],
        timeline: [
            ["display", "flex"],
            ["justifyContent", "space-between"],
            ["width", "calc(100% - 60px)"],
            ["overflowX", "hidden"],
            ["height", "75px"],
            ["marginLeft", "60px"],
            ["cursor", "grab"],
        ],
        timelineVertical: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["width", "calc(100% - 60px)"],
            ["maxHeight", "100vh"],
            ["overflowY", "hidden"],
            ["marginLeft", "60px"],
            ["cursor", "grab"],
        ],
        timelineMobile: [
            ["display", "flex"],
            ["justifyContent", "space-between"],
            ["width", "calc(100% - 60px)"],
            ["overflowX", "hidden"],
            ["height", "75px"],
            ["marginLeft", "60px"],
            ["cursor", "grab"],
        ],
        timelineMobileVertical: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["width", "calc(100% - 60px)"],
            ["maxHeight", "100vh"],
            ["overflowY", "hidden"],
            ["marginLeft", "60px"],
            ["cursor", "grab"],
        ],
        timelineWrapper: [
            ["display", "flex"],
            ["flexDirection", "row"],
            ["position", "relative"],
            ["minWidth", "100%"],
            ["justifyContent", "space-between"],
            ["flexShrink", "0"],
            ["white-space", "nowrap"],
        ],
        timelineWrapperVertical: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["position", "relative"],
            ["minHeight", "100%"],
            ["alignItems", "center"],
            ["flexShrink", "0"],
        ],
        timelineLine: [
            ["position", "absolute"],
            ["top", "35px"],
            ["left", "0"],
            ["right", "0"],
            ["height", "15px"],
            ["backgroundColor", "none"],
            ["border", "2px solid blue"],
            ["transform", "translateY(-50%)"],
            ["zIndex", "1"],
        ],
        timelineLineVertical: [
            ["position", "absolute"],
            ["left", "50%"],
            ["top", "0"],
            ["bottom", "0"],
            ["width", "15px"],
            ["backgroundColor", "none"],
            ["border", "2px solid blue"],
            ["transform", "translateX(-50%)"],
            ["zIndex", "1"],
        ],
        dotContainer: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["marginLeft", "27px"],
            ["marginRight", "100px"],
            ["zIndex", "2"],
            ["opacity", "0"],
            ["animation", "fadeIn 0.6s ease forwards"],
            ["alignItems", "center"],
            ["padding", "0"],
            ["position", "relative"],
            ["height", "75px"],
        ],
        dotContainerHorizontalDates: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["marginLeft", "150px"], // Увеличиваем отступы, чтобы избежать наложения текста
            ["marginRight", "130px"],
            ["zIndex", "2"],
            ["opacity", "0"],
            ["animation", "fadeIn 0.6s ease forwards"],
            ["alignItems", "center"],
            ["padding", "0"],
            ["position", "relative"],
            ["height", "75px"],
        ],
        dotContainerVertical: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["marginBottom", "100px"],
            ["zIndex", "2"],
            ["opacity", "0"],
            ["animation", "fadeIn 0.6s ease forwards"],
            ["alignItems", "center"],
            ["position", "relative"],
            ["height", "45px"],
        ],
        dotContainerVerticalDatesFirst: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["marginBottom", "100px"],
            ["marginTop", "40px"], // Добавляем отступ сверху для первого элемента
            ["zIndex", "2"],
            ["opacity", "0"],
            ["animation", "fadeIn 0.6s ease forwards"],
            ["alignItems", "center"],
            ["position", "relative"],
            ["height", "45px"],
        ],
        dot: [
            ["width", "35px"],
            ["height", "35px"],
            ["borderRadius", "50%"],
            ["backgroundColor", "white"],
            ["cursor", "pointer"],
            ["flexShrink", "0"],
            ["border", "2px solid blue"],
            ["position", "absolute"],
            ["top", "calc(50% - 2px)"],
            ["transform", "translateY(-50%)"],
            ["zIndex", "2"],
        ],
        dotVertical: [
            ["width", "35px"],
            ["height", "35px"],
            ["borderRadius", "50%"],
            ["backgroundColor", "white"],
            ["cursor", "pointer"],
            ["flexShrink", "0"],
            ["border", "2px solid blue"],
            ["position", "absolute"],
            ["bottom", "0"],
            ["zIndex", "2"],
        ],
        bar: [
            ["width", "10px"],
            ["height", "35px"],
            ["backgroundColor", "blue"],
            ["zIndex", "3"],
            ["cursor", "pointer"],
            ["position", "absolute"],
            ["top", "calc(50% - 2px)"],
            ["transform", "translateY(-50%)"],
        ],
        barVertical: [
            ["width", "35px"],
            ["height", "10px"],
            ["backgroundColor", "blue"],
            ["zIndex", "3"],
            ["cursor", "pointer"],
            ["position", "absolute"],
            ["bottom", "0"],
        ],
        barActive: [
            ["backgroundColor", "red"],
        ],
        dotText: [
            ["fontSize", "14px"],
            ["color", "#333"],
            ["textAlign", "left"],
            ["position", "absolute"],
            ["top", "0"],
            ["whiteSpace", "nowrap"],
        ],
        dotTextVertical: [
            ["fontSize", "14px"],
            ["color", "#333"],
            ["textAlign", "center"],
            ["position", "absolute"],
            ["top", "10px"],
            ["whiteSpace", "nowrap"],
            ["zIndex", "4"],
        ],
        dotTextVerticalForDots: [
            ["fontSize", "14px"],
            ["color", "#333"],
            ["textAlign", "center"],
            ["position", "absolute"],
            ["bottom", "40px"],
            ["whiteSpace", "nowrap"],
            ["zIndex", "4"],
        ],
        info: [
            ["display", "flex"],
            ["border", "1px solid #ccc"],
            ["backgroundColor", "white"],
            ["padding", "0px"],
            ["overflowY", "auto"],
            ["maxHeight", "300px"],
        ],
        infoHidden: [
            ["display", "none"],
        ],
        arrowContainer: [
            ["width", "3%"],
            ["display", "flex"],
            ["alignItems", "flex-start"],
            ["justifyContent", "center"],
            ["flexShrink", "0"],
            ["marginTop", "10px"],
        ],
        contentContainer: [
            ["flex", "1"],
            ["padding", "10px"],
        ],
        arrow: [
            ["width", "35px"],
            ["height", "27px"],
            ["padding", "5px 10px"],
            ["cursor", "pointer"],
            ["backgroundColor", "#f0f0f0"],
            ["border", "1px solid #ccc"],
            ["borderRadius", "4px"],
            ["position", "absolute"],
        ],
        dotActive: [
            ["backgroundColor", "red"],
        ],
        centuryBlock: [
            ["marginBottom", "15px"],
            ["padding", "10px"],
            ["border", "1px solid #ddd"],
            ["borderRadius", "4px"],
            ["backgroundColor", "#f9f9f9"],
        ],
        decadeBlock: [
            ["marginBottom", "10px"],
            ["padding", "8px"],
            ["border", "1px solid #eee"],
            ["borderRadius", "4px"],
            ["backgroundColor", "#fff"],
        ],
        yearBlock: [
            ["marginBottom", "8px"],
            ["padding", "6px"],
            ["border", "1px solid #f0f0f0"],
            ["borderRadius", "4px"],
        ],
        eventBlock: [
            ["marginBottom", "5px"],
            ["padding", "4px"],
            ["backgroundColor", "#fefefe"],
        ],
        title: [
            ["margin", "0 0 5px 0"],
            ["fontSize", "16px"],
            ["fontWeight", "bold"],
            ["color", "#333"],
            ["text-align", "left"],
        ],
        description: [
            ["margin", "0"],
            ["fontSize", "14px"],
            ["color", "#666"],
            ["width", "100%"],
            ["maxWidth", "unset"],
        ],
        infoMobile: [
            ["width", "100%"],
            ["padding", "3px"],
            ["height", "auto"],
            ["maxHeight", "250px"],
            ["display", "flex"],
            ["flexDirection", "row"],
            ["overflowY", "auto"],
        ],
        arrowContainerMobile: [
            ["width", "10%"],
            ["display", "flex"],
            ["justifyContent", "center"],
            ["alignItems", "flex-start"],
            ["marginTop", "0px"],
        ],
        arrowMobile: [
            ["fontSize", "10px"],
            ["padding", "1px 3px"],
            ["width", "26px"],
            ["height", "25px"],
            ["display", "flex"],
            ["justifyContent", "center"],
            ["alignItems", "center"],
            ["margin", "1px"],
        ],
        contentContainerMobile: [
            ["width", "80%"],
            ["fontSize", "14px"],
            ["padding", "0px"],
        ],
        popup: [
            ["position", "fixed"],
            ["width", "50%"],
            ["height", "auto"],
            ["maxHeight", "650px"],
            ["overflowY", "auto"],
            ["backgroundColor", "#fff"],
            ["border", "1px solid #000"],
            ["padding", "10px"],
            ["boxShadow", "0 2px 5px rgba(0,0,0,0.2)"],
            ["zIndex", "13"],
            ["textAlign", "center"],
            ["left", "50%"],
            ["top", "50%"],
            ["transform", "translate(-50%, -50%)"],
            ["opacity", "0"],
            ["animation", "slideIn 0.7s ease forwards"],
        ],
        popupMobile: [
            ["position", "fixed"],
            ["width", "90%"],
            ["height", "auto"],
            ["maxHeight", "650px"],
            ["overflowY", "auto"],
            ["backgroundColor", "#fff"],
            ["border", "1px solid #000"],
            ["padding", "10px"],
            ["boxShadow", "0 2px 5px rgba(0,0,0,0.2)"],
            ["zIndex", "13"],
            ["textAlign", "center"],
            ["left", "50%"],
            ["top", "50%"],
            ["transform", "translate(-50%, -50%)"],
            ["opacity", "0"],
            ["animation", "slideIn 0.7s ease forwards"],
        ],
        popupOverlay: [
            ["position", "fixed"],
            ["top", "0"],
            ["left", "0"],
            ["width", "100%"],
            ["height", "100%"],
            ["backgroundColor", "rgba(0, 0, 0, 0.5)"],
            ["zIndex", "12"],
        ],
        popupImage: [
            ["width", "100%"],
            ["height", "auto"],
            ["margin", "10px 0"],
            ["maxHeight", "400px"],
            ["objectFit", "contain"],
        ],
        thumbnailContainer: [
            ["display", "flex"],
            ["flexWrap", "wrap"],
            ["justifyContent", "center"],
            ["gap", "10px"],
            ["margin", "10px 0"],
        ],
        thumbnail: [
            ["width", "60px"],
            ["height", "60px"],
            ["objectFit", "cover"],
            ["cursor", "pointer"],
            ["border", "2px solid #ccc"],
            ["borderRadius", "4px"],
            ["transition", "border-color 0.3s ease"],
            [":hover", [["borderColor", "#007BFF"]]],
        ],
        popupClose: [
            ["position", "absolute"],
            ["top", "5px"],
            ["right", "5px"],
            ["width", "20px"],
            ["height", "20px"],
            ["fontSize", "20px"],
            ["lineHeight", "20px"],
            ["textAlign", "center"],
            ["cursor", "pointer"],
            ["color", "#000"],
            ["zIndex", "11"],
        ],
        popupDate: [
            ["margin", "0 0 5px 0"],
            ["fontSize", "14px"],
            ["color", "#333"],
            ["text-align", "left"],
        ],
        popupPdfLink: [
            ["display", "block"],
            ["margin-top", "20px"],
            ["color", "#007bff"],
            ["text-decoration", "none"],
            ["font-size", "16px"],
            [":hover", [["text-decoration", "underline"]]],
        ],
        bodyNoScroll: [
            ["overflow", "hidden"],
        ],
        bodyScroll: [
            ["overflow", "auto"],
        ],
    },
    
    sliderStyles: {
        // Стили для внешнего контейнера слайдера
        extraContainer: [
            ["position", "relative"], // Относительное позиционирование для контейнера
            ["width", "55%"], // Ширина контейнера — 55% от родительского элемента
            ["maxWidth", "1200px"], // Максимальная ширина контейнера — 1200 пикселей
            ["minWidth", "700px"], // Минимальная ширина контейнера — 700 пикселей
            ["height", "auto"], // Автоматическая высота, зависит от содержимого
            ["margin", "auto"], // Центрирование контейнера по горизонтали
            ["marginTop", "20px"], // Отступ сверху — 20 пикселей
            ["marginBottom", "20px"], // Отступ снизу — 20 пикселей
        ],
        // Стили для контейнера слайдера
        sliderContainer: [
            ["overflow", "hidden"], // Скрытие содержимого, выходящего за пределы контейнера
            ["position", "relative"], // Убедись, что позиционирование установлено
            ["z-index", "1"], // Поднимает контейнер над другими элементами
        ],
        // Стили для обертки слайдов
        sliderWrapper: [
            ["display", "flex"], // Использование flexbox для расположения слайдов в ряд
            ["transition", "transform 0.3s ease"], // Плавное изменение позиции слайдов
            ["userSelect", "none"], // Отключение выделения текста
            ["padding", "0 0px"], // Отступы внутри обертки (в данном случае нулевые по бокам)
        ],
        // Стили для контейнера стрелок
        arrowContainer: [
            ["position", "absolute"], // Абсолютное позиционирование стрелок
            ["top", "50%"], // Размещение стрелок по вертикали на 50% высоты контейнера
            ["width", "calc(100% + 100px)"], // Ширина контейнера с учетом дополнительного пространства по бокам
            ["left", "-50px"], // Смещение стрелок слева
            ["right", "-50px"], // Смещение стрелок справа
            ["display", "flex"], // Использование flexbox для расположения стрелок
            ["justifyContent", "space-between"], // Распределение стрелок по краям
            ["transform", "translateY(-50%)"], // Центрирование стрелок по вертикали
            ["height", "auto"], // Автоматическая высота
        ],
        // Стили для стрелок
        arrow: [
            ["width", "0"], // Установка ширины стрелки в 0
            ["height", "0"], // Установка высоты стрелки в 0
            ["borderTop", "20px solid transparent"], // Верхняя граница стрелки (делает ее треугольной)
            ["borderBottom", "20px solid transparent"], // Нижняя граница стрелки (делает ее треугольной)
            ["cursor", "pointer"], // Изменение курсора на указатель при наведении
        ],
        // Стили для предыдущей стрелки
        prevArrow: [
            ["borderRight", "20px solid #5c5c5c70"] // Правая граница стрелки, цвет синий
        ],
        // Стили для следующей стрелки
        nextArrow: [
            ["borderLeft", "20px solid #5c5c5c70"] // Левая граница стрелки, цвет синий
        ],
        // Стили для контейнера точек (пагинации)
        dotsContainer: [
            ["textAlign", "center"], // Центрирование точек
            ["position", "absolute"], // Абсолютное позиционирование контейнера
            ["width", "100%"], // Ширина контейнера — 100% от родительского элемента
        ],
        // Стили для каждого слайда
        slide: [
            ["minWidth", "100%"], // Минимальная ширина слайда — 100% от родительского контейнера
            ["boxSizing", "border-box"], // Включение расчета padding и border в ширину и высоту
            ["borderLeft", "20px solid transparent"], // Левый прозрачный бордер для слайда
            ["borderRight", "20px solid transparent"], // Правый прозрачный бордер для слайда
        ],
        // Стили для слайдов с четными индексами
        slideEven: [
            ["marginLeft", "0px"], // Убираем отступ слева для четных слайдов
            ["marginRight", "0px"], // Убираем отступ справа для четных слайдов
            ["transform", "translateX(50px)"], // Сдвигаем слайд по горизонтали
        ],
        // Стили для изображений в слайде
        image: [
            ["width", "100%"], // Ширина изображения — 100% от родительского контейнера
            ["height", "auto"], // Автоматическая высота изображения
        ],
        // Мобильная версия стилей
        mobile: {
            // Стили для внешнего контейнера слайдера на мобильных устройствах
            extraContainer: [
                ["width", "calc(100% - 40px)"], // Ширина с учетом отступов по бокам
                ["margin", "0 auto"], // Центрирование контейнера по горизонтали
                ["minWidth", "unset"], // Снятие минимальной ширины
            ],
            // Стили для контейнера стрелок на мобильных устройствах
            arrowContainer: [
                ["display", "none"] // Скрытие стрелок на мобильных устройствах
            ],
            // Стили для слайдов на мобильных устройствах
            slide: [
                ["width", "100%"], // Ширина слайда — 100% от контейнера
                ["height", "auto"], // Автоматическая высота слайда
            ],
            // Стили для слайдов с четными индексами на мобильных устройствах
            slideEven: [
                ["marginLeft", "100px"], // Отступ слева для четных слайдов
                ["marginRight", "100px"], // Отступ справа для четных слайдов
                ["transform", "translateX(50px)"], // Сдвиг по горизонтали
            ],
            // Стили для изображений на мобильных устройствах
            image: [
                ["height", "300px"] // Установка высоты изображения для мобильных устройств
            ],
            // Стили для контейнера точек на мобильных устройствах
            dotsContainer: [
                ["position", "absolute"], // Абсолютное позиционирование контейнера с точками
                ["textAlign", "center"], // Центрирование точек
                ["width", "calc(100% - 40px)"], // Ширина контейнера с учетом отступов
            ]
        }
    },

    mapStyles: {
        outerContainer: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["width", "100%"],
            ["margin", "0 auto"],
            ["boxSizing", "border-box"],
        ],
        regionBar: [
            ["width", "100%"],
            ["height", "100px"], // Как указано в коде
            ["border", "2px solid #4A4A4A"],
            ["maxWidth", "1200px"],
            ["margin", "0 auto"],
            ["padding", "20px"],
            ["borderRadius", "10px"],
            ["userSelect", "none"],
        ],
        regionBarMobile: [
            ["width", "90%"],
            ["height", "100px"], // Как указано в коде
            ["border", "2px solid #4A4A4A"],
            ["maxWidth", "1200px"],
            ["margin", "0 auto"],
            ["padding", "20px"],
            ["borderRadius", "10px"],
            ["userSelect", "none"],
        ],
        mapWrapper: [
            ["display", "flex"],
            ["flexDirection", "row"],
            ["justifyContent", "flex-start"],
            ["alignItems", "stretch"],
            ["maxWidth", "1200px"],
            ["width", "100%"],
            ["margin", "0 auto"],
            ["padding", "20px 0px 10px 0px"],
            ["boxSizing", "border-box"],
            ["gap", "20px"]
        ],
        mapWrapperMobile: [
            ["flexDirection", "column"],
            ["padding", "10px 0px"],
            ["width", "100%"],
            ["alignItems", "center"],
            ["gap", "10px"],
            ["display", "flex"],
            ["justifyContent", "flex-start"],
            ["maxWidth", "1200px"],
            ["margin", "0 auto"],
            ["boxSizing", "border-box"]
        ],
        mapContainer: [
            ["width", "80%"],
            ["height", "500px"], // Фиксированная высота для синхронизации с checkboxContainer
            ["margin", "0"],
            ["border", "2px solid #4A4A4A"],
            ["borderRadius", "10px"],
            ["overflow", "hidden"],
            ["position", "relative"]
        ],
        mapContainerMobile: [
            ["width", "90%"],
            ["height", "400px"], // Оставляем как было для мобильных
            ["margin", "0 auto"],
            ["border", "2px solid #4A4A4A"],
            ["borderRadius", "10px"],
            ["overflow", "hidden"],
            ["position", "relative"]
        ],
        checkboxContainer: [
            ["userSelect", "none"],
            ["padding", "10px"],
            ["borderRadius", "10px"],
            ["minWidth", "150px"],
            ["width", "25%"],
            ["height", "500px"], // Синхронизируем с mapContainer для ПК
            ["border", "2px solid #4A4A4A"],
            ["marginLeft", "0"],
            ["background", "white"],
            ["display", "flex"],
            ["flexDirection", "column"],
            ["overflowY", "auto"], // Добавляем прокрутку, если контент превышает высоту
            ["boxSizing", "border-box"] // Учитываем padding и border в высоте
        ],
        checkboxContainerMobile: [
            ["width", "90%"],
            ["marginLeft", "0"],
            ["marginTop", "0"],
            ["margin", "0 auto"],
            ["padding", "10px"],
            ["borderRadius", "10px"],
            ["border", "2px solid #4A4A4A"],
            ["background", "white"],
            ["display", "flex"],
            ["flexDirection", "column"],
            ["height", "auto"], // На мобильных высота зависит от контента
            ["overflowY", "auto"], // Прокрутка для длинного контента
            ["boxSizing", "border-box"]
        ],
        checkboxWrapper: [
            ["marginBottom", "5px"],
            ["display", "flex"],
            ["alignItems", "center"],
            ["width", "100%"] // Ограничиваем ширину wrapper внутри контейнера
        ],
        checkboxLabel: [
            ["marginLeft", "5px"],
            ["wordWrap", "break-word"], // Перенос длинных слов
            ["overflowWrap", "break-word"], // Совместимость с разными браузерами
            ["maxWidth", "100%"] // Ограничиваем ширину текста
        ],
        subCheckboxContainer: [
            ["marginLeft", "20px"],
            ["marginTop", "5px"],
            ["display", "flex"],
            ["flexDirection", "column"]
        ],
        subCheckboxContainerMobile: [
            ["marginLeft", "15px"],
            ["marginTop", "5px"],
            ["display", "flex"],
            ["flexDirection", "column"]
        ],
        subCheckboxWrapper: [
            ["marginBottom", "5px"],
            ["display", "flex"],
            ["alignItems", "center"],
            ["width", "100%"] // Ограничиваем ширину вложенных wrapper-ов
        ]
    },

    pageStyles: {
        contentContainer: [
            ["display", "flex"],
            ["flexDirection", "column"],
            ["alignItems", "center"],
            ["margin", "0 auto"],
            ["fontFamily", "'Helvetica Neue', sans-serif"],
            ["position", "relative"],
            ["minHeight", "100vh"],
            ["width", "100%"],
            ["maxWidth", "100%"],
            ["boxSizing", "border-box"],
            ["overflowX", "hidden"],
        ],
        backgroundImage: [
            ["position", "absolute"],
            ["top", "0"],
            ["left", "0"],
            ["width", "100%"],
            ["height", "200px"],
            ["backgroundImage", "url('src/assets/pictures/back.jpg')"], // Заменяем на заглушку
            ["backgroundSize", "cover"],
            ["backgroundPosition", "center"],
            ["backgroundRepeat", "no-repeat"],
            ["zIndex", "-1"],
        ],
        mainTitleContainer: [
            ["position", "relative"],
            ["width", "100%"],
            ["margin", "0"],
            ["padding", "0"],
            ["height", "200px"],
        ],
        mainTitle: [
            ["fontSize", "50px"],
            ["fontWeight", "10"],
            ["textAlign", "left"],
            ["color", "#0000ff"],
            ["padding", "20px"],
            ["margin", "0"],
            ["boxSizing", "border-box"],
            ["position", "absolute"],
            ["top", "50%"],
            ["left", "70px"],
            ["transform", "translateY(-50%)"],
            ["zIndex", "1"],
            ["wordWrap", "break-word"],
        ],
        servicesDiv: [
            ["lineHeight", "1.7"],
            ["padding", "20px"],
            ["backgroundColor", "#ffffff"],
            ["borderRadius", "10px"],
            ["boxShadow", "0 2px 6px rgba(0, 0, 0, 0.1)"],
            ["boxSizing", "border-box"],
            ["width", "100%"], // Устанавливаем ширину 100% для корректного отображения
        ],
        servicesList: [
            ["listStyleType", "none"],
            ["padding", "0 10px"],
            ["margin", "0"],
            ["lineHeight", "1.8"],
            ["fontSize", "16px"],
        ],
        link: [
            ["textDecoration", "none"],
            ["color", "#007BFF"],
            ["transition", "color 0.3s"],
            ["listStyleType", "none"],
            ["padding", "0"],
            ["margin", "0"],
        ],
        testingDiv: [
            ["flex", "1"],
            ["padding", "20px"],
            ["margin", "0"],
            ["backgroundColor", "#ffffff"],
            ["borderRadius", "10px"],
            ["boxShadow", "0 2px 6px rgba(0, 0, 0, 0.1)"],
            ["boxSizing", "border-box"],
            ["width", "100%"], // Устанавливаем ширину 100% для корректного отображения
        ],
        leftColumn: [
            ["flex", "0 0 30%"],
            ["paddingRight", "20px"],
            ["marginTop", "20px"],
            ["marginLeft", "70px"],
            ["display", "block"],
            ["order", "1"],
        ],
        rightColumn: [
            ["flex", "1"],
            ["paddingLeft", "20px"],
            ["marginTop", "20px"],
            ["order", "2"],
        ],
        twoColumns: [
            ["display", "flex"],
            ["gap", "0px"],
            ["flexWrap", "wrap"],
            ["width", "100%"],
            ["boxSizing", "border-box"],
            ["padding", "0 10px"], // Добавляем минимальные отступы для контейнера
        ],
        leftColumnMobile: [
            ["flex", "0 0 100%"],
            ["padding", "10px"],
            ["margin", "0"],
            ["order", "2"],
            ["display", "block"],
        ],
        rightColumnMobile: [
            ["flex", "0 0 100%"],
            ["padding", "10px"],
            ["margin", "0"],
            ["order", "1"],
        ],
        mainTitleMobile: [
            ["fontSize", "24px"],
            ["textAlign", "center"],
            ["left", "0"],
            ["width", "100%"],
            ["padding", "10px"],
            ["transform", "translateY(-50%)"],
            ["boxSizing", "border-box"],
        ],
        newsDiv: [
            ["padding", "20px"],
            ["margin", "20px 0 10px"],
            ["backgroundColor", "#e8f4fc"],
            ["borderRadius", "10px"],
            ["boxShadow", "0 2px 6px rgba(0, 0, 0, 0.1)"],
            ["boxSizing", "border-box"],
            ["width", "100%"], // Устанавливаем ширину 100% для корректного отображения
        ],
        newsBlock: [
            ["marginBottom", "20px"],
            ["padding", "10px"],
            ["borderBottom", "1px solid #ccc"],
        ],
        newsText: [
            ["fontSize", "14px"],
            ["fontWeight", "bold"],
            ["marginBottom", "5px"],
            ["textDecoration", "none"],
            ["color", "#007BFF"],
        ],
        newsDate: [
            ["fontSize", "12px"],
            ["color", "#777"],
            ["display", "block"],
            ["marginBottom", "10px"],
        ],
        textElement: [
            ["marginBottom", "15px"],
            ["lineHeight", "1.6"],
            ["fontSize", "16px"],
        ],
        image: [
            ["maxWidth", "100%"],
            ["height", "auto"],
            ["marginBottom", "15px"],
        ],
        imageMobile: [
            ["maxWidth", "70%"],
            ["height", "auto"],
            ["marginBottom", "15px"],
            ["display", "block"],
            ["marginLeft", "auto"],
            ["marginRight", "auto"],
        ],
        additionalStyles: {
            calendarDay: [
                ["fontWeight", "bold"],
                ["marginBottom", "10px"],
                ["display", "flex"],
                ["gap", "10px"]
            ],
            dayImage: [
                ["marginBottom", "15px"],
                ["maxWidth", "100%"],
                ["textAlign", "center"]
            ],
            saintsList: [
                ["display", "flex"],
                ["flexDirection", "column"],
                ["gap", "5px"],
                ["marginBottom", "10px"]
            ],
            fastingInfo: [
                ["color", "#666"],
                ["fontStyle", "italic"],
                ["fontSize", "14px"]
            ],
            navButtons: [
                ["padding", "5px 10px"],
                ["margin", "3px"],
                ["backgroundColor", "#007BFF"],
                ["color", "#fff"],
                ["border", "none"],
                ["borderRadius", "3px"],
                ["cursor", "pointer"],
                ["fontSize", "12px"]
            ],
            navContainer: [
                ["display", "flex"],
                ["justifyContent", "space-between"],
                ["width", "100%"],
                ["marginTop", "10px"]
            ]
        }
    },

    headerStyles: {
        containerStyle: [
            ["display", "flex"],           // Flex-контейнер для выравнивания
            ["justifyContent", "center"],  // Центрирование по горизонтали
            ["alignItems", "center"],      // Центрирование по вертикали
            ["width", "100%"],             // Ширина на весь экран
            ["padding", "20px"],           // Внутренние отступы
        ],
        titleStyle: [
            ["fontSize", "32px"],          // Размер шрифта
            ["fontWeight", "bold"],        // Жирный текст
            ["color", "#4A4A4A"],             // Цвет текста
            ["margin", "0"],               // Убираем стандартные отступы
            ["textAlign", "center"],       // Центрирование текста
            ["fontFamily", "Arial, sans-serif"], // Шрифт
            ["letterSpacing", "1px"],      // Межбуквенный интервал
        ],
    },

    editorStyles: {
        container: [
            ["width", "100%"],
            ["max-width", "800px"],
            ["display", "flex"],
            ["flex-direction", "column"],
            ["gap", "15px"],
            ["padding", "20px"],
            ["background-color", "#ffffff"],
            ["border-radius", "10px"],
            ["box-shadow", "0 4px 6px rgba(0,0,0,0.05)"],
            ["margin", "20px auto"],
            ["margin-top", "20px"]
        ],
        textElement: [
            ["font-size", "16px"],
            ["color", "#333333"],
            ["margin", "0"],
            ["line-height", "1.5"],
            ["font-family", "Arial, sans-serif"]
        ],
        bgColorWrapper: [
            ["display", "flex"],
            ["align-items", "center"],
            ["gap", "5px"]
        ],
        bgColorPicker: [
            ["width", "50px"],
            ["height", "30px"],
            ["border", "1px solid #ddd"],
            ["border-radius", "4px"],
            ["margin-left", "10px"]
        ],
        bgColorLabel: [
            ["font-size", "14px"],
            ["color", "#666"],
            ["margin-left", "10px"]
        ],
        borderColorWrapper: [
            ["display", "flex"],
            ["align-items", "center"],
            ["gap", "5px"]
        ],
        borderColorPicker: [
            ["width", "50px"],
            ["height", "30px"],
            ["border", "1px solid #ddd"],
            ["border-radius", "4px"],
            ["margin-left", "10px"]
        ],
        numberInput: [
            ["width", "50px"],
            ["height", "30px"],
            ["border", "1px solid #ddd"],
            ["border-radius", "4px"],
            ["padding", "0 5px"],
            ["margin-left", "10px"]
        ],
        borderLabel: [
            ["font-size", "14px"],
            ["color", "#666"],
            ["margin-left", "10px"]
        ],
        imageWrapper: [
            ["display", "flex"],
            ["flex-direction", "column"], // Изменено на column для новостей
            ["gap", "20px"],
            ["align-items", "flex-start"] // Выравнивание слева
        ],
        imageControlsWrapper: [
            ["display", "flex"],
            ["flex-direction", "column"],
            ["gap", "10px"]
        ],
        imageInput: [
            ["width", "200px"],
            ["padding", "5px"],
            ["border", "1px solid #ddd"],
            ["border-radius", "4px"]
        ],
        resetButton: [
            ["padding", "5px 10px"],
            ["border", "1px solid #ddd"],
            ["border-radius", "4px"],
            ["background-color", "#f0f0f0"],
            ["cursor", "pointer"],
            ["font-size", "14px"]
        ],
        imagePreview: [
            ["width", "100px"], // Уменьшено для новостей (1:1)
            ["height", "100px"],
            ["border", "1px dashed #ddd"],
            ["border-radius", "4px"],
            ["display", "flex"],
            ["align-items", "center"],
            ["justify-content", "center"],
            ["background-color", "#f9f9f9"] // Светлый фон для предпросмотра
        ],
        imagePreviewText: [
            ["font-size", "14px"],
            ["color", "#888"],
            ["text-align", "center"]
        ],
        imagePreviewImg: [
            ["max-width", "100%"],
            ["max-height", "100%"],
            ["object-fit", "cover"] // Изменено на cover для соотношения 1:1
        ],
        buttonPreviewWrapper: [
            ["display", "flex"],
            ["justify-content", "center"],
            ["margin-top", "20px"]
        ],
        textInput: [
            ["width", "700px"],
            ["padding", "5px"],
            ["border", "1px solid #ddd"],
            ["border-radius", "4px"],
            ["font-size", "14px"],
            ["color", "#333"]
        ],
        newsItem: [ // Новый стиль для элементов новостей/анонсов
            ["display", "flex"],
            ["flex-direction", "column"],
            ["gap", "10px"],
            ["border", "1px solid #ccc"],
            ["padding", "10px"],
            ["border-radius", "4px"],
            ["background-color", "#fff"]
        ],
        section: [ // Новый стиль для секций (Новости, Анонсы, Новые записи)
            ["display", "flex"],
            ["flex-direction", "column"],
            ["gap", "10px"],
            ["width", "100%"]
        ],
        sectionTitle: [ // Новый стиль для заголовков секций
            ["font-size", "18px"],
            ["font-weight", "bold"],
            ["color", "#333"],
            ["margin", "0"]
        ],
        textContainer: [
            ["display", "flex"],
            ["flex-direction", "column"],
            ["gap", "15px"],
            ["width", "100%"]
        ],
        langWrapper: [
            ["display", "flex"],
            ["flex-direction", "column"],
            ["gap", "5px"],
            ["width", "100%"]
        ],
        langSelectWrapper: [
            ["display", "flex"],
            ["align-items", "center"],
            ["gap", "10px"],
            ["width", "100%"],
            ["max-width", "700px"] // Ограничиваем ширину, чтобы не выходило за рамки
        ]
    },
};