const wrapper = document.querySelector('.wrapper');

const h1 = document.createElement('h1');
h1.textContent = 'Hello World';

const para = document.createElement('p');
para.textContent = 'Have a nice day!';

wrapper.append(h1);
wrapper.append(para);

const myText = 'Hello again';

wrapper.append(myText);

const firstName = 'Michael';
const lastName = 'Jordan';
const message = 'Hi, ich bin SuperCoder:in';

const slogan = document.createElement('p');
slogan.textContent = message;

wrapper.append(slogan);
