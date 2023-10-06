const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");

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
  box5.classList.add("dropIn");
  box5.style.visibility = "visible";
}, 3000);
setTimeout(() => {
  box6.classList.add("dropIn");
  box6.style.visibility = "visible";
}, 3500);
setTimeout(() => {
  box1.classList.remove("dropIn");
  box2.classList.remove("dropIn");
  box3.classList.remove("dropIn");
  box4.classList.remove("dropIn");
  box5.classList.remove("dropIn");
}, 3500);

//Animate doors
const imageBox = document.querySelectorAll(".room-flex");
const picture1 = document.querySelector(".imag1");
const picture2 = document.querySelector(".imag2");
const picture3 = document.querySelector(".imag3");
const picture4 = document.querySelector(".imag4");
const picture5 = document.querySelector(".imag5");
const doorImage1 = document.querySelector(".img1");
const doorImage2 = document.querySelector(".img2");
const doorImage3 = document.querySelector(".img3");
const doorImage4 = document.querySelector(".img4");
const doorImage5 = document.querySelector(".img5");
const doorImage6 = document.querySelector(".img6");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const kamerOuter1 = document.querySelector(".kamer-inner-box1");
const kamerOuter2 = document.querySelector(".kamer-inner-box2");
const kamerOuter3 = document.querySelector(".kamer-inner-box3");
const kamerOuter4 = document.querySelector(".kamer-inner-box4");
const kamerOuter5 = document.querySelector(".kamer-inner-box5");
const kamerOuter6 = document.querySelector(".kamer-inner-box6");
const ctaButton = document.querySelector(".cta-box");
const wrapperDiv = document.querySelector(".wrapper");

doorImage1.addEventListener("click", () => {
  doorImage1.disabled = true;
  kamerModal.classList.remove("hidden");

  kamerOuter1.classList.remove("hidden");
  kamerOuter2.classList.add("hidden");
  kamerOuter3.classList.add("hidden");
  kamerOuter4.classList.add("hidden");
  kamerOuter5.classList.add("hidden");
  kamerOuter6.classList.add("hidden");

  box2.classList.add("fadeOut");
  box3.classList.add("fadeOut");
  box4.classList.add("fadeOut");
  box5.classList.add("fadeOut");
  box6.classList.add("fadeOut");
  kamerModal.classList.add("fadeIn");
  doorImage1.disabled = false;
  kamerOuter1.classList.add("opacityIn");
  ctaButton.classList.add("opacityIn");
  window.scrollTo({ top: -30, behavior: "smooth" });

  wrapperDiv.classList.add("fadeOut");
  wrapperDiv.classList.remove("fadeOut");
});

doorImage2.addEventListener("click", () => {
  doorImage2.disabled = true;
  kamerModal.classList.remove("hidden");
  kamerOuter2.classList.remove("hidden");
  kamerOuter1.classList.add("hidden");
  kamerOuter3.classList.add("hidden");
  kamerOuter4.classList.add("hidden");
  kamerOuter5.classList.add("hidden");
  kamerOuter6.classList.add("hidden");

  box1.classList.add("fadeOut");
  box3.classList.add("fadeOut");
  box4.classList.add("fadeOut");
  box5.classList.add("fadeOut");
  box6.classList.add("fadeOut");
  kamerModal.classList.add("fadeIn");
  doorImage2.disabled = false;
  kamerOuter2.classList.add("opacityIn");
  ctaButton.classList.add("opacityIn");
  window.scrollTo({ top: -30, behavior: "smooth" });

  wrapperDiv.classList.add("fadeOut");
  wrapperDiv.classList.remove("fadeOut");
});

doorImage3.addEventListener("click", () => {
  doorImage3.disabled = true;
  kamerModal.classList.remove("hidden");
  kamerOuter3.classList.remove("hidden");
  kamerOuter1.classList.add("hidden");
  kamerOuter2.classList.add("hidden");
  kamerOuter4.classList.add("hidden");
  kamerOuter5.classList.add("hidden");
  kamerOuter6.classList.add("hidden");

  box1.classList.add("fadeOut");
  box2.classList.add("fadeOut");
  box4.classList.add("fadeOut");
  box5.classList.add("fadeOut");
  box6.classList.add("fadeOut");
  kamerModal.classList.add("fadeIn");
  doorImage3.disabled = false;
  kamerOuter3.classList.add("opacityIn");
  ctaButton.classList.add("opacityIn");
  window.scrollTo({ top: -30, behavior: "smooth" });

  wrapperDiv.classList.add("fadeOut");
  wrapperDiv.classList.remove("fadeOut");
});

