const key = 'color-scheme-choice';

function setColorScheme(colorScheme) {
    const metaTag = document.querySelector('meta');
    console.log(colorScheme, metaTag);
    metaTag.setAttribute("content", colorScheme);
}
//setColorScheme("light");

const chooser = document.getElementById("color-chooser");
console.log(chooser);

function changeColors(event) {
    console.log(event);
    setColorScheme(event.target.value);
}
chooser.addEventListener("change", changeColors);