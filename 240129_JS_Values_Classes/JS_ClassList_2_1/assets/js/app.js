const btnStyle = document.querySelector('.btn-style');
const btnReset = document.querySelector('.btn-reset');
const heading = document.querySelector('h1');
const wrapper = document.querySelector('.wrapper');

const changeStyle = (e) => {
  const element = e.target;

  if (element.classList.contains('btn-style')) {
    heading.classList.add('heading');
  } else if (element.classList.contains('btn-reset')) {
    heading.classList.remove('heading');
  } else {
    return;
  }
};

wrapper.addEventListener('click', changeStyle);
