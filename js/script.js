const preloader = document.getElementById("preloader")
const content = document.getElementById("main-content")
const links = document.querySelectorAll('.link')
const nav = document.getElementById('nav')

links.forEach(link => {
    link.addEventListener("click",() => {
        const target = link.getAttribute("data-redirect")
        window.open(target, '_blank').focus();
    })
})

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

window.addEventListener('click',event => {
    if(event.target.id !== "bgr"){
        nav.classList.remove('active')
    }
}) 
window.onscroll(function(){
    nav.classList.remove('active')
}) 