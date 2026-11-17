function setTheme(themeName) {
    document.body.setAttribute("data-theme", themeName);
    document.body.className = `theme-${themeName}`;
}