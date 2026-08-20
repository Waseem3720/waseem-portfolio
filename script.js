/* =========================================================
   PORTFOLIO — SCRIPT.JS
   Muhammad Waseem Hanif
   Associate Software Engineer | Full Stack Developer
========================================================= */


/* =========================================================
   TYPING ANIMATION
========================================================= */

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Associate Software Engineer",
  "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedEl = document.getElementById("typed-text");

function type() {

  if (!typedEl) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {

    typedEl.textContent =
      currentRole.substring(0, charIndex - 1);

    charIndex--;

  } else {

    typedEl.textContent =
      currentRole.substring(0, charIndex + 1);

    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  /*
    Pause after completing a word
  */

  if (!isDeleting && charIndex === currentRole.length) {

    speed = 1800;

    isDeleting = true;

  } else if (isDeleting && charIndex === 0) {

    isDeleting = false;

    roleIndex =
      (roleIndex + 1) % roles.length;

    speed = 400;
  }

  setTimeout(type, speed);
}


/* =========================================================
   DOM ELEMENTS
========================================================= */

const navbar =
  document.getElementById("navbar");

const navLinks =
  document.querySelectorAll(".nav-link");

const sections =
  document.querySelectorAll(".section");

const scrollTopBtn =
  document.getElementById("scrollTop");

const hamburger =
  document.getElementById("hamburger");

const navLinksContainer =
  document.getElementById("nav-links");

const contactForm =
  document.getElementById("contact-form");


/* =========================================================
   START TYPING
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  type();

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

window.addEventListener("scroll", () => {

  if (!navbar) return;

  if (window.scrollY > 50) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

function updateActiveNav() {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 120;

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


  navLinks.forEach(link => {

    link.classList.remove("active");

    const href =
      link.getAttribute("href");

    if (href === `#${currentSection}`) {

      link.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  updateActiveNav
);


/* =========================================================
   HAMBURGER MENU
========================================================= */

if (hamburger && navLinksContainer) {

  hamburger.addEventListener("click", () => {

    navLinksContainer.classList.toggle("open");

  });

}


/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    if (navLinksContainer) {

      navLinksContainer.classList.remove("open");

    }

  });

});


/* =========================================================
   SCROLL TO TOP
========================================================= */

if (scrollTopBtn) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

      scrollTopBtn.classList.add("visible");

    } else {

      scrollTopBtn.classList.remove("visible");

    }

  });


  scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* =========================================================
   FADE-IN ANIMATION SETUP
========================================================= */

function addFadeClasses() {

  /*
    HOME
  */

  const homeContent =
    document.querySelector(".home-content");

  const homeImage =
    document.querySelector(".home-image");


  if (homeContent) {

    homeContent.classList.add("fade-left");

  }


  if (homeImage) {

    homeImage.classList.add("fade-right");

  }


  /*
    ABOUT
  */

  const aboutImage =
    document.querySelector(".about-image");

  const aboutContent =
    document.querySelector(".about-content");


  if (aboutImage) {

    aboutImage.classList.add("fade-left");

  }


  if (aboutContent) {

    aboutContent.classList.add("fade-right");

  }


  /*
    SERVICE CARDS
  */

  document
    .querySelectorAll(".service-card")
    .forEach((element, index) => {

      element.classList.add("fade-in");

      element.style.transitionDelay =
        `${index * 0.12}s`;

    });


  /*
    SKILLS
  */

  document
    .querySelectorAll(
      ".skill-bar-item, .circle-skill"
    )
    .forEach((element, index) => {

      element.classList.add("fade-in");

      element.style.transitionDelay =
        `${index * 0.1}s`;

    });


  /*
    PROJECTS
  */

  document
    .querySelectorAll(".project-card")
    .forEach((element, index) => {

      element.classList.add("fade-in");

      element.style.transitionDelay =
        `${index * 0.12}s`;

    });


  /*
    CONTACT
  */

  document
    .querySelectorAll(".contact-item")
    .forEach((element, index) => {

      element.classList.add("fade-in");

      element.style.transitionDelay =
        `${index * 0.12}s`;

    });


  const contactFormElement =
    document.querySelector(".contact-form");


  if (contactFormElement) {

    contactFormElement.classList.add("fade-right");

  }

}


/* =========================================================
   ANIMATE ELEMENTS WHEN VISIBLE
========================================================= */

function animateOnScroll() {

  const animatedElements =
    document.querySelectorAll(
      ".fade-in, .fade-left, .fade-right"
    );


  animatedElements.forEach(element => {

    const rect =
      element.getBoundingClientRect();


    if (
      rect.top <
      window.innerHeight - 80
    ) {

      element.classList.add("visible");

    }

  });

}


/* =========================================================
   SKILL BAR ANIMATION
========================================================= */

let skillsAnimated = false;


