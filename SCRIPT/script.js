const header = document.querySelector("header");
let posY = 0;

window.addEventListener("scroll", (e) => {
    if (posY < window.scrollY) {
        headerHide();
    } else {
        headershow();
    }
    posY = window.scrollY;
});

function headerHide() {
    header.classList.add("hide");
}

function headershow() {
    header.classList.remove("hide");
}