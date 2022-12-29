//Landing page image cycle
const imageLinks = [
  "./img/cover/img1lux.jpg",
  "./img/cover/img2lux.jpg",
  "./img/cover/img3lux.jpg",
  "./img/cover/img4lux.jpg",
  "./img/cover/img5lux.jpg",
];

const villaOverlay = document.querySelector(".villa-overlay");
const landingImg = document.querySelector(".cycle-image");

window.onload = () => {
  cycleImages();
  setTimeout(() => {
    villaOverlay.classList.add("fadeOut");
  }, 1000);
};

const transitionImage = (imageSrc) => {
  landingImg.classList.remove("smooth-transition");
  landingImg.classList.add("smooth-transition");
  setTimeout(() => {
    landingImg.src = imageSrc;
  }, 1000);
  setTimeout(() => {
    landingImg.classList.remove("smooth-transition");
  }, 2500);
};

const cycleImages = () => {
  const cycle = () => {
    setTimeout(() => {
      transitionImage(imageLinks[0]);
    }, 0);
    setTimeout(() => {
      transitionImage(imageLinks[1]);
    }, 8000);
    setTimeout(() => {
      transitionImage(imageLinks[2]);
    }, 16000);
    setTimeout(() => {
      transitionImage(imageLinks[3]);
    }, 24000);
    setTimeout(() => {
      transitionImage(imageLinks[4]);
    }, 32000);
  };
  cycle();

  setInterval(() => {
    cycle();
  }, 42000);
};
cycleImages();


// Content fade in

window.addEventListener("scroll", () => {

  //HeroText
  const heroText = document.querySelector('.stijl-hero');


  const content = document.querySelector(".content");
  let contentTop = content.getBoundingClientRect().top;
  console.log(contentTop);
  let contentBottom = content.getBoundingClientRect().bottom;
  let screenPosition = window.innerHeight;
  // console.log(screenPosition);
  if (contentTop < 800) {
    content.classList.add("active");
    heroText.classList.add("active");
  }
  if (contentTop > 690) {
    content.classList.remove("active");
    heroText.classList.remove("active");
  }

  // if (contentBottom < 133) {
  //   content.classList.remove("active");
  // }
});