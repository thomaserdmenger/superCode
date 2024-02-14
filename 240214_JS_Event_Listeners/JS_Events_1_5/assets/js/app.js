// Get DOM Elements
const btnEl = document.querySelector('button');

// Declare Initial Count
let num = 0;

// Event Handler: Count by 1
const count = () => {
  num++;
  renderContent(num);
};

// Render Content
const renderContent = (number) => {
  btnEl.textContent = `Click me: ${number}`;
};

// Event Listener
btnEl.addEventListener('click', count);
