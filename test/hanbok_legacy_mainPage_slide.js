const root = document.getElementById('root');
const box = document.querySelectorAll('#root>div');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');



const boxArr = Array.from(box);
// console.log(boxArr);

let newArr = [boxArr];

let nextImage = boxArr.shift();

console.log(nextImage);




  nextBtn.addEventListener('click', ()=>{
    boxArr.push(nextImage);
    // console.log(nextImage);
    
    console.log(boxArr);
  });

