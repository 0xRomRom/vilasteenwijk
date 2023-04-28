const pageHero = document.querySelector(".page-hero");
pageHero.classList.add("active");
const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".navlist");
//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const bookCTA = document.querySelector(".book-cta");

bookCTA.addEventListener("click", () => {
  window.location.href = "contact.html";
});
