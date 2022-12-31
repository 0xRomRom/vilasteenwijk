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
});

//Changes