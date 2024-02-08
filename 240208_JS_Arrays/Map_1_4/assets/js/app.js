let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const calculate = (arr) => {
  return arr.map((num) => Math.round((num - 32) / 1.8));
};

const celsius = calculate(fahrenheit);
console.log(celsius);
