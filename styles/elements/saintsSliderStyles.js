const style1 = `
    .slider-container-2 {
        display: flex;
        overflow: hidden;
        padding: 20px;
        position: relative;
        cursor: grab;
    }
    .slides-wrapper-2 {
        display: flex;
        transition: transform 0s;
    }
    .slide-2 {
        min-width: 220px;
        flex-shrink: 0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .frame-2 {
        border: 2px solid #4A4A4A;
        padding: 15px;
        text-align: center;
        background: white;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .slider-image-2 {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
        user-select: none;
    }
    .title-text-2 {
        color: #4A4A4A;
        margin: 5px 0;
        font-size: 18px;
        text-align: center;
    }
    .body-text-2 {
        color: #5C5C5C;
        margin: 5px 0;
        font-size: 16px;
        text-align: center;
    }
    .description-2 {
        max-width: 180px;
        word-wrap: break-word;
        text-align: justify;
        margin: 0 auto;
        flex-grow: 1;
    }
    .slider-container-2::-webkit-scrollbar {
        display: none;
    }
    .slider-container-2 {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .read-link-2 {
        font-size: 11pt;
        margin-top: 5px;
        color: var(--hover-color); /* Синий цвет, чтобы было понятно, что это ссылка */
        text-decoration: none; /* Убираем подчеркивание */
        font-weight: bold; /* Делаем жирным, чтобы выделялось */
        cursor: pointer; /* Делаем курсор в виде указателя */
        transition: color 0.3s ease-in-out; /* Плавное изменение цвета */
    }
    .read-link-2:hover {
        text-decoration: underline; /* Подчеркиваем при наведении */
        color: var(--primary-color); /* Темнее при наведении */
    }
    .read-link-2:active {
        text-decoration: underline;
        color: var(--primary-color);
    }
    .read-link-2:visited {
        color: var(--hover-color); /* Оставляем тот же цвет, чтобы не было фиолетового */
    }
`;