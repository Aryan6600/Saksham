const preloader = document.getElementById("preloader")
const content = document.getElementById("main-content")

window.onload = () => {
    preloader.style.display = "none";
    content.style.display = "block";
}