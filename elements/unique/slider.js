// Функция создания слайдера с изображениями, поддержкой перетаскивания и автопрокрутки
function createSlider(styles, images) {
  // Если изображений нет, не создаем слайдер и выходим
  if (!images || images.length === 0) {
    return;
  }
  // Создаем дополнительный контейнер для слайдера и добавляем его в body
  var extraContainer = createElement("div", { id: "sliderContentContainer" }, document.body);
  // Применяем стили к дополнительному контейнеру из объекта styles
  applyStyles(extraContainer, styles.extraContainer);

  // Создаем основной контейнер слайдера с уникальным идентификатором
  var sliderContainer = createElement(
    "div",
    { id: "sliderContainer" },
    extraContainer
  );
  // Применяем стили к основному контейнеру слайдера
  applyStyles(sliderContainer, styles.sliderContainer);

  // Создаем обертку для слайдов внутри контейнера слайдера
  var sliderWrapper = createElement("div", {}, sliderContainer);
  // Применяем стили к обертке слайдов
  applyStyles(sliderWrapper, styles.sliderWrapper);

  // Перебираем массив изображений для создания слайдов
  for (var i = 0; i < images.length; i++) {
    // Создаем элемент слайда внутри обертки
    var slide = createElement("div", {}, sliderWrapper);
    // Применяем стили к слайду
    applyStyles(slide, styles.slide);

    // Создаем элемент изображения с указанным источником и добавляем его в слайд
    var img = createElement("img", { src: images[i] }, slide);
    // Применяем стили к изображению
    applyStyles(img, styles.image);
  }

  // Переменная для хранения текущего индекса слайда
  var currentIndex = 0;
  // Переменная для хранения интервала автопрокрутки
  var autoSlideInterval;

  // Функция отображения слайда по заданному индексу
  function showSlide(index) {
    // Если индекс меньше 0, переходим к последнему слайду
    if (index < 0) {
      index = images.length - 1;
      // Если индекс больше или равен длине массива, переходим к первому слайду
    } else if (index >= images.length) {
      index = 0;
    }
    // Устанавливаем плавный переход для обертки слайдов
    sliderWrapper.style.transition = "transform 0.5s ease";
    // Смещаем обертку слайдов в зависимости от индекса (каждый слайд — 100% ширины)
    sliderWrapper.style.transform = "translateX(" + index * -100 + "%)";
    // Обновляем текущий индекс
    currentIndex = index;
    // Обновляем состояние точек навигации
    updateDots();
  }

  // Создаем контейнер для стрелок навигации
  var arrowContainer = createElement("div", {}, extraContainer);
  // Применяем стили к контейнеру стрелок
  applyStyles(arrowContainer, styles.arrowContainer);

  // Создаем кнопку "предыдущий слайд"
  var prevButton = createElement("div", {}, arrowContainer);
  // Применяем общие стили стрелок и специфические стили для "предыдущего"
  applyStyles(prevButton, styles.arrow.concat(styles.prevArrow));

  // Создаем кнопку "следующий слайд"
  var nextButton = createElement("div", {}, arrowContainer);
  // Применяем общие стили стрелок и специфические стили для "следующего"
  applyStyles(nextButton, styles.arrow.concat(styles.nextArrow));

  // Добавляем обработчик клика для перехода к предыдущему слайду
  prevButton.addEventListener("click", function () {
    showSlide(currentIndex - 1);
  });
  // Добавляем обработчик клика для перехода к следующему слайду
  nextButton.addEventListener("click", function () {
    showSlide(currentIndex + 1);
  });

  // Создаем контейнер для точек навигации
  var dotsContainer = createElement("div", {}, sliderContainer);
  // Применяем стили к контейнеру точек
  applyStyles(dotsContainer, styles.dotsContainer);

  // Создаем точки навигации для каждого слайда
  for (var j = 0; j < images.length; j++) {
    // Создаем элемент точки с классом "dot"
    var dot = createElement("span", { class: "dot" }, dotsContainer);
    // Создаем замыкание для сохранения индекса точки
    (function (index) {
      // Добавляем обработчик клика для перехода к соответствующему слайду
      dot.addEventListener("click", function () {
        showSlide(index);
      });
    })(j);
  }

  // Функция обновления активной точки навигации
  function updateDots() {
    // Получаем все точки из контейнера
    var dots = dotsContainer.children;
    // Перебираем точки для обновления их состояния
    for (var k = 0; k < dots.length; k++) {
      // Если индекс совпадает с текущим, добавляем класс "active-dot"
      if (k === currentIndex) {
        dots[k].classList.add("active-dot");
        // Иначе удаляем класс "active-dot"
      } else {
        dots[k].classList.remove("active-dot");
      }
    }
  }

  // Функция запуска автоматической прокрутки слайдов
  function startAutoSlide() {
    // Устанавливаем интервал для имитации клика по кнопке "следующий"
    autoSlideInterval = setInterval(function () {
      nextButton.click();
    }, belhardSiteData.sliderTimer.time); // Интервал из глобальных данных
  }

  // Функция остановки автоматической прокрутки
  function stopAutoSlide() {
    // Очищаем интервал автопрокрутки
    clearInterval(autoSlideInterval);
  }

  // Переменные для управления перетаскиванием
  var isDragging = false; // Флаг активного перетаскивания
  var startX = 0; // Начальная позиция X при перетаскивании
  var initialTransform = 0; // Начальное смещение обертки слайдов

  // Обработчик начала перетаскивания (мышь или касание)
  function handleDragStart(e) {
    // Устанавливаем флаг перетаскивания
    isDragging = true;
    // Определяем начальную позицию X (для касания или мыши)
    if (e.touches) {
      startX = e.touches[0].clientX;
    } else {
      startX = e.clientX;
    }
    // Получаем текущее смещение обертки слайдов
    initialTransform =
      parseFloat(getComputedStyle(sliderWrapper).transform.split(",")[4]) || 0;
    // Останавливаем автопрокрутку при начале перетаскивания
    stopAutoSlide();
    // Предотвращаем стандартное поведение браузера
    e.preventDefault();
  }

  // Обработчик движения при перетаскивании
  function handleDragMove(e) {
    // Если перетаскивание не активно, выходим
    if (!isDragging) return;
    // Определяем текущую позицию X (для касания или мыши)
    var currentX;
    if (e.touches) {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.clientX;
    }
    // Вычисляем разницу в позиции
    var deltaX = currentX - startX;
    // Вычисляем новое смещение
    var newTransform = initialTransform + deltaX;
    // Отключаем переход для плавного движения
    sliderWrapper.style.transition = "none";
    // Применяем новое смещение к обертке слайдов
    sliderWrapper.style.transform = "translateX(" + newTransform + "px)";
  }

  // Обработчик завершения перетаскивания

  function handleDragEnd(e) {
    // Если перетаскивание не активно, выходим
    if (!isDragging) return;
    // Сбрасываем флаг перетаскивания
    isDragging = false;
    // Определяем конечную позицию X (для касания или мыши)
    var endX;
    if (e.changedTouches) {
      endX = e.changedTouches[0].clientX;
    } else {
      endX = e.clientX;
    }
    // Вычисляем разницу между начальной и конечной позицией
    var diff = startX - endX;
    // Если разница превышает треть ширины контейнера, переключаем слайд
    if (Math.abs(diff) > sliderContainer.offsetWidth / 3) {
      // Если движение влево, показываем следующий слайд
      if (diff > 0) {
        showSlide(currentIndex + 1);
        // Если движение вправо, показываем предыдущий слайд
      } else {
        showSlide(currentIndex - 1);
      }
      // Иначе возвращаем текущий слайд
    } else {
      showSlide(currentIndex);
    }
    // Возобновляем автопрокрутку после завершения
    startAutoSlide();
  }

  // Добавляем обработчик начала перетаскивания мышью
  sliderWrapper.addEventListener("mousedown", handleDragStart);
  // Добавляем обработчик движения мыши при перетаскивании
  sliderWrapper.addEventListener("mousemove", handleDragMove);
  // Добавляем обработчик завершения перетаскивания мышью
  sliderWrapper.addEventListener("mouseup", handleDragEnd);
  // Добавляем обработчик выхода мыши за пределы для завершения перетаскивания
  sliderWrapper.addEventListener("mouseleave", handleDragEnd);
  // Добавляем обработчик начала перетаскивания касанием
  sliderWrapper.addEventListener("touchstart", handleDragStart);
  // Добавляем обработчик движения касанием
  sliderWrapper.addEventListener("touchmove", handleDragMove);
  // Добавляем обработчик завершения касания
  sliderWrapper.addEventListener("touchend", handleDragEnd);

  // Функция обновления стилей слайдера с учетом мобильной версии
  function updateSliderStyles() {
    // Проверяем, является ли устройство мобильным по ширине экрана
    var isMobile = window.innerWidth <= belhardSiteData.mobileSizes.slider;

    // Применяем базовые стили к контейнерам
    applyStyles(extraContainer, styles.extraContainer);
    applyStyles(dotsContainer, styles.dotsContainer);
    applyStyles(arrowContainer, styles.arrowContainer);

    // Если мобильная версия, применяем дополнительные мобильные стили
    if (isMobile) {
      applyStyles(extraContainer, styles.mobile.extraContainer);
      applyStyles(dotsContainer, styles.mobile.dotsContainer);
      applyStyles(arrowContainer, styles.mobile.arrowContainer);
    }
  }

  // Добавляем обработчик изменения размера окна для обновления стилей
  window.addEventListener("resize", updateSliderStyles);
  // Добавляем обработчик загрузки страницы для инициализации стилей и первого слайда
  window.addEventListener("load", function () {
    updateSliderStyles();
    showSlide(0); // Показываем первый слайд при загрузке
  });

  // Инициализируем слайдер: применяем стили
  updateSliderStyles();
  // Показываем первый слайд
  showSlide(0);
  // Запускаем автопрокрутку
  startAutoSlide();
}
