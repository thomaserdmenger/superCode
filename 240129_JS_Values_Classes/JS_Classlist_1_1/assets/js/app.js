const wrapper = document.querySelector('.wrapper');

const changeColor = (event) => {
  const element = event.target;

  if (element.id === 'headline') {
    element.classList.toggle('headline');
  } else if (element.id === 'list') {
    element.classList.toggle('list');
  } else {
    return;
  }
};

wrapper.addEventListener('click', changeColor);
