const mobileMenuBtn = document.getElementById("mobile-menu-cta")
const mobileExitBtn = document.getElementById("mobile-exit-cta")
const mobileNav = document.querySelector("nav")
const navLinks = document.querySelectorAll('a[href^="#"]')
const desktopNav = document.getElementById("nav-desktop")
const projectCards = document.querySelectorAll(".project-card")
const sections = document.querySelectorAll(".section")
const navItems = document.querySelectorAll(".nav-item")
const socials = document.querySelectorAll(".hero-logo__anim")
const heroTexts = document.querySelectorAll(".hero-text__anim")
const aboutTexts = document.querySelectorAll(".about__anim,.about__anim2")

seamless.polyfill();

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

        seamless.scrollIntoView(document.querySelector(this.getAttribute("href")), {
            behavior: "smooth",
            block: "center",
            inline: "center",
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

const fullObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) {
            fullObserver.unobserve(entry.target)
        }
    })
}, {
    threshold: 1,
})

socials.forEach(social => {
    fullObserver.observe(social)
})

heroTexts.forEach(text => {
    fullObserver.observe(text)
})

const quarterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) {
            quarterObserver.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.25,
})

aboutTexts.forEach(text => {
    quarterObserver.observe(text)
})
// quarterObserver.observe(aboutText)

const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 0.4,
})

projectCards.forEach(card => {
    projectObserver.observe(card)
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

// polyfill();