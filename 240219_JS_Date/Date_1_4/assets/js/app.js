const daysOfMonth = (month, year) => {
  const newDate = new Date(year, month, 0).getDate();
  return newDate;
};

const days1 = daysOfMonth(1, 2016);
const days2 = daysOfMonth(2, 2016);
const days3 = daysOfMonth(2, 2017);
const days4 = daysOfMonth(12, 2017);

console.log(days1);
console.log(days2);
console.log(days3);
console.log(days4);
