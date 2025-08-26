function updateMapPoints(data, currentLanguage, ymaps, placemarks, onPlacemarkClick, mapInstance, clusterer, regionBar, locationTitle) {
  if (!mapInstance || !clusterer || !ymaps) {
    console.error('Ошибка: mapInstance, clusterer или ymaps не определены');
    return [];
  }

  const currentCenter = mapInstance.getCenter();
  clusterer.removeAll();
  mapInstance.geoObjects.removeAll();
  placemarks.length = 0;

  var pointTypes = {
    church: {
      points: data.churchPoints || [],
      icon: data.mapIcons[0],
      iconSize: data.iconSizes[0],
      categoryKey: data.pointTypeConfig.church.categoryKey,
    },
    saints: {
      points: data.saintsPoints || [],
      icon: data.mapIcons[1] || data.mapIcons[0],
      iconSize: data.iconSizes[1],
      categoryKey: data.pointTypeConfig.saints.categoryKey
    },
    monument: {
      points: data.monumentPoints || [],
      icon: data.mapIcons[2] || data.mapIcons[0],
      iconSize: data.iconSizes[2],
      categoryKey: data.pointTypeConfig.monument.categoryKey
    }
  };

  // Сохраняем исходные точки для возможного сброса
  const originalPoints = {
    church: [...pointTypes.church.points],
    saints: [...pointTypes.saints.points],
    monument: [...pointTypes.monument.points]
  };

  // Применяем фильтрацию по веку, если он выбран
  if (lastSelectedCentury) {
    pointTypes.church.points = pointTypes.church.points.filter(point => point.century === lastSelectedCentury);
    pointTypes.saints.points = pointTypes.saints.points.filter(point => point.century === lastSelectedCentury);
    pointTypes.monument.points = pointTypes.monument.points.filter(point => point.century === lastSelectedCentury);

    // Проверяем, есть ли точки после фильтрации
    const hasPoints = pointTypes.church.points.length > 0 ||
      pointTypes.saints.points.length > 0 ||
      pointTypes.monument.points.length > 0;

    // Если точек нет, сбрасываем фильтрацию по веку
    if (!hasPoints) {
      // console.log(`В веке ${lastSelectedCentury} нет точек, отображаем все элементы`);
      pointTypes.church.points = originalPoints.church;
      pointTypes.saints.points = originalPoints.saints;
      pointTypes.monument.points = originalPoints.monument;
    }
  }

  var textContent = data.formTextContent[currentLanguage];
  var regionTexts = data.pointsRegionTexts[currentLanguage];
  var typeIndexMap = { church: data.pointTypeConfig.church.id, saints: data.pointTypeConfig.saints.id, monument: data.pointTypeConfig.monument.id };

  function getRegionPath(pointType, pointId) {
    const link = data.pointsLocationLink.find(([type, id]) => type === typeIndexMap[pointType] && id === pointId);
    if (!link) return ["Неизвестно"];

    const regionId = link[2];
    const path = [];
    let currentId = regionId;

    while (currentId !== -1) {
      path.unshift(regionTexts[currentId]);
      const parentLink = data.regionLinks.find(([id]) => id === currentId);
      currentId = parentLink ? parentLink[1] : -1;
    }

    return path;
  }

  function getPointCategories(point, type, categoryKey) {
    if (!categoryKey) return [];
    var categories = point[categoryKey] || [];
    if (!categories.length) {
      var idsArray = belhardSiteData.map[categoryKey];
      categories = [];
      for (var i = 0; i < idsArray.length; i++) {
        if (idsArray[i].includes(point.id)) {
          categories.push(i);
        }
      }
    }
    return categories;
  }

  function filterPoints(point, typeIndex, categoryKey) {
    var settings = belhardSiteData.visiblePointTypes[typeIndex];
    if (settings === false) return false;

    if (categoryKey) {
      if (!settings.main) return false;
      if (belhardSiteData.map[categoryKey][0].includes(point.id)) return false;
      var enabledCategories = [];
      var categoryKeys = Object.keys(settings[categoryKey]);
      for (var i = 0; i < categoryKeys.length; i++) {
        var cat = categoryKeys[i];
        if (settings[categoryKey][cat] && cat !== '0') {
          enabledCategories.push(parseInt(cat));
        }
      }
      for (var i = 0; i < point.categories.length; i++) {
        if (enabledCategories.indexOf(point.categories[i]) !== -1) {
          return true;
        }
      }
      return false;
    }
    return settings;
  }

  var allPoints = [];
  var pointTypeEntries = Object.entries(pointTypes);
  for (var i = 0; i < pointTypeEntries.length; i++) {
    var type = pointTypeEntries[i][0];
    var config = pointTypeEntries[i][1];
    var points = config.points;
    for (var j = 0; j < points.length; j++) {
      var point = points[j];
      allPoints.push({
        id: point.id,
        coordinates: point.coordinates,
        name: point.name,
        description: point.description,
        elements: point.elements,
        imageInfo: point.imageInfo,
        pointType: type,
        categories: getPointCategories(point, type, config.categoryKey),
        regionPath: getRegionPath(type, point.id)
      });
    }
  }

  var filteredPoints = [];
  for (var i = 0; i < allPoints.length; i++) {
    var point = allPoints[i];
    if (filterPoints(point, typeIndexMap[point.pointType], pointTypes[point.pointType].categoryKey)) {
      filteredPoints.push(point);
    }
  }

  const nameCount = {};
  filteredPoints.forEach(point => {
    nameCount[point.name] = (nameCount[point.name] || 0) + 1;
    // if (nameCount[point.name] > 1) {
      // console.warn(`Найдено дублирование имени "${point.name}" с ID ${point.id} в filteredPoints`);
    // }
  });

  if (!filteredPoints.length) {
    // console.log('Нет точек для отображения');
    mapInstance.geoObjects.add(clusterer);
    return filteredPoints;
  }

  for (var i = 0; i < filteredPoints.length; i++) {
    var point = filteredPoints[i];
    var settings = pointTypes[point.pointType];
    var color = data.colors[i % data.colors.length];

    var placemark = new ymaps.Placemark(point.coordinates, {
      hintContent: textContent[point.name],
      balloonContentHeader: '<strong>' + textContent[point.name] + '</strong>',
      balloonContentBody: textContent[point.description]
    }, {
      iconLayout: 'default#image',
      iconImageHref: settings.icon,
      iconImageSize: settings.iconSize,
      iconColor: color
    });

    (function (currentPoint) {
      placemark.events.add('click', function (e) {
        onPlacemarkClick(currentPoint, currentLanguage, regionBar, locationTitle);
      });
      placemark.events.add('hover', function (e) {
        setRegionBarText(currentPoint, currentLanguage, regionBar, locationTitle, false);
      });
    })(point);

    placemarks.push(placemark);
  }

  clusterer.add(placemarks);
  mapInstance.geoObjects.add(clusterer);
  mapInstance.setCenter(currentCenter, mapInstance.getZoom(), { duration: 0 });
  return filteredPoints;
}

