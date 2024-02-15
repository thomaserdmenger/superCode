// Get DOM Elements
const buttonEl = document.querySelector('button');

// Event Handler
const changeColor = () => {
  const buttons = document.querySelectorAll('.example');

  //   Solution with forEach()
  //   buttons.forEach((button) => button.classList.toggle('newColors'));

  // Solution with map(): We have to convert the NodeList into an Array
  const buttonsArr = Array.from(buttons);
  buttonsArr.map((button) => button.classList.toggle('newColors'));
};

// Event Listner
buttonEl.addEventListener('click', changeColor);
