const background = document.querySelector('.wrapper');
const message = document.querySelector('.message');

const redEl = document.querySelector('#red');
const greenEl = document.querySelector('#green');
const blueEl = document.querySelector('#blue');

let redVal = document.querySelector('#red').value;
let greenVal = document.querySelector('#green').value;
let blueVal = document.querySelector('#blue').value;

redEl.addEventListener('change', (e) => {
  redVal = e.target.value;
  background.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
});

greenEl.addEventListener('change', (e) => {
  greenVal = e.target.value;
  background.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
});

blueEl.addEventListener('change', (e) => {
  blueVal = e.target.value;
  background.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
});
