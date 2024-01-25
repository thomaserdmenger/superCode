const body = document.querySelector('body');

let a = 12;
let b = a * 3;
console.log(b);

console.log('Hello World');

const firstName = 'Anton';
const age = 28;

console.log(firstName);
console.log(age);

const job = 'Trainer:in';
console.log(job);

let married = true;
console.log(married);

const message = `${firstName} ist ${age} Jahre alt, von Beruf ${job} und verheiratet: ${married}.`;

console.log(message);

const para = document.createElement('p');
para.textContent = message;
body.append(para);
