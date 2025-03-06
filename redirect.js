// redirect.js
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function setLanguageCookie(language) {
  setCookie('language', language, 365); // Set cookie for 1 year
  location.reload(); // Reload the page to apply the cookie
}

// Automatic redirection logic
window.onload = function () {
  const languageCookie = getCookie('language');

  if (!languageCookie) {
    // No language cookie, use browser language
    if (!navigator.language.startsWith('es')) {
      // Browser language is not Spanish, redirect to English
      window.location.href = 'https://lucianolarrea.github.io/portfolio/';
    }
  }
};
