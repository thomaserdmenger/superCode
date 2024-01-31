const button = document.querySelector('#button');
const message = document.querySelector('.message');

const greaterThan = () => {
  const userInput = document.querySelector('#input').value;
  const userInputNum = Number(userInput);
  const age = 18;

  if (userInputNum >= age) {
    message.textContent = `Du kannst Shisha rauchen`;
  } else {
    message.textContent = `Du darfst noch nicht Shisha rauchen`;
  }
};

button.addEventListener('click', greaterThan);
