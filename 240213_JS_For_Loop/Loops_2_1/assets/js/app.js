const imgArray = () => {
  const returnArray = [];
  for (let i = 1; i < 101; i++) {
    if (i < 10) {
      returnArray.push(`image/_00${i}.jpg`);
    } else if (i < 100) {
      returnArray.push(`image/_0${i}.jpg`);
    } else {
      returnArray.push(`image/_${i}.jpg`);
    }
  }

  return returnArray;
};

const result = imgArray();
console.table(result);
