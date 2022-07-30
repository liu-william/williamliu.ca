const mobileMenuBtn = document.getElementById("mobile-menu-cta")
const mobileExitBtn = document.getElementById("mobile-exit-cta")
const nav = document.querySelector("nav")

mobileMenuBtn.addEventListener("click", () => {
    nav.classList.add("show")
})

mobileExitBtn.addEventListener("click", () => {
    nav.classList.remove("show")
})