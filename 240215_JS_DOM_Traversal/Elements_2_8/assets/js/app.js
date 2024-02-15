// Get DOM Elements
const form = document.querySelector('form');

// Focus User Input
document.querySelector('#userinput').focus();

// Event Handler
const addListItem = (e) => {
  e.preventDefault();

  // Get DOM Elements and Values
  const list = document.querySelector('ul');
  const userInputVal = document.querySelector('#userinput').value;
  const button = document.querySelector('input[type="submit"]');

  // Create DOM Elements
  const newListItemText = document.createElement('li');
  newListItemText.textContent = userInputVal;

  // Error Handling
  if (userInputVal.length <= 0) {
    button.style.color = 'white';
    button.style.backgroundColor = 'red';
    button.value = 'Add a article';
    return;
  }

  list.appendChild(newListItemText);

  document.querySelector('#userinput').value = '';
  button.style.color = '';
  button.style.backgroundColor = '';
  button.value = 'Speichern';
};

// Event Listener
form.addEventListener('submit', addListItem);
