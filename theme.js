const body = document.body;
const themeKey = "theme";

function initialTheme() {
  const storedTheme = localStorage.getItem(themeKey);
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches; // Check for if the user prefers dark mode

  if (storedTheme) {
    setTheme(storedTheme);
  } else if (systemPrefersDark) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function toggleDarkMode() {
  const currentTheme = body.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
}

function activateGoblinMode() {
  setTheme("goblin");
}

function setTheme(themeName) {
  // Update the body
  body.setAttribute("data-theme", themeName);

  // Save choice in local storage
  localStorage.setItem(themeKey, themeName);
}

function updateModeIcon(theme) {
  const modeIcon = document.querySelector(".icon-theme-switch");
  if (!modeIcon) return;

  let btnText = "⏾";
  if (theme == "dark") btnText = "☀︎";
  if (theme == "goblin") btnText = "G";

  modeIcon.textContent = btnText;
}

initialTheme();
