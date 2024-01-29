const form = document.querySelector('form');
const message = document.querySelector('.message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const ageOne = Number(document.querySelector('#ageOne').value);
  const ageTwo = Number(document.querySelector('#ageTwo').value);

  let age = 0;

  if (ageOne < 0 || ageTwo < 0) {
    message.textContent = `Both ages have to be > 0`;
    message.classList.add('red');
  } else if (ageOne > 150 || ageTwo > 150) {
    message.textContent = `Both ages have to be < 151`;
    message.classList.add('red');
  } else {
    ageOne >= ageTwo ? (age = ageOne - ageTwo) : (age = ageTwo - ageOne);
    message.textContent += ` ${age}`;
  }
});
