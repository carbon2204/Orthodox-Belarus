// Функция для получения начального языка
function getInitialLanguage(languages) {
    var currentLanguage;

    // Проверяем, есть ли сохранённый язык в localStorage
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage && languages.some(lang => lang[0] === storedLanguage)) {
        currentLanguage = storedLanguage;
    } else {
        // Если в localStorage ничего нет, берём язык из navigator
        const userLanguage = navigator.language || navigator.languages[0]; // "en-US", "ru-RU" и т.д.
        // Проверяем, является ли язык вариантом английского
        currentLanguage = userLanguage.toLowerCase().startsWith("en") ? "en" : "ru";
        // Сохраняем в localStorage
        localStorage.setItem("selectedLanguage", currentLanguage);
    }
    belhardSiteData.currentLanguage = currentLanguage;
}