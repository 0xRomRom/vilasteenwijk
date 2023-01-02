const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");

window.onload = () => {
  cycleImages();
  const pageHero = document.querySelector(".page-hero");
  pageHero.classList.add("active");
  setTimeout(() => {
    box1.classList.add("dropIn");
    box1.style.visibility = "visible";
  }, 1000);
  setTimeout(() => {
    box2.classList.add("dropIn");
    box2.style.visibility = "visible";
  }, 1500);
  setTimeout(() => {
    box3.classList.add("dropIn");
    box3.style.visibility = "visible";
  }, 2000);
  setTimeout(() => {
    box4.classList.add("dropIn");
    box4.style.visibility = "visible";
  }, 2500);
  setTimeout(() => {
    box1.classList.remove("dropIn");
    box2.classList.remove("dropIn");
    box3.classList.remove("dropIn");
    box4.classList.remove("dropIn");
  }, 3500);
};

//Animate doors

const imageBox = document.querySelectorAll(".home-img-box");
const doorImage1 = document.querySelector(".img1");
const doorImage2 = document.querySelector(".img2");
const doorImage3 = document.querySelector(".img3");
const doorImage4 = document.querySelector(".img4");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const kamerOuter1 = document.querySelector(".kamer-inner-box1");
const kamerOuter2 = document.querySelector(".kamer-inner-box2");
const kamerOuter3 = document.querySelector(".kamer-inner-box3");
const kamerOuter4 = document.querySelector(".kamer-inner-box4");
const ctaButton = document.querySelector(".cta-box");

imageBox.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (e.target.classList[1] === "img1") {
      kamerOuter1.classList.remove("hidden");
      kamerOuter2.classList.add("hidden");
      kamerOuter3.classList.add("hidden");
      kamerOuter4.classList.add("hidden");

      doorImage1.src = "./img/animated-door.gif";
      box.disabled = true;
      box2.classList.add("fadeOut");
      box3.classList.add("fadeOut");
      box4.classList.add("fadeOut");
      setTimeout(() => {
        kamerModal.classList.add("fadeIn");
      }, 1000);
      setTimeout(() => {
        doorImage1.src = "./img/closed-door.jpg";
        box.disabled = false;
      }, 2000);
      setTimeout(() => {
        kamerOuter1.classList.add("opacityIn");
        ctaButton.classList.add("opacityIn");
      }, 2300);
    }

    if (e.target.classList[1] === "img2") {
      kamerOuter1.classList.add("hidden");
      kamerOuter2.classList.remove("hidden");
      kamerOuter3.classList.add("hidden");
      kamerOuter4.classList.add("hidden");

      doorImage2.src = "./img/animated-door.gif";
      box.disabled = true;
      box1.classList.add("fadeOut");
      box3.classList.add("fadeOut");
      box4.classList.add("fadeOut");
      setTimeout(() => {
        kamerModal.classList.add("fadeIn");
      }, 1000);
      setTimeout(() => {
        doorImage2.src = "./img/closed-door.jpg";
        box.disabled = false;
      }, 2000);
      setTimeout(() => {
        kamerOuter2.classList.add("opacityIn");
        ctaButton.classList.add("opacityIn");
      }, 2300);
    }

    if (e.target.classList[1] === "img3") {
      kamerOuter1.classList.add("hidden");
      kamerOuter2.classList.add("hidden");
      kamerOuter3.classList.remove("hidden");
      kamerOuter4.classList.add("hidden");

      doorImage3.src = "./img/animated-door.gif";
      box.disabled = true;
      box1.classList.add("fadeOut");
      box2.classList.add("fadeOut");
      box4.classList.add("fadeOut");
      setTimeout(() => {
        kamerModal.classList.add("fadeIn");
      }, 1000);
      setTimeout(() => {
        doorImage3.src = "./img/closed-door.jpg";
        box.disabled = false;
      }, 2000);
      setTimeout(() => {
        kamerOuter3.classList.add("opacityIn");
        ctaButton.classList.add("opacityIn");
      }, 2300);
    }

    if (e.target.classList[1] === "img4") {
      kamerOuter1.classList.add("hidden");
      kamerOuter2.classList.add("hidden");
      kamerOuter3.classList.add("hidden");
      kamerOuter4.classList.remove("hidden");

      doorImage4.src = "./img/animated-door.gif";
      box.disabled = true;
      box1.classList.add("fadeOut");
      box2.classList.add("fadeOut");
      box3.classList.add("fadeOut");
      setTimeout(() => {
        kamerModal.classList.add("fadeIn");
      }, 1000);
      setTimeout(() => {
        kamerOuter4.classList.add("opacityIn");
        doorImage4.src = "./img/closed-door.jpg";
        box.disabled = false;
      }, 2000);
      setTimeout(() => {
        kamerOuter4.classList.add("opacityIn");
        ctaButton.classList.add("opacityIn");
      }, 2300);
    }
  });
});

