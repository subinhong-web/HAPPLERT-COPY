// 헤더 페이드인 인터렉션
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

// 스크롤 페이드인 인터렉션
const content = document.getElementsByClassName("content");
        window.addEventListener("scroll", ()=> {
            const winH = window.innerHeight;
            for(let i = 0; i < content.length; i++) {
                const contnenTop = content[i].getBoundingClientRect().top;
                if(contnenTop - winH < 0) {
                    content[i].classList.add("in");
                } else {
                    content[i].classList.remove("in");
                }
            };
        });