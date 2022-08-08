const mobileMenuBtn = document.getElementById("mobile-menu-cta")
const mobileExitBtn = document.getElementById("mobile-exit-cta")
const mobileNav = document.querySelector("nav")
const navLinks = document.querySelectorAll('a[href^="#"]')
const desktopNav = document.getElementById("nav-desktop")
const projectCards = document.querySelectorAll(".project-card")

mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.add("show")
})

mobileExitBtn.addEventListener("click", () => {
    mobileNav.classList.remove("show")
})

navLinks.forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        mobileNav.classList.remove("show")    // Remove Hamburger Menu

        e.preventDefault();    // Resets def (anchor tags)

        // Go to section smoothly by getting href
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() {
        "use strict";
        if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
            desktopNav.classList.add("scroll");
        } 
        else {
            desktopNav.classList.remove("scroll");
        }
    };

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        console.log(entry)
    })
}, {
    threshold: 0.4,
})

projectCards.forEach(card => {
    observer.observe(card)
})

