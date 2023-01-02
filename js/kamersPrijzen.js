const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');

window.onload = () => {
    cycleImages();
    const pageHero = document.querySelector('.page-hero');
    pageHero.classList.add('active');
    setTimeout(() => {
        box1.classList.add("dropIn");
        box1.style.visibility = 'visible';
    }, 1000);
    setTimeout(() => {
        box2.classList.add("dropIn");
        box2.style.visibility = 'visible';
    }, 1500);
    setTimeout(() => {
        box3.classList.add("dropIn");
        box3.style.visibility = 'visible';
    }, 2000);
    setTimeout(() => {
        box4.classList.add("dropIn");
        box4.style.visibility = 'visible';
    }, 2500);
    setTimeout(() => {
        box1.classList.remove("dropIn");
        box2.classList.remove("dropIn");
        box3.classList.remove("dropIn");
        box4.classList.remove("dropIn");
    }, 3500);
}

//Animate doors

const imageBox = document.querySelectorAll('.home-img-box');
const doorImage1 = document.querySelector('.img1');
const doorImage2 = document.querySelector('.img2');
const doorImage3 = document.querySelector('.img3');
const doorImage4 = document.querySelector('.img4');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const kamerOuter1 = document.querySelector('.kamer-inner-box');
const ctaButton = document.querySelector('.cta-box');

imageBox.forEach((box) => {
    box.addEventListener('click', (e) => {
        if(e.target.classList[1] === 'img1') {
        doorImage1.src = './img/animated-door.gif';
        box.disabled = true;
        box2.classList.add('fadeOut');
        box3.classList.add('fadeOut');
        box4.classList.add('fadeOut');
        setTimeout(() => {
            kamerModal.classList.add('fadeIn');
        }, 1000);
        setTimeout(() => {
            doorImage1.src = './img/closed-door.jpg';
            box.disabled = false;
        }, 2000)
        setTimeout(() => {
          kamerOuter1.classList.add('opacityIn');
          ctaButton.classList.add('opacityIn');
        }, 2300)
        }

        if(e.target.classList[1] === 'img2') {
        doorImage2.src = './img/animated-door.gif';
        box.disabled = true;
        box1.classList.add('fadeOut');
        box3.classList.add('fadeOut');
        box4.classList.add('fadeOut');
        setTimeout(() => {
            kamerModal.classList.add('fadeIn');
        }, 1000);
        setTimeout(() => {
            doorImage2.src = './img/closed-door.jpg';
            box.disabled = false;
        }, 2000)
        }

        if(e.target.classList[1] === 'img3') {
        doorImage3.src = './img/animated-door.gif';
        box.disabled = true;
        box1.classList.add('fadeOut');
        box2.classList.add('fadeOut');
        box4.classList.add('fadeOut');
        setTimeout(() => {
            kamerModal.classList.add('fadeIn');
        }, 1000);
        setTimeout(() => {
            doorImage3.src = './img/closed-door.jpg';
            box.disabled = false;
        }, 2000)
       
        }
        if(e.target.classList[1] === 'img4') {
            doorImage4.src = './img/animated-door.gif';
            box.disabled = true;
            box1.classList.add('fadeOut');
            box2.classList.add('fadeOut');
            box3.classList.add('fadeOut');
            setTimeout(() => {
                kamerModal.classList.add('fadeIn');
            }, 1000);
            setTimeout(() => {
                doorImage4.src = './img/closed-door.jpg';
                box.disabled = false;
            }, 2000)
        }

    });
})


const kamerModal = document.querySelector('.kamer-modal');
const closeKamerModal = document.querySelector('.close-kamer-btn');

closeKamerModal.addEventListener('click', () => {
kamerOuter1.classList.remove('opacityIn');
ctaButton.classList.remove('opacityIn');
kamerModal.classList.add('transitionOut');
kamerModal.classList.remove('fadeIn');
setTimeout(() => {
    kamerModal.classList.remove('transitionOut');
},1000)
box1.classList.remove('fadeOut');
box2.classList.remove('fadeOut');
box3.classList.remove('fadeOut');
box4.classList.remove('fadeOut');
});


//Rotate images room 1

const room1Image = document.querySelector(".kamer1-img");

const imageLinks1 = [
    "./img/Room1/Pic1.jpg",
    "./img/Room1/Pic2.jpeg",
    "./img/Room1/Pic3.jpeg",
    "./img/Room1/Pic4.jpeg",
    "./img/Room1/Pic2.jpeg",
  ];

const transitionImage = (imageSrc) => {
    room1Image.classList.remove("smooth-transition");
    room1Image.classList.add("smooth-transition");
    setTimeout(() => {
      room1Image.src = imageSrc;
    }, 1000);
    setTimeout(() => {
      room1Image.classList.remove("smooth-transition");
    }, 2500);
  };

const cycleImages = () => {
    const cycle = () => {
      setTimeout(() => {
        transitionImage(imageLinks1[0]);
      }, 0);
      setTimeout(() => {
        transitionImage(imageLinks1[1]);
      }, 7000);
      setTimeout(() => {
        transitionImage(imageLinks1[2]);
      }, 15000);
      setTimeout(() => {
        transitionImage(imageLinks1[3]);
      }, 23000);
      setTimeout(() => {
        transitionImage(imageLinks1[4]);
      }, 31000);
    };
    cycle();
  
    setInterval(() => {
      cycle();
    }, 41000);
  };
  cycleImages();