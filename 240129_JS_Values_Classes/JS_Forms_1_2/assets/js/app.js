const form = document.querySelector('form');
const message = document.querySelector('.message');
const button = document.querySelector('button');

const date = new Date();
const currentYear = date.getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userInput = document.querySelector('#year').value;
  const userInputNumber = Number(userInput);

  if (
    typeof userInputNumber === 'number' &&
    userInputNumber > 999 &&
    userInputNumber <= currentYear
  ) {
    const age = currentYear - userInput;
    message.textContent = age;
  } else {
    message.textContent = `Please enter a valid Year less or equal to ${currentYear}`;
    message.style.fontSize = '1.5rem';
    message.style.color = 'red';
  }
});

button.addEventListener('click', () => {
  window.location.reload();
});
