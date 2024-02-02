const message = 'Susi is going to codingschool';

console.log(message.slice(0, 4)); // Susi
console.log(message.slice(5, 7)); // ist

const part1 = message.slice(5, 17);
const part2 = message.slice(-6);
const result1 = part1.concat(part2);
console.log(result1); // is going to school

console.log(message.slice(23)); // school

const part3 = message.slice(0, 8);
console.log(part3.concat(message.slice(23))); // Susi is school
