const mobileMenuBtn = document.getElementById("mobile-menu-cta")
const mobileExitBtn = document.getElementById("mobile-exit-cta")
const nav = document.querySelector("nav")
const navLinks = document.querySelectorAll(".nav-item") 

mobileMenuBtn.addEventListener("click", () => {
    nav.classList.add("show")
})

mobileExitBtn.addEventListener("click", () => {
    nav.classList.remove("show")
})

navLinks.forEach(el => 
    el.addEventListener("click", () => {
        nav.classList.remove("show")
    })
)