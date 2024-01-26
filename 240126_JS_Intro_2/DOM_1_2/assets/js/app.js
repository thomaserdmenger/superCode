const info = document.getElementById('info');
const container = document.getElementById('container');

const h1 = '<h1>Hello World</h1>';
const h2 = '<h2>How are you?</h2>';

info.innerHTML = h1;
info.innerHTML += h2;

const paraStart = '<p>start of the element</p>';

container.innerHTML = paraStart;

const paraEnd = '<p>end of the element</p>';

document.write(paraEnd);
