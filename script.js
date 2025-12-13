document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;
  const toggleButton = document.querySelector("[data-theme-toggle]");
  const themeKey = "user-theme";

  function setTheme(theme) {
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem(themeKey, theme);
    toggleButton.setAttribute(
      "aria-label",
      theme === "light" ? "Change to dark theme" : "Change to light theme"
    );
  }

  // Initialize theme on page load
  const storedTheme = localStorage.getItem(themeKey);
  if (storedTheme) {
    setTheme(storedTheme);
  } else {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }

  // Toggle theme on button click
  toggleButton.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    setTheme(currentTheme === "light" ? "dark" : "light");
  });
});
