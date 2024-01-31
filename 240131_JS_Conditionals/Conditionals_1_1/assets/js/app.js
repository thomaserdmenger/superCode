const form = document.querySelector('form');
const message = document.querySelector('.message');

const adult = (event) => {
  event.preventDefault();
  const userInput = document.querySelector('#age').value;
  const userInputNum = Number(userInput);
  const age = 18;

  if (userInputNum < age) {
    console.log(false);
    message.textContent = `Under ${age}`;
  } else {
    console.log(true);
    message.textContent = `${age} or older`;
  }
};

form.addEventListener('submit', adult);
