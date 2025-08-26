// Глобальные переменные для хранения слайдеров
let saintsSliderInstance = null;
let booksSliderInstance = null;

function createSaintsSlider(booksData, currentLanguage, styles, selectedCentury) {
  if (!booksData || !currentLanguage) {
    return {
      container: document.createElement('div'),
      updateSlider: function() {},
      updateSliderContent: function() {}
    };
  }

  var textArray = booksData.textData[currentLanguage];
  var imagesArray = booksData.content.images;
  var pdfArray = booksData.content[currentLanguage];

  if (typeof selectedCentury === 'undefined') {
    selectedCentury = '';
  }

  if (!textArray || !imagesArray || !pdfArray) {
    return {
      container: document.createElement('div'),
      updateSlider: function() {},
      updateSliderContent: function() {}
    };
  }

  let sliderInstance = booksData === belhardSiteData.saintsData ? saintsSliderInstance : booksSliderInstance;
  let sliderContainer, slidesWrapper, uniqueSuffix, classSuffix;

  if (sliderInstance && sliderInstance.container.parentNode) {
    sliderContainer = sliderInstance.container;
    slidesWrapper = sliderContainer.querySelector('.slides-wrapper' + sliderInstance.classSuffix);
    uniqueSuffix = sliderInstance.uniqueSuffix;
    classSuffix = sliderInstance.classSuffix;
  } else {
    uniqueSuffix = Math.random().toString(36).substring(2, 8);
    classSuffix = "-" + uniqueSuffix;
    sliderContainer = createElement("div", { class: "slider-container" + classSuffix });
    slidesWrapper = createElement("div", { class: "slides-wrapper" + classSuffix });
    sliderContainer.appendChild(slidesWrapper);

    if (booksData === belhardSiteData.saintsData) {
      var saintsContainer = document.getElementById('saints-slider-container') || document.body;
      saintsContainer.appendChild(sliderContainer);
    } else if (booksData === belhardSiteData.booksData) {
      var booksContainer = document.getElementById('books-slider-container') || document.body;
      booksContainer.appendChild(sliderContainer);
    }
  }

  let originalSlides = []; // Массив оригинальных слайдов
  let slideWidth = 0; // Ширина одного слайда
  let totalWidth = 0; // Общая ширина оригинальных слайдов

  function updateSliderContent(century) {
    slidesWrapper.innerHTML = ''; // Полная очистка
    originalSlides = []; // Очищаем массив оригинальных слайдов

    var hasMatches = false;
    for (var i = 0; i < imagesArray.length; i++) {
      var saintCentury = textArray[i * 4 + 3];
      if (century && saintCentury === century) {
        hasMatches = true;
      }
    }

    var slideCount = 0;
    for (var i = 0; i < imagesArray.length; i++) {
      var saintCentury = textArray[i * 4 + 3];
      if (century && !hasMatches) {
        // console.log(`В веке ${century} нет элементов, показываем все`);
      } else if (century && saintCentury !== century) {
        continue;
      }

      var imagePath = imagesArray[i];
      var pdfPath = pdfArray[i];
      var slide = createElement("div", { class: "slide" + classSuffix });

      var textStartIndex = i * 4;

      var imgElement = createElement("img", {
        src: imagePath,
        alt: "Book " + (i + 1),
        class: "slider-image" + classSuffix,
      });

      var imgContainer = imgElement;
      if (pdfPath && pdfPath !== "") {
        var imgLink = createElement("a", {
          href: pdfPath,
          target: "_blank",
        });
        imgLink.appendChild(imgElement);
        imgContainer = imgLink;
      }

      var nameElement = createElement("p", { class: "title-text" + classSuffix });
      nameElement.textContent = textArray[textStartIndex];

      var info = createElement("p", { class: "body-text" + classSuffix });
      var infoLabel = textArray[textArray.length - 2];
      var infoValue = textArray[textStartIndex + 1];
      info.textContent = infoLabel + ": " + infoValue;

      var description = createElement("p", { class: "body-text" + classSuffix + " description" + classSuffix });
      description.textContent = textArray[textStartIndex + 2];

      var frame = createElement("div", { class: "frame" + classSuffix });

      frame.appendChild(imgContainer);
      frame.appendChild(nameElement);
      frame.appendChild(info);
      frame.appendChild(description);

      if (pdfPath && pdfPath !== "") {
        var readLinkText = textArray[textArray.length - 1];
        var readLink = createElement("a", {
          href: pdfPath,
          target: "_blank",
          class: "read-link" + classSuffix,
        });
        readLink.textContent = readLinkText;
        frame.appendChild(readLink);
      }

      slide.appendChild(frame);
      originalSlides.push(slide); // Сохраняем оригинальный слайд
      slideCount++;
    }

    // Инициализируем слайдер с клонами
    initializeSlides();
    applySliderStyles();
    updateEventListeners();
    // console.log('Слайдер обновлён:', booksData === belhardSiteData.saintsData ? 'saints' : 'books', 'Век:', century, 'Слайдов:', slideCount);
  }

  function initializeSlides() {
    slidesWrapper.innerHTML = '';
    updateSlideSize();

    if (originalSlides.length === 0) return;

    const containerWidth = sliderContainer.offsetWidth;
    totalWidth = slideWidth * originalSlides.length;
    const repeatCount = Math.ceil((containerWidth * 3) / totalWidth) + 1; // Утроенное количество для буфера

    // Заполняем слайдер несколькими копиями слайдов
    for (let r = 0; r < repeatCount; r++) {
      for (let i = 0; i < originalSlides.length; i++) {
        const clone = originalSlides[i].cloneNode(true);
        slidesWrapper.appendChild(clone);
      }
    }
  }

  var isMouseDown = false;
  var startX = 0;
  var translateX = 0;
  var hasMoved = false;

  function updateSlideSize() {
    var screenWidth = window.innerWidth;
    slideWidth = booksData === belhardSiteData.saintsData ? 220 : 280; // Разная ширина для saints и books
    if (screenWidth < 600) {
      slideWidth = booksData === belhardSiteData.saintsData ? 180 : 240;
    }
    var slides = sliderContainer.querySelectorAll(".slide" + classSuffix);
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.minWidth = slideWidth + "px";
    }
  }

  function startDrag(e) {
    isMouseDown = true;
    hasMoved = false;
    if (e.touches) {
      startX = e.touches[0].pageX - sliderContainer.offsetLeft;
    } else {
      startX = e.pageX - sliderContainer.offsetLeft;
    }
    sliderContainer.style.cursor = "grabbing";
  }

  function onDrag(e) {
    if (!isMouseDown || originalSlides.length === 0) return;
    var currentX;
    if (e.touches) {
      currentX = e.touches[0].pageX - sliderContainer.offsetLeft;
    } else {
      currentX = e.pageX - sliderContainer.offsetLeft;
    }
    var diff = currentX - startX;
    translateX += diff;

    // Корректируем translateX для бесконечной прокрутки
    if (translateX > 0) {
      translateX -= totalWidth;
    } else if (translateX < -totalWidth * 2) {
      translateX += totalWidth;
    }

    slidesWrapper.style.transition = "none";
    slidesWrapper.style.transform = "translateX(" + translateX + "px)";
    startX = currentX;
    hasMoved = true;

    console.log('onDrag: translateX:', translateX, 'totalWidth:', totalWidth);
  }

  function stopDrag() {
    if (!isMouseDown) return;
    isMouseDown = false;
    sliderContainer.style.cursor = "grab";
    slidesWrapper.style.transition = "transform 0.3s ease";

    // Корректируем позицию после отпускания
    if (translateX > 0) {
      translateX -= totalWidth;
      slidesWrapper.style.transform = "translateX(" + translateX + "px)";
    } else if (translateX < -totalWidth * 2) {
      translateX += totalWidth;
      slidesWrapper.style.transform = "translateX(" + translateX + "px)";
    }
  }

  function updateEventListeners() {
    sliderContainer.removeEventListener("mousedown", startDrag);
    sliderContainer.removeEventListener("mousemove", onDrag);
    sliderContainer.removeEventListener("mouseup", stopDrag);
    sliderContainer.removeEventListener("mouseleave", stopDrag);
    sliderContainer.removeEventListener("touchstart", startDrag);
    sliderContainer.removeEventListener("touchmove", onDrag);
    sliderContainer.removeEventListener("touchend", stopDrag);
    sliderContainer.removeEventListener("selectstart", preventSelect);

    sliderContainer.addEventListener("mousedown", startDrag);
    sliderContainer.addEventListener("mousemove", onDrag);
    sliderContainer.addEventListener("mouseup", stopDrag);
    sliderContainer.addEventListener("mouseleave", stopDrag);
    sliderContainer.addEventListener("touchstart", startDrag, { passive: true });
    sliderContainer.addEventListener("touchmove", onDrag, { passive: true });
    sliderContainer.addEventListener("touchend", stopDrag);
    sliderContainer.addEventListener("selectstart", preventSelect);

    var links = sliderContainer.querySelectorAll("a");
    links.forEach(link => {
      link.removeEventListener("click", preventLinkClick);
      link.addEventListener("click", preventLinkClick);
    });

    var images = slidesWrapper.querySelectorAll("img");
    images.forEach(img => {
      img.removeEventListener("dragstart", preventDrag);
      img.addEventListener("dragstart", preventDrag);
    });
  }

  function preventSelect(e) {
    e.preventDefault();
  }

  function preventLinkClick(e) {
    if (hasMoved) {
      e.preventDefault();
    }
  }

  function preventDrag(e) {
    e.preventDefault();
  }

  function applySliderStyles() {
    const existingStyle = document.querySelector(`style[data-slider-style="${uniqueSuffix}"]`);
    if (existingStyle) {
      existingStyle.remove();
    }

    if (typeof styles === 'string') {
      var styleSheet = document.createElement("style");
      styleSheet.setAttribute('data-slider-style', uniqueSuffix);
      var adjustedStyles = styles.replace(/-2/g, classSuffix);
      styleSheet.textContent = adjustedStyles;
      document.head.appendChild(styleSheet);
    } else if (styles && typeof styles === 'object') {
      applyStyles(sliderContainer, styles.sliderContainer || {});
      applyStyles(slidesWrapper, {
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'visible',
        ...(styles.slidesWrapper || {})
      });
      var slides = slidesWrapper.querySelectorAll(".slide" + classSuffix);
      for (var i = 0; i < slides.length; i++) {
        applyStyles(slides[i], styles.slide || {});
      }
    }
  }

  function applyStyles(element, styleObj) {
    if (element && styleObj && typeof styleObj === 'object') {
      var keys = Object.keys(styleObj);
      for (var i = 0; i < keys.length; i++) {
        element.style[keys[i]] = styleObj[keys[i]];
      }
    }
  }

  function updateSlider(newCentury) {
    slidesWrapper.style.display = 'none';
    slidesWrapper.innerHTML = ''; // Полная очистка

    applySliderStyles();
    updateSliderContent(newCentury);
    updateSlideSize();

    translateX = 0;
    requestAnimationFrame(() => {
      slidesWrapper.style.transition = "none";
      slidesWrapper.style.transform = "translateX(0px)";
      slidesWrapper.style.display = 'flex';
      updateEventListeners();
      // console.log('updateSlider: slideWidth:', slideWidth, 'totalWidth:', totalWidth);
    });
  }

  // Инициализация слайдера
  applySliderStyles();
  updateSliderContent(selectedCentury);
  updateSlideSize();

  sliderInstance = {
    container: sliderContainer,
    updateSlider: updateSlider,
    updateSliderContent: updateSliderContent,
    uniqueSuffix: uniqueSuffix,
    classSuffix: classSuffix
  };

  if (booksData === belhardSiteData.saintsData) {
    saintsSliderInstance = sliderInstance;
  } else if (booksData === belhardSiteData.booksData) {
    booksSliderInstance = sliderInstance;
  }

  window.removeEventListener("resize", updateSlideSize);
  window.addEventListener("resize", updateSlideSize);

  return sliderInstance;
}