function createMap(data, currentLanguage) {
  const hasData = data.formTextContent[currentLanguage] &&
    data.checkboxTextContent[currentLanguage] &&
    data.mapCenter[currentLanguage];

  const mapLang = data.langMap[currentLanguage] || "ru_RU";

  const existingOuterContainer = document.querySelector('.outer-container');
  if (existingOuterContainer) existingOuterContainer.remove();

  const outerContainer = createElement('div', { class: 'outer-container' }, document.body);
  globalRegionBar = createElement('div', { class: 'region-bar' }, outerContainer);
  globalLocationTitle = createElement('h3', { class: 'location-title' }, globalRegionBar);
  globalLocationTitle.textContent = data.regionPathHeader[currentLanguage];

  const regionPathSpan = createElement('span', { class: 'region-path' }, globalRegionBar);
  regionPathSpan.textContent = data.regionPathNoRegionText[currentLanguage];
  const mapWrapper = createElement('div', { class: 'map-wrapper' }, outerContainer);

  const allHidden = belhardSiteData.visiblePointTypes.every(value => value === 0);

  var mapContainer = createElement('div', { id: 'map' }, mapWrapper);
  const checkboxContainer = createElement('div', { class: 'checkbox-container' }, mapWrapper);

  if (allHidden || !hasData) {
    return () => {};
  }

  const textContent = data.formTextContent[currentLanguage];
  const checkboxText = data.checkboxTextContent[currentLanguage];
  const pointTypeConfig = data.pointTypeConfig;

  const calculateCounts = (type, pointsData) => {
    const categoryKey = pointTypeConfig[type].categoryKey;
    const hiddenIds = new Set(pointsData[categoryKey]?.[0] || []);
    const points = pointsData[pointTypeConfig[type].pointsKey] || [];
    const total = points.filter(point => !hiddenIds.has(point.id)).length;
    const categoryCount = {};

    if (categoryKey) {
      pointTypeConfig[type].categories.forEach((catId, index) => {
        const relativeId = index + 1;
        const categoryIds = pointsData[categoryKey][relativeId] || [];
        categoryCount[relativeId] = categoryIds.filter(id => !hiddenIds.has(id)).length || 0;
      });
    }
    return { total, categoryCount };
  };

  window.updateCheckboxLabels = function(filteredData) {
    const pointCounts = {
      church: calculateCounts('church', filteredData),
      saints: calculateCounts('saints', filteredData),
      monument: calculateCounts('monument', filteredData)
    };

    const checkboxTypes = ['church', 'saints', 'monument'];
    checkboxTypes.forEach((type, index) => {
      const mainCheckboxLabel = checkboxContainer.querySelector(`label[for="${type}"]`);
      if (mainCheckboxLabel) {
        mainCheckboxLabel.textContent = `${checkboxText[pointTypeConfig[type].mainTextId]} (${pointCounts[type].total})`;
      }

      const subCheckboxContainer = checkboxContainer.querySelector(`.sub-checkbox-container`);
      if (subCheckboxContainer) {
        const activeCategories = pointTypeConfig[type].categories
          .map((catId, i) => ({
            id: i + 1,
            label: checkboxText[catId]
          }))
          .filter(cat => pointCounts[type].categoryCount[cat.id] > 0);

        activeCategories.forEach(category => {
          const subCheckboxLabel = subCheckboxContainer.querySelector(`label[for="${type}-${category.id}"]`);
          if (subCheckboxLabel) {
            subCheckboxLabel.textContent = `${category.label} (${pointCounts[type].categoryCount[category.id]})`;
          }
        });
      }
    });
  };

  const pointCounts = {
    church: calculateCounts('church', data),
    saints: calculateCounts('saints', data),
    monument: calculateCounts('monument', data)
  };

  const initializeVisiblePointTypes = (index, type) => {
    const initialValue = belhardSiteData.visiblePointTypes[index];
    if (typeof initialValue === 'object' && initialValue !== null) return;
    if (initialValue === 0) {
      belhardSiteData.visiblePointTypes[index] = false;
      return;
    }
    if (initialValue === 1) {
      const categoryKey = pointTypeConfig[type].categoryKey;
      if (!categoryKey) {
        belhardSiteData.visiblePointTypes[index] = true;
        return;
      }
      const activeCategories = pointTypeConfig[type].categories
        .map((_, i) => i + 1)
        .filter(id => pointCounts[type].categoryCount[id] > 0);
      belhardSiteData.visiblePointTypes[index] = {
        main: true,
        [categoryKey]: {
          0: false,
          ...activeCategories.reduce((acc, id) => {
            acc[id] = true;
            return acc;
          }, {})
        }
      };
    }
  };

  initializeVisiblePointTypes(0, 'church');
  initializeVisiblePointTypes(1, 'saints');
  initializeVisiblePointTypes(2, 'monument');

  const previousStates = {
    church: belhardSiteData.visiblePointTypes[0] === false ? {} : { ...belhardSiteData.visiblePointTypes[0][pointTypeConfig.church.categoryKey] },
    saints: belhardSiteData.visiblePointTypes[1] === false ? {} : { ...belhardSiteData.visiblePointTypes[1][pointTypeConfig.saints.categoryKey] },
    monument: belhardSiteData.visiblePointTypes[2] === false ? {} : { ...belhardSiteData.visiblePointTypes[2][pointTypeConfig.monument.categoryKey] }
  };

  const placemarks = globalPlacemarks;
  let filteredPoints = [];

  const createCheckbox = (type, label, index, hasSubcategories) => {
    const checkboxWrapper = createElement('div', { class: 'checkbox-wrapper' }, checkboxContainer);
    const checkbox = createElement('input', { type: 'checkbox', id: type }, checkboxWrapper);
    checkbox.checked = typeof belhardSiteData.visiblePointTypes[index] === 'object'
      ? belhardSiteData.visiblePointTypes[index].main
      : belhardSiteData.visiblePointTypes[index];
    const checkboxLabel = createElement('label', { for: type }, checkboxWrapper);
    checkboxLabel.textContent = label;

    let isMouseDown = false;
    let hasToggled = false;

    checkboxWrapper.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        isMouseDown = true;
        hasToggled = false;
        e.preventDefault();
      }
    });

    document.addEventListener('mouseup', () => {
      isMouseDown = false;
      hasToggled = false;
    });

    checkboxWrapper.addEventListener('mouseover', () => {
      if (isMouseDown && !hasToggled) {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
        hasToggled = true;
      }
    });

    checkboxWrapper.addEventListener('mouseleave', () => {
      if (isMouseDown) hasToggled = false;
    });

    if (hasSubcategories) {
      const subCheckboxContainer = createElement('div', { class: 'sub-checkbox-container' }, checkboxContainer);
      const activeCategories = pointTypeConfig[type].categories
        .map((catId, i) => ({
          id: i + 1,
          label: checkboxText[catId]
        }))
        .filter(cat => pointCounts[type].categoryCount[cat.id] > 0);

      activeCategories.forEach(category => {
        const subCheckboxWrapper = createElement('div', { class: 'sub-checkbox-wrapper' }, subCheckboxContainer);
        const subCheckbox = createElement('input', {
          type: 'checkbox',
          id: `${type}-${category.id}`
        }, subCheckboxWrapper);
        subCheckbox.checked = belhardSiteData.visiblePointTypes[index][pointTypeConfig[type].categoryKey][category.id];
        subCheckbox.disabled = !checkbox.checked;
        const subCheckboxLabel = createElement('label', {
          for: `${type}-${category.id}`
        }, subCheckboxWrapper);
        subCheckboxLabel.textContent = `${category.label} (${pointCounts[type].categoryCount[category.id]})`;

        let subHasToggled = false;

        subCheckboxWrapper.addEventListener('mousedown', (e) => {
          if (e.button === 0) {
            isMouseDown = true;
            subHasToggled = false;
            e.preventDefault();
          }
        });

        subCheckboxWrapper.addEventListener('mouseover', () => {
          if (isMouseDown && !subCheckbox.disabled && !subHasToggled) {
            subCheckbox.checked = !subCheckbox.checked;
            subCheckbox.dispatchEvent(new Event('change'));
            subHasToggled = true;
          }
        });

        subCheckboxWrapper.addEventListener('mouseleave', () => {
          if (isMouseDown) subHasToggled = false;
        });

        subCheckbox.addEventListener('change', () => {
          belhardSiteData.visiblePointTypes[index][pointTypeConfig[type].categoryKey][category.id] = subCheckbox.checked;
          previousStates[type][category.id] = subCheckbox.checked;
          filteredPoints = updateMapPoints(data, currentLanguage, globalYmaps, globalPlacemarks, onPlacemarkClick, globalMapInstance, globalClusterer, globalRegionBar, globalLocationTitle);
        });
      });

      checkbox.addEventListener('change', () => {
        belhardSiteData.visiblePointTypes[index].main = checkbox.checked;
        const subCheckboxes = subCheckboxContainer.querySelectorAll('input[type="checkbox"]');
        subCheckboxes.forEach(subCheckbox => {
          const categoryId = parseInt(subCheckbox.id.split('-')[1]);
          subCheckbox.disabled = !checkbox.checked;
          subCheckbox.checked = checkbox.checked;
          belhardSiteData.visiblePointTypes[index][pointTypeConfig[type].categoryKey][categoryId] = subCheckbox.checked;
        });
        filteredPoints = updateMapPoints(data, currentLanguage, globalYmaps, globalPlacemarks, onPlacemarkClick, globalMapInstance, globalClusterer, globalRegionBar, globalLocationTitle);
      });
    } else {
      checkbox.addEventListener('change', () => {
        belhardSiteData.visiblePointTypes[index] = checkbox.checked;
        filteredPoints = updateMapPoints(data, currentLanguage, globalYmaps, globalPlacemarks, onPlacemarkClick, globalMapInstance, globalClusterer, globalRegionBar, globalLocationTitle);
      });
    }
  };

  const checkboxTypes = ['church', 'saints', 'monument'];
  const checkboxLabels = [
    `${checkboxText[pointTypeConfig.church.mainTextId]} (${pointCounts.church.total})`,
    `${checkboxText[pointTypeConfig.saints.mainTextId]} (${pointCounts.saints.total})`,
    `${checkboxText[pointTypeConfig.monument.mainTextId]} (${pointCounts.monument.total})`
  ];

  checkboxTypes.forEach((type, index) => {
    if (belhardSiteData.visiblePointTypes[index] === false || belhardSiteData.visiblePointTypes[index] === 0) {
      return;
    }
    createCheckbox(type, checkboxLabels[index], index, !!pointTypeConfig[type].categoryKey);
  });

  function initMap() {
    if (typeof ymaps === 'undefined') {
      console.error('ymaps is not defined');
      return;
    }

    ymaps.ready(() => {
      if (globalMapInstance) globalMapInstance.destroy();
      globalMapInstance = null;

      const center = data.mapCenter[currentLanguage];
      ymaps.geocode(center).then(res => {
        const coords = res.geoObjects.get(0)?.geometry.getCoordinates();
        if (!coords) {
          console.log('Geocoding failed for:', center);
          return;
        }
        globalMapInstance = new ymaps.Map(mapContainer, {
          center: coords,
          zoom: data.mapZoom,
          controls: ['zoomControl', 'fullscreenControl']
        });

        data.controlsToRemove.forEach(control => globalMapInstance.controls.remove(control));

        const belarusBoundsWithPadding = [[50.26, 22.18], [57.17, 33.78]];
        globalMapInstance.setBounds(belarusBoundsWithPadding, { checkZoomRange: true, duration: 0 })
          .then(() => {
            globalMapInstance.options.set('restrictMapArea', belarusBoundsWithPadding);
            globalMapInstance.setCenter(coords, data.mapZoom, { duration: 0 });
          })
          .catch(error => console.error('Error setting bounds: ', error));

        globalClusterer = new ymaps.Clusterer({
          preset: 'islands#inverted' + data.cluster[0].color.charAt(0).toUpperCase() + data.cluster[0].color.slice(1).toLowerCase() + 'ClusterIcons',
          groupByCoordinates: data.cluster[0].groupByCoordinates,
          clusterDisableClickZoom: data.cluster[0].clusterDisableClickZoom,
          clusterOpenBalloonOnClick: data.cluster[0].clusterOpenBalloonOnClick,
          clusterHideIconOnBalloonOpen: false
        });

        globalYmaps = ymaps;
        globalPlacemarks.length = 0;

        let isClusterBalloonOpen = false;
        let isOnHint = false;
        let closeBalloonTimeout;

        globalClusterer.events.add('mouseenter', function (e) {
          const target = e.get('target');
          if (!target.getGeoObjects || isClusterBalloonOpen) return;

          const geoObjects = target.getGeoObjects();
          if (geoObjects.length === 0) return;

          const titles = geoObjects.map(placemark => placemark.properties.get('hintContent'));
          const coords = target.geometry.getCoordinates();

          let clusterCity = null;
          if (geoObjects.length > 0) {
            const matchingPlacemarks = geoObjects.map(geoObject =>
              globalPlacemarks.find(placemark =>
                placemark.geometry.getCoordinates()[0] === geoObject.geometry.getCoordinates()[0] &&
                placemark.geometry.getCoordinates()[1] === geoObject.geometry.getCoordinates()[1]
              )
            ).filter(Boolean);

            if (matchingPlacemarks.length > 0) {
              const pointIndices = matchingPlacemarks.map(placemark => globalPlacemarks.indexOf(placemark));
              const pointsInCluster = pointIndices.map(index => filteredPoints[index]);

              const firstCity = pointsInCluster[0]?.regionPath[2];
              const allSameCity = pointsInCluster.every(point => point?.regionPath[2] === firstCity);

              if (allSameCity && firstCity) {
                clusterCity = firstCity;
              }

              const firstPoint = pointsInCluster[0];
              if (firstPoint) {
                setRegionBarText(firstPoint, currentLanguage, globalRegionBar, globalLocationTitle, true, clusterCity);
              }
            }
          }

          globalMapInstance.balloon.open(coords, {
            contentHeader: belhardSiteData.map.clusterInfo.contentHeader[currentLanguage],
            contentBody: titles.join('<br>')
          });

          clearTimeout(closeBalloonTimeout);

          globalMapInstance.balloon.events.add('mouseenter', () => isOnHint = true);
          globalMapInstance.balloon.events.add('mouseleave', () => {
            isOnHint = false;
            if (!isOnHint) {
              globalMapInstance.balloon.close();
              isClusterBalloonOpen = false;
            }
          });
          globalMapInstance.balloon.events.add('close', () => {
            isOnHint = false;
            isClusterBalloonOpen = false;
          });
        });

        globalClusterer.events.add('mouseleave', function () {
          closeBalloonTimeout = setTimeout(() => {
            if (!isClusterBalloonOpen && !isOnHint) {
              globalMapInstance.balloon.close();
            }
          }, belhardSiteData.map.clusterInfo.timeOfClosingHint);
        });

        globalClusterer.events.add('click', function (e) {
          const target = e.get('target');
          if (!target.getGeoObjects) return;
          isClusterBalloonOpen = true;
          globalMapInstance.balloon.close();
          isClusterBalloonOpen = false;
        });

        filteredPoints = updateMapPoints(data, currentLanguage, globalYmaps, globalPlacemarks, onPlacemarkClick, globalMapInstance, globalClusterer, globalRegionBar, globalLocationTitle);
        globalMapInstance.geoObjects.add(globalClusterer);
        globalMapInstance.setCenter(coords, data.mapZoom, { duration: 0 });

        globalMapInstance.events.add('click', () => {
          globalMapInstance.balloon.close();
          globalClusterer.balloon.close();
          globalPlacemarks.forEach(placemark => placemark.balloon.close());
        });

        regionPathSpan.addEventListener('click', (e) => {
          const fullText = regionPathSpan.textContent;
          const separator = belhardSiteData.map.regionPathJoinSymbol;
          const parts = fullText.split(separator).filter(part => part.trim());
          const clickedText = e.target.textContent.trim();

          if (clickedText === data.regionPathNoRegionText[currentLanguage]) {
            return;
          }

          const regionTexts = belhardSiteData.map.pointsRegionTexts[currentLanguage];
          const regionIndex = regionTexts.indexOf(clickedText);

          if (regionIndex !== -1) {
            const coordinates = belhardSiteData.map.pointsRegionTexts.regionCoordinates[regionIndex];
            const zoomEntry = belhardSiteData.map.pointsRegionTexts.regionZoomLevels.find(
              ([_, ids]) => ids.includes(regionIndex)
            );
            const zoomLevel = zoomEntry ? zoomEntry[0] : 8;
            globalMapInstance.setCenter(coordinates, zoomLevel, { duration: 300 });
            return;
          }

          const clickedIndex = parts.indexOf(clickedText);
          if (clickedIndex === parts.length - 1) {
            const textContent = belhardSiteData.map.formTextContent[currentLanguage];
            const region = parts.length > 1 ? parts[parts.length - 2] : null;

            const point = filteredPoints.find(p => {
              const pointName = textContent[p.name];
              const matchesName = pointName === clickedText;
              const matchesRegion = region ? p.regionPath.includes(region) : true;
              return matchesName && matchesRegion;
            });

            if (point && point.coordinates) {
              const objectZoomLevel = belhardSiteData.map.pointsRegionTexts.regionZoomLevels[
                belhardSiteData.map.pointsRegionTexts.regionZoomLevels.length - 1
              ][0];
              globalMapInstance.setCenter(point.coordinates, objectZoomLevel, { duration: 300 });
              return;
            }
          }

          globalYmaps.geocode(clickedText).then(res => {
            const coords = res.geoObjects.get(0)?.geometry.getCoordinates();
            if (coords) {
              globalMapInstance.setCenter(coords, 8, { duration: 300 });
            }
          }).catch(err => console.error('Geocoding error:', err));
        });
      }).catch(error => console.log('Geocoding error:', error));
    });
  }

  loadYandexMaps(mapLang, initMap);

  function applyResponsiveStyles() {
    const style = window.defaultStyles.mapStyles;
    const isMobile = document.documentElement.clientWidth <= belhardSiteData.mobileSizes.map;
    applyStyles(outerContainer, style.outerContainer);
    applyStyles(globalRegionBar, isMobile ? style.regionBarMobile : style.regionBar);
    applyStyles(mapWrapper, isMobile ? style.mapWrapperMobile : style.mapWrapper);
    applyStyles(mapContainer, isMobile ? style.mapContainerMobile : style.mapContainer);
    applyStyles(checkboxContainer, isMobile ? style.checkboxContainerMobile : style.checkboxContainer);
    checkboxContainer.querySelectorAll('.checkbox-wrapper').forEach(wrapper =>
      applyStyles(wrapper, style.checkboxWrapper)
    );
    checkboxContainer.querySelectorAll('.sub-checkbox-container').forEach(container =>
      applyStyles(container, isMobile ? style.subCheckboxContainerMobile : style.subCheckboxContainer)
    );
    checkboxContainer.querySelectorAll('.sub-checkbox-wrapper').forEach(wrapper =>
      applyStyles(wrapper, style.subCheckboxWrapper)
    );
    checkboxContainer.querySelectorAll('label').forEach(label =>
      applyStyles(label, style.checkboxLabel)
    );
  }

  applyResponsiveStyles();
  window.addEventListener("resize", applyResponsiveStyles);

  return () => {
    if (globalMapInstance && globalClusterer && globalYmaps) {
      filteredPoints = updateMapPoints(data, currentLanguage, globalYmaps, globalPlacemarks, onPlacemarkClick, globalMapInstance, globalClusterer, globalRegionBar, globalLocationTitle);
    }
  };
}

