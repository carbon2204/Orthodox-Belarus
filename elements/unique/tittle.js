function createSiteHeader(titleText, headerStyles, currentLanguage = "ru", titleIndex) {  
  // Проверяем, существует ли текст заголовка для текущего языка и индекса
  const titles = titleText[currentLanguage] || [];
  const title = titles[titleIndex];

  // Создаем элемент header без дополнительных атрибутов
  const headerContainer = createElement('header', {id: 'header_'+titleIndex});
  
  // Если текста заголовка нет, создаем пустой div и выходим из функции
  const titleElement = createElement('div', {id: 'title_' + titleIndex});
  if (!title) {
    headerContainer.appendChild(titleElement); // Добавляем пустой div в контейнер
    document.body.appendChild(headerContainer); // Добавляем контейнер в body
    return headerContainer;
  }

  // Применяем стили к контейнеру заголовка из объекта headerStyles
  applyStyles(headerContainer, headerStyles.containerStyle);

  // Устанавливаем текст заголовка, если он есть
  titleElement.textContent = title;
  // Применяем стили к элементу заголовка из объекта headerStyles
  applyStyles(titleElement, headerStyles.titleStyle);

  // Добавляем элемент заголовка в контейнер header
  headerContainer.appendChild(titleElement);
  // Добавляем контейнер заголовка в тело документа
  document.body.appendChild(headerContainer);

  // Возвращаем созданный контейнер заголовка для дальнейшего использования
  return headerContainer;
}