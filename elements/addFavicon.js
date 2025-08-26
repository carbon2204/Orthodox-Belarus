// Функция для добавления фавикона
function addFavicon(faviconPath) {
    const link = document.createElement("link"); // Создаем новый элемент <link>
    link.rel = "icon"; // Указываем, что это иконка сайта (фавикон)
    link.href = faviconPath; // Задаем путь к файлу фавикона
    link.type = "image/x-icon"; // Определяем тип файла как .ico (можно также использовать "image/png" для PNG)
    document.head.appendChild(link); // Добавляем элемент в <head> страницы
}
