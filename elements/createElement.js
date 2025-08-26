//глобальная функция для создания html элементов
function createElement(tag, attributes, parent) {  
    var element = document.createElement(tag); // Создаем элемент с указанным тегом  
    for (var key in attributes) { // Перебираем переданные атрибуты  
        element.setAttribute(key, attributes[key]); // Устанавливаем атрибуты элементу  
    }  
    if (parent) parent.appendChild(element); // Если указан родитель, добавляем элемент в него  
    return element; // Возвращаем созданный элемент  
}  
