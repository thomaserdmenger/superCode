// Import Array of Objects from data.js
import data from './data.js';

// Get DOM Elements
const container = document.querySelector('div');

// Create Content Elements for Div
const heading = document.createElement('h2');
const button = document.createElement('button');

// Create Content for Content Elements
heading.textContent = 'Zufälliges Bild mit JavaScript anzeigen';
button.textContent = 'Click me';

// Style Elements
container.style.backgroundColor = '#eeb08d';
container.style.color = '#b15e52';
container.style.width = '50%';
button.style.all = 'unset';
button.style.color = 'white';
button.style.backgroundColor = '#e88d83';
button.style.border = '1px solid #b15e52';
button.style.borderRadius = '5px';

// Append Content to Div
container.append(heading);
container.append(button);

// Event Handler
const randomImage = () => {
  // Zuerst alle vorhandenen Bilder entfernen
  container.querySelectorAll('img').forEach((img) => img.remove());

  const randomNum = Math.floor(Math.random() * 26);
  const div = document.createElement('div');
  const image = document.createElement('img');
  image.setAttribute('src', data[randomNum].download_url);
  container.append(div);
  div.appendChild(image);
};

// Event Listener
button.addEventListener('click', randomImage);
