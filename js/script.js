// ── NAV: add scrolled modifier ──
const navBar = document.getElementById("navBar");

function updateNav() {
  if (window.scrollY > 60) {
    navBar.classList.add("nav-bar--scrolled");
  } else {
    navBar.classList.remove("nav-bar--scrolled");
  }
}

// Run on scroll AND on page load
window.addEventListener("scroll", updateNav, { passive: true });
window.addEventListener("DOMContentLoaded", updateNav);
updateNav();

// ── HAMBURGER: toggle mobile menu ──
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu--open");
});

document.querySelectorAll(".mobile-menu__link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("mobile-menu--open");
  });
});

// ── HERO: image slideshow ──
const heroSlides = document.querySelectorAll(".hero__slide");
let heroIndex = 0;

heroSlides[0].classList.add("hero__slide--active");

setInterval(() => {
  heroSlides[heroIndex].classList.remove("hero__slide--active");
  heroIndex = (heroIndex + 1) % heroSlides.length;
  heroSlides[heroIndex].classList.add("hero__slide--active");
}, 5000);

// ── SCROLL REVEAL: staggered entrance ──
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const parent = entry.target.parentElement;
      const siblings = [...parent.querySelectorAll(".reveal:not(.visible)")];
      const index = siblings.indexOf(entry.target);

      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index * 80);

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);

revealElements.forEach((element) => revealObserver.observe(element));

// ── TESTIMONIALS: slider ──
const testimonialCards = document.querySelectorAll(".testimonial-card");
const dotsContainer = document.getElementById("testimonialDots");
let currentTestimonial = 0;

// Build dots
testimonialCards.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className =
    "testimonials__dot" + (index === 0 ? " testimonials__dot--active" : "");
  dot.setAttribute("aria-label", `Testimonial ${index + 1}`);
  dot.addEventListener("click", () => goToTestimonial(index));
  dotsContainer.appendChild(dot);
});

// Show first card
testimonialCards[0].classList.add("testimonial-card--active");

function goToTestimonial(index) {
  testimonialCards[currentTestimonial].classList.remove(
    "testimonial-card--active",
  );
  dotsContainer.children[currentTestimonial].classList.remove(
    "testimonials__dot--active",
  );

  currentTestimonial =
    (index + testimonialCards.length) % testimonialCards.length;

  testimonialCards[currentTestimonial].classList.add(
    "testimonial-card--active",
  );
  dotsContainer.children[currentTestimonial].classList.add(
    "testimonials__dot--active",
  );
}

document.getElementById("testimonialPrev").addEventListener("click", () => {
  goToTestimonial(currentTestimonial - 1);
});

document.getElementById("testimonialNext").addEventListener("click", () => {
  goToTestimonial(currentTestimonial + 1);
});

// Auto-advance testimonials
setInterval(() => goToTestimonial(currentTestimonial + 1), 6000);

// ── CONTACT FORM: validation and feedback ──
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameField = document.getElementById("fieldName");
  const emailField = document.getElementById("fieldEmail");
  const messageField = document.getElementById("fieldMessage");

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

  // Validate required fields
  if (!name || !email || !message) {
    [nameField, emailField, messageField].forEach((field) => {
      if (!field.value.trim()) {
        field.style.borderColor = "#c0392b";
        field.addEventListener(
          "input",
          () => {
            field.style.borderColor = "";
          },
          { once: true },
        );
      }
    });
    return;
  }

  // Simulate sending
  const submitButton = contactForm.querySelector('[type="submit"]');
  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  setTimeout(() => {
    contactForm.reset();
    submitButton.textContent = "Send message →";
    submitButton.disabled = false;
    formSuccess.classList.add("contact-form__success--show");

    setTimeout(() => {
      formSuccess.classList.remove("contact-form__success--show");
    }, 5000);
  }, 1200);
});

// ── SMOOTH SCROLL: anchor offset for fixed nav ──
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: "smooth" });
  });
});
