window.onload = () => {
  //Grid layout
  const elem = document.querySelector(".grid");
  const msnry = new Masonry(elem, {
    // options
    itemSelector: ".grid-item",
    gutter: 2,
  });
};

const pageHero = document.querySelector(".page-hero");
pageHero.classList.add("active");

//Toggle fullscreen image
const overlayContainer = document.querySelector(".image-overlay");
const overlayImage = document.querySelector(".overlay-image");
const gridItem = document.querySelectorAll(".grid-item");
gridItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    let src = e.srcElement.currentSrc.toString();
    overlayImage.src = src;
    overlayContainer.classList.remove("hidden");
  });
});

overlayContainer.addEventListener("click", () => {
  overlayContainer.classList.add("hidden");
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navlist");
//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
