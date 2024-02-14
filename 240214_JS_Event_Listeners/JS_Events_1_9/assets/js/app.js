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
  const selectedItem = document.querySelector('select')[selectedItemIndex];

  // Remove specific Element from DOM
  selectedItem.remove();
};

// Event Listener
btnEl.addEventListener('click', removeColors);
