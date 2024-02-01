const btn = document.querySelector('input[type="button"]');

const showMessage = () => {
  const message = document.querySelector('.message');
  const userInputVal = document.querySelector("input[type='text']").value;
  const errorMessage = document.querySelector('.error-message');

  if (userInputVal.length === 0) {
    errorMessage.textContent = `Gib bitte eine Nachricht ein!`;
    errorMessage.style.color = 'red';
  } else {
    message.textContent = userInputVal;
    errorMessage.textContent = '';
    document.querySelector("input[type='text']").value = '';
    document.querySelector("input[type='text']").focus();
  }
};

btn.addEventListener('click', showMessage);
