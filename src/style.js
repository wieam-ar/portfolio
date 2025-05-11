// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu if open
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Scroll animation
function checkScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.classList.add("visible");
    }
  });
}

// Initialize skill bars on scroll
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

// Check on load
window.addEventListener("load", () => {
  checkScroll();

  // Only animate skill bars if they're visible
  const aboutSection = document.getElementById("about");
  const aboutPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (aboutPosition < screenPosition) {
    animateSkillBars();
  }
});

// Check on scroll
window.addEventListener("scroll", checkScroll);

// Animate skill bars when about section comes into view
let skillsAnimated = false;
window.addEventListener("scroll", () => {
  const aboutSection = document.getElementById("about");
  const aboutPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (aboutPosition < screenPosition && !skillsAnimated) {
    animateSkillBars();
    skillsAnimated = true;
  }
});
