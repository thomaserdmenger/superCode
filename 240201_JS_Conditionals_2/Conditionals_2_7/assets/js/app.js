const btn = document.querySelector('form a[type="button"]');

const showtxt = () => {
  const userInput = document.querySelector('#mylist').value;
  const userInputNum = Number(userInput);
  const message = document.querySelector('.boxMasse');

  switch (userInputNum) {
    case 0:
      message.innerHTML =
        '<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm <br> B: 7 - 12,5 cm <br> H: bis 1 cm';
      break;
    case 1:
      message.innerHTML = '<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm';
      break;
    case 2:
      message.innerHTML = '<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm';
      break;
    case 3:
      message.innerHTML = '<b>DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm';
      break;
    default:
      message.innerHTML = '<b>Extra große Größe</b>';
  }
};

btn.addEventListener('click', showtxt);
