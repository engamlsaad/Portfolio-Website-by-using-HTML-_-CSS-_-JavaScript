let toggle = document.querySelector(".toggle");
let nav = document.querySelector("#nav");
toggle.onclick = function () {
    nav.classList.toggle("responsive");
}

let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 200) {
        spans.forEach((e) => {
            let spanWidth = e.dataset.width;
            e.style.width = spanWidth;
        })
    }
}