// let headingElement = document.querySelector("h1");
// headingElement.setAttribute('src', 'https://www.youtube.com/');
// console.log(headingElement);


// let ruNumber = [8];

// let number = function array() {
//     // let b2;
//     function randomNumber() {
//         let b2;
//         for (let i = 0; i < 2; i++) {
//             b2 = Math.floor(Math.random() * 100);
//             if(b2 <= 10) {
//                 let a = Number('9' + (b2 + 10))
//                 ruNumber.push(a);
//             } else {
//                 ruNumber.push(b2 * 10);
//             }
//         }
//         let b3;
//         for (let i = 0; i < 2; i++) {
//             b3 = Math.floor(Math.random() * 100);
//             if(b3 <= 10) {
//                 let a = Number(b3 + '5')
//                 ruNumber.push(a);
//             } else {
//                 ruNumber.push(b3);
//             }
//         }
//     }
//     if (ruNumber.length < 5) {
//         randomNumber();
//         console.log(ruNumber);
//         console.log(...ruNumber);
//     } else {
//         console.log(ruNumber);
//         console.log(...ruNumber);
//     }
// };

// number();
// let newRuNumber = Object(ruNumber);
// let newNewRuNumber = Array(newRuNumber)
// let jsonRuNumber = JSON.stringify(newRuNumber);
// console.log( jsonRuNumber);



function getRandomColor() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let hexR = r.toString(16);
    let hexG = g.toString(16);
    let hexB = b.toString(16);

    if (hexR.length == 1) {
        hexR = "0" + hexR;
    }

    if (hexG.length == 1) {
        hexG = "0" + hexG;
    }

    if (hexB.length == 1) {
        hexB = "0" + hexB;
    }
    

    let hexColor = "#" + hexR + hexG + hexB;
    return hexColor.toUpperCase();
};

let randomColor = getRandomColor();

let bodyElem = document.querySelector('body');
bodyElem.style.backgroundColor = randomColor;

let newP = document.querySelector('p')
newP.textContent = randomColor;
newP.setAttribute('id', 'text');
let scriptElem = document.querySelector('script');

let intervalID = setInterval(rC, 3000);
function rC() {
    let newRandomColor = getRandomColor();
    bodyElem.style.backgroundColor = newRandomColor;
    newP.textContent = newRandomColor;
    let TheNewRandomColor = getRandomColor();
    myButton.style.backgroundColor = TheNewRandomColor;
};

let myButton = document.querySelector('button');
myButton.style.backgroundColor = getRandomColor();
function clearInterva() {
    let a = 0;
    return function() {
        if(a == 0) {
            clearInterval(intervalID);
            myButton.textContent = 'Продолжить';
            a = a + 1;
        } else {
            intervalID = setInterval(rC, 3000);
            myButton.textContent = 'Остановить цикл';
            a = a - 1;
        }
    }
};
myButton.addEventListener('click', clearInterva(), false)