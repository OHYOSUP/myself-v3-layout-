import {
  nextPage,
  prevPage
} from "./pageScrollEvent/pageScrollEvent.js";
import {
  fade,
  titleTextStyle
} from "./pilgrimage-titleText-fadein/pilgrimage_pageOneText-anim.js";
import {
  scrollArrElemFadein
} from "./element-scroll-fadein/arrElment-scroll-fadein.js"
import {
  scrollElemFadein
} from "./element-scroll-fadein/element-scroll-fadein.js";
import {
  indiTextFade,
  indiTextStyle
} from "./pilgrimage-indiText-fadein/pilgrimage_indiText-fadein.js";
import {
  scrollFunctionFadein
} from "./element-scroll-fadein/function-scroll-fadein.js";
import {
  pilgrimage_naviEvent
} from "./pilgrimage_naviEvent/hanbok_navigation.js";
import {
  scrollValueEvent
} from "./pilgrimageScrollValueEvent/pilgrimageScrollValueEvent.js";


const main = document.getElementById('main');
const background = document.getElementById('background');
const pilgrimage_main = document.getElementById('pilgrimage_main');
const imageBox = document.getElementById('imageBox');
const imageDescription = document.getElementById('imageDescription');
const actorbox = document.getElementById('actorbox');
// pilgrimage_naviEvent('click');

nextPage(main, 'wheel', pilgrimage_main)


// scrollValueEvent(background)
// scrollArrElemFadein(background,"",8);
// scrollElemFadein(background,"", imageBox,18);
// scrollElemFadein(background,"", imageDescription,30);

fade();
titleTextStyle('15rem', 1000, 'relative', 10, 0, '2vh');

// scrollFunctionFadein(background,30);

// --------------------------------------------------------

// let actorTextBoxYvalue = window.pageYOffset + actorbox.getBoundingClientRect().top;;

// console.log(actorTextBoxYvalue);


const container = document.querySelectorAll('.container');
const containerArr = Array.from(container);
console.log(containerArr[0]);

let i = -1;

function indexCheck() {
  i++;
  if (i >= 7) {
    i = 7;
  }
  // console.log(i);
}

function indexCheckOpposite() {
  i--;
  if (i <= 0) {
    i = 0;
  }
  // console.log(i);
}

function boxVisible() {
  containerArr[i].style.opacity = 1;
  containerArr[i].style.transition = '0.5s';
}

function boxInVisible() {
  containerArr[i].style.opacity = 0;
  containerArr[i].style.transition = '0.5s';
}


let timer;

background.addEventListener('wheel', function (e) {
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      if (e.deltaY > 0) {
        indexCheck();

        // console.log(e.deltaY);
        console.log(i);
        // nextPage(background, 'wheel', container[i + 1]);
        // nextPage(containerTwo, 'wheel', containerThree);
        // nextPage(containerThree, 'wheel', containerFour);
        // nextPage(containerFour, 'wheel', hanbok_newWave_mainPage);
        // nextPage(hanbok_newWave_mainPage, 'wheel', newWave_color);
        // nextPage(newWave_color, 'wheel', legacyLastPage_frameOne);

        boxVisible(containerArr[i]);
      }
    }, 400);
  }
});

background.addEventListener('wheel', function (e) {
  if (timer) {
    timer = setTimeout(function () {
      timer = null;
      if (e.deltaY < 0) {
        
        indexCheckOpposite();
        // console.log(e.deltaY);
        // console.log(i);
        // prevPage(containerOne, 'wheel', root);
        // prevPage(containerTwo, 'wheel', containerOne);
        // prevPage(containerThree, 'wheel', containerTwo);
        // prevPage(containerFour, 'wheel', containerThree);
        // prevPage(legacyLastPage_frameOne, 'wheel', newWave_color);

        // boxInVisible(containerArr[i]);
      }
    }, 500);
  }
})


// indiTextStyle(0, 700, 'relative', 10, 0, '5vh');
