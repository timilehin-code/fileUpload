// light mode begings
let lightMode = localStorage.getItem("lightmode");
const modeToggler = document.querySelector(".toggler");

const enableLightMode = () => {
    document.body.classList.add("lightmode");
    localStorage.setItem("lightmode", "enabled");
}

const disableLightMode = () => {
    document.body.classList.remove("lightmode");
    localStorage.setItem("lightmode", null);
}

if (lightMode === "enabled") {
    enableLightMode();
}

modeToggler.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightmode");
    if (lightMode !== "enabled") {
        enableLightMode();
        console.log(lightMode);
    } else {
        disableLightMode();
        console.log(lightMode);
    }
});

//lightmode ends toggle