// const root = document.getElementById('root');
// const images = document.querySelectorAll('#root>div');
// const nameText = document.getElementById('nameText');
// const frame = document.querySelectorAll('.frame');
// const photo = document.getElementById('photo');
// const container = document.querySelectorAll('.container');

// console.log(section);
// const containers = Array.from(container);

// containers.forEach(function(elem){
//   elem.addEventListener('mouseover', ()=>{
//     elem.style.position = 'relative';
//     elem.style.width = '24vw';
//     elem.style.height = '27vh';


//   });
// });

// console.log(containers);
// frame.style.overflow = 'hidden';
// frame.style.width = '30vw';
// frame.style.height = '30vh';


// photo.style.width = '20vw';
// photo.style.position = 'absolute';
// photo.style.top = 0;
// photo.style.left = 0;


// const section = Array.from(images);
// console.log(Array.isArray(section));

// const descipption = document.createElement('span');

// section.forEach(function(elem){
//   elem.addEventListener('mouseover', ()=>{
//     nameText.style.opacity = 1;
//     nameText.style.transition = '0.5s';
//     photo.style.width = '21vw';
//     photo.style.transition = '0.5s';
//   });
// });

// section.forEach(function(elem){
//   elem.addEventListener('mouseout', ()=>{
//     nameText.style.opacity = 0;
//     nameText.style.transition = '0.5s';
//     photo.style.width = '20vw';
//     photo.style.transition = '0.5s';
//   });
// });

// section[0].addEventListener('mouseout', ()=>{
// descipption.style.opacity = 0;

// });


const hanbok_legacy_lastpage = document.getElementById('hanbok_legacy_lastpage');
const image = document.querySelectorAll('.lastPage_image');
const imageName = document.querySelectorAll('.imageName');

const lastPage_images = Array.from(image);
const lastPage_imageName = Array.from(imageName);


console.log(lastPage_images);
console.log(lastPage_imageName);



export function mouseoverEvent(elem){
  for(let i = 0; i < lastPage_imageName.length; i++){
      elem[i].addEventListener('mouseover', ()=>{
        lastPage_imageName[i].style.opacity = 1;
        lastPage_imageName[i].style.transition = '0.5s';
      });
  }
}

export function mouseoutEvent(elem){
  for(let i = 0; i < lastPage_imageName.length; i++){
      elem[i].addEventListener('mouseout', ()=>{
        lastPage_imageName[i].style.opacity = 0;
        lastPage_imageName[i].style.transition = '0.5s';
      });
  }
}