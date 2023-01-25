const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");

window.onload = () => {
  const pageHero = document.querySelector(".page-hero");
  pageHero.classList.add("active");
  setTimeout(() => {
    box2.classList.add("dropIn");
    box2.style.visibility = "visible";
  }, 1000);
  setTimeout(() => {
    box3.classList.add("dropIn");
    box3.style.visibility = "visible";
  }, 1500);
  setTimeout(() => {
    box4.classList.add("dropIn");
    box4.style.visibility = "visible";
  }, 2000);
  setTimeout(() => {
    box1.classList.add("dropIn");
    box1.style.visibility = "visible";
  }, 2500);
  setTimeout(() => {
    box1.classList.remove("dropIn");
    box2.classList.remove("dropIn");
    box3.classList.remove("dropIn");
    box4.classList.remove("dropIn");
  }, 3500);
};

//Animate doors
const imageBox = document.querySelectorAll(".room-flex");
const picture1 = document.querySelector(".imag1");
const picture2 = document.querySelector(".imag2");
const picture3 = document.querySelector(".imag3");
const picture4 = document.querySelector(".imag4");
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

doorImage1.addEventListener("click", () => {
  doorImage1.disabled = true;
  picture1.src = "./img/animated-door2.gif";

  kamerOuter1.classList.remove("hidden");
  kamerOuter2.classList.add("hidden");
  kamerOuter3.classList.add("hidden");
  kamerOuter4.classList.add("hidden");

  box2.classList.add("fadeOut");
  box3.classList.add("fadeOut");
  box4.classList.add("fadeOut");
  setTimeout(() => {
    kamerModal.classList.add("fadeIn");
  }, 1000);
  setTimeout(() => {
    picture1.src = "./img/closed-door2.jpg";
    doorImage1.disabled = false;
  }, 2000);
  setTimeout(() => {
    kamerOuter1.classList.add("opacityIn");
    ctaButton.classList.add("opacityIn");
    window.scrollTo({ top: -30, behavior: "smooth" });
  }, 2300);
});

doorImage2.addEventListener("click", () => {
  doorImage2.disabled = true;
  picture2.src = "./img/animated-door2.gif";
  kamerOuter2.classList.remove("hidden");
  kamerOuter1.classList.add("hidden");
  kamerOuter3.classList.add("hidden");
  kamerOuter4.classList.add("hidden");

  box1.classList.add("fadeOut");
  box3.classList.add("fadeOut");
  box4.classList.add("fadeOut");
  setTimeout(() => {
    kamerModal.classList.add("fadeIn");
  }, 1000);
  setTimeout(() => {
    doorImage2.disabled = false;
    picture2.src = "./img/closed-door2.jpg";
  }, 2000);
  setTimeout(() => {
    kamerOuter2.classList.add("opacityIn");
    ctaButton.classList.add("opacityIn");
    window.scrollTo({ top: -30, behavior: "smooth" });
  }, 2300);
});

doorImage3.addEventListener("click", () => {
  doorImage3.disabled = true;
  picture3.src = "./img/animated-door2.gif";
  kamerOuter3.classList.remove("hidden");
  kamerOuter1.classList.add("hidden");
  kamerOuter2.classList.add("hidden");
  kamerOuter4.classList.add("hidden");

  box1.classList.add("fadeOut");
  box2.classList.add("fadeOut");
  box4.classList.add("fadeOut");
  setTimeout(() => {
    kamerModal.classList.add("fadeIn");
  }, 1000);
  setTimeout(() => {
    picture3.src = "./img/closed-door2.jpg";
    doorImage3.disabled = false;
  }, 2000);
  setTimeout(() => {
    kamerOuter3.classList.add("opacityIn");
    ctaButton.classList.add("opacityIn");
    window.scrollTo({ top: -30, behavior: "smooth" });
  }, 2300);
});

