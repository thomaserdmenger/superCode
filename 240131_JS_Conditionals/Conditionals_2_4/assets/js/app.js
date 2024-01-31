const add = (a, b) => {
  const equal = 5;

  if (typeof a === 'number' && typeof b === 'number') {
    if (a !== b) {
      console.log(a + b);
    } else {
      console.log((a + b) * equal);
    }
  } else {
    console.log(`Your input is not a number`);
  }
};

add(6, 4);
add(2, 2);
add('Steffen', 'Lisa');
