const imageLinks = [
  //Landing page image cycle
  "./img/cover/img1lux.jpg",
  "./img/cover/img2lux.jpg",
  "./img/cover/img3lux.jpg",
  "./img/cover/img4lux.jpg",
  "./img/cover/img5lux.jpg",
];

const landingImg = document.querySelector(".cycle-image");
const ctaDown = document.querySelector(".down-cta-box");

window.onload = () => {
  cycleImages();
  setTimeout(() =>{
  ctaDown.style.display = 'flex';
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



// Animate scroll cta

const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');


const cycleArrows = () => {
  setInterval(() => { 
    setTimeout(() => {
      span3.style.color = 'rgb(85, 82, 82)';
      span1.style.color = 'white';
    }, 0);
    setTimeout(() => {
      span1.style.color = 'rgb(85, 82, 82)';
      span2.style.color = 'white';
    }, 1500);
    setTimeout(() => {
      span2.style.color = 'rgb(85, 82, 82)';
      span3.style.color = 'white';
    }, 3000);


  }, 4500);
};

cycleArrows();





// Content fade in
window.addEventListener("scroll", () => {
  const content = document.querySelector(".app");
  let contentTop = content.getBoundingClientRect().top;
  console.log(contentTop);

  //HeroText
  const stijlHero = document.querySelector('.stijl-hero');
  if (contentTop < -140) {
    stijlHero.classList.add("active");
  }
  if (contentTop > -140) {
    stijlHero.classList.remove("active");
  } 

  //ReviewText
  const reviewHero = document.querySelector('.review-hero');
  if (contentTop < -1110) {
    reviewHero.classList.add("active");
  }
  if (contentTop > -1200) {
    reviewHero.classList.remove("active");
  } 
});

// // Review fade in
// window.addEventListener("scroll", () => {
//   //HeroText
//   const heroText = document.querySelector('.review-hero');
//   const content = document.querySelector(".reviews");
//   let contentTop = content.getBoundingClientRect().top;
//   console.log(contentTop);
//   let contentBottom = content.getBoundingClientRect().bottom;
//   let screenPosition = window.innerHeight;
//   // console.log(contentBottom)
//   if (contentTop < 760) {
//     content.classList.add("active");
//     heroText.classList.add("active");
//   }
//   if (contentTop > 800) {
//     content.classList.add("active");
//     heroText.classList.add("active");
//   }
  
// });