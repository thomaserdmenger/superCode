const form = document.querySelector('form');

const divideString = (event) => {
  event.preventDefault();

  const userStringVal = document
    .querySelector('#user-input')
    .value.toLowerCase();
  const userDividerVal = document
    .querySelector('#user-divider')
    .value.toLowerCase();
  const radioBtnOne = document.querySelector(
    'input[type="radio"]:nth-of-type(1)'
  );
  const radioBtnTwo = document.querySelector(
    'input[type="radio"]:nth-of-type(2)'
  );
  const resultPartOne = document.querySelector('.davor');
  const resultPartTwo = document.querySelector('.danach');
  const errorMessage = document.querySelector('.error');
  const index = userStringVal.indexOf(userDividerVal);

  let partOne = '';
  let partTwo = '';

  if (index === -1) {
    errorMessage.textContent = 'Bitte gib einen validen Trenner ein';
    resultPartOne.textContent = '';
    resultPartTwo.textContent = '';
  } else if (radioBtnOne.checked) {
    partOne = userStringVal.slice(0, index);
    partTwo = userStringVal.slice(index, userStringVal.length);
    resultPartOne.textContent = partOne;
    resultPartTwo.textContent = partTwo;
    errorMessage.textContent = '';
  } else if (radioBtnTwo.checked) {
    partOne = userStringVal.slice(0, index + 1);
    partTwo = userStringVal.slice(index + 1, userStringVal.length);
    resultPartOne.textContent = partOne;
    resultPartTwo.textContent = partTwo;
    errorMessage.textContent = '';
  } else {
    errorMessage.textContent = 'Etwas ist schiefgelaufen. Versuche es erneut.';
  }
};

form.addEventListener('submit', divideString);
