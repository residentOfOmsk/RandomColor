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
