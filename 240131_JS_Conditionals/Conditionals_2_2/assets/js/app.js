const form = document.querySelector('form');
const slider = document.querySelector('#slider');
const body = document.querySelector('body');

const div = document.createElement('div');
const concern = document.createElement('p');
const effect = document.createElement('p');

div.classList.add('messages');

form.append(div);

div.append(concern);
div.append(effect);

const checkAirQuality = () => {
  const slilderValNum = Number(slider.value);
  const label = document.querySelector('label');
  label.textContent = `Luftqualität: ${slilderValNum}`;

  if (slilderValNum <= 50) {
    concern.textContent = `Level of health concern: Good`;
    effect.textContent = `Level of effect concern: Little or no risk`;
    body.style.backgroundColor = 'lightgreen';
  } else if (slilderValNum <= 100) {
    concern.textContent = `Level of health concern: Moderate`;
    effect.textContent = `Level of effect concern: Acceptable quality`;
    body.style.backgroundColor = 'yellow';
  } else if (slilderValNum <= 150) {
    concern.textContent = `Level of health concern: Unhealthy for sensitive groups`;
    effect.textContent = `Level of effect concern: Generable publics not likely affected`;
    body.style.backgroundColor = 'orange';
  }
};

slider.addEventListener('change', checkAirQuality);
