import { nextPage, prevPage } from "./pageScrollEvent/pageScrollEvent.js";
import { fade, titleTextStyle } from "./pilgrimage-titleText-fadein/pilgrimage_pageOneText-anim.js";
import {scrollArrElemFadein} from "./element-scroll-fadein/arrElment-scroll-fadein.js"
import { scrollElemFadein } from "./element-scroll-fadein/element-scroll-fadein.js";
import { indiTextFade, indiTextStyle } from "./pilgrimage-indiText-fadein/pilgrimage_indiText-fadein.js";
import { scrollFunctionFadein } from "./element-scroll-fadein/function-scroll-fadein.js";


const main = document.getElementById('main');
const background = document.getElementById('background');
const pilgrimage_main = document.getElementById('pilgrimage_main');
const imageBox = document.getElementById('imageBox');
const imageDescription = document.getElementById('imageDescription');



nextPage(main, 'wheel', pilgrimage_main)

scrollArrElemFadein(background,"",8);
scrollElemFadein(background,"", imageBox,18);
scrollElemFadein(background,"", imageDescription,30);

fade();
titleTextStyle('15rem', 1000, 'relative', 10, 0, '2vh');

scrollFunctionFadein(background,30);




// indiTextStyle(0, 700, 'relative', 10, 0, '5vh');




