const output = document.querySelector('#output');

const showCurrentDate = () => {
  const currentDate = new Date();
  const days = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const newDate = `<p>${days < 10 ? `0${days}` : days}/${
    month < 10 ? `0${month}` : month
  }/${year}</p>`;

  return newDate;
};

output.innerHTML = showCurrentDate();
