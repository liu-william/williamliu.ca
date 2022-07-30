const mobileMenuBtn = document.getElementById("mobile-menu-cta")
const mobileExitBtn = document.getElementById("mobile-exit-cta")
const nav = document.querySelector("nav")
const navLinks = document.querySelectorAll('a[href^="#"]')

mobileMenuBtn.addEventListener("click", () => {
    nav.classList.add("show")
})

mobileExitBtn.addEventListener("click", () => {
    nav.classList.remove("show")
})

navLinks.forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        nav.classList.remove("show")    // Remove Hamburger Menu

        e.preventDefault();    // Resets def (anchor tags)

        // Go to section smoothly by getting href
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// window.onbeforeunload = function () {
//     window.scrollTo(0,0);
// };