const kamerModal = document.querySelector(".kamer-modal");
const closeKamerModal = document.querySelector(".close-kamer-btn");

closeKamerModal.addEventListener("click", () => {
  kamerOuter1.classList.remove("opacityIn");
  kamerOuter2.classList.remove("opacityIn");
  kamerOuter3.classList.remove("opacityIn");
  kamerOuter4.classList.remove("opacityIn");
  ctaButton.classList.remove("opacityIn");
  kamerModal.classList.add("transitionOut");
  kamerModal.classList.remove("fadeIn");
  imageBox.forEach((box) => {
    box.disabled = true;
  });
  setTimeout(() => {
    kamerModal.classList.remove("transitionOut");
    kamerOuter1.classList.add("hidden");
    kamerOuter2.classList.add("hidden");
    kamerOuter3.classList.add("hidden");
    kamerOuter4.classList.add("hidden");
  }, 1000);

  setTimeout(() => {
    imageBox.forEach((box) => {
      box.disabled = false;
    });
  }, 1000);

  box1.classList.remove("fadeOut");
  box2.classList.remove("fadeOut");
  box3.classList.remove("fadeOut");
  box4.classList.remove("fadeOut");
});

//Rotate images room 1

const room1Image = document.querySelector(".kamer1-img");
const room2Image = document.querySelector(".kamer2-img");
const room3Image = document.querySelector(".kamer3-img");
const room4Image = document.querySelector(".kamer4-img");

const imageLinks1 = [
  "./img/Room1/Pic1.jpg",
  "./img/Room1/Pic2.jpeg",
  "./img/Room1/Pic3.jpeg",
  "./img/Room1/Pic4.jpeg",
  "./img/Room1/Pic2.jpeg",
];

const imageLinks2 = [
  "./img/Room1/Pic1.jpg",
  "./img/Room1/Pic2.jpeg",
  "./img/Room1/Pic3.jpeg",
  "./img/Room1/Pic4.jpeg",
  "./img/Room1/Pic2.jpeg",
];

const imageLinks3 = [
  "./img/Room1/Pic1.jpg",
  "./img/Room1/Pic2.jpeg",
  "./img/Room1/Pic3.jpeg",
  "./img/Room1/Pic4.jpeg",
  "./img/Room1/Pic2.jpeg",
];

const imageLinks4 = [
  "./img/Room1/Pic1.jpg",
  "./img/Room1/Pic2.jpeg",
  "./img/Room1/Pic3.jpeg",
  "./img/Room1/Pic4.jpeg",
  "./img/Room1/Pic2.jpeg",
];

const transitionImage = (imageSrc, src) => {
  src.classList.remove("smooth-transition");
  src.classList.add("smooth-transition");
  setTimeout(() => {
    src.src = imageSrc;
  }, 1000);
  setTimeout(() => {
    src.classList.remove("smooth-transition");
  }, 2500);
};

const cycleImages = () => {
  const cycle = () => {
    setTimeout(() => {
      transitionImage(imageLinks1[0], room1Image);
      transitionImage(imageLinks2[0], room2Image);
      transitionImage(imageLinks3[0], room3Image);
      transitionImage(imageLinks4[0], room4Image);
    }, 0);
    setTimeout(() => {
      transitionImage(imageLinks1[1], room1Image);
      transitionImage(imageLinks2[1], room2Image);
      transitionImage(imageLinks3[1], room3Image);
      transitionImage(imageLinks4[1], room4Image);
    }, 7000);
    setTimeout(() => {
      transitionImage(imageLinks1[2], room1Image);
      transitionImage(imageLinks2[2], room2Image);
      transitionImage(imageLinks3[2], room3Image);
      transitionImage(imageLinks4[2], room4Image);
    }, 15000);
    setTimeout(() => {
      transitionImage(imageLinks1[3], room1Image);
      transitionImage(imageLinks2[3], room2Image);
      transitionImage(imageLinks3[3], room3Image);
      transitionImage(imageLinks4[3], room4Image);
    }, 23000);
    setTimeout(() => {
      transitionImage(imageLinks1[4], room1Image);
      transitionImage(imageLinks2[4], room2Image);
      transitionImage(imageLinks3[4], room3Image);
      transitionImage(imageLinks4[4], room4Image);
    }, 31000);
  };
  cycle();

  setInterval(() => {
    cycle();
  }, 41000);
};
cycleImages();
