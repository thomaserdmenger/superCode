const x = 20;
const y = 30;
const z = 10;
let a = 15;
let b = 9;
const c = 20;

console.log(x + y);

console.log(x - y);
console.log(y - x);

console.log(x * y);

console.log(x / y);

const resultOne = (x * y) / z;
console.log(`res1: ${resultOne}`);

console.log(a % b);

const resultTwo = (a + b) * c;
console.log(`res2: ${resultTwo}`);

a++;
console.log(a);

b--;
console.log(b);

const resultThree = a - b;
console.log(resultThree);

console.log(resultOne % resultTwo);
