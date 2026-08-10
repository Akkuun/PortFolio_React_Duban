const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

const seeMoreButton = document.getElementById("see-more");
const projectContainer = document.getElementById("projects");

seeMoreButton.addEventListener("click", (e) => {
  e.preventDefault();

  projectContainer.classList.toggle("show-more");

  if (projectContainer.classList.contains("show-more")) {
    seeMoreButton.innerHTML = 'See Less <i class="fas fa-arrow-up"></i>';
  } else {
    seeMoreButton.innerHTML = 'See More <i class="fas fa-arrow-right"></i>';
  }
});

const contactLink = document.querySelector('.nav-link[href="#contact"]');
const contactEmail = document.querySelector(".contact-email");

contactLink.addEventListener("click", () => {
  setTimeout(() => {
    contactEmail.classList.remove("animate-border");

    // Force le navigateur à relancer l'animation
    void contactEmail.offsetWidth;

    contactEmail.classList.add("animate-border");
  }, 300);
});


