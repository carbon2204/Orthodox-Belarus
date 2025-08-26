// Глобальные переменные для доступа к карте
let globalMapInstance = null;
let globalClusterer = null;
let globalPlacemarks = [];
let globalYmaps = null;
let globalRegionBar = null;
let globalLocationTitle = null;
let lastSelectedCentury = localStorage.getItem('lastSelectedCentury') || '';

function createCenturySelector(data, styles, currentLanguage) {
  var centuryBlock = createElement('div', { class: 'century-selector' }, document.body);
  var i;
  for (i = 0; i < styles.containerStyle.length; i++) {
    var style = styles.containerStyle[i];
    centuryBlock.style[style[0]] = style[1];
  }

  var centuryText = createElement('span', { class: 'century-text' }, centuryBlock);
  for (i = 0; i < styles.textStyle.length; i++) {
    var style = styles.textStyle[i];
    centuryText.style[style[0]] = style[1];
  }

  var resetButton = createElement('button', { class: 'reset-button' }, centuryBlock);
  for (i = 0; i < styles.resetButtonStyle.length; i++) {
    var style = styles.resetButtonStyle[i];
    resetButton.style[style[0]] = style[1];
  }

  var selectedText = data[currentLanguage][0];
  var resetText = data[currentLanguage][1];
  centuryText.textContent = selectedText + ': ';
  resetButton.textContent = resetText;

  var centuryValue = createElement('span', { class: 'century-value' }, centuryText);

  if (!saintsSliderInstance || !saintsSliderInstance.container.parentNode) {
    saintsSliderInstance = createSaintsSlider(belhardSiteData.saintsData, currentLanguage, style1, lastSelectedCentury);
  }
  if (!booksSliderInstance || !booksSliderInstance.container.parentNode) {
    booksSliderInstance = createSaintsSlider(belhardSiteData.booksData, currentLanguage, style2, lastSelectedCentury);
  }

  function updateCentury(century) {
    centuryValue.textContent = century;
    lastSelectedCentury = century;
    localStorage.setItem('lastSelectedCentury', century);
    if (saintsSliderInstance) {
      saintsSliderInstance.updateSlider(century);
    }
    if (booksSliderInstance) {
      booksSliderInstance.updateSlider(century);
    }
    filterMapByCentury(century);
  }

  function filterMapByCentury(century) {
    var mapData = belhardSiteData.map;
    if (!mapData) {
      console.error('Ошибка: данные карты не инициализированы');
      return;
    }

    if (!globalYmaps || !globalMapInstance || !globalClusterer) {
      // console.log('Карта ещё не инициализирована, фильтрация отложена');
      return;
    }

    var filteredData = { ...mapData };

    if (century) {
      filteredData.churchPoints = mapData.churchPoints.filter(point => point.century === century);
      filteredData.saintsPoints = mapData.saintsPoints.filter(point => point.century === century);
      filteredData.monumentPoints = mapData.monumentPoints.filter(point => point.century === century);

      const hasPoints = filteredData.churchPoints.length > 0 ||
                       filteredData.saintsPoints.length > 0 ||
                       filteredData.monumentPoints.length > 0;

      if (!hasPoints) {
        // console.log(`В веке ${century} нет точек, отображаем все элементы`);
        filteredData.churchPoints = mapData.churchPoints;
        filteredData.saintsPoints = mapData.saintsPoints;
        filteredData.monumentPoints = mapData.monumentPoints;
      }
    } else {
      filteredData.churchPoints = mapData.churchPoints;
      filteredData.saintsPoints = mapData.saintsPoints;
      filteredData.monumentPoints = mapData.monumentPoints;
    }

    updateMapPoints(
      filteredData,
      currentLanguage,
      globalYmaps,
      globalPlacemarks,
      onPlacemarkClick,
      globalMapInstance,
      globalClusterer,
      globalRegionBar,
      globalLocationTitle
    );

    // updateCheckboxLabels(filteredData);

    return filteredData;
  }

  if (lastSelectedCentury) {
    centuryValue.textContent = lastSelectedCentury;
  }

  function isCentury(text) {
    const romanNumeralPattern = /^(I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV|XVI|XVII|XVIII|XIX|XX|XXI)$/i;
    return romanNumeralPattern.test(text);
  }

  function bindClickHandlers() {
    var timelineContainers = document.querySelectorAll('.timeline-container');
    if (timelineContainers.length === 0 || timelineInstances.length === 0) {
      return false;
    }

    for (i = 0; i < timelineContainers.length; i++) {
      var container = timelineContainers[i];
      var timelineBars = container.querySelectorAll('.timeline-bar');
      var j;
      for (j = 0; j < timelineBars.length; j++) {
        var bar = timelineBars[j];
        bar.removeEventListener('click', handleBarClick);
        bar.addEventListener('click', handleBarClick);
      }
    }
    return true;
  }

  function handleBarClick(e) {
    e.stopPropagation();
    var bar = e.currentTarget;
    var dotContainer = bar.closest('.dot-container');
    if (dotContainer) {
      var clickedText = dotContainer.querySelector('.dot-text');
      if (clickedText) {
        clickedText = clickedText.textContent.trim();
        // console.log('Текст с таймлайна:', clickedText);
      }
      if (clickedText) {
        if (isCentury(clickedText)) {
          lastSelectedCentury = clickedText;
          // console.log('Выбранный век для фильтрации:', lastSelectedCentury);
          localStorage.setItem('lastSelectedCentury', lastSelectedCentury);
          updateCentury(lastSelectedCentury);
        } else {
          // console.log('Выбрано не век, используется последний век:', lastSelectedCentury);
          filterMapByCentury(lastSelectedCentury);
        }
      }
    }
  }

  function setupObserverForContainer(container, index) {
    var observer = new MutationObserver(function(mutations) {
      var j;
      for (j = 0; j < mutations.length; j++) {
        bindClickHandlers();
        var currentLevel = timelineInstances[index]?.getCurrentLevel();
        var currentPath = timelineInstances[index]?.getCurrentPath();
        if (currentLevel === 'centuries' && currentPath && currentPath.length === 0 && lastSelectedCentury !== '') {
          lastSelectedCentury = '';
          localStorage.setItem('lastSelectedCentury', '');
          updateCentury('');
        }
      }
    });

    observer.observe(container, { childList: true, subtree: true });
  }

  function setupTimelineMonitoring() {
    var timelineContainers = document.querySelectorAll('.timeline-container');
    if (timelineContainers.length === 0 || timelineInstances.length === 0) {
      setTimeout(setupTimelineMonitoring, 100);
      return;
    }

    for (i = 0; i < timelineContainers.length; i++) {
      var container = timelineContainers[i];
      setupObserverForContainer(container, i);
    }
  }

  function initializeTimelineHandlers() {
    var handlersBound = bindClickHandlers();
    if (handlersBound) {
      setupTimelineMonitoring();
    } else {
      setTimeout(initializeTimelineHandlers, 100);
    }

    resetButton.addEventListener('click', function() {
      centuryValue.textContent = '';
      lastSelectedCentury = '';
      localStorage.setItem('lastSelectedCentury', '');
      for (i = 0; i < timelineInstances.length; i++) {
        timelineInstances[i].setLevelAndPath('centuries', [], currentLanguage);
      }
      updateCentury('');
      bindClickHandlers();
    });
  }

  initializeTimelineHandlers();

  return {
    updateCentury: updateCentury,
    filterMapByCentury: filterMapByCentury
  };
}
