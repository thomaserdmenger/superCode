const sayHello = () => {
  console.log('Start: Warten für 3 Sekunden.');
  const timeOut = setTimeout(
    () => console.log('Erledigt: Du hast 3 Sekunden verschwendet.'),
    3000
  );
};

let startNumber = 11;

const countDown = () => {
  sayHello();
  const interval = setInterval(() => {
    startNumber--;
    console.log(startNumber);

    if (startNumber <= 0) {
      clearInterval(interval);
    }
  }, 1000);
};

countDown();
