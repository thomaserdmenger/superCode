const checkDay = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDay();

  return day === 0 || day === 6 ? 'Weekend' : 'Arbeitstag';
};

console.log(checkDay('12.15.2019'));
console.log(checkDay('2.16.2001'));
console.log(checkDay('2.1.2020'));
console.log(checkDay('2.29.2020'));
