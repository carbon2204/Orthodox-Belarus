function getSetting(settings, category, key, defaultValue) {
    defaultValue = defaultValue || '';
    if (!settings || !Array.isArray(settings)) {
        console.warn('getSetting: Invalid settings', { settings, category, key });
        return defaultValue;
    }
    var setting = settings.find(function(s) { return s[0] === category && s[1] === key; });
    return setting ? setting[2] : defaultValue;
}

var timelineInstances = [];

function createTimeline(data, styles, currentLanguage, mode, orientation) {
    mode = mode || 0;
    orientation = orientation || 'horizontal';
    
    var existingTimelines = document.querySelectorAll('.timeline-container');
    if (existingTimelines.length === 0 && timelineInstances.length > 0) {
        timelineInstances.length = 0;
    }

    var container = createElement('div', { class: 'timeline-container' }, document.body);
    var hasData = data[currentLanguage] && Array.isArray(data[currentLanguage]) && data[currentLanguage].length > 0;
    if (!hasData) {
        console.warn('No valid data for language:', currentLanguage);
        return function() {};
    }
    // console.log(styles.containerHorizontal)
    applyStyles(container, orientation === 'horizontal' ? styles.containerHorizontal : styles.containerVertical);

    var sliderContainer = createElement('div', { class: 'slider-container' }, container);
    applyStyles(sliderContainer, styles.sliderContainer);

    var sliderTrack = createElement('div', { class: 'slider-track' }, sliderContainer);
    applyStyles(sliderTrack, orientation === 'horizontal' ? styles.sliderTrack : styles.sliderTrackVertical);

    var sliderThumb = createElement('div', { class: 'slider-thumb' }, sliderTrack);
    applyStyles(sliderThumb, styles.sliderThumb);

    var timeline = createElement('div', { class: 'timeline' }, container);
    applyStyles(timeline, orientation === 'horizontal' ? styles.timeline : styles.timelineVertical);

    var timelineWrapper = createElement('div', { class: 'timeline-wrapper' }, timeline);
    applyStyles(timelineWrapper, orientation === 'horizontal' ? styles.timelineWrapper : styles.timelineWrapperVertical);

    var timelineLine = createElement('div', { class: 'timeline-line' }, timelineWrapper);
    applyStyles(timelineLine, orientation === 'horizontal' ? styles.timelineLine : styles.timelineLineVertical);

    var currentLevel = 'centuries';
    var currentPath = [];
    var lastClickedLevel = 'centuries';
    var currentPopup = null;
    var currentOverlay = null;
    var justOpened = false;

    var isDragging = false;
    var isHorizontalDragging = false;
    var isVerticalDragging = false;
    var trackHeight = 0;
    var trackTopOffset = 0; // Смещение верхней границы трека относительно контейнера
    var trackBottomOffset = 0; // Смещение нижней границы трека
    var thumbHeight = 0;
    var startX = 0;
    var startY = 0;
    var startTranslateX = 0;
    var startTranslateY = 0;
    var currentTranslateX = 0;
    var currentTranslateY = 0;
    var maxTranslateX = 0;
    var maxTranslateY = 0;

    var bodyScroll = [["overflow", "auto"]];

    var timelineInstance = {
        setLevelAndPath: function(level, path, language) {
            currentLevel = level;
            currentPath = path.slice();
            if (language) currentLanguage = language;
            if (level === 'dates') lastClickedLevel = 'years';
            else if (level === 'years') lastClickedLevel = 'decades';
            else lastClickedLevel = 'centuries';
            setSliderPositionForLevel(currentLevel);
            buildTimeline();
        },
        getCurrentLevel: function() { return currentLevel; },
        getCurrentPath: function() { return currentPath.slice(); },
        getCurrentLanguage: function() { return currentLanguage; },
        setLanguage: function(language) {
            if (!data[language]) {
                currentLanguage = 'ru';
            } else {
                currentLanguage = language;
            }
            setSliderPositionForLevel(currentLevel);
            buildTimeline();
        }
    };

    timelineInstances.push(timelineInstance);

    function initializeSliderEvents() {
        sliderThumb.removeEventListener('mousedown', mousedownHandler);
        sliderTrack.removeEventListener('click', sliderClickHandler);
        sliderThumb.removeEventListener('touchstart', touchstartHandler);
        document.removeEventListener('mousemove', mousemoveHandler);
        document.removeEventListener('mouseup', mouseupHandler);
        document.removeEventListener('touchmove', touchmoveHandler);
        document.removeEventListener('touchend', touchendHandler);

        sliderThumb.addEventListener('mousedown', mousedownHandler);
        sliderTrack.addEventListener('click', sliderClickHandler);
        sliderThumb.addEventListener('touchstart', touchstartHandler);
        document.addEventListener('mousemove', mousemoveHandler);
        document.addEventListener('mouseup', mouseupHandler);
        document.addEventListener('touchmove', touchmoveHandler, { passive: false });
        document.addEventListener('touchend', touchendHandler);
    }

    function mousedownHandler(e) {
        isDragging = true;
        startY = e.clientY;
        e.preventDefault();
    }

    function mousemoveHandler(e) {
        if (isDragging) {
            var rect = sliderTrack.getBoundingClientRect();
            var containerRect = sliderContainer.getBoundingClientRect();
            var newPosition = e.clientY - rect.top;
            // Учитываем смещение трека внутри контейнера
            newPosition = Math.max(0, Math.min(newPosition, trackHeight - thumbHeight));
            updateTimelineLevel(newPosition);
        }
        if (orientation === 'horizontal' && isHorizontalDragging) {
            var dx = e.clientX - startX;
            var newTranslateX = startTranslateX + dx;
            newTranslateX = Math.min(0, Math.max(newTranslateX, -maxTranslateX));
            currentTranslateX = newTranslateX;
            timelineWrapper.style.transform = 'translateX(' + newTranslateX + 'px)';
        } else if (orientation === 'vertical' && isVerticalDragging) {
            var dy = e.clientY - startY;
            var newTranslateY = startTranslateY + dy;
            newTranslateY = Math.min(0, Math.max(newTranslateY, -maxTranslateY));
            currentTranslateY = newTranslateY;
            timelineWrapper.style.transform = 'translateY(' + newTranslateY + 'px)';
        }
    }

    function mouseupHandler() {
        isDragging = false;
        if (orientation === 'horizontal' && isHorizontalDragging) {
            isHorizontalDragging = false;
            if (currentTranslateX > 0) {
                currentTranslateX = 0;
                timelineWrapper.style.transform = "translateX(0px)";
            } else if (currentTranslateX < -maxTranslateX) {
                currentTranslateX = -maxTranslateX;
                timelineWrapper.style.transform = 'translateX(' + (-maxTranslateX) + 'px)';
            }
        } else if (orientation === 'vertical' && isVerticalDragging) {
            isVerticalDragging = false;
            if (currentTranslateY > 0) {
                currentTranslateY = 0;
                timelineWrapper.style.transform = "translateY(0px)";
            } else if (currentTranslateY < -maxTranslateY) {
                currentTranslateY = -maxTranslateX;
                timelineWrapper.style.transform = 'translateY(' + (-maxTranslateY) + 'px)';
            }
        }
    }

    function touchstartHandler(e) {
        isDragging = true;
        startY = e.touches[0].clientY;
        e.preventDefault();
    }

    function touchmoveHandler(e) {
        if (isDragging) {
            var rect = sliderTrack.getBoundingClientRect();
            var containerRect = sliderContainer.getBoundingClientRect();
            var newPosition = e.touches[0].clientY - rect.top;
            // Учитываем смещение трека внутри контейнера
            newPosition = Math.max(0, Math.min(newPosition, trackHeight - thumbHeight));
            updateTimelineLevel(newPosition);
        }
        if (orientation === 'horizontal' && isHorizontalDragging) {
            var dx = e.touches[0].clientX - startX;
            var newTranslateX = startTranslateX + dx;
            newTranslateX = Math.min(0, Math.max(newTranslateX, -maxTranslateX));
            currentTranslateX = newTranslateX;
            timelineWrapper.style.transform = 'translateX(' + newTranslateX + 'px)';
        } else if (orientation === 'vertical' && isVerticalDragging) {
            var dy = e.touches[0].clientY - startY;
            var newTranslateY = startTranslateY + dy;
            newTranslateY = Math.min(0, Math.max(newTranslateY, -maxTranslateY));
            currentTranslateY = newTranslateY;
            timelineWrapper.style.transform = 'translateY(' + newTranslateY + 'px)';
        }
    }

    function touchendHandler() {
        isDragging = false;
        if (orientation === 'horizontal' && isHorizontalDragging) {
            isHorizontalDragging = false;
            if (currentTranslateX > 0) {
                currentTranslateX = 0;
                timelineWrapper.style.transform = "translateX(0px)";
            } else if (currentTranslateX < -maxTranslateX) {
                currentTranslateX = -maxTranslateX;
                timelineWrapper.style.transform = 'translateX(' + (-maxTranslateX) + 'px)';
            }
        } else if (orientation === 'vertical' && isVerticalDragging) {
            isVerticalDragging = false;
            if (currentTranslateY > 0) {
                currentTranslateY = 0;
                timelineWrapper.style.transform = "translateY(0px)";
            } else if (currentTranslateY < -maxTranslateY) {
                currentTranslateY = -maxTranslateY;
                timelineWrapper.style.transform = 'translateY(' + (-maxTranslateY) + 'px)';
            }
        }
    }

    function sliderClickHandler(e) {
        var rect = sliderTrack.getBoundingClientRect();
        var containerRect = sliderContainer.getBoundingClientRect();
        var newPosition = e.clientY - rect.top;
        // Ограничиваем позицию при клике, чтобы нижняя граница ползунка не выходила за трек
        newPosition = Math.max(0, Math.min(newPosition, trackHeight - thumbHeight));
        updateTimelineLevel(newPosition);
    }

    function timelineMousedownHandler(e) {
        if (orientation === 'horizontal') {
            isHorizontalDragging = true;
            startX = e.clientX;
            calculateMaxTranslate();
            startTranslateX = currentTranslateX;
        } else {
            isVerticalDragging = true;
            startY = e.clientY;
            calculateMaxTranslate();
            startTranslateY = currentTranslateY;
        }
        e.preventDefault();
    }

    function timelineTouchstartHandler(e) {
        if (orientation === 'horizontal') {
            isHorizontalDragging = true;
            startX = e.touches[0].clientX;
            calculateMaxTranslate();
            startTranslateX = currentTranslateX;
        } else {
            isVerticalDragging = true;
            startY = e.touches[0].clientY;
            calculateMaxTranslate();
            startTranslateY = currentTranslateY;
        }
        e.preventDefault();
    }

    timeline.addEventListener('wheel', function(e) {
        e.stopPropagation();
        e.preventDefault();
        if (e.deltaY > 0) {
            if (currentLevel === 'dates') {
                currentLevel = 'years';
                currentPath = [];
                lastClickedLevel = 'decades';
            } else if (currentLevel === 'years') {
                currentLevel = 'decades';
                currentPath = [];
                lastClickedLevel = 'centuries';
            } else if (currentLevel === 'decades') {
                currentLevel = 'centuries';
                currentPath = [];
                lastClickedLevel = 'centuries';
            }
        } else if (e.deltaY < 0) {
            if (currentLevel === 'centuries') {
                currentLevel = 'decades';
                currentPath = [];
                lastClickedLevel = 'centuries';
            } else if (currentLevel === 'decades') {
                currentLevel = 'years';
                currentPath = [];
                lastClickedLevel = 'decades';
            } else if (currentLevel === 'years') {
                currentLevel = 'dates';
                currentPath = [];
                lastClickedLevel = 'years';
            }
        }
        setSliderPositionForLevel(currentLevel);
        buildTimeline();
        syncOtherTimelines();
    });

    function updateTimelineLevel(position) {
        // Ограничиваем позицию ползунка, чтобы нижняя граница не выходила за трек
        var minPos = 0; // Верхняя граница трека
        var maxPos = trackHeight - thumbHeight; // Максимальная позиция, чтобы нижняя граница ползунка не вышла за трек
        var normalizedPos = Math.max(minPos, Math.min(position, maxPos));

        // Применяем позицию к ползунку
        var thumbStyles = styles.sliderThumb.slice();
        thumbStyles.push(["top", normalizedPos + "px"]);
        applyStyles(sliderThumb, thumbStyles);

        // Рассчитываем ratio на основе реальной высоты трека
        var range = maxPos - minPos;
        var positionRatio = range > 0 ? normalizedPos / range : 0;

        var newLevel;
        if (positionRatio < 0.25) newLevel = 'centuries';
        else if (positionRatio < 0.5) newLevel = 'decades';
        else if (positionRatio < 0.75) newLevel = 'years';
        else newLevel = 'dates';

        if (newLevel !== currentLevel) {
            currentLevel = newLevel;
            currentPath = [];
            buildTimeline();
            syncOtherTimelines();
        }
    }

    function setSliderPositionForLevel(level) {
        if (!container.parentElement) {
            document.body.appendChild(container);
        }
        if (!sliderContainer.parentElement) {
            container.appendChild(sliderContainer);
            sliderContainer.appendChild(sliderTrack);
            sliderTrack.appendChild(sliderThumb);
            applyStyles(sliderContainer, styles.sliderContainer);
            applyStyles(sliderTrack, orientation === 'horizontal' ? styles.sliderTrack : styles.sliderTrackVertical);
            applyStyles(sliderThumb, styles.sliderThumb);
        }

        // Задержка для корректного расчёта размеров
        setTimeout(function() {
            trackHeight = sliderTrack.offsetHeight || 200;
            thumbHeight = sliderThumb.offsetHeight || 20;

            // Рассчитываем смещение трека относительно контейнера
            var containerRect = sliderContainer.getBoundingClientRect();
            var trackRect = sliderTrack.getBoundingClientRect();
            trackTopOffset = trackRect.top - containerRect.top; // Верхняя граница трека относительно контейнера
            trackBottomOffset = containerRect.bottom - trackRect.bottom; // Нижняя граница трека относительно контейнера

            if (trackHeight === 0 || thumbHeight === 0) {
                console.warn('Invalid slider dimensions, setting defaults');
                sliderContainer.style.display = 'block';
                sliderContainer.style.height = '200px';
                sliderTrack.style.height = orientation === 'horizontal' ? '100%' : '20%';
                sliderThumb.style.height = '20px';
                sliderThumb.style.width = '100%';

                setTimeout(function() {
                    trackHeight = sliderTrack.offsetHeight || 200;
                    thumbHeight = sliderThumb.offsetHeight || 20;

                    // Пересчитываем смещения после изменения размеров
                    var containerRect = sliderContainer.getBoundingClientRect();
                    var trackRect = sliderTrack.getBoundingClientRect();
                    trackTopOffset = trackRect.top - containerRect.top;
                    trackBottomOffset = containerRect.bottom - trackRect.bottom;

                    updateTimelineLevelForLevel(level);
                }, 200);
            } else {
                updateTimelineLevelForLevel(level);
            }
        }, 100);
    }

    function updateTimelineLevelForLevel(level) {
        var newPos;
        if (level === 'centuries') newPos = 0;
        else if (level === 'decades') newPos = (trackHeight - thumbHeight) * 0.25;
        else if (level === 'years') newPos = (trackHeight - thumbHeight) * 0.5;
        else newPos = (trackHeight - thumbHeight) * 0.75;

        // Убедимся, что позиция не выходит за пределы трека
        newPos = Math.max(0, Math.min(newPos, trackHeight - thumbHeight));
        updateTimelineLevel(newPos);
    }

    function calculateMaxTranslate() {
        if (orientation === 'horizontal') {
            var wrapperWidth = timelineWrapper.offsetWidth || timeline.offsetWidth;
            var timelineWidth = timeline.offsetWidth;
            maxTranslateX = Math.max(0, wrapperWidth - timelineWidth);
            if (currentTranslateX < -maxTranslateX) {
                currentTranslateX = -maxTranslateX;
                timelineWrapper.style.transform = 'translateX(' + (-maxTranslateX) + 'px)';
            } else if (currentTranslateX > 0) {
                currentTranslateX = 0;
                timelineWrapper.style.transform = "translateX(0px)";
            }
        } else {
            var wrapperHeight = timelineWrapper.offsetHeight || timeline.offsetHeight;
            var timelineHeight = timeline.offsetHeight;
            maxTranslateY = Math.max(0, wrapperHeight - timelineHeight);
            if (currentTranslateY < -maxTranslateY) {
                currentTranslateY = -maxTranslateY;
                timelineWrapper.style.transform = 'translateY(' + (-maxTranslateY) + 'px)';
            } else if (currentTranslateY > 0) {
                currentTranslateY = 0;
                timelineWrapper.style.transform = "translateY(0px)";
            }
        }
    }

    function resizeHandler() {
        setSliderPositionForLevel(currentLevel);
        calculateMaxTranslate();
    }
    window.addEventListener('resize', resizeHandler);

    function buildTimeline() {
        timelineWrapper.innerHTML = '';
        if (orientation === 'horizontal') {
            timelineWrapper.style.transform = 'translateX(0px)';
            currentTranslateX = 0;
        } else {
            timelineWrapper.style.transform = 'translateY(0px)';
            currentTranslateY = 0;
        }

        var newTimelineLine = createElement('div', { class: 'timeline-line' }, timelineWrapper);
        applyStyles(newTimelineLine, orientation === 'horizontal' ? styles.timelineLine : styles.timelineLineVertical);

        var items = [];
        var allEvents = [];
        var languageData = data[currentLanguage] || data['ru'];

        if (currentLevel === 'centuries') {
            items = data.centuries.map(function(c) { return languageData[c[1]]; });
            allEvents = data.events || [];
        } else if (currentLevel === 'decades') {
            if (currentPath.length > 0) {
                var centuryId = currentPath[0];
                items = data.decades.filter(function(d) { return d[2] === centuryId; }).map(function(d) { return languageData[d[1]]; });
            } else {
                items = data.decades.map(function(d) { return languageData[d[1]]; });
            }
            allEvents = data.events || [];
        } else if (currentLevel === 'years') {
            if (currentPath.length > 1) {
                var decadeId = currentPath[1];
                items = data.years.filter(function(y) { return y[2] === decadeId; }).map(function(y) { return languageData[y[1]]; });
            } else {
                items = data.years.map(function(y) { return languageData[y[1]]; });
            }
            allEvents = data.events || [];
        } else if (currentLevel === 'dates') {
            allEvents = data.events || [];
            if (currentPath.length > 2) {
                var yearId = currentPath[2];
                items = (data.events || []).filter(function(e) { return e[0] === yearId; }).map(function(e) { return languageData[e[2]]; });
            } else {
                items = allEvents.map(function(e) { return languageData[e[2]]; });
            }
        }

        if (Array.isArray(allEvents)) {
            allEvents.sort(function(a, b) { return a[5] - b[5]; });
        }

        var maxEvents;
        if (currentLevel === 'centuries') maxEvents = parseInt(getSetting(data.timelineSettings, "amountOfEvents", "century", 10)) || 10;
        else if (currentLevel === 'decades') maxEvents = parseInt(getSetting(data.timelineSettings, "amountOfEvents", "decade", 10)) || 10;
        else if (currentLevel === 'years') maxEvents = parseInt(getSetting(data.timelineSettings, "amountOfEvents", "year", 10)) || 10;
        else maxEvents = items.length;

        if (currentLevel !== 'dates' && Array.isArray(allEvents)) {
            allEvents = allEvents.slice(0, maxEvents);
        }

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var dotContainer = createElement('div', { class: 'dot-container' }, timelineWrapper);
            if (currentLevel === 'dates' && orientation === 'horizontal') {
                applyStyles(dotContainer, styles.dotContainerHorizontalDates);
            } else if (currentLevel === 'dates' && orientation === 'vertical' && i === 0) {
                applyStyles(dotContainer, styles.dotContainerVerticalDatesFirst);
            } else {
                applyStyles(dotContainer, orientation === 'horizontal' ? styles.dotContainer : styles.dotContainerVertical);
            }

            var dotText = createElement('span', { class: 'dot-text' }, dotContainer);
            dotText.textContent = item;
            applyStyles(dotText, orientation === 'horizontal' ? styles.dotText : (currentLevel === 'dates' ? styles.dotTextVerticalForDots : styles.dotTextVertical));

            var marker = currentLevel === 'dates' ?
                createElement('div', { class: 'timeline-dot' }, dotContainer) :
                createElement('div', { class: 'timeline-bar' }, dotContainer);

            if (currentLevel === 'dates') {
                applyStyles(marker, orientation === 'horizontal' ? styles.dot : styles.dotVertical);
                marker.addEventListener('click', function(e) {
                    e.stopPropagation();
                    showEventPopup(item);
                });
                marker.addEventListener('touchstart', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    showEventPopup(item);
                });
            } else {
                applyStyles(marker, orientation === 'horizontal' ? styles.bar : styles.barVertical);
                marker.addEventListener('click', function(e) {
                    e.stopPropagation();
                    handleDotClick(item);
                    syncOtherTimelines();
                });
                marker.addEventListener('touchstart', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    handleDotClick(item);
                    syncOtherTimelines();
                });
            }

            if (currentLevel !== 'dates') {
                var relatedEvents = [];
                if (currentLevel === 'centuries') {
                    var centuryId = data.centuries.find(function(c) { return languageData[c[1]] === item; })?.[0];
                    relatedEvents = (data.events || []).filter(function(e) {
                        var year = data.years.find(function(y) { return y[0] === e[0]; });
                        var decade = year ? data.decades.find(function(d) { return d[0] === year[2]; }) : null;
                        return decade && decade[2] === centuryId;
                    });
                } else if (currentLevel === 'decades') {
                    var decadeId = data.decades.find(function(d) { return languageData[d[1]] === item; })?.[0];
                    relatedEvents = (data.events || []).filter(function(e) {
                        var year = data.years.find(function(y) { return y[0] === e[0]; });
                        return year && year[2] === decadeId;
                    });
                } else if (currentLevel === 'years') {
                    var yearId = data.years.find(function(y) { return languageData[y[1]] === item; })?.[0];
                    relatedEvents = (data.events || []).filter(function(e) { return e[0] === yearId; });
                }

                var filteredEvents = relatedEvents.filter(function(re) {
                    return allEvents.some(function(ae) { return languageData[ae[2]] === languageData[re[2]]; });
                });
                filteredEvents.sort(function(a, b) { return a[5] - b[5]; });

                for (var j = 0; j < filteredEvents.length; j++) {
                    var event = filteredEvents[j];
                    var eventContainer = createElement('div', { class: 'dot-container' }, timelineWrapper);
                    if (orientation === 'horizontal') {
                        applyStyles(eventContainer, styles.dotContainerHorizontalDates);
                    } else if (orientation === 'vertical' && i === 0 && j === 0) {
                        applyStyles(eventContainer, styles.dotContainerVerticalDatesFirst);
                    } else {
                        applyStyles(eventContainer, styles.dotContainerVertical);
                    }

                    var eventText = createElement('span', { class: 'dot-text' }, eventContainer);
                    eventText.textContent = event[1] ? languageData[event[1]] : (currentLanguage === 'ru' ? 'Дата неизвестна' : currentLanguage === 'by' ? 'Дата невядома' : 'Date unknown');
                    applyStyles(eventText, orientation === 'horizontal' ? styles.dotText : styles.dotTextVerticalForDots);

                    var eventMarker = createElement('div', { class: 'timeline-dot' }, eventContainer);
                    applyStyles(eventMarker, orientation === 'horizontal' ? styles.dot : styles.dotVertical);

                    eventMarker.addEventListener('click', function(e) {
                        e.stopPropagation();
                        showEventPopup(languageData[event[2]], event);
                    });
                    eventMarker.addEventListener('touchstart', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        showEventPopup(languageData[event[2]], event);
                    });
                }
            }
        }

        setTimeout(calculateMaxTranslate, 0);
    }

    function showEventPopup(title, eventData) {
        if (currentPopup) {
            currentPopup.remove();
            currentOverlay.remove();
            applyStyles(document.body, bodyScroll);
        }

        var languageData = data[currentLanguage] || data['ru'];
        var event = eventData || data.events.find(function(e) { return languageData[e[2]] === title; });

        if (!event) {
            console.warn('Event not found:', title);
            return;
        }

        var overlay = createElement('div', { class: 'popup-overlay' }, document.body);
        applyStyles(overlay, styles.popupOverlay);

        var popup = createElement('div', { class: 'event-popup' }, document.body);
        currentPopup = popup;
        currentOverlay = overlay;

        applyResponsiveStyles();

        applyStyles(document.body, styles.bodyNoScroll);

        popup.addEventListener('click', function(e) { e.stopPropagation(); });

        var closeButton = createElement('div', { class: 'popup-close' }, popup);
        closeButton.textContent = languageData[getSetting(data.timelineSettings, "buttons", "close", 'Закрыть')] || 'Закрыть';
        applyStyles(closeButton, styles.popupClose);
        closeButton.addEventListener('click', function(e) {
            e.stopPropagation();
            closePopup();
        });
        closeButton.addEventListener('touchstart', function(e) {
            e.stopPropagation();
            e.preventDefault();
            closePopup();
        });

        var popupTitle = createElement('p', { class: 'popup-title' }, popup);
        popupTitle.textContent = languageData[event[2]];
        applyStyles(popupTitle, styles.title);

        var dateText = event[1] ? languageData[event[1]] : (currentLanguage === 'ru' ? 'Дата неизвестна' : currentLanguage === 'by' ? 'Дата невядома' : 'Date unknown');
        var popupDate = createElement('p', { class: 'popup-date' }, popup);
        popupDate.textContent = dateText;
        applyStyles(popupDate, styles.popupDate);

        var popupImageContainer = createElement('div', { class: 'popup-image-container' }, popup);
        var popupImage = createElement('img', { class: 'popup-image', src: event[4][0] }, popupImageContainer);
        applyStyles(popupImage, styles.popupImage);

        var thumbnailContainer = createElement('div', { class: 'thumbnail-container' }, popup);
        applyStyles(thumbnailContainer, styles.thumbnailContainer);

        if (event[4].length > 1) {
            event[4].forEach(function(imageSrc, index) {
                var thumbnail = createElement('img', { class: 'thumbnail', src: imageSrc }, thumbnailContainer);
                applyStyles(thumbnail, styles.thumbnail);
                thumbnail.addEventListener('click', function() {
                    popupImage.src = imageSrc;
                    applyStyles(popupImage, styles.popupImage);
                });
                thumbnail.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    popupImage.src = imageSrc;
                    applyStyles(popupImage, styles.popupImage);
                });
            });
        }

        var popupDescription = createElement('p', { class: 'popup-description' }, popup);
        popupDescription.textContent = languageData[event[3]];
        applyStyles(popupDescription, styles.description);

        if (event[6] && data.books && data.books[event[6]]) {
            var pdfLink = createElement('a', { 
                class: 'popup-pdf-link',
                href: data.books[event[6]],
                target: '_blank'
            }, popup);
            pdfLink.textContent = languageData[getSetting(data.timelineSettings, "links", "openPdf", 'Открыть PDF')] || 'Открыть PDF';
            applyStyles(pdfLink, styles.popupPdfLink);
        }

        justOpened = true;
        setTimeout(function() { justOpened = false; }, 1);
    }

    function closePopup() {
        if (currentPopup) {
            currentPopup.remove();
            currentOverlay.remove();
            applyStyles(document.body, bodyScroll);
            currentPopup = null;
            currentOverlay = null;
        }
    }

    document.addEventListener('click', function(e) {
        if (currentPopup && !currentPopup.contains(e.target) && e.isTrusted && !justOpened) {
            closePopup();
        }
    });

    document.addEventListener('touchstart', function(e) {
        if (currentPopup && !currentPopup.contains(e.target) && !justOpened) {
            e.preventDefault();
            closePopup();
        }
    });

    function handleDotClick(item) {
        var languageData = data[currentLanguage] || data['ru'];
        if (currentLevel === 'centuries') {
            var centuryId = data.centuries.find(function(c) { return languageData[c[1]] === item; })?.[0];
            currentPath = [centuryId];
            lastClickedLevel = 'centuries';
            currentLevel = 'decades';
        } else if (currentLevel === 'decades') {
            var decadeId = data.decades.find(function(d) { return languageData[d[1]] === item; })?.[0];
            currentPath[1] = decadeId;
            lastClickedLevel = 'decades';
            currentLevel = 'years';
        } else if (currentLevel === 'years') {
            var yearId = data.years.find(function(y) { return languageData[y[1]] === item; })?.[0];
            currentPath[2] = yearId;
            lastClickedLevel = 'years';
            currentLevel = 'dates';
        }
        setSliderPositionForLevel(currentLevel);
        buildTimeline();
        syncOtherTimelines();
    }

    function syncOtherTimelines() {
        if (mode === 0) {
            for (var i = 0; i < timelineInstances.length; i++) {
                if (timelineInstances[i] !== timelineInstance) {
                    timelineInstances[i].setLevelAndPath(currentLevel, currentPath, currentLanguage);
                }
            }
        } else if (mode === 2) {
            for (var i = 0; i < timelineInstances.length; i++) {
                if (timelineInstances[i] !== timelineInstance) {
                    timelineInstances[i].setLevelAndPath(currentLevel, timelineInstances[i].getCurrentPath(), currentLanguage);
                }
            }
        }
    }

    function applyResponsiveStyles() {
        var mobileThreshold = belhardSiteData && belhardSiteData.mobileSizes && belhardSiteData.mobileSizes.timeline || 768;
        if (document.documentElement.clientWidth <= mobileThreshold) {
            applyStyles(timeline, orientation === 'horizontal' ? styles.timelineMobile : styles.timelineMobileVertical);
            if (currentPopup) {
                applyStyles(currentPopup, styles.popupMobile);
            }
        } else {
            applyStyles(timeline, orientation === 'horizontal' ? styles.timeline : styles.timelineVertical);
            if (currentPopup) {
                applyStyles(currentPopup, styles.popup);
            }
        }
    }

    window.addEventListener("resize", applyResponsiveStyles);

    timeline.addEventListener('mousedown', timelineMousedownHandler);
    timeline.addEventListener('touchstart', timelineTouchstartHandler);

    initializeSliderEvents();
    applyResponsiveStyles();
    setTimeout(function() {
        if (!document.body.contains(container)) {
            document.body.appendChild(container);
        }
        if (!container.contains(sliderContainer)) {
            container.appendChild(sliderContainer);
            sliderContainer.appendChild(sliderTrack);
            sliderTrack.appendChild(sliderThumb);
            applyStyles(sliderContainer, styles.sliderContainer);
            applyStyles(sliderTrack, orientation === 'horizontal' ? styles.sliderTrack : styles.sliderTrackVertical);
            applyStyles(sliderThumb, styles.sliderThumb);
        }
        setSliderPositionForLevel(currentLevel);
        buildTimeline();
    }, 200);

    return timelineInstance;
}