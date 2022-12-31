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
const span4 = document.querySelector('.span4');
const span5 = document.querySelector('.span5');
const span6 = document.querySelector('.span6');


const cycleArrows = () => {
  setInterval(() => { 
    setTimeout(() => {
      span3.style.color = 'rgb(85, 82, 82)';
      span6.style.color = 'rgb(85, 82, 82)';
      span1.style.color = 'white';
      span4.style.color = 'white';
    }, 0);
    setTimeout(() => {
      span1.style.color = 'rgb(85, 82, 82)';
      span4.style.color = 'rgb(85, 82, 82)';
      span2.style.color = 'white';
      span5.style.color = 'white';
    }, 1500);
    setTimeout(() => {
      span2.style.color = 'rgb(85, 82, 82)';
      span5.style.color = 'rgb(85, 82, 82)';
      span3.style.color = 'white';
      span6.style.color = 'white';
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
  const leftBox = document.querySelector('.leftbox');
  const rightBox = document.querySelector('.rightbox');
  if (contentTop < -140) {
    stijlHero.classList.add("active");
  }
  if (contentTop > -180) {
    stijlHero.classList.remove("active");
  } 
  if (contentTop < -380) {
    leftBox.classList.add("active");
  } 
  if (contentTop < -450) {
    rightBox.classList.add("active");
  } 
  if (contentTop > -520) {
    leftBox.classList.remove("active");
  } 
  if (contentTop > -590) {
    rightBox.classList.remove("active");
  } 

  //ReviewText
  const reviewHero = document.querySelector('.review-hero');
  const ctaBox2 = document.querySelector('.down-cta-box2');
  const modal1 = document.querySelector('.modal1');
  const modal2 = document.querySelector('.modal2');
  const modal3 = document.querySelector('.modal3');
  if (contentTop < -1110) {
    reviewHero.classList.add("active");
  }
  if (contentTop > -1200) {
    reviewHero.classList.remove("active");
  } 
  if (contentTop > -1450) {
    ctaBox2.classList.add("active");
  } 
  if (contentTop < -1550) {
    ctaBox2.classList.remove("active");
  } 
  if (contentTop < -1350) {
    modal1.classList.add("active");
  } 
  if (contentTop > -1400) {
    modal1.classList.remove("active");
  } 
  if (contentTop < -1300) {
    modal2.classList.add("active");
  } 
  if (contentTop > -1450) {
    modal2.classList.remove("active");
  } 
  if (contentTop < -1250) {
    modal3.classList.add("active");
  } 
  if (contentTop > -1500) {
    modal3.classList.remove("active");
  } 

});


// Show visited on hover

const reviewModal1 = document.querySelector(".review-outer-modal");
const visited1 = document.querySelector('.visited1')

reviewModal1.addEventListener("mouseover", () => {
    visited1.classList.add("fadeIn");
    visited1.classList.remove("fadeOut");
    visited1.classList.remove("hidden");
});

reviewModal1.addEventListener("mouseleave", () => {
    visited1.classList.add("fadeOut");
    visited1.classList.add("hidden");
    visited1.classList.remove("fadeIn");
});

const reviewModal2 = document.querySelector(".modal2");
const visited2 = document.querySelector('.visited2')

reviewModal2.addEventListener("mouseover", () => {
    visited2.classList.add("fadeIn");
    visited2.classList.remove("fadeOut");
    visited2.classList.remove("hidden");
});

reviewModal2.addEventListener("mouseleave", () => {
    visited2.classList.add("fadeOut");
    visited2.classList.add("hidden");
    visited2.classList.remove("fadeIn");
});

const reviewModal3 = document.querySelector(".modal3");
const visited3 = document.querySelector('.visited3')

reviewModal3.addEventListener("mouseover", () => {
    visited3.classList.add("fadeIn");
    visited3.classList.remove("fadeOut");
    visited3.classList.remove("hidden");
});

reviewModal3.addEventListener("mouseleave", () => {
    visited3.classList.add("fadeOut");
    visited3.classList.add("hidden");
    visited3.classList.remove("fadeIn");
});