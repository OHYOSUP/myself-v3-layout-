import { nextPage, prevPage  } from "../javascript/pageScrollEvent/pageScrollEvent.js";
import {scrollElemFadein} from "./Hanbok/hanbok_element_scroll_fadein.js"
import { elementFade } from "./Hanbok/elementFade.js";
import { colorChange } from "./Hanbok/newWave/hanbokNewwave-imageChange.js";
import {legacySlide} from "./Hanbok/newWave/hanbokLegacyParallSlide.js"
import { mouseoverEvent, mouseoutEvent } from "./Hanbok/legacy/hanbok_legacy_mouseoverEvent.js";


const root = document.getElementById('root');
const containerOne = document.getElementById('containerOne');
const containerTwo = document.getElementById('containerTwo');
const containerThree = document.getElementById('containerThree');
const containerFour = document.getElementById('containerFour');
const description_one = document.getElementById('description_one');
const hanbok_tradition = document.getElementById('hanbok_tradition');
const newWave_color = document.getElementById('newWave_color');
const colorContainer = document.querySelectorAll('.colorContainer');
const colorImage = document.getElementById('colorImage');
const hanbok_legacy_slide = document.getElementById('hanbok_legacy_slide');
const hanbok_legacy_lastpage = document.getElementById('hanbok_legacy_lastpage');
const image = document.querySelectorAll('.lastPage_image');
const imageName = document.querySelectorAll('.imageName');

const lastPage_images = Array.from(image);
const lastPage_imageName = Array.from(imageName);



mouseoverEvent(lastPage_images);
mouseoutEvent(lastPage_images);



nextPage(root,'wheel', description_one);
// scrollElemFadein(root,"",containerOne, 3);
// scrollElemFadein(hanbok_tradition,"",description_one, 5);
// scrollElemFadein(hanbok_tradition,"",containerTwo, 13);



elementFade(hanbok_tradition);



const container = document.querySelectorAll('.container');
const containerArr = Array.from(container);
// const objectContainerArr = Object.assign({}, containerArr);
// console.log(objectContainerArr);

// console.log(containerArr);



let i = -1;

function indexCheck(){

  i++;

  if(i >= 3){
    i = 3;  
  }
  // console.log(i);
}

function indexCheckOpposite(){

  i--;
  if(i <= 0){
    i = 0;  
  }
  // console.log(i);
}

function boxVisible(){
containerArr[i].style.opacity = 1;
containerArr[i].style.transition = '0.5s';
}
function boxInVisible(){
  containerArr[i].style.opacity = 0;
  containerArr[i].style.transition = '0.5s';
  }


// function nextElem(elem){
//   elem[i].scrollIntoView({top : 300, left: 0, behavior: "smooth"});
// }

// nextElem(objectContainerArr[i]);

let timer;

hanbok_tradition.addEventListener('wheel', function (e) {
  if (!timer) {
    timer = setTimeout(function() {
      timer = null;
      indexCheck();
      if(e.deltaY > 0){
        // console.log(e.deltaY);
        console.log(i);
        nextPage(containerOne, 'wheel', containerTwo);
        nextPage(containerTwo, 'wheel', containerThree);
        nextPage(containerThree, 'wheel', containerFour);
        boxVisible(containerArr[i]);
      }
    }, 300);
  }if (timer) {
    timer = setTimeout(function() {
      timer = null;
      indexCheckOpposite();
      if(e.deltaY < 0){
        // console.log(e.deltaY);
        console.log(i);
        prevPage(containerOne, 'wheel', root);
        prevPage(containerTwo, 'wheel', containerOne);
        prevPage(containerThree, 'wheel', containerTwo);
        prevPage(containerFour, 'wheel', containerThree);
        boxInVisible(containerArr[i]);
      }
    }, 300);
  }
});

colorChange('mouseover');
legacySlide(hanbok_legacy_slide, 'wheel');




// hanbok_tradition.addEventListener('wheel', ()=>{
//   if(index === 1){
//   nextPage(root, 'wheel', containerOne);
//   scrollElemFadein(root,"",containerOne, 3);
//   }
// });
// hanbok_tradition.addEventListener('wheel', ()=>{
//   if(index === 3){
//   scrollElemFadein(hanbok_tradition,"",containerTwo, 3);
//   }
// });
// hanbok_tradition.addEventListener('wheel', ()=>{
//   if(index === 3){
//   scrollElemFadein(hanbok_tradition,"",containerTwo, 3);
//   }
// });

// scrollIntoView로 스크롤 이벤트가 발생했을 때 다음으로 내려가는 위치를 조정한 다음
// y값이 이제 필요한가?
// 인덱스가 대신하니까 y값은 필요없지않나
// 그럼 스크롤 내려간늠나큼만 조정해주고
// 그거를 인덱스로 매겨서
// 
// 1. 한번 휠을 굴렸을 때 얼만큼 내려갈 것인가를 설정해준다
// 2. 쓰로틀링으로 인덱스를 매겨준도
// 3. 인덱스 넘버에 따라 해당 위치에 있는 엘리먼트가 fade in 되도록 해준다
// 결론: y값은 필요없다