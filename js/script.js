const preloader = document.getElementById("preloader")
const content = document.getElementById("main-content")

window.onload = () => {
    preloader.style.display = "none";
    content.style.display = "block";
}

const navTogglers = document.querySelectorAll(".navbar-toggler");
const modalTogglers = document.querySelectorAll(".modal-toggler");

navTogglers.forEach((toggler) => {
    toggler.addEventListener("click", () => {
        let target = toggler.getAttribute("data-toggle");
        document.getElementById(target).classList.toggle("active");
    });
});
modalTogglers.forEach((toggler) => {
    toggler.addEventListener("click", () => {
        let target = toggler.getAttribute("data-toggle");
        document.getElementById(target).classList.toggle("active");
    });
});

mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));