doorImage4.addEventListener("click", () => {
  doorImage4.disabled = true;
  kamerModal.classList.remove("hidden");
  kamerOuter4.classList.remove("hidden");
  kamerOuter1.classList.add("hidden");
  kamerOuter2.classList.add("hidden");
  kamerOuter3.classList.add("hidden");
  kamerOuter5.classList.add("hidden");
  kamerOuter6.classList.add("hidden");

  box1.classList.add("fadeOut");
  box2.classList.add("fadeOut");
  box3.classList.add("fadeOut");
  box5.classList.add("fadeOut");
  box6.classList.add("fadeOut");
  window.scrollTo({ top: -30, behavior: "smooth" });
  kamerModal.classList.add("fadeIn");
  doorImage4.disabled = false;
  kamerOuter4.classList.add("opacityIn");
  ctaButton.classList.add("opacityIn");

  wrapperDiv.classList.add("fadeOut");
  wrapperDiv.classList.remove("fadeOut");
});

doorImage5.addEventListener("click", () => {
  doorImage5.disabled = true;
  kamerModal.classList.remove("hidden");
  kamerOuter5.classList.remove("hidden");
  kamerOuter1.classList.add("hidden");
  kamerOuter2.classList.add("hidden");
  kamerOuter3.classList.add("hidden");
  kamerOuter4.classList.add("hidden");
  kamerOuter6.classList.add("hidden");

  box1.classList.add("fadeOut");
  box2.classList.add("fadeOut");
  box3.classList.add("fadeOut");
  box4.classList.add("fadeOut");
  box6.classList.add("fadeOut");
  kamerModal.classList.add("fadeIn");
  window.scrollTo({ top: -30, behavior: "smooth" });
  doorImage5.disabled = false;
  kamerOuter5.classList.add("opacityIn");
  ctaButton.classList.add("opacityIn");

  wrapperDiv.classList.add("fadeOut");
  wrapperDiv.classList.remove("fadeOut");
});

doorImage6.addEventListener("click", () => {
  kamerModal.classList.remove("hidden");
  kamerOuter4.classList.add("hidden");
  kamerOuter1.classList.add("hidden");
  kamerOuter2.classList.add("hidden");
  kamerOuter3.classList.add("hidden");
  kamerOuter5.classList.add("hidden");
  kamerOuter6.classList.remove("hidden");
  window.scrollTo({ top: -30, behavior: "smooth" });

  box1.classList.add("fadeOut");
  box2.classList.add("fadeOut");
  box3.classList.add("fadeOut");
  box4.classList.add("fadeOut");
  box5.classList.add("fadeOut");
  kamerModal.classList.add("fadeIn");

  kamerOuter6.classList.add("opacityIn");
  ctaButton.classList.add("opacityIn");

  wrapperDiv.classList.add("fadeOut");
  wrapperDiv.classList.remove("fadeOut");
});

const kamerModal = document.querySelector(".kamer-modal");
const closeKamerModal = document.querySelector(".close-kamer-btn");

