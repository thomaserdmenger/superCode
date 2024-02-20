// DOM Elements
const btnEl = document.querySelector('#btn');
const output = document.querySelector('.zeit');

// Event Handler
let startNumber = 100;
const countDown = () => {
  const interval = setInterval(() => {
    startNumber--;
    output.textContent = `${startNumber}%`;

    if (startNumber === 0) {
      clearInterval(interval);
    }
  }, 50);
};

// Event Listener
btnEl.addEventListener('click', countDown);
