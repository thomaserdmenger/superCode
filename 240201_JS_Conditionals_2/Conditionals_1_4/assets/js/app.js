const form = document.querySelector('form');

const checkPasswordLength = (event) => {
  event.preventDefault();

  const message = document.querySelector('.message');
  const userInputVal = document.querySelector('#password').value;
  const minLength = 8;

  userInputVal.length < minLength
    ? (message.innerHTML = '<p class="red">Password is too short</p>')
    : (message.innerHTML = '<p class="green">Welcome to your account</p>');
};

form.addEventListener('submit', checkPasswordLength);
