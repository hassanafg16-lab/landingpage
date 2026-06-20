const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle i");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    themeIcon.classList.replace("fa-moon","fa-sun");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeIcon.classList.replace("fa-moon","fa-sun");
        localStorage.setItem("theme","light");
    }else{
        themeIcon.classList.replace("fa-sun","fa-moon");
        localStorage.setItem("theme","dark");
    }
});