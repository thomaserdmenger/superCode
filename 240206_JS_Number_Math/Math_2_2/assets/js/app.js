const output = document.querySelector('h2');
const form = document.querySelector('form');

const checkNumber = (event) => {
  event.preventDefault();

  const inputNum = Number(document.querySelector('input[type="number"]').value);
  const randomNum = Math.ceil(Math.random() * 10);

  if (inputNum < 1 || inputNum > 10 || inputNum.length === 0) {
    output.textContent = 'Please enter a valid number';
    output.classList.add('red');
  } else {
    if (randomNum === inputNum) {
      output.textContent = `You have won. Your number ${inputNum} is the same as the random number ${randomNum}`;
      output.classList.remove('red');
      output.classList.add('green');
    } else {
      output.textContent = `You have lost. Your number ${inputNum} is't the same as the random number ${randomNum}`;
      output.classList.remove('green');
      output.classList.add('red');
    }
  }
};

form.addEventListener('submit', checkNumber);
