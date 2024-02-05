const wrapper = document.querySelector('.wrapper');

text = 'Sam is going to codingschool';

const text1 = text.toUpperCase();
const text2 = text.toLowerCase();

const text3 = text.slice(0, 3).toUpperCase();
const text4 = text.slice(3, 16);
const text5 = text.slice(22, text.length).toUpperCase();
const text6 = text3.concat(text4).concat(text5);

const text7 = text.slice(0, 3).toLowerCase();
const text8 = text.slice(3, 16).toUpperCase();
const text9 = text.slice(22, text.length);
const text10 = text7.concat(text8).concat(text9);

const text11 = text.slice(0, 16);
const text12 = text.slice(22, text.length);
const text13 = text11.concat(text12);

const textArr = text13.split(' ');
const firstLetterToUpperCaseArr = textArr.map(
  (item) => `${item[0].toUpperCase()}${item.slice(1, item.length)}`
);
const text14 = firstLetterToUpperCaseArr.join(' ');

const para1 = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');
const para4 = document.createElement('p');
const para5 = document.createElement('p');

para1.textContent = text1;
para2.textContent = text2;
para3.textContent = text6;
para4.textContent = text10;
para5.textContent = text14;

wrapper.append(para1);
wrapper.append(para2);
wrapper.append(para3);
wrapper.append(para4);
wrapper.append(para5);
