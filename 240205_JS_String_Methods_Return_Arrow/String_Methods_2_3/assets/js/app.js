const form = document.querySelector('form');

const colorString = (event) => {
  event.preventDefault();

  // Get User Input
  const userInput = document.querySelector('input[type="text"]').value;

  // Get Text Content
  const screenText = document.querySelector('article').innerText;

  // Replace UserInput in TextContent
  document.querySelector('article').innerHTML = screenText.replaceAll(
    userInput,
    `<span class="highlight">${userInput}</span>`
  );
};

form.addEventListener('submit', colorString);
