// Get DOM Elements
const formEl = document.querySelector('form');
const btnEl = document.querySelector('button');

// Event Handler
const removeColors = (event) => {
  // Prevent Form Submitting
  event.preventDefault();

  // Get Index of Option Element
  const selectedItemIndex = document.querySelector('select').selectedIndex;

  // Get Option Element of specifix Index
  const selectedItemVal =
    document.querySelector('select')[selectedItemIndex].value;

  // Delete the Space inside die selectedItemVal
  const selectedItemValWithoutSpace = selectedItemVal.replace(' ', '');

  document.querySelector(
    'body'
  ).style.backgroundColor = `${selectedItemValWithoutSpace}`;
};

// Event Listener
btnEl.addEventListener('click', removeColors);
