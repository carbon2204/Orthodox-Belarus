const navBarCss = `
/* Оверлей (затемнение фона) */
#overlay {
    position: fixed;                /* Фиксирует оверлей на экране */
    inset: 0;                       /* Растягивает оверлей на всю область экрана (top, right, bottom, left = 0) */
    z-index: 9;                     /* Устанавливает уровень слоя ниже навигации, но выше остального контента */
    display: none;                  /* Скрывает оверлей по умолчанию */
}

/* Кнопка открытия боковой панели */
#open-sidebar-button {
    height: 10px;                   /* Устанавливает высоту кнопки 10 пикселей */
    z-index: 2;                     /* Устанавливает уровень слоя кнопки */
    position: fixed;                /* Фиксирует кнопку на экране */
    top: 0px;                       /* Прижимает кнопку к верху экрана */
    right: 0px;                     /* Прижимает кнопку к правому краю экрана */
    margin-left: auto;              /* Сдвигает кнопку вправо относительно контейнера */
    background: none;               /* Убирает фон кнопки */
    border: none;                   /* Убирает границу кнопки */
    padding: 1em;                   /* Добавляет внутренний отступ 1em со всех сторон */
    cursor: pointer;                /* Устанавливает курсор указателя при наведении */
}

/* Общие стили для кнопок открытия/закрытия боковой панели */
#open-sidebar-button,
#close-sidebar-button {
    display: none;                  /* Скрывает кнопки по умолчанию */
    background: none;               /* Убирает фон кнопок */
    border: none;                   /* Убирает границы кнопок */
    padding: 1em;                   /* Добавляет внутренний отступ 1em со всех сторон */
    cursor: pointer;                /* Устанавливает курсор указателя при наведении */
}

/* Основной контейнер навигации */
nav {
    background-color: var(--primary-color); /* Устанавливает основной цвет фона навигации из переменной */
    user-select: none;              /* Запрещает выделение текста в навигации */
    position: relative;             /* Устанавливает относительное позиционирование для вложенных элементов */
    width: 100%;                    /* Устанавливает ширину навигации на 100% */
    display: flex;                  /* Использует flexbox для размещения содержимого */
}

.visible-menu {
    display: flex;                  /* Устанавливает flexbox для видимого меню */
}

/* Список в навигации */
nav ul {
    list-style: none;               /* Убирает маркеры списка */
    display: flex;                  /* Использует flexbox для горизонтального размещения элементов списка */
    flex-wrap: nowrap;              /* Запрещает перенос элементов списка на новую строку */
}

/* Элементы списка */
nav li {
    position: relative;             /* Устанавливает относительное позиционирование для вложенных подменю */
    margin-left: 0;
}

nav li.shifted {
    margin-left: 50px;              /* Сдвиг вправо */
}

/* Ссылки в навигации */
nav a {
    display: flex;                  /* Использует flexbox для размещения содержимого ссылки */
    align-items: center;            /* Центрирует содержимое ссылки по вертикали */
    text-decoration: none;          /* Убирает подчеркивание ссылок */
    color: var(--text-color);       /* Устанавливает цвет текста ссылки из переменной */
    white-space: nowrap;            /* Запрещает перенос текста ссылки */
}

/* Эффект при наведении на ссылку */
nav a:hover {
    background-color: var(--hover-color); /* Устанавливает цвет фона при наведении из переменной */
}

/* Стрелка для элементов с подменю */
nav li.has-children > a::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid var(--text-color);
    margin-left: 8px; /* Отступ от текста */
}

/* Поворот стрелки при открытии */
nav li.open > a::after {
    transform: translateY(2px) rotate(180deg); /* Смещает стрелку вниз на 2px и поворачивает на 180 градусов */
}

/* Подменю первого уровня */
nav li ul {
    display: block;                 /* Устанавливает блочное отображение подменю */
    position: absolute;             /* Абсолютное позиционирование подменю относительно родителя */
    left: 0;                        /* Прижимает подменю к левому краю родителя */
    top: 100%;                      /* Располагает подменю ниже родителя */
    background-color: var(--child-color); /* Устанавливает цвет фона подменю первого уровня из переменной */
    min-width: 200px;               /* Устанавливает минимальную ширину подменю 200 пикселей */
    z-index: 10;                    /* Устанавливает уровень слоя подменю выше основного контента */
    max-height: 0;                  /* Скрывает подменю, ограничивая его высоту */
    opacity: 0;                     /* Делает подменю прозрачным по умолчанию */
    overflow: hidden;               /* Скрывает содержимое, выходящее за пределы подменю */
    box-sizing: border-box;         /* Учитывает границы и отступы в размере элемента */
}

/* Подменю при открытии */
nav li.open > ul {
    opacity: 1;                     /* Делает подменю полностью видимым */
    transform: scaleY(1);           /* Устанавливает нормальный масштаб по вертикали */
    overflow: visible;              /* Делает содержимое подменю видимым при раскрытии */
}

/* Элементы вложенного списка */
nav li ul li {
    position: relative;             /* Устанавливает относительное позиционирование для вложенных подменю */
}

/* Подменю второго уровня (раскрывается вправо) */
nav li ul li ul {
    left: 100%;
    top: -1px;
    background-color: var(--grandChild-color);
    min-width: 250px; /* Увеличиваем минимальную ширину */
    width: max-content; /* Адаптивная ширина на основе контента */
    max-width: 400px; /* Ограничиваем максимальную ширину */
    white-space: normal; /* Разрешаем перенос текста */
    overflow-wrap: break-word; /* Перенос длинных слов */
    word-break: break-word; /* Дополнительная поддержка переноса слов */
}

/* Стрелка для подменю второго уровня */
nav li ul li.has-children > a::after {
    content: "";                    /* Создает псевдоэлемент для стрелки */
    display: inline-block;          /* Делает стрелку встроенным блочным элементом */
    width: 0;                       /* Устанавливает ширину стрелки 0 (будет задано через границы) */
    height: 0;                      /* Устанавливает высоту стрелки 0 (будет задано через границы) */
    border-top: 4px solid transparent; /* Создает верхнюю прозрачную часть треугольника */
    border-bottom: 4px solid transparent; /* Создает нижнюю прозрачную часть треугольника */
    border-left: 6px solid var(--text-color); /* Создает стрелку вправо с цветом из переменной */
    margin-left: 8px;               /* Добавляет отступ слева 8 пикселей от текста */
}

.burger {
    background: var(--hover-color); /* Устанавливает цвет фона бургер-меню из переменной */
    position: absolute;             /* Абсолютное позиционирование бургера относительно nav */
    width: 60px;                    /* Устанавливает ширину бургера 60 пикселей */
    height: 100%;                   /* Устанавливает высоту бургера на 100% родителя */
    right: 0;                       /* Прижимает бургер к правому краю */
    padding: 0;                     /* Убирает внутренние отступы */
    border: 0;                      /* Убирает границы */
    outline: none;                  /* Убирает обводку при фокусе */
    cursor: pointer;                /* Устанавливает курсор указателя при наведении */
}

.burger img {
    width: 30px;                    /* Устанавливает ширину изображения бургера 30 пикселей */
    height: auto;                   /* Автоматически подстраивает высоту изображения */
    transition: 0.4s;               /* Добавляет плавный переход длительностью 0.4 секунды */
}

.burger.active img {
    transform: rotate(90deg);       /* Поворачивает изображение бургера на 90 градусов при активации */
}

.burger-count {
    position: absolute;             /* Абсолютное позиционирование счетчика относительно бургера */
    width: 26px;                    /* Устанавливает ширину счетчика 26 пикселей */
    height: 26px;                   /* Устанавливает высоту счетчика 26 пикселей */
    left: 0;                        /* Прижимает счетчик к левому краю */
    top: 50%;                       /* Центрирует счетчик по вертикали (до трансформации) */
    text-align: center;             /* Центрирует текст внутри счетчика */
    background: var(--hiddenMenuColor); /* Устанавливает цвет фона счетчика из переменной */
    color: var(--counter);          /* Устанавливает цвет текста счетчика из переменной */
    font-size: 14px;                /* Устанавливает размер шрифта 14 пикселей */
    border: 2px solid var(--counter); /* Добавляет границу толщиной 2 пикселя с цветом из переменной */
    line-height: 22px;              /* Устанавливает высоту строки для центрирования текста */
    border-radius: 50%;             /* Делает счетчик круглым */
    font-weight: bold;              /* Делает текст счетчика жирным */
    transform: translate(-65%, -50%); /* Смещает счетчик влево на 65% и вверх на 50% для точного позиционирования */
}

.hidden-menu {
    flex-direction: column;         /* Располагает элементы скрытого меню вертикально */
    position: fixed;                /* Фиксирует скрытое меню на экране */
    right: 0;                       /* Прижимает меню к правому краю */
    top: 55px;                      /* Располагает меню на 55 пикселей ниже верха экрана */
    min-width: 250px;               /* Устанавливает минимальную ширину меню 250 пикселей */
    padding: 10px 0;                /* Добавляет отступы 10px сверху/снизу */
    background: var(--hiddenMenuColor); /* Устанавливает цвет фона из переменной */
    transition: transform 0.4s ease-out; /* Добавляет плавный переход для трансформации длительностью 0.4 секунды */
    transform: translateX(100%);    /* Скрывает меню, сдвигая его вправо за пределы экрана */
    max-width: 90vw;                /* Ограничивает максимальную ширину до 90% ширины экрана */
    box-sizing: border-box;         /* Учитывает границы и отступы в размере элемента */
}

.hidden-menu.active {
    transform: translateX(0);       /* Показывает меню, возвращая его в видимую область */
}

.hidden-menu a {
    padding: 10px 20px;             /* Устанавливает внутренние отступы: 10px сверху/снизу, 20px слева/справа */
    color: var(--counter);          /* Устанавливает цвет текста из переменной */
    font-size: 13pt;                /* Устанавливает размер шрифта 13 пунктов */
    display: block;                 /* Делает ссылки блочными элементами */
    white-space: normal;            /* Разрешает перенос текста */
    overflow-wrap: break-word;      /* Обеспечивает перенос длинных слов */
    word-break: break-word;         /* Дополнительно поддерживает перенос слов */
    max-width: 100%;                /* Ограничивает ширину текста до 100% контейнера */
    box-sizing: border-box;         /* Учитываем padding в ширине */
}

.hidden-menu li {
    width: 100%;                    /* Заставляет элементы списка занимать всю ширину меню */
    max-width: 100%;                /* Ограничиваем ширину элемента */
}

/* Стрелка для подменю в hidden-menu */
.hidden-menu li.has-children > a::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid var(--counter);
    margin-left: 8px;
    transform: translateY(0px);
    transition: transform 0.3s ease-out;
}

/* Подменю в hidden-menu */
.hidden-menu li ul {
    position: static;               /* Убирает абсолютное позиционирование для подменю */
    width: 100%;                    /* Устанавливает ширину подменю на 100% */
    max-height: 0;                  /* Скрывает подменю, ограничивая высоту */
    opacity: 0;                     /* Делает подменю прозрачным */
    overflow: hidden;               /* Скрывает содержимое, выходящее за пределы */
    background: var(--child-color); /* Устанавливает цвет фона подменю из переменной */
    padding: 0;                     /* Убирает внутренние отступы */
    transition: max-height 0.3s ease-out, opacity 0.3s ease-out; /* Добавляет плавный переход для высоты и прозрачности */
}

.hidden-menu li.open > ul {
    max-height: 1000px;             /* Устанавливает большую высоту для раскрытия подменю */
    opacity: 1;                     /* Делает подменю полностью видимым */
    overflow: visible;              /* Делает содержимое подменю видимым */
    padding: 5px 0;                 /* Добавляет отступы 5px сверху/снизу для подменю */
}

/* Вложенные элементы в hidden-menu */
.hidden-menu li ul li {
    width: 100%;                    /* Устанавливает ширину вложенных элементов на 100% */
    max-width: 100%;                /* Ограничиваем ширину элемента */
}

/* Подменю второго уровня */
.hidden-menu li ul li ul {
    background: var(--grandChild-color); /* Устанавливает цвет фона подменю второго уровня из переменной */
    width: 100%;                         /* Ширина уже установлена на 100% */
    max-width: 100%;                     /* Ограничиваем максимальную ширину до контейнера */
    white-space: normal;                 /* Разрешает перенос текста */
    overflow-wrap: break-word;           /* Перенос длинных слов */
    word-break: break-word;              /* Дополнительная поддержка переноса слов */
    padding: 5px 0;                      /* Отступы для вложенных элементов */
}

/* Ссылки внутри подменю второго уровня */
.hidden-menu li ul li ul a {
    padding: 10px 20px;                  /* Существующий отступ сохранен */
    color: var(--counter);               /* Существующий цвет сохранен */
    font-size: 13pt;                     /* Существующий размер шрифта сохранен */
    display: block;                      /* Существующий стиль сохранен */
    white-space: normal;                 /* Разрешаем перенос текста */
    overflow-wrap: break-word;           /* Перенос длинных слов */
    word-break: break-word;              /* Дополнительная поддержка переноса слов */
    max-width: 100%;                     /* Ограничиваем ширину текста до контейнера */
    box-sizing: border-box;              /* Учитываем padding в ширине */
}

/* Элементы вложенного списка второго уровня */
.hidden-menu li ul li ul li {
    width: 100%;                         /* Ширина уже установлена на 100% */
    max-width: 100%;                     /* Ограничиваем ширину элемента */
}

.hidden-menu a:hover {
    background: var(--counter);     /* Устанавливает цвет фона при наведении из переменной */
    color: var(--hiddenMenuColor);  /* Устанавливает цвет текста при наведении из переменной */
}

nav .hidden {
    display: none;                  /* Скрывает элементы с классом hidden внутри nav */
}

/* Десктопные стили (ширина экрана больше 1200px) */
@media screen and (min-width: 651px) {
    nav {
        position: fixed;            /* Фиксирует навигацию на экране */
        top: 0;                     /* Прижимает навигацию к верху экрана */
        left: 0;                    /* Прижимает навигацию к левому краю */
        right: 0;                   /* Растягивает навигацию до правого края */
        z-index: 10;                /* Устанавливает уровень слоя выше остального контента */
        width: 100%;                /* Устанавливает ширину навигации на 100% */
    }
    nav li:hover > ul {
        opacity: 1;                 /* Делает подменю видимым при наведении */
        transform: scaleY(1);       /* Устанавливает нормальный масштаб по вертикали */
        overflow: visible;          /* Делает содержимое подменю видимым */
    }
    
    .hidden-menu li:hover > a::after {
        transform: translateY(0px) rotate(180deg); /* Поворачивает стрелку вверх при наведении */
        border-top: 7px solid var(--hover-color);
    }

    nav li:hover > a::after {
        transform: translateY(2px) rotate(180deg); /* Поворачивает стрелку вверх при наведении */
    }

    nav li ul li:hover > a::after {
        transform: translateX(-4px) rotate(180deg); /* Поворачивает стрелку второго уровня при наведении */
    }
}

/* Мобильные стили (ширина экрана до 1200px) */
@media screen and (max-width: 650px) {
    #open-sidebar-button,
    #close-sidebar-button {
        display: block;             /* Показывает кнопки открытия и закрытия */
    }

    nav {
        position: fixed;            /* Фиксирует навигацию на экране */
        top: 0;                     /* Прижимает навигацию к верху экрана */
        right: -120%;               /* Скрывает навигацию за правым краем экрана */
        height: 100vh;              /* Устанавливает высоту навигации на 100% высоты экрана */
        z-index: 10;                /* Устанавливает уровень слоя выше остального контента */
        border-left: 1px solid var(--hover-color); /* Добавляет левую границу с цветом из переменной */
        transition: right 400ms ease-out; /* Добавляет плавное появление меню за 400мс */
        overflow-y: auto;           /* Включает вертикальную прокрутку при необходимости */
        width: min(15em, 100%);     /* Ограничивает ширину до 15em или 100% экрана */
    }

    nav.show {
        right: 0;                   /* Показывает навигацию, перемещая её в видимую область */
    }

    nav.show ~ #overlay {
        display: block;             /* Показывает оверлей, когда навигация видима */
    }

    nav ul {
        flex-direction: column;     /* Располагает элементы списка вертикально */
        width: 100%;                /* Устанавливает ширину списка на 100% */
    }

    nav a {
        width: 100%;                /* Делает ссылки на всю ширину контейнера */
        padding-left: 2.5em;        /* Добавляет отступ слева 2.5em */
        white-space: normal;        /* Разрешает перенос текста (исправлено с wrap на normal) */
    }

    nav li ul {
        position: static;           /* Убирает абсолютное позиционирование подменю */
        max-height: 0;              /* Скрывает подменю, ограничивая высоту */
        opacity: 0;                 /* Делает подменю прозрачным */
        overflow: hidden;           /* Скрывает содержимое подменю */
        border: none;               /* Убирает границы подменю */
    }

    nav li.open > ul {
        max-height: 100%;           /* Показывает подменю, убирая ограничение высоты */
        opacity: 1;                 /* Делает подменю видимым */
        overflow: visible;          /* Делает содержимое подменю видимым */
    }

    nav li ul li.has-children > a::after {
        transform: translateY(2px) rotate(90deg); /* Поворачивает стрелку вправо для подменю */
    }

    nav li ul li.open > a::after {
        transform: translateX(2px) rotate(180deg); /* Поворачивает стрелку при открытии подменю */
    }

    nav li ul li.has-children.open > a::after {
        transform: translateY(0px) rotate(-90deg); /* Поворачивает стрелку влево при открытии */
    }

    nav li.has-children.open > a::after {
        transform: translateY(2px) rotate(180deg); /* Поворачивает стрелку вверх при открытии */
    }

}

.search-wrapper-type-zero {
    z-index: 11;
    position: fixed;
    top: 8px;
    right: 105px;
    display: inline-flex;
    align-items: center;
    height: 40px;
    transition: right 0.3s ease-in-out;
}

.search-input-type-zero {
    width: 0;
    height: 0;
    padding: 5px 10px;
    padding-right: 40px;
    border-radius: 20px;
    border: 1px solid #ccc;
    outline: none;
    background-color: #fff;
    opacity: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out, padding 0.3s ease-in-out, opacity 0.3s ease-in-out;
    pointer-events: none;
}

.search-input-type-zero.expanded-type-zero {
    width: 200px;
    height: 40px;
    padding: 5px 10px;
    padding-right: 40px;
    opacity: 1;
    transform: translateX(-5px);
    pointer-events: auto;
}

.search-wrapper-type-zero.search-shifted-type-zero {
    right: 180px;
}

.search-wrapper-type-zero.search-mobile-type-zero {
    top: 13px;
    right: 160px;
    z-index: 8;
}

.search-icon-type-zero {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    background-color: #fff;
    border-radius: 50%;
    padding: 5px;
}

.search-wrapper-type-one {
    z-index: 11;
    position: fixed;
    top: 8px;
    right: 61px;
    display: inline-flex;
    align-items: center;
    height: 40px;
    transition: right 0.3s ease-in-out;
}

.search-input-type-one {
    width: 0;
    height: 0;
    padding: 5px 10px;
    padding-right: 40px;
    border-radius: 20px;
    border: 1px solid #ccc;
    outline: none;
    background-color: #fff;
    opacity: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out, padding 0.3s ease-in-out, opacity 0.3s ease-in-out;
    pointer-events: none;
}

.search-input-type-one.expanded-type-one {
    width: 200px;
    height: 40px;
    padding: 5px 10px;
    padding-right: 40px;
    opacity: 1;
    transform: translateX(-5px);
    pointer-events: auto;
}

.search-wrapper-type-one.search-shifted-type-one {
    right: 142px;
}

.search-wrapper-type-one.search-mobile-type-one {
    top: 13px;
    right: 122px;
    z-index: 8;
}

.search-icon-type-one {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    background-color: #fff;
    border-radius: 50%;
    padding: 5px;
}

/* Дополнительные стили для адаптивности */
@media (max-width: 650px) {
    .search-wrapper {
        width: auto;                /* Устанавливает автоматическую ширину контейнера поиска */
    }
}
`;