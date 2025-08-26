// Глобальная функция для применения стилей к элементу  
function applyStyles(element, styleArray) {  
    for (var i = 0; i < styleArray.length; i++) {  // Проходим по массиву стилей
        element.style[styleArray[i][0]] = styleArray[i][1];  // Устанавливаем стиль элементу (свойство = значение)
    }
}