closeKamerModal.addEventListener("click", () => {
  kamerOuter1.classList.remove("opacityIn");
  kamerOuter2.classList.remove("opacityIn");
  kamerOuter3.classList.remove("opacityIn");
  kamerOuter4.classList.remove("opacityIn");
  kamerOuter5.classList.remove("opacityIn");
  kamerOuter6.classList.remove("opacityIn");
  ctaButton.classList.remove("opacityIn");
  kamerModal.classList.add("transitionOut");
  kamerModal.classList.remove("fadeIn");

  doorImage1.disabled = true;
  doorImage2.disabled = true;
  doorImage3.disabled = true;
  doorImage4.disabled = true;
  doorImage5.disabled = true;

  setTimeout(() => {
    kamerModal.classList.remove("transitionOut");
    kamerModal.classList.add("hidden");
    kamerOuter1.classList.add("hidden");
    kamerOuter2.classList.add("hidden");
    kamerOuter3.classList.add("hidden");
    kamerOuter4.classList.add("hidden");
    kamerOuter5.classList.add("hidden");
    kamerOuter6.classList.add("hidden");
  }, 1000);

  setTimeout(() => {
    doorImage1.disabled = false;
    doorImage2.disabled = false;
    doorImage3.disabled = false;
    doorImage4.disabled = false;
    doorImage5.disabled = false;
  }, 1000);

  box1.classList.remove("fadeOut");
  box2.classList.remove("fadeOut");
  box3.classList.remove("fadeOut");
  box4.classList.remove("fadeOut");
  box5.classList.remove("fadeOut");
  box6.classList.remove("fadeOut");
});

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
const dot33 = document.querySelector(".d33");
const dot34 = document.querySelector(".d34");
const dot35 = document.querySelector(".d35");
const dot36 = document.querySelector(".d36");
const dot37 = document.querySelector(".d37");
const dot38 = document.querySelector(".d38");
const dot39 = document.querySelector(".d39");
const dot40 = document.querySelector(".d40");
const dot41 = document.querySelector(".d41");
const dot42 = document.querySelector(".d42");
const dot43 = document.querySelector(".d43");
const dot44 = document.querySelector(".d44");
const dot45 = document.querySelector(".d45");
const dot46 = document.querySelector(".d46");
const dot47 = document.querySelector(".d47");
const dot48 = document.querySelector(".d48");

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
const dotBox5 = document.querySelector(".dbox5");
const dotBox6 = document.querySelector(".dbox6");

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

const k1img1 = document.querySelector(".kamer4-img1");
const k1img2 = document.querySelector(".kamer4-img2");
const k1img3 = document.querySelector(".kamer4-img3");
const k1img4 = document.querySelector(".kamer4-img4");
const k1img5 = document.querySelector(".kamer4-img5");
const k1img6 = document.querySelector(".kamer4-img6");
const k1img7 = document.querySelector(".kamer4-img7");
const k1img8 = document.querySelector(".kamer4-img8");

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

//Giethoorn
const k5img1 = document.querySelector(".kamer5-img1");
const k5img2 = document.querySelector(".kamer5-img2");
const k5img3 = document.querySelector(".kamer5-img3");
const k5img4 = document.querySelector(".kamer5-img4");
const k5img5 = document.querySelector(".kamer5-img5");
const k5img6 = document.querySelector(".kamer5-img6");
const k5img7 = document.querySelector(".kamer5-img7");
const k5img8 = document.querySelector(".kamer5-img8");

dotBox5.addEventListener("click", (e) => {
  if (e.target.classList.contains("d33")) {
    dot33.classList.add("dot-active");
    hideClasses(dot34, dot35, dot36, dot37, dot38, dot39, dot40);
    k5img1.classList.remove("hidden");
    hideImages(k5img2, k5img3, k5img4, k5img5, k5img6, k5img7, k5img8);
    return;
  }
  if (e.target.classList.contains("d34")) {
    dot34.classList.add("dot-active");
    hideClasses(dot33, dot35, dot36, dot37, dot38, dot39, dot40);
    k5img2.classList.remove("hidden");
    hideImages(k5img1, k5img3, k5img4, k5img5, k5img6, k5img7, k5img8);
    return;
  }
  if (e.target.classList.contains("d35")) {
    dot35.classList.add("dot-active");
    hideClasses(dot33, dot34, dot36, dot37, dot38, dot39, dot40);
    k5img3.classList.remove("hidden");
    hideImages(k5img1, k5img2, k5img4, k5img5, k5img6, k5img7, k5img8);
    return;
  }
  if (e.target.classList.contains("d36")) {
    dot36.classList.add("dot-active");
    hideClasses(dot33, dot34, dot35, dot37, dot38, dot39, dot40);
    k5img4.classList.remove("hidden");
    hideImages(k5img1, k5img2, k5img3, k5img5, k5img6, k5img7, k5img8);
    return;
  }
  if (e.target.classList.contains("d37")) {
    dot37.classList.add("dot-active");
    hideClasses(dot33, dot34, dot35, dot36, dot38, dot39, dot40);
    k5img5.classList.remove("hidden");
    hideImages(k5img1, k5img2, k5img3, k5img4, k5img6, k5img7, k5img8);
    return;
  }
  if (e.target.classList.contains("d38")) {
    dot38.classList.add("dot-active");
    hideClasses(dot33, dot34, dot35, dot36, dot37, dot39, dot40);
    k5img6.classList.remove("hidden");
    hideImages(k5img1, k5img2, k5img3, k5img4, k5img5, k5img7, k5img8);
    return;
  }
  if (e.target.classList.contains("d39")) {
    dot39.classList.add("dot-active");
    hideClasses(dot33, dot34, dot35, dot36, dot37, dot38, dot40);
    k5img7.classList.remove("hidden");
    hideImages(k5img1, k5img2, k5img3, k5img4, k5img5, k5img6, k5img8);
    return;
  }
  if (e.target.classList.contains("d40")) {
    dot40.classList.add("dot-active");
    hideClasses(dot33, dot34, dot35, dot36, dot37, dot38, dot39);
    k5img8.classList.remove("hidden");
    hideImages(k5img1, k5img2, k5img3, k5img4, k5img5, k5img6, k5img7);
    return;
  }
});

