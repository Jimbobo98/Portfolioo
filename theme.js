const body = document.body;
const themeKey = "theme";
const header = document.getElementById("header-img");
const footer = document.getElementById("footer-img");

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
  if (localStorage.getItem(themeKey) !== "goblin") {
    setTheme("goblin");
  } else {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const nextTheme = systemPrefersDark ? "dark" : "light";
    setTheme(nextTheme);
  }
}

function setTheme(themeName) {
  // Update the body
  body.setAttribute("data-theme", themeName);

  header.src = `img/header-${themeName}.png`;
  footer.src = `img/footer-${themeName}.png`;

  updateModeIcon(themeName);

  const portrait = document.querySelector(".portrait-img");
  const portrait_txt = document.querySelector(".portrait-info");
  if (portrait && themeName === "goblin") {
    portrait.src = "/img/Gobbo.png";
    portrait_txt.textContent =
      "En av flere character-designs, men denne liker jeg best! >:D";
  } else if (portrait && themeName !== "goblin") {
    portrait.src = "/img/The Gilded Relapse-onepic.png";
    portrait_txt.textContent =
      "En av flere character-designs, men denne er min aller første!";
  }

  // Save choice in local storage
  localStorage.setItem(themeKey, themeName);
}

function updateModeIcon(theme) {
  const modeIcon = document.querySelector(".icon-theme-switch");
  if (!modeIcon) return;

  let btnIcon = "./img/Moon.png";
  if (theme == "dark") btnIcon = "./img/Sun.png";
  if (theme == "goblin") btnIcon = "./img/Gobbo.png";

  modeIcon.src = btnIcon;
}

initialTheme();
