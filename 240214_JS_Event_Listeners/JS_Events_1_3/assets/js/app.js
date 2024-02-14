const box1 = document.querySelector('.card:nth-of-type(1)');
const box2 = document.querySelector('.card:nth-of-type(2)');
const box3 = document.querySelector('.card:nth-of-type(3)');
const box4 = document.querySelector('.card:nth-of-type(4)');
const box5 = document.querySelector('.card:nth-of-type(5)');

const changeColor = (event) => {
  const box = event.target;
  let boxContent = box.textContent;

  if (boxContent === '1') {
    box.style.backgroundColor = 'lemonchiffon';
  } else if (boxContent === '2') {
    box.style.backgroundColor = 'lightcoral';
  } else if (boxContent === '3') {
    box.style.backgroundColor = 'lightcyan';
  } else if (boxContent === '4') {
    box.style.backgroundColor = 'lightgreen';
  } else {
    box.style.backgroundColor = 'lightpink';
  }
};

box1.addEventListener('click', changeColor);
box2.addEventListener('click', changeColor);
box3.addEventListener('click', changeColor);
box4.addEventListener('click', changeColor);
box5.addEventListener('click', changeColor);
