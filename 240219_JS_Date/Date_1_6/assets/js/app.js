const getTime = (date) => {
  return date.getHours() < 12 ? 'AM' : 'PM';
};

const date1 = new Date(1999, 10, 5, 15);
const date2 = new Date();
const date3 = new Date(2019, 12, 3, 12);
const date4 = new Date(2000, 1, 1, 11);

console.log(getTime(date1));
console.log(getTime(date2));
console.log(getTime(date3));
console.log(getTime(date4));
