// Get DOM Elements
const greyBtn = document.querySelector('#grauTaste');
const whiteBtn = document.querySelector('#weissTaste');
const blueBtn = document.querySelector('#blauTaste');
const yellowBtn = document.querySelector('#gelbTaste');

// Event Handler
const changeColor = (color) => {
  const body = document.querySelector('body');
  body.style.backgroundColor = `${color}`;
};

// Event Listeners
greyBtn.addEventListener('click', () => changeColor('gray'));
whiteBtn.addEventListener('click', () => changeColor('white'));
blueBtn.addEventListener('click', () => changeColor('blue'));
yellowBtn.addEventListener('click', () => changeColor('yellow'));
