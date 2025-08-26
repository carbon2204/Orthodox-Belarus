//глобальная функция для применения стилей
function applyGlobalStyles(cssContent) {  
    if (!cssContent || typeof cssContent !== 'string') {  // Проверяем, если переданный контент пуст или не является строкой
        console.error("Invalid CSS content provided");  // Выводим ошибку в консоль
        return;  // Прерываем выполнение функции
    }

    const styleElement = document.createElement('style');  // Создаем тег <style>
    styleElement.type = 'text/css';  // Указываем, что это стили CSS

    // Записываем CSS-контент в тег <style>
    styleElement.appendChild(document.createTextNode(cssContent)); 

    document.head.appendChild(styleElement);  // Добавляем тег <style> в <head>
}   