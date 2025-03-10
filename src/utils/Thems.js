// themeUtils.js
export const applyTheme = (theme) => {
    document.documentElement.style.filter = "none";
    document.body.style.fontSize = "1rem";
    document.querySelectorAll("a").forEach((link) => {
        link.style.textDecoration = "none";
        link.style.color = "";
    });
    document.querySelectorAll("img").forEach((img) => {
        img.style.display = "block";
    });
    document.documentElement.style.cursor = "auto";

    switch (theme) {
        case "high-contrast":
            document.documentElement.style.filter = "invert(1)";
            break;
        case "highlight-links":
            document.querySelectorAll("a").forEach((link) => {
                link.style.textDecoration = "underline";
                link.style.color = "red";
            });
            break;
        case "increase-text":
            document.body.style.fontSize = "1.25rem";
            break;
        case "decrease-text":
            document.body.style.fontSize = "0.875rem";
            break;
        case "hide-images":
            document.querySelectorAll("img").forEach((img) => (img.style.display = "none"));
            break;
        case "big-cursor":
            document.documentElement.style.cursor = "url('/icons/big-cursor.png'), auto";
            break;
        case "dark-mode":
            document.documentElement.style.backgroundColor = "#0B2641";
            document.body.style.color = "white";
            break;
        case "light-mode":
            document.documentElement.style.backgroundColor = "white";
            document.body.style.color = "black";
            break;
        default:
            break;
    }
};
