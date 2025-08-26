// Функция для создания кнопки "Scroll to Top"
function createScrollToTopButton(styles, imgSrc) {
    const button = createElement('button', { 
        id: 'scroll-to-top', // Устанавливаем идентификатор кнопки
        title: 'Вернуться наверх', // Всплывающая подсказка при наведении
    }, document.body);

    // Добавляем изображение (PNG) стрелки вверх
    const arrow = createElement('img', {
        src: imgSrc, // Путь к изображению PNG
        alt: 'Прокрутить вверх', // Описание изображения для доступности
    }, button);

    // Применяем стили к кнопке
    applyStyles(button, styles.button); // Устанавливаем переданные стили для кнопки

    // Применяем стили к изображению (можно настроить размер, если нужно)
    applyStyles(arrow, styles.arrow); // Устанавливаем переданные стили для изображения

    // Обработчик клика на кнопку
    button.addEventListener('click', function() {
        scrollToTop();
    });

    // Отслеживаем прокрутку страницы
    window.addEventListener('scroll', function() {
        if (window.scrollY > belhardSiteData.targetY || window.clientY > belhardSiteData.targetY) { // Когда прокрутка больше заданной в файле data.js от верхней части
            applyStyles(button, styles.withScroll); // Применяем стили для видимой кнопки
        } else {
            applyStyles(button, styles.noScroll); // Применяем стили для скрытой кнопки
        }
    });
}