// Глобальная функция для корректировки положения футера
function adjustFooterPosition() {
    // Получаем элемент футера по его ID
    const footer = document.getElementById('footer');
    // Если футер не найден, выходим из функции
    if (!footer) return;

    // Получаем элементы body и html
    const body = document.body;
    const html = document.documentElement;
    // Получаем максимальную высоту страницы среди всех возможных значений
    const pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    // Если высота страницы меньше или равна высоте окна, фиксируем футер внизу окна
    if (pageHeight <= window.innerHeight) {
        footer.classList.remove("footer-relative");
        footer.classList.add("footer-fixed");
    } else { // Иначе делаем футер относительным, чтобы он находился внизу страницы
        footer.classList.remove("footer-fixed");
        footer.classList.add("footer-relative");
    }
}

// Функция для создания футера
function createFooter(data, style, currentLanguage) {
    try {
        var footer = document.createElement("footer");
        footer.id = "footer";
        footer.classList.add("footer-relative");
        
        var footerStyles = {};
        for (var i = 0; i < style.footer.length; i++) {
            var key = style.footer[i][0];
            var value = style.footer[i][1];
            if (key === "width") {
                footerStyles.width = value;
            } else if (key === "padding") {
                footerStyles.padding = value;
            } else if (key === "bottom") {
                footerStyles.bottom = value;
            } else if (key === "left") {
                footerStyles.left = value;
            }
        }
        applyStyles(footer, footerStyles);

        var row1 = document.createElement("div");
        applyStyles(row1, style.row);

        var portalDiv = document.createElement("div");
        if (data.footer[currentLanguage] && data.footer[currentLanguage][0]) {
            portalDiv.textContent = data.footer[currentLanguage][0];
        } else {
            portalDiv.textContent = data.footer["ru"][0];
        }
        row1.appendChild(portalDiv);

        var row2 = document.createElement("div");
        if (data.footer[currentLanguage] && data.footer[currentLanguage][1]) {
            row2.textContent = data.footer[currentLanguage][1];
        } else {
            row2.textContent = data.footer["ru"][1];
        }
        applyStyles(row2, style.row);

        footer.appendChild(row1);
        footer.appendChild(row2);

        document.body.appendChild(footer);

        function applyResponsiveStyles() {
            if (document.documentElement.clientWidth <= data.mobileSizes.footer) {
                applyStyles(footer, style.textMobile);
            } else {
                applyStyles(footer, style.text);
            }
        }

        applyResponsiveStyles();

        setTimeout(function() {
            adjustFooterPosition();
        }, 100);

        window.addEventListener("resize", function() {
            applyResponsiveStyles();
            adjustFooterPosition();
        });

        window.addEventListener("load", function() {
            adjustFooterPosition();
        });
    } catch (error) {
        console.error("Ошибка в createFooter:", error);
    }
}