doorImage4.addEventListener("click", () => {
  doorImage4.disabled = true;
  picture4.src = "./img/animated-door2.gif";
  kamerOuter4.classList.remove("hidden");
  kamerOuter1.classList.add("hidden");
  kamerOuter2.classList.add("hidden");
  kamerOuter3.classList.add("hidden");

  box1.classList.add("fadeOut");
  box2.classList.add("fadeOut");
  box3.classList.add("fadeOut");
  setTimeout(() => {
    kamerModal.classList.add("fadeIn");
  }, 1000);
  setTimeout(() => {
    doorImage4.disabled = false;
    picture4.src = "./img/closed-door2.jpg";
  }, 2000);
  setTimeout(() => {
    kamerOuter4.classList.add("opacityIn");
    ctaButton.classList.add("opacityIn");
    window.scrollTo({ top: -30, behavior: "smooth" });
  }, 2300);
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

  doorImage1.disabled = true;
  doorImage2.disabled = true;
  doorImage3.disabled = true;
  doorImage4.disabled = true;

  setTimeout(() => {
    kamerModal.classList.remove("transitionOut");
    kamerOuter1.classList.add("hidden");
    kamerOuter2.classList.add("hidden");
    kamerOuter3.classList.add("hidden");
    kamerOuter4.classList.add("hidden");
  }, 1000);

  setTimeout(() => {
    doorImage1.disabled = false;
    doorImage2.disabled = false;
    doorImage3.disabled = false;
    doorImage4.disabled = false;
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

//Johan Van den Kornput
const imageLinks1 = [
  "./img/Room1/Pic1.jpeg",
  "./img/Room1/Pic2.jpeg",
  "./img/Room1/Pic3.jpeg",
  "./img/Room1/Pic4.jpeg",
  "./img/Room1/Pic5.jpeg",
  "./img/Room1/Pic6.jpeg",
  "./img/Room1/Pic7.jpeg",
  "./img/Room1/Pic8.jpeg",
];

//Hildo Krop
const imageLinks2 = [
  "./img/Room2/Pic1.jpeg",
  "./img/Room2/Pic2.jpeg",
  "./img/Room2/Pic3.jpeg",
  "./img/Room2/Pic4.jpeg",
  "./img/Room2/Pic5.jpeg",
  "./img/Room2/Pic6.jpeg",
  "./img/Room2/Pic7.jpeg",
  "./img/Room2/Pic8.jpeg",
];

//Tromp Meester
const imageLinks3 = [
  "./img/Room3/Pic1.jpeg",
  "./img/Room3/Pic2.jpeg",
  "./img/Room3/Pic3.jpeg",
  "./img/Room3/Pic4.jpeg",
  "./img/Room3/Pic5.jpeg",
  "./img/Room3/Pic6.jpeg",
  "./img/Room3/Pic7.jpeg",
  "./img/Room3/Pic8.jpeg",
];

//Kleibeuker
const imageLinks4 = [
  "./img/Room4/Pic1.jpeg",
  "./img/Room4/Pic2.jpeg",
  "./img/Room4/Pic3.jpeg",
  "./img/Room4/Pic4.jpeg",
  "./img/Room4/Pic5.jpeg",
  "./img/Room4/Pic6.jpeg",
  "./img/Room4/Pic7.jpeg",
  "./img/Room4/Pic8.jpeg",
];

//Dotbox transition
const dot1 = document.querySelector(".d1");
const dot2 = document.querySelector(".d2");
const dot3 = document.querySelector(".d3");
const dot4 = document.querySelector(".d4");
const dot5 = document.querySelector(".d5");
const dot6 = document.querySelector(".d6");
const dot7 = document.querySelector(".d7");
const dot8 = document.querySelector(".d8");
const dot9 = document.querySelector(".d9");
const dot10 = document.querySelector(".d10");
const dot11 = document.querySelector(".d11");
const dot12 = document.querySelector(".d12");
const dot13 = document.querySelector(".d13");
const dot14 = document.querySelector(".d14");
const dot15 = document.querySelector(".d15");
const dot16 = document.querySelector(".d16");
const dot17 = document.querySelector(".d17");
const dot18 = document.querySelector(".d18");
const dot19 = document.querySelector(".d19");
const dot20 = document.querySelector(".d20");
const dot21 = document.querySelector(".d21");
const dot22 = document.querySelector(".d22");
const dot23 = document.querySelector(".d23");
const dot24 = document.querySelector(".d24");
const dot25 = document.querySelector(".d25");
const dot26 = document.querySelector(".d26");
const dot27 = document.querySelector(".d27");
const dot28 = document.querySelector(".d28");
const dot29 = document.querySelector(".d29");
const dot30 = document.querySelector(".d30");
const dot31 = document.querySelector(".d31");
const dot32 = document.querySelector(".d32");

const hideClasses = (a, b, c, d, e, f, g) => {
  a.classList.remove("dot-active");
  b.classList.remove("dot-active");
  c.classList.remove("dot-active");
  d.classList.remove("dot-active");
  e.classList.remove("dot-active");
  f.classList.remove("dot-active");
  g.classList.remove("dot-active");
};

const dotBox1 = document.querySelector(".dbox1");
const dotBox2 = document.querySelector(".dbox2");
const dotBox3 = document.querySelector(".dbox3");
const dotBox4 = document.querySelector(".dbox4");

const hideImages = (a, b, c, d, e, f, g) => {
  a.classList.add("hidden");
  b.classList.add("hidden");
  c.classList.add("hidden");
  d.classList.add("hidden");
  e.classList.add("hidden");
  f.classList.add("hidden");
  g.classList.add("hidden");
};

//Hildo krop

const k1img1 = document.querySelector(".kamer1-img1");
const k1img2 = document.querySelector(".kamer1-img2");
const k1img3 = document.querySelector(".kamer1-img3");
const k1img4 = document.querySelector(".kamer1-img4");
const k1img5 = document.querySelector(".kamer1-img5");
const k1img6 = document.querySelector(".kamer1-img6");
const k1img7 = document.querySelector(".kamer1-img7");
const k1img8 = document.querySelector(".kamer1-img8");

dotBox1.addEventListener("click", (e) => {
  if (e.target.classList.contains("d1")) {
    dot1.classList.add("dot-active");
    hideClasses(dot2, dot3, dot4, dot5, dot6, dot7, dot8);
    k1img1.classList.remove("hidden");
    hideImages(k1img2, k1img3, k1img4, k1img5, k1img6, k1img7, k1img8);
    return;
  }
  if (e.target.classList.contains("d2")) {
    dot2.classList.add("dot-active");
    hideClasses(dot1, dot3, dot4, dot5, dot6, dot7, dot8);
    k1img2.classList.remove("hidden");
    hideImages(k1img1, k1img3, k1img4, k1img5, k1img6, k1img7, k1img8);
    return;
  }
  if (e.target.classList.contains("d3")) {
    dot3.classList.add("dot-active");
    hideClasses(dot1, dot2, dot4, dot5, dot6, dot7, dot8);
    k1img3.classList.remove("hidden");
    hideImages(k1img1, k1img2, k1img4, k1img5, k1img6, k1img7, k1img8);
    return;
  }
  if (e.target.classList.contains("d4")) {
    dot4.classList.add("dot-active");
    hideClasses(dot1, dot2, dot3, dot5, dot6, dot7, dot8);
    k1img4.classList.remove("hidden");
    hideImages(k1img1, k1img2, k1img3, k1img5, k1img6, k1img7, k1img8);
    return;
  }
  if (e.target.classList.contains("d5")) {
    dot5.classList.add("dot-active");
    hideClasses(dot1, dot2, dot3, dot4, dot6, dot7, dot8);
    k1img5.classList.remove("hidden");
    hideImages(k1img1, k1img2, k1img3, k1img4, k1img6, k1img7, k1img8);
    return;
  }
  if (e.target.classList.contains("d6")) {
    dot6.classList.add("dot-active");
    hideClasses(dot1, dot2, dot3, dot4, dot5, dot7, dot8);
    k1img6.classList.remove("hidden");
    hideImages(k1img1, k1img2, k1img3, k1img4, k1img5, k1img7, k1img8);
    return;
  }
  if (e.target.classList.contains("d7")) {
    dot7.classList.add("dot-active");
    hideClasses(dot1, dot2, dot3, dot4, dot5, dot6, dot8);
    k1img7.classList.remove("hidden");
    hideImages(k1img1, k1img2, k1img3, k1img4, k1img5, k1img6, k1img8);
    return;
  }
  if (e.target.classList.contains("d8")) {
    dot8.classList.add("dot-active");
    hideClasses(dot1, dot2, dot3, dot4, dot5, dot6, dot7);
    k1img8.classList.remove("hidden");
    hideImages(k1img1, k1img2, k1img3, k1img4, k1img5, k1img6, k1img7);
    return;
  }
});

//Trompmeester

const k2img1 = document.querySelector(".kamer2-img1");
const k2img2 = document.querySelector(".kamer2-img2");
const k2img3 = document.querySelector(".kamer2-img3");
const k2img4 = document.querySelector(".kamer2-img4");
const k2img5 = document.querySelector(".kamer2-img5");
const k2img6 = document.querySelector(".kamer2-img6");
const k2img7 = document.querySelector(".kamer2-img7");
const k2img8 = document.querySelector(".kamer2-img8");

dotBox2.addEventListener("click", (e) => {
  if (e.target.classList.contains("d9")) {
    dot9.classList.add("dot-active");
    hideClasses(dot10, dot11, dot12, dot13, dot14, dot15, dot16);
    k2img1.classList.remove("hidden");
    hideImages(k2img2, k2img3, k2img4, k2img5, k2img6, k2img7, k2img8);
    return;
  }
  if (e.target.classList.contains("d10")) {
    dot10.classList.add("dot-active");
    hideClasses(dot9, dot11, dot12, dot13, dot14, dot15, dot16);
    k2img2.classList.remove("hidden");
    hideImages(k2img1, k2img3, k2img4, k2img5, k2img6, k2img7, k2img8);
    return;
  }
  if (e.target.classList.contains("d11")) {
    dot11.classList.add("dot-active");
    hideClasses(dot9, dot10, dot12, dot13, dot14, dot15, dot16);
    k2img3.classList.remove("hidden");
    hideImages(k2img1, k2img2, k2img4, k2img5, k2img6, k2img7, k2img8);
    return;
  }
  if (e.target.classList.contains("d12")) {
    dot12.classList.add("dot-active");
    hideClasses(dot9, dot10, dot11, dot13, dot14, dot15, dot16);
    k2img4.classList.remove("hidden");
    hideImages(k2img1, k2img2, k2img3, k2img5, k2img6, k2img7, k2img8);
    return;
  }
  if (e.target.classList.contains("d13")) {
    dot13.classList.add("dot-active");
    hideClasses(dot9, dot10, dot11, dot12, dot14, dot15, dot16);
    k2img5.classList.remove("hidden");
    hideImages(k2img1, k2img2, k2img3, k2img4, k2img6, k2img7, k2img8);
    return;
  }
  if (e.target.classList.contains("d14")) {
    dot14.classList.add("dot-active");
    hideClasses(dot9, dot10, dot11, dot12, dot13, dot15, dot16);
    k2img6.classList.remove("hidden");
    hideImages(k2img1, k2img2, k2img3, k2img4, k2img5, k2img7, k2img8);
    return;
  }
  if (e.target.classList.contains("d15")) {
    dot15.classList.add("dot-active");
    hideClasses(dot9, dot10, dot11, dot12, dot13, dot14, dot16);
    k2img7.classList.remove("hidden");
    hideImages(k2img1, k2img2, k2img3, k2img4, k2img5, k2img6, k2img8);
    return;
  }
  if (e.target.classList.contains("d16")) {
    dot16.classList.add("dot-active");
    hideClasses(dot9, dot10, dot11, dot12, dot13, dot14, dot15);
    k2img8.classList.remove("hidden");
    hideImages(k2img1, k2img2, k2img3, k2img4, k2img5, k2img6, k2img7);
    return;
  }
});

//Kleibreuker

const k3img1 = document.querySelector(".kamer3-img1");
const k3img2 = document.querySelector(".kamer3-img2");
const k3img3 = document.querySelector(".kamer3-img3");
const k3img4 = document.querySelector(".kamer3-img4");
const k3img5 = document.querySelector(".kamer3-img5");
const k3img6 = document.querySelector(".kamer3-img6");
const k3img7 = document.querySelector(".kamer3-img7");
const k3img8 = document.querySelector(".kamer3-img8");

dotBox3.addEventListener("click", (e) => {
  if (e.target.classList.contains("d17")) {
    dot17.classList.add("dot-active");
    hideClasses(dot18, dot19, dot20, dot21, dot22, dot23, dot24);
    k3img1.classList.remove("hidden");
    hideImages(k3img2, k3img3, k3img4, k3img5, k3img6, k3img7, k3img8);
    return;
  }
  if (e.target.classList.contains("d18")) {
    dot18.classList.add("dot-active");
    hideClasses(dot17, dot19, dot20, dot21, dot22, dot23, dot24);
    k3img2.classList.remove("hidden");
    hideImages(k3img1, k3img3, k3img4, k3img5, k3img6, k3img7, k3img8);
    return;
  }
  if (e.target.classList.contains("d19")) {
    dot19.classList.add("dot-active");
    hideClasses(dot17, dot18, dot20, dot21, dot22, dot23, dot24);
    k3img3.classList.remove("hidden");
    hideImages(k3img1, k3img2, k3img4, k3img5, k3img6, k3img7, k3img8);
    return;
  }
  if (e.target.classList.contains("d20")) {
    dot20.classList.add("dot-active");
    hideClasses(dot17, dot18, dot19, dot21, dot22, dot23, dot24);
    k3img4.classList.remove("hidden");
    hideImages(k3img1, k3img2, k3img3, k3img5, k3img6, k3img7, k3img8);
    return;
  }
  if (e.target.classList.contains("d21")) {
    dot21.classList.add("dot-active");
    hideClasses(dot17, dot18, dot19, dot20, dot22, dot23, dot24);
    k3img5.classList.remove("hidden");
    hideImages(k3img1, k3img2, k3img3, k3img4, k3img6, k3img7, k3img8);
    return;
  }
  if (e.target.classList.contains("d22")) {
    dot22.classList.add("dot-active");
    hideClasses(dot17, dot18, dot19, dot20, dot21, dot23, dot24);
    k3img6.classList.remove("hidden");
    hideImages(k3img1, k3img2, k3img3, k3img4, k3img5, k3img7, k3img8);
    return;
  }
  if (e.target.classList.contains("d23")) {
    dot23.classList.add("dot-active");
    hideClasses(dot17, dot18, dot19, dot20, dot21, dot22, dot24);
    k3img7.classList.remove("hidden");
    hideImages(k3img1, k3img2, k3img3, k3img4, k3img5, k3img6, k3img8);
    return;
  }
  if (e.target.classList.contains("d24")) {
    dot24.classList.add("dot-active");
    hideClasses(dot17, dot18, dot19, dot20, dot21, dot22, dot23);
    k3img8.classList.remove("hidden");
    hideImages(k3img1, k3img2, k3img3, k3img4, k3img5, k3img6, k3img7);
    return;
  }
});

//Johan
const k4img1 = document.querySelector(".kamer1-img1");
const k4img2 = document.querySelector(".kamer1-img2");
const k4img3 = document.querySelector(".kamer1-img3");
const k4img4 = document.querySelector(".kamer1-img4");
const k4img5 = document.querySelector(".kamer1-img5");
const k4img6 = document.querySelector(".kamer1-img6");
const k4img7 = document.querySelector(".kamer1-img7");
const k4img8 = document.querySelector(".kamer1-img8");

dotBox4.addEventListener("click", (e) => {
  if (e.target.classList.contains("d25")) {
    dot25.classList.add("dot-active");
    hideClasses(dot26, dot27, dot28, dot29, dot30, dot31, dot32);
    k4img1.classList.remove("hidden");
    hideImages(k4img2, k4img3, k4img4, k4img5, k4img6, k4img7, k4img8);
    return;
  }
  if (e.target.classList.contains("d26")) {
    dot26.classList.add("dot-active");
    hideClasses(dot25, dot27, dot28, dot29, dot30, dot31, dot32);
    k4img2.classList.remove("hidden");
    hideImages(k4img1, k4img3, k4img4, k4img5, k4img6, k4img7, k4img8);
    return;
  }
  if (e.target.classList.contains("d27")) {
    dot27.classList.add("dot-active");
    hideClasses(dot25, dot26, dot28, dot29, dot30, dot31, dot32);
    k4img3.classList.remove("hidden");
    hideImages(k4img1, k4img2, k4img4, k4img5, k4img6, k4img7, k4img8);
    return;
  }
  if (e.target.classList.contains("d28")) {
    dot28.classList.add("dot-active");
    hideClasses(dot25, dot26, dot27, dot29, dot30, dot31, dot32);
    k4img4.classList.remove("hidden");
    hideImages(k4img1, k4img2, k4img3, k4img5, k4img6, k4img7, k4img8);
    return;
  }
  if (e.target.classList.contains("d29")) {
    dot29.classList.add("dot-active");
    hideClasses(dot25, dot26, dot27, dot28, dot30, dot31, dot32);
    k4img5.classList.remove("hidden");
    hideImages(k4img1, k4img2, k4img3, k4img4, k4img6, k4img7, k4img8);
    return;
  }
  if (e.target.classList.contains("d30")) {
    dot30.classList.add("dot-active");
    hideClasses(dot25, dot26, dot27, dot28, dot29, dot31, dot32);
    k4img6.classList.remove("hidden");
    hideImages(k4img1, k4img2, k4img3, k4img4, k4img5, k4img7, k4img8);
    return;
  }
  if (e.target.classList.contains("d31")) {
    dot31.classList.add("dot-active");
    hideClasses(dot25, dot26, dot27, dot28, dot29, dot30, dot32);
    k4img7.classList.remove("hidden");
    hideImages(k4img1, k4img2, k4img3, k4img4, k4img5, k4img6, k4img8);
    return;
  }
  if (e.target.classList.contains("d32")) {
    dot32.classList.add("dot-active");
    hideClasses(dot25, dot26, dot27, dot28, dot29, dot30, dot31);
    k4img8.classList.remove("hidden");
    hideImages(k4img1, k4img2, k4img3, k4img4, k4img5, k4img6, k4img7);
    return;
  }
});

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

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navlist");
//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
