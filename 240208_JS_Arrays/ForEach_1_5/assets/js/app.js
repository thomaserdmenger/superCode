let checkNumber = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

checkNumber.forEach((num) => {
  // If/else Statement
  // if (num % 3 === 0) {
  //   console.log(num + 100);
  // } else {
  //   console.log(num);
  // }

  // Ternary Operator
  console.log(num % 3 === 0 ? num + 100 : num);
});
