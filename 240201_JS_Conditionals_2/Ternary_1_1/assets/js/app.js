const form = document.querySelector('form');
const message = document.querySelector('.message');

const adult = (event) => {
  event.preventDefault();
  const userInput = document.querySelector('#age').value;
  const userInputNum = Number(userInput);
  const age = 18;

  userInputNum < age
    ? (message.textContent = `Under ${age}`)
    : (message.textContent = `${age} or older`);

  document.querySelector('#age').value = '';
};

form.addEventListener('submit', adult);
