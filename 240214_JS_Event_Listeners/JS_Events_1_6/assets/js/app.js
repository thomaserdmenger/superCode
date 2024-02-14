const outputEl = document.querySelector('.output');
const listEl = document.querySelector('select');

// Event Handler
const changeSelect = () => {
  const value = document.querySelector('select').value;
  changeContent(value);
};

// Change Content on Screen
const changeContent = (input) => {
  outputEl.textContent = `Sie haben ausgewählt ${input}`;
};

// Event Listener
listEl.addEventListener('change', changeSelect);
