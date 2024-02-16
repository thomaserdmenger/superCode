import singers from './data.js';

const tableContainer = document.querySelector('#table-container');

tableContainer.innerHTML += `
    <table>
        <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Period Active</th>
            <th>Genre</th>
        </tr>
        ${singers
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
