import './styles.scss';
// import modal from "./js/modal"
import Siema from 'siema';
import time from "./js/timer"

// new Siema();
import "./js/template"
// const mySiema = new Siema({ loop: true});
// new Siema({
//   selector: '.siema',
//   duration: 200,
//   easing: 'ease-out',
//   perPage: 1,
//   startIndex: 0,
//   draggable: true,
//   multipleDrag: true,
//   threshold: 20,
//   loop: false,
//   rtl: false,
//   onInit: () => {},
//   onChange: () => {},
// });
const mySiema = new Siema({
    duration: 250,
    loop: true,
});

// listen for keydown event
setInterval(() => mySiema.next(), 10000)
// setInterval(() => color(), 3500)



const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click',() => mySiema.prev());
next.addEventListener('click', () => mySiema.next());


// const divElement =document.querySelector("body")

// function color() {
//     const colors = ["orange", "pink", "green", "red", "blue", "black", "yellow", "navy", "LawnGreen", "DeepPink",
//         "MediumSpringGreen", "OrangeRed", "Fuchsia", "NavajoWhite", "Maroon", "Lime"]
//         const max = colors.length - 1;
//         const min = 0;
//         const index = Math.round(Math.random() * (max - min) + min);
//         const color = colors[index];

//         divElement.style.backgroundColor = `${color}`;
// }


// "image": "https://wallpapercave.com/wp/wp7887535.jpg"