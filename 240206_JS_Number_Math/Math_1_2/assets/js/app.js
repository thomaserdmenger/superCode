let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

const [a, b, c, d] = array;

const roundNumbers = (num) => {
  return Math.round(num);
};

console.log(roundNumbers(a));
console.log(roundNumbers(b));
console.log(roundNumbers(c));
console.log(roundNumbers(d));
