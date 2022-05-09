
const refs = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
}

refs.buttonStart.addEventListener('click', changeColor);
refs.buttonStop.addEventListener('click', stopchangeColor);

let timerColor = null;

function changeColor(){
    timerColor = setInterval(() => {
        const randomHexColor = getRandomHexColor();
        refs.body.style.backgroundColor = randomHexColor;
        
}, 2000);
refs.buttonStart.disabled = true;
refs.buttonStop.disabled = false;
};

function stopchangeColor(){
    clearInterval(timerColor);
    refs.buttonStart.disabled = false;
    refs.buttonStop.disabled = true;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }