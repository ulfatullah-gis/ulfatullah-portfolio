/* =========================================================
   Ulfatullah Portfolio
   script.js
========================================================= */


/* =========================================================
   1. MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* Close mobile menu after clicking a link */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});



/* =========================================================
   2. ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        const linkTarget =
            link.getAttribute("href");


        if (
            linkTarget ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);



/* =========================================================
   3. NAVBAR BACKGROUND ON SCROLL
========================================================= */

const navbar =
    document.querySelector(".navbar");


function updateNavbar() {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(2, 8, 12, 0.96)";

        navbar.style.boxShadow =
            "0 10px 35px rgba(0,0,0,0.20)";

    } else {

        navbar.style.background =
            "rgba(2, 8, 12, 0.78)";

        navbar.style.boxShadow =
            "none";

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);



/* =========================================================
   4. SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {


    link.addEventListener(
        "click",
        function (event) {


            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                targetId === ""
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (!target) {

                return;

            }


            event.preventDefault();


            const navbarHeight =
                navbar.offsetHeight;


            const targetPosition =
                target.offsetTop -
                navbarHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });


        }
    );

});



/* =========================================================
   5. SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = [

    ...document.querySelectorAll(
        ".section-heading"
    ),

    ...document.querySelectorAll(
        ".profile-card"
    ),

    ...document.querySelectorAll(
        ".about-content"
    ),

    ...document.querySelectorAll(
        ".service-card"
    ),

    ...document.querySelectorAll(
        ".project-card"
    ),

    ...document.querySelectorAll(
        ".skill-item"
    ),

    ...document.querySelectorAll(
        ".timeline-item"
    ),

    ...document.querySelectorAll(
        ".info-box"
    ),

    ...document.querySelectorAll(
        ".contact-box"
    )

];


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================================
   6. PROJECT CARD HOVER
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach((card) => {


    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-8px)";

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});



/* =========================================================
   7. SKILL HOVER EFFECT
========================================================= */

const skills =
    document.querySelectorAll(
        ".skill-item"
    );


skills.forEach((skill) => {


    skill.addEventListener(
        "mouseenter",
        () => {

            skill.style.boxShadow =
                "0 8px 25px rgba(0,245,160,0.08)";

        }
    );


    skill.addEventListener(
        "mouseleave",
        () => {

            skill.style.boxShadow =
                "";

        }
    );

});



/* =========================================================
   8. CURRENT YEAR
========================================================= */

const footer =
    document.querySelector("footer");


if (footer) {

    const currentYear =
        new Date().getFullYear();


    footer.innerHTML = `

        <div class="container footer-container">

            <div>
                © ${currentYear} Ulfatullah Sk.
            </div>

            <div>
                GIS Analyst • GeoAI Engineer • Web GIS Developer
            </div>

        </div>

    `;

}



/* =========================================================
   9. ESC KEY CLOSES MOBILE MENU
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            navMenu.classList.remove(
                "show"
            );

        }

    }
);



/* =========================================================
   10. CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    (event) => {


        const clickedInsideMenu =
            navMenu.contains(event.target);


        const clickedMenuButton =
            menuToggle.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            navMenu.classList.remove(
                "show"
            );

        }

    }
);



/* =========================================================
   11. PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        updateActiveNavigation();

        updateNavbar();

    }
);