// sticky navbar
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-sticky");
  } else {
    header.classList.remove("navbar-sticky");
  }
};

// Hamburger event
const hamburgerIcon = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("hamburger-active");
  navItems.classList.toggle("nav-items-active");
});

// slide show

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const testimonialContainer = document.querySelector(".testimonial-container");
const testimonials = document.querySelectorAll(".testimonial");

let currentIndex = 0;
testimonials[0].classList.add("active");

arrowLeft.addEventListener("click", () => changeTestimonial(-1));
arrowRight.addEventListener("click", () => changeTestimonial(1));

const changeTestimonial = (change) => {
  currentIndex =
    (currentIndex + change + testimonials.length) % testimonials.length;
  showContent();
};

const showContent = () => {
  testimonials.forEach((testimonial, index) => {
    testimonial.classList.toggle("active", index === currentIndex);
  });
};
