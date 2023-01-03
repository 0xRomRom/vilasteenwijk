window.onload = () => {
  const pageHero = document.querySelector(".page-hero");
  pageHero.classList.add("active");

  const elem = document.querySelector(".grid");
  const msnry = new Masonry(elem, {
    // options
    itemSelector: ".grid-item",
    gutter: 1,
  });
};
