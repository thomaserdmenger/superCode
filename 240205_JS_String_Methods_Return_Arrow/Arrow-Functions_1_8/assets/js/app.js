const calculateAge = (yearBorn) => {
  const date = new Date();
  const yearToday = date.getFullYear();

  return yearToday - yearBorn;
};

const myAge = calculateAge(1981);
console.log(myAge);

const compareAge = (myAge, userAge) => {
  return myAge > userAge ? myAge - userAge : userAge - myAge;
};

const alterDiff1 = compareAge(myAge, 55);
const alterDiff2 = compareAge(myAge, 24);

console.log(alterDiff1);
console.log(alterDiff2);