//Appartement
const k6img1 = document.querySelector(".kamer6-img1");
const k6img2 = document.querySelector(".kamer6-img2");
const k6img3 = document.querySelector(".kamer6-img3");
const k6img4 = document.querySelector(".kamer6-img4");
const k6img5 = document.querySelector(".kamer6-img5");
const k6img6 = document.querySelector(".kamer6-img6");
const k6img7 = document.querySelector(".kamer6-img7");
const k6img8 = document.querySelector(".kamer6-img8");

dotBox6.addEventListener("click", (e) => {
  if (e.target.classList.contains("d41")) {
    dot41.classList.add("dot-active");
    hideClasses(dot42, dot43, dot44, dot45, dot46, dot47, dot48);
    k6img1.classList.remove("hidden");
    hideImages(k6img2, k6img3, k6img4, k6img5, k6img6, k6img7, k6img8);
    return;
  }
  if (e.target.classList.contains("d42")) {
    dot42.classList.add("dot-active");
    hideClasses(dot41, dot43, dot44, dot45, dot46, dot47, dot48);
    k6img2.classList.remove("hidden");
    hideImages(k6img1, k6img3, k6img4, k6img5, k6img6, k6img7, k6img8);
    return;
  }
  if (e.target.classList.contains("d43")) {
    dot43.classList.add("dot-active");
    hideClasses(dot41, dot42, dot44, dot45, dot46, dot47, dot48);
    k6img3.classList.remove("hidden");
    hideImages(k6img1, k6img2, k6img4, k6img5, k6img6, k6img7, k6img8);
    return;
  }
  if (e.target.classList.contains("d44")) {
    dot44.classList.add("dot-active");
    hideClasses(dot41, dot42, dot43, dot45, dot46, dot47, dot48);
    k6img4.classList.remove("hidden");
    hideImages(k6img1, k6img2, k6img3, k6img5, k6img6, k6img7, k6img8);
    return;
  }
  if (e.target.classList.contains("d45")) {
    dot45.classList.add("dot-active");
    hideClasses(dot41, dot42, dot43, dot44, dot46, dot47, dot48);
    k6img5.classList.remove("hidden");
    hideImages(k6img1, k6img2, k6img3, k6img4, k6img6, k6img7, k6img8);
    return;
  }
  if (e.target.classList.contains("d46")) {
    dot46.classList.add("dot-active");
    hideClasses(dot41, dot42, dot43, dot44, dot45, dot47, dot48);
    k6img6.classList.remove("hidden");
    hideImages(k6img1, k6img2, k6img3, k6img4, k6img5, k6img7, k6img8);
    return;
  }
  if (e.target.classList.contains("d47")) {
    dot47.classList.add("dot-active");
    hideClasses(dot41, dot42, dot43, dot44, dot45, dot46, dot48);
    k6img7.classList.remove("hidden");
    hideImages(k6img1, k6img2, k6img3, k6img4, k6img5, k6img6, k6img8);
    return;
  }
  if (e.target.classList.contains("d48")) {
    dot48.classList.add("dot-active");
    hideClasses(dot41, dot42, dot43, dot44, dot45, dot46, dot47);
    k6img8.classList.remove("hidden");
    hideImages(k6img1, k6img2, k6img3, k6img4, k6img5, k6img6, k6img7);
    return;
  }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navlist");
//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
