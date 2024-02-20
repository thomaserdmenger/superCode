// DOM Elements
const messageContainer = document.querySelector('.message');
const countEl = document.querySelector('#count');
let startNumber = 10;

const countDown = () => {
  const interval = setInterval(() => {
    startNumber--;
    countEl.textContent = startNumber;

    if (startNumber === 0) {
      clearInterval(interval);
      messageContainer.style.display = 'none';
    }
  }, 1000);
};

countDown();
