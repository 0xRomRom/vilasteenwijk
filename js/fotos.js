window.onload = () => {
  //Grid layout
  const elem = document.querySelector(".grid");
  fotosgrid = elem;
  const elem2 = document.querySelector(".media-grid");
  mediagrid = elem2;
  const msnry = new Masonry(elem, {
    // options
    itemSelector: ".grid-item",
    gutter: 2,
  });
};

let fotosgrid;
let mediagrid;

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

//Toggle menus
const fotosButton = document.querySelector(".fotos");
const mediaButton = document.querySelector(".media");

fotosButton.addEventListener("click", () => {
  mediaButton.classList.remove("cta-active");
  fotosButton.classList.add("cta-active");
  fotosgrid.classList.remove("hidden");
  mediagrid.classList.add("hidden");
});

mediaButton.addEventListener("click", () => {
  mediaButton.classList.add("cta-active");
  fotosButton.classList.remove("cta-active");
  fotosgrid.classList.add("hidden");
  mediagrid.classList.remove("hidden");
});
