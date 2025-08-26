const style2 = `
    .slider-container-2 {
        display: flex;
        overflow: hidden;
        padding: 20px;
        position: relative;
        cursor: grab;
        width: 100%;
    }
    .slides-wrapper-2 {
        display: flex;
        transition: transform 0s;
        width: auto;
    }
    .slide-2 {
        min-width: 280px; /* Ширина для книжной обложки */
        width: 280px;
        flex-shrink: 0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        perspective: 1000px; /* Добавляем перспективу для 3D-эффекта */
    }
    .frame-2 {
        border: 1px solid #d35400; /* Тонкая рамка вокруг "книги" */
        padding: 15px;
        text-align: center;
        background: #ffffff; /* Белый фон для контраста обложки */
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center; /* Центрирование всех дочерних элементов по горизонтали */
        height: 100%;
        width: 100%;
        max-width: 280px;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2), /* Тень справа для "глубины" */
                    -1px 0 2px rgba(0, 0, 0, 0.1); /* Лёгкая тень слева как корешок */
        font-family: 'Georgia', serif;
        box-sizing: border-box;
        transform: rotateY(-5deg); /* Лёгкий наклон для эффекта книги */
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
    .slider-image-2 {
        width: 240px; /* Ширина обложки книги */
        height: 320px; /* Высота как у типичной книги */
        object-fit: cover;
        border-radius: 5px; /* Лёгкое закругление углов */
        user-select: none;
        border: 2px solid #e67e22; /* Рамка вокруг обложки */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Тень для "поднятия" обложки */
    }
    .title-text-2 {
        color: #8B4513; /* Коричневый, как книжный переплёт */
        margin: 8px 0 5px;
        font-size: 16px;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        width: 100%;
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
    .body-text-2 {
        color: #555; /* Тёмно-серый для читаемости */
        margin: 4px 0;
        font-size: 14px;
        text-align: center;
        font-style: italic;
        width: 100%;
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
    .description-2 {
        max-width: 240px;
        width: 100%;
        word-wrap: break-word;
        overflow-wrap: break-word;
        text-align: center;
        margin: 5px auto;
        flex-grow: 1;
        color: #333;
        font-size: 13px;
        line-height: 1.3;
    }
    .slider-container-2::-webkit-scrollbar {
        display: none;
    }
    .slider-container-2 {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .frame-2:hover {
        transform: rotateY(0deg); /* При наведении книга "выпрямляется" */
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25); /* Более выраженная тень */
    }
    .read-link-2 {
        font-size: 9pt;
        margin-top: 5px;
        color: #8B4513; /* Синий цвет, чтобы было понятно, что это ссылка */
        text-decoration: none; /* Убираем подчеркивание */
        font-weight: bold; /* Делаем жирным, чтобы выделялось */
        cursor: pointer; /* Делаем курсор в виде указателя */
        transition: color 0.3s ease-in-out; /* Плавное изменение цвета */
    }
    .read-link-2:hover {
        text-decoration: underline; /* Подчеркиваем при наведении */
        color: #d35400; /* Темнее при наведении */
    }
    .read-link-2:active {
        text-decoration: underline;
        color: #d35400;
    }
    .read-link-2:visited {
        color: #8B4513; /* Оставляем тот же цвет, чтобы не было фиолетового */
    }
`;