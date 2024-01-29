const btnStyle = document.querySelector('.btn-style');
const btnReset = document.querySelector('.btn-reset');
const heading = document.querySelector('h1');

btnStyle.addEventListener('click', () => {
  heading.classList.add('heading');
});

btnReset.addEventListener('click', () => {
  heading.classList.remove('heading');
});
