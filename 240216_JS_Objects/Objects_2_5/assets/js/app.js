// Import Data
import singers from './data.js';

// Get DOM Elements
const tableContainer = document.querySelector('#table-container');
const form = document.querySelector('form');
const button = document.querySelector('button');

// Focus User Input on Page Load
document.querySelector('#searchInput').focus();

// Render Content to Screen
const renderTable = (input) => {
  // Empty Table
  document.querySelector('#table-container').innerHTML = '';

  // Create Table with Content
  tableContainer.innerHTML += `
  <table>
      <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Period Active</th>
          <th>Genre</th>
      </tr>
      ${input
        .map((singer) => {
          return `
          <tr>
              <td>${singer.name}</td>
              <td>${singer.country}</td>
              <td>${singer.period_active.start} - ${singer.period_active.end}</td>
              <td>${singer.genre}</td>
          </tr>
          `;
        })
        .join(' ')}
  </table>
`;
};

renderTable(singers);

// Filter Data with User Input
const filterData = (e) => {
  e.preventDefault();

  // Get User Input Value
  const userInput = document.querySelector('#searchInput').value.toLowerCase();

  // Error Handling
  if (userInput.length <= 0) {
    document.querySelector('#searchInput').placeholder = 'Enter a valid name';
    button.classList.add('red');
    button.textContent = 'Enter valid data';
    return;
  }

  // Filter Data with User Inpput
  const filteredSingers = singers.filter((singer) =>
    singer.name.toLowerCase().includes(userInput)
  );

  // Pass Filtered Array to Render Function
  renderTable(filteredSingers);

  // Empty User Input Field
  document.querySelector('#searchInput').value = '';

  // Style Default Button
  button.classList.remove('red');
  button.textContent = 'Search';
};

// Event Listener
form.addEventListener('submit', filterData);
