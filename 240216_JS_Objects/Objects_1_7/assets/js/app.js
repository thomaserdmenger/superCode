import myMusic from './data.js';

const outoutOne = document.querySelector('.output-one');
const outoutTwo = document.querySelector('.output-two');

myMusic.forEach((item) => {
  const { artist, title, medium } = item;

  outoutOne.innerHTML += `
  <div class="one">
    <p>${artist}</p>
    <p>${title}</p>
    <p>${medium}</p>
  </div>
  `;
});

myMusic.forEach((item) => {
  const { artist, title, medium } = item;

  if (item.release_year < 1975) {
    outoutTwo.innerHTML += `
          <div class="one">
          <p>${artist}</p>
          <p>${title}</p>
          <p>${medium}</p>
          </div>
          `;
  }
});
