const background = document.querySelector('.wrapper');
const message = document.querySelector('.message');

const redEl = document.querySelector('#red');
const greenEl = document.querySelector('#green');
const blueEl = document.querySelector('#blue');

const changeBackground = () => {
  const redVal = document.querySelector('#red').value;
  const greenVal = document.querySelector('#green').value;
  const blueVal = document.querySelector('#blue').value;

  background.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
  message.textContent = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
};

redEl.addEventListener('change', changeBackground);
greenEl.addEventListener('change', changeBackground);
blueEl.addEventListener('change', changeBackground);
