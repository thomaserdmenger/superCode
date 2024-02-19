// Get DOM Elements
const output = document.querySelector('#data');

const date1 = new Date('September 2, 2019 09:00:00');
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

const date1Output = document.createElement('p');
const date2Output = document.createElement('p');
const date3Output = document.createElement('p');
const date4Output = document.createElement('p');

date1Output.textContent = `${date1} = new Date('September 2, 2019 09:00:00')`;
date2Output.textContent = `${date2} = new Date(0)`;
date3Output.textContent = `${date3} = new Date(31556908800)`;
date4Output.textContent = `${date4} = new Date(86400000)`;

output.appendChild(date1Output);
output.appendChild(date2Output);
output.appendChild(date3Output);
output.appendChild(date4Output);
