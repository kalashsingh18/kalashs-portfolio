/* ===================================================================
 * Custom Main JS for Next.js Portfolio
 * ------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    // Remove preloader
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            document.documentElement.classList.remove('ss-preload');
            document.documentElement.classList.add('ss-loaded');

            document.querySelectorAll('.ss-animated').forEach(function(item){
                item.classList.remove('ss-animated');
            });
            
            // Hide preloader
            preloader.style.opacity = 0;
            setTimeout(function() {
                preloader.style.visibility = "hidden";
                preloader.style.display = "none";
            }, 500);
        });
    }

    // Mobile Menu
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const mainNavWrap = document.querySelector('.main-nav-wrap');
    const siteBody = document.querySelector("body");

    if (toggleButton && mainNavWrap) {
        toggleButton.addEventListener('click', function(event) {
            event.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        mainNavWrap.querySelectorAll('.main-nav a').forEach(function(link) {
            link.addEventListener("click", function(event) {
                // at 800px and below
                if (window.matchMedia('(max-width: 800px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', function() {
            // above 800px
            if (window.matchMedia('(min-width: 801px)').matches) {
                if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if (toggleButton.classList.contains("is-clicked")) toggleButton.classList.remove("is-clicked");
            }
        });
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#0' || targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active menu link on scroll
    const sections = document.querySelectorAll(".target-section");
    
    function navHighlight() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(function(current) {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                const navItem = document.querySelector(".main-nav a[href*=" + sectionId + "]");
                if (navItem) {
                    navItem.parentNode.classList.add("current");
                }
            } else {
                const navItem = document.querySelector(".main-nav a[href*=" + sectionId + "]");
                if (navItem) {
                    navItem.parentNode.classList.remove("current");
                }
            }
        });
    }
    
    window.addEventListener("scroll", navHighlight);
});
