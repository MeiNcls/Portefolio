function changetheme() {
    const data_theme = document.documentElement.getAttribute("data-theme");
    const button = document.getElementById("theme-img");

    if (data_theme == "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        button?.setAttribute("src", `img/dark/moon.png`);
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        button?.setAttribute("src", `img/light/sun.png`);
    }
}

function ChooseThemeIcon() {
    const data_theme = document.documentElement.getAttribute("data-theme");
    if (data_theme == "light") {
        return `img/${data_theme}/sun.png`;
    } else {
        return `img/${data_theme}/moon.png`;
    }
}

