const container = document.getElementById('container');
console.log(container);

let i = 0;
let isStatus = true;



container.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    legacyBgSlide();
    isStatus = true;
    container.style.transform = `translateX(${-i}px)`
    // console.log(i);
  }
  if (e.deltaY < 0) {
    legacyBgSlideOpposite();
    isStatus = false;

    container.style.transform = `translateX(${-i}px)`
    // console.log(i);
  }
});

function legacyBgSlide() {
  requestAnimationFrame(legacyBgSlide);
  if (i < 800 && isStatus === true) {
    i++;
    console.log(i);
    container.style.transform = `translateX(${-i}px)`;
    if (i >= 800) {
      i = 800
    }
  }
};

function legacyBgSlideOpposite() {
  requestAnimationFrame(legacyBgSlideOpposite);
  i--;
  console.log(i);
  container.style.transform = `translateX(${-i}px)`;
  if (i <= 0) {
    i = 0;
  }
};


// legacyBgSlide();
