let lightThemeBtn = document.querySelector('#lightMode');
let darkThemeBtn = document.querySelector('#darkMode');
let themeSelectLink = document.querySelector('#themeSelect');
let currentTheme = localStorage.getItem("theme") || "light";

lightThemeBtn.addEventListener('click', () => setTheme("light"));
darkThemeBtn.addEventListener('click', () => setTheme("dark"));

function setTheme(themeName) {
  themeSelectLink.setAttribute('href', `./css/${themeName}.css`);
  window.localStorage.setItem("theme", `${themeName}`);
}

setTheme(currentTheme);