function createPointForm(point, currentLanguage) {
  const textContent = belhardSiteData.map.formTextContent[currentLanguage];
  const existingForm = document.querySelector('.point-form-container');
  if (existingForm) existingForm.remove();

  const overlay = createElement('div', { class: 'overlay' }, document.body);
  applyStyles(overlay, window.defaultStyles.churchForm.overlay);

  overlay.onclick = function (event) {
    closePointForm(formContainer, overlay);
  };

  applyStyles(document.body, window.defaultStyles.churchForm.bodyStyle);
  const formContainer = createElement('div', { class: 'point-form-container' }, document.body);
  applyStyles(formContainer, window.defaultStyles.churchForm.container);

  const closeButton = createElement('button', { class: 'close-button' }, formContainer);
  closeButton.textContent = belhardSiteData.map.buttonText[currentLanguage];
  closeButton.onclick = function (event) {
    closePointForm(formContainer, overlay);
  };

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closePointForm(formContainer, overlay);
    }
  });

  applyStyles(closeButton, window.defaultStyles.churchForm.closeButton);

  const title = createElement('div', { class: 'point-form-title' }, formContainer);
  title.innerHTML = `<strong>${textContent[point.name]}</strong>`;
  applyStyles(title, window.defaultStyles.churchForm.title);

  const description = createElement('div', { class: 'point-form-description' }, formContainer);
  description.innerHTML = `<em>${textContent[point.description]}</em>`;
  applyStyles(description, window.defaultStyles.churchForm.description);

  const imageElements = point.elements.filter(function (element) {
    return element.type === 'image';
  });
  const infoItemsCount = point.imageInfo && imageElements.length > 0
    ? Math.floor(point.imageInfo.length / imageElements.length)
    : 0;

  for (var i = 0; i < imageElements.length; i++) {
    var element = imageElements[i];
    var imageWrapper = createElement('div', { class: 'image-wrapper' }, formContainer);
    applyStyles(imageWrapper, window.defaultStyles.churchForm.imageWrapper);

    var imageContainer = createElement('div', { class: 'image-container' }, imageWrapper);
    var mainImage = createElement('img', {
      src: element.content[0],
      alt: textContent[element.alt],
      class: 'main-image'
    }, imageContainer);

    function applyMainImageStyles() {
      const styles = document.documentElement.clientWidth <= belhardSiteData.mobileSizes.map
        ? window.defaultStyles.churchForm.mobile.image
        : window.defaultStyles.churchForm.image;
      applyStyles(mainImage, styles);
    }
    applyMainImageStyles();

    var thumbnailContainer = createElement('div', { class: 'thumbnail-container' }, imageWrapper);
    applyStyles(thumbnailContainer, window.defaultStyles.churchForm.thumbnailContainer);

    if (element.content.length > 1) {
      element.content.forEach((imageSrc, index) => {
        var thumbnail = createElement('img', {
          src: imageSrc,
          alt: textContent[element.alt] + ` (${index + 1})`,
          class: 'thumbnail'
        }, thumbnailContainer);
        applyStyles(thumbnail, window.defaultStyles.churchForm.thumbnail);
        thumbnail.addEventListener('click', () => {
          mainImage.src = imageSrc;
          applyMainImageStyles();
        });
      });
    }

    var imageInfo = createElement('div', { class: 'image-info' }, imageWrapper);
    applyStyles(imageInfo, window.defaultStyles.churchForm.imageInfo);

    if (point.imageInfo && infoItemsCount > 0) {
      var startIndex = i * infoItemsCount;
      var endIndex = Math.min(startIndex + infoItemsCount, point.imageInfo.length);
      for (var j = startIndex; j < endIndex; j++) {
        if (point.imageInfo[j].type === 'text') {
          var infoField = createElement('div', { class: 'image-info-field' }, imageInfo);
          infoField.innerHTML = textContent[point.imageInfo[j].content];
          applyStyles(infoField, window.defaultStyles.churchForm.imageInfoField);
        }
      }
    } else {
      var infoField = createElement('div', { class: 'image-info-field' }, imageInfo);
      infoField.innerHTML = currentLanguage === "ru" ? 'Нет дополнительной информации' : 'No additional information';
      applyStyles(infoField, window.defaultStyles.churchForm.imageInfoField);
    }
  }

  var textElements = point.elements.filter(function (element) {
    return element.type === 'text';
  });
  for (var i = 0; i < textElements.length; i++) {
    var element = textElements[i];
    var text = createElement('div', { class: 'point-form-text' }, formContainer);
    text.innerHTML = textContent[element.content];
    applyStyles(text, window.defaultStyles.churchForm.text);
  }

  function applyResponsiveFormStyles() {
    var imageWrappers = formContainer.querySelectorAll('.image-wrapper');
    var mainImages = formContainer.querySelectorAll('.main-image');
    var imageInfos = formContainer.querySelectorAll('.image-info');
    var thumbnailContainers = formContainer.querySelectorAll('.thumbnail-container');
    var styles = document.documentElement.clientWidth <= belhardSiteData.mobileSizes.map
      ? window.defaultStyles.churchForm.mobile
      : window.defaultStyles.churchForm;

    applyStyles(formContainer, styles.container);
    for (var i = 0; i < imageWrappers.length; i++) {
      applyStyles(imageWrappers[i], styles.imageWrapper);
    }
    for (var i = 0; i < mainImages.length; i++) {
      applyStyles(mainImages[i], styles.image);
    }
    for (var i = 0; i < imageInfos.length; i++) {
      applyStyles(imageInfos[i], styles.imageInfo);
    }
    for (var i = 0; i < thumbnailContainers.length; i++) {
      applyStyles(thumbnailContainers[i], styles.thumbnailContainer);
    }
  }

  applyResponsiveFormStyles();
  window.addEventListener("resize", applyResponsiveFormStyles);
}

