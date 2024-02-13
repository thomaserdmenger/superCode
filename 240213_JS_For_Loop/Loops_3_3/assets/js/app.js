const form = document.querySelector('form');
const error = document.querySelector('.error');

const messages = {
  message1: `Please enter a number bigger than 0`,
  message2: `Please enter a number between 1 and 1000`,
};

const loopFns = (event) => {
  event.preventDefault();

  const userInput = Number(
    document.querySelector('input[type="number"]').value
  );

  if (userInput === 0 || userInput === '' || userInput >= 1000) {
    errorMessage(userInput);
    return;
  }

  let charO = '';

  for (i = 0; i < userInput; i++) {
    if (userInput % 2 === 0) {
      charO += 'o';
    } else if (userInput % 2 !== 0) {
      charO += i % 2 === 0 ? 'o' : 'O';
    }
  }

  const message = `L${charO}p`;
  console.log(charO);

  renderContent(message);
  errorMessage(message);
};

const renderContent = (message) => {
  error.textContent = '';

  const output = document.querySelector('.output');
  output.innerHTML = `<p>${message}</p>`;
};

const errorMessage = (userInput) => {
  const { message1, message2 } = messages;

  if (userInput === 0 || userInput === '') {
    error.textContent = message1;
    document.querySelector('.output').innerHTML = '';
  } else if (userInput >= 1001) {
    error.textContent = message2;
    document.querySelector('.output').innerHTML = '';
  }
};

form.addEventListener('submit', loopFns);
