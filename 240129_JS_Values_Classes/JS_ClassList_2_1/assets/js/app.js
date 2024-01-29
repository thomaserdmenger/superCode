const wrapper = document.querySelector('.wrapper');
const heading = document.querySelector('h1');

const changeStyle = (e) => {
  const element = e.target;

  if (
    !element.classList.contains('btn-style') &&
    !element.classList.contains('btn-reset')
  ) {
    return;
  }

  if (element.classList.contains('btn-style')) {
    heading.classList.add('heading');
  } else if (element.classList.contains('btn-reset')) {
    heading.classList.remove('heading');
  } else {
    return;
  }
};

wrapper.addEventListener('click', changeStyle);
