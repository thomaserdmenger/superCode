// DOM Elements
const output = document.querySelector('.output');
const clockTop = document.querySelector('.clock-top');
const clockBottom = document.querySelector('.clock-bottom');

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const dayString = currentDate.toLocaleString('default', { weekday: 'long' });
const monthString = currentDate.toLocaleString('default', { month: 'long' });
const monthStringShort = currentDate.toLocaleString('default', {
  month: 'short',
});

const message = `
    <p>${currentDate}</p>
    <p>${month} Monat</p>
    <p>${day} Tag</p>
    <p>${hours} Stunde</p>
    <p>${minutes} Minute</p>
    <p>${dayString}</p>
    <p>${monthString}</p>`;

// output.innerHTML = message;

clockTop.innerHTML = `
    <span>${monthStringShort}</span>
    <span>${hours < 10 ? `0${hours}` : hours}</span>
    <span>:</span>
    <span>${minutes < 10 ? `0${minutes}` : minutes}</span>
    <span>:</span>
    <span>${seconds < 10 ? `0${seconds}` : seconds}</span>
    <span>${hours <= 12 ? 'AM' : 'PM'}</span>
`;

clockBottom.innerHTML = `
    <span>DAY</span>
    <span>HOURS</span>
    <span>MINUTES</span>
    <span>SECONDS</span>
    <span>PERIOD</span>
`;
