function createCompanyInfo(data, styles) {
    // Создаем контейнер div, который будет содержать всю информацию о компании
    const container = createElement("div", {}, document.body);
    applyStyles(container, styles.container); // Применяем стили к контейнеру

    // Создаем изображение компании и добавляем его в контейнер
    const image = createElement("img", { src: data.image }, container);
    applyStyles(image, styles.image); // Применяем стили к изображению

    // Создаем логотип компании и добавляем его в контейнер
    const logo = createElement("img", { src: data.logo }, container);
    applyStyles(logo, styles.logo); // Применяем стили к логотипу
    
    // Создаем текстовое описание компании и добавляем его в контейнер
    const text = createElement("div", {}, container);
    text.innerText = data.text; // Устанавливаем текст из переданных данных
    applyStyles(text, styles.text); // Применяем стили к текстовому блоку

    function applyResponsiveStyles() {  
        if (window.innerWidth <= 800) {  
            applyStyles(image, styles.imageMobile);
            applyStyles(container, styles.containerMobile);
            applyStyles(logo, styles.logoMobile);
            applyStyles(text, styles.textMobile);
            const textHeight = text.clientHeight;
            image.style.height = `${textHeight + 50}px`; // Добавляем 20px к высоте текста
        } else {  
            applyStyles(image, styles.image);
            applyStyles(container, styles.container);
            applyStyles(logo, styles.logo);
            applyStyles(text, styles.text);
            const textHeight = text.clientHeight;
            image.style.height = `${textHeight + 20}px`; // Добавляем 20px к высоте текста
        }  
    }
    
    applyResponsiveStyles(); // Применяем стили при загрузке страницы
    window.addEventListener("resize", applyResponsiveStyles); // Добавляем обработчик изменения размера окна
}
