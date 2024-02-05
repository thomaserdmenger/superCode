const wrapper = document.querySelector('.wrapper');

text = 'Sam is good at codingschool';

const text1 = text.replace('good', 'bad').replace('codingschool', 'school');
const text2 = text.replace('Sam', 'Susi').replace('codingschool', 'school');
const text3 = text.replace('codingschool', 'tennis');

const para1 = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');

para1.textContent = text1;
para2.textContent = text2;
para3.textContent = text3;

wrapper.append(para1);
wrapper.append(para2);
wrapper.append(para3);