function onPlacemarkClick(point, currentLanguage, regionBar, locationTitle) {
  createPointForm(point, currentLanguage);
  setRegionBarText(point, currentLanguage, regionBar, locationTitle);
}

function closePointForm(formContainer, overlay) {
  formContainer.remove();
  overlay.remove();
  applyStyles(document.body, window.defaultStyles.churchForm.bodyStyleScroll);
}

function setRegionBarText(point, currentLanguage, regionBar, locationTitle, isCluster = false, clusterCity = null) {
  locationTitle.textContent = belhardSiteData.map.regionPathHeader[currentLanguage];

  var regionPathSpan = regionBar.querySelector('.region-path');
  if (!regionPathSpan) {
    regionPathSpan = createElement('span', { class: 'region-path' }, regionBar);
  }

  const textContent = belhardSiteData.map.formTextContent[currentLanguage];
  const regionPath = point.regionPath || ["Неизвестно"];

  let displayPath = isCluster ? regionPath.slice(0, 2) : regionPath;

  if (isCluster && clusterCity) {
    displayPath.push(clusterCity);
  }

  const separator = belhardSiteData.map.regionPathJoinSymbol;
  const pathText = displayPath.join(separator) + (isCluster ? '' : separator + textContent[point.name]);

  regionPathSpan.innerHTML = '';
  const parts = pathText.split(separator).filter(part => part.trim());
  parts.forEach((part, index) => {
    const span = createElement('span', { class: 'region-part' }, regionPathSpan);
    span.textContent = part;
    span.style.cursor = 'pointer';
    if (index < parts.length - 1) {
      regionPathSpan.appendChild(document.createTextNode(separator));
    }
  });
}

var yandexMapsLoaded = false;
var currentMapLanguage = null;

function loadYandexMaps(lang, callback) {
  if (yandexMapsLoaded && currentMapLanguage === lang) {
    callback();
    return;
  }

  const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]');
  if (existingScript) existingScript.remove();
  if (window.ymaps) delete window.ymaps;

  yandexMapsLoaded = false;
  currentMapLanguage = lang;

  const script = document.createElement('script');
  script.src = `https://api-maps.yandex.ru/2.1/?apikey=299e1b02-6588-4ee1-8c59-2d73e896476f&lang=${lang}`;
  script.onload = () => { yandexMapsLoaded = true; callback(); };
  script.onerror = () => console.error('Ошибка загрузки API Яндекс.Карт');
  document.head.appendChild(script);
}