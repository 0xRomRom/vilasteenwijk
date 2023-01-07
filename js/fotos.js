window.onload = () => {
  const pageHero = document.querySelector(".page-hero");
  pageHero.classList.add("active");

  //Grid layout
  const elem = document.querySelector(".grid");
  const msnry = new Masonry(elem, {
    // options
    itemSelector: ".grid-item",
    gutter: 3,
  });
};

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