function animateSkills() {

  const skillsSection =
    document.getElementById("skills");


  if (!skillsSection) return;


  const rect =
    skillsSection.getBoundingClientRect();


  if (
    rect.top <
    window.innerHeight - 100 &&
    !skillsAnimated
  ) {

    skillsAnimated = true;


    /*
      Progress bars
    */

    document
      .querySelectorAll(".skill-fill")
      .forEach(bar => {

        const width =
          bar.getAttribute("data-width");


        if (width) {

          requestAnimationFrame(() => {

            bar.style.width =
              `${width}%`;

          });

        }

      });


    /*
      Circular skills
    */

    document
      .querySelectorAll(".circle-progress")
      .forEach(circle => {

        const percent =
          parseInt(
            circle.getAttribute("data-percent"),
            10
          );


        if (isNaN(percent)) return;


        const radius = 50;

        const circumference =
          2 * Math.PI * radius;


        const offset =
          circumference -
          (percent / 100) * circumference;


        circle.style.strokeDasharray =
          circumference;


        requestAnimationFrame(() => {

          circle.style.strokeDashoffset =
            offset;

        });

      });

  }

}


/* =========================================================
   COMBINED SCROLL ANIMATIONS
========================================================= */

window.addEventListener("scroll", () => {

  animateOnScroll();

  animateSkills();

});


/* =========================================================
   CONTACT FORM — Formspree Integration
========================================================= */

if (contactForm) {

  contactForm.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();


      const submitButton =
        document.getElementById("btn-submit");


      /*
        Disable button and show sending state
      */

      if (submitButton) {

        submitButton.disabled = true;

        submitButton.innerHTML =
          '<i class="fa-solid fa-spinner fa-spin"></i>&nbsp; Sending...';

        submitButton.style.opacity = "0.7";

      }


      /*
        Collect form data and submit to Formspree
      */

      try {

        const formData =
          new FormData(contactForm);


        const response = await fetch(
          "https://formspree.io/f/mdenywdr",
          {
            method: "POST",
            body: formData,
            headers: {
              "Accept": "application/json"
            }
          }
        );


        if (response.ok) {

          /*
            Success — reset form and show message
          */

          contactForm.reset();


          if (submitButton) {

            submitButton.disabled = false;

            submitButton.innerHTML =
              '<i class="fa-solid fa-circle-check"></i>&nbsp; Message Sent Successfully! ✓';

            submitButton.style.opacity = "1";


            /*
              Restore original button label
              after 4 seconds
            */

            setTimeout(() => {

              submitButton.innerHTML =
                '<i class="fa-solid fa-paper-plane"></i>&nbsp; Send Message';

            }, 4000);

          }


        } else {

          /*
            Server-side error — show message
          */

          const data = await response.json();

          const errorMsg =
            data.errors
              ? data.errors
                  .map(err => err.message)
                  .join(", ")
              : "Submission failed. Please try again.";


          alert(`Error: ${errorMsg}`);


          if (submitButton) {

            submitButton.disabled = false;

            submitButton.innerHTML =
              '<i class="fa-solid fa-paper-plane"></i>&nbsp; Send Message';

            submitButton.style.opacity = "1";

          }

        }


      } catch (error) {

        /*
          Network or unexpected error
        */

        alert(
          "There was a problem sending your message. " +
          "Please check your connection and try again."
        );


        if (submitButton) {

          submitButton.disabled = false;

          submitButton.innerHTML =
            '<i class="fa-solid fa-paper-plane"></i>&nbsp; Send Message';

          submitButton.style.opacity = "1";

        }

      }

    }
  );

}


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", event => {

  if (
    !hamburger ||
    !navLinksContainer
  ) return;


  const clickedInsideMenu =
    navLinksContainer.contains(event.target);

  const clickedHamburger =
    hamburger.contains(event.target);


  if (
    !clickedInsideMenu &&
    !clickedHamburger
  ) {

    navLinksContainer.classList.remove("open");

  }

});


/* =========================================================
   ESC KEY — CLOSE MOBILE MENU
========================================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    if (navLinksContainer) {

      navLinksContainer.classList.remove("open");

    }

  }

});


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document
  .querySelectorAll("img")
  .forEach(image => {

    image.addEventListener("error", () => {

      /*
        Prevent broken-image layout
      */

      image.style.opacity = "0.3";

      console.warn(
        `Image could not be loaded: ${image.src}`
      );

    });

  });


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    addFadeClasses();

    /*
      Allow browser to calculate layout
      before triggering animations.
    */

    setTimeout(() => {

      animateOnScroll();

      animateSkills();

      updateActiveNav();

    }, 100);

  }
);


/* =========================================================
   WINDOW LOAD
========================================================= */

window.addEventListener("load", () => {

  animateOnScroll();

  animateSkills();

  updateActiveNav();

});


/* =========================================================
   END OF SCRIPT
========================================================= */