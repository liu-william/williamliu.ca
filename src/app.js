const mobileMenuBtn = document.getElementById("mobile-menu-cta")
const mobileExitBtn = document.getElementById("mobile-exit-cta")
const mobileNav = document.querySelector("nav")
const navLinks = document.querySelectorAll('a[href^="#"]')
const desktopNav = document.getElementById("nav-desktop")
const projectCards = document.querySelectorAll(".project-card")
const sections = document.querySelectorAll(".section")
const navItems = document.querySelectorAll(".nav-item")

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
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
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
    })
}, {
    threshold: 0.4,
})

projectCards.forEach(card => {
    observer.observe(card)
})

window.addEventListener("scroll", () => {

    let current = "home";
    
    sections.forEach(section => {

        const sectionTop = section.offsetTop    // Offset of top of each selction relative to window top (0)
        const sectionBottom = section.clientHeight + sectionTop

        const currentTop = scrollY
        const viewportHeight = window.innerHeight;
        const currentBottom = currentTop + viewportHeight
        const target = currentBottom * 0.95

        if (target >= sectionTop && target <= sectionBottom) {
            current = section.getAttribute("id")
            navItems.forEach(item => {
                item.classList.remove("active")
                const href = item.getAttribute("href").substring(1)
                if (href == current) {
                    item.classList.add("active")
                }
            })
        }
    })
})