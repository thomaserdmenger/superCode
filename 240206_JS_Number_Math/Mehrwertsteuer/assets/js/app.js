const mwstOutput = document.querySelector('.mwst-output');
const bruttoNettoOutput = document.querySelector('.brutto-netto-output');
const form = document.querySelector('form');

const calculate = (event) => {
  event.preventDefault();

  // Get Value Verfahren Aufschlagen und Abschlagen
  const verfahrenVal = document.querySelector(
    'input[name="verfahren"]:checked'
  ).value;

  // Get Mehrwertsteuersatz
  const steuersatz = document.querySelector(
    'input[name="mehrwertsteuer"]:checked'
  ).value;

  // Get User Input
  const userInputNum = Number(
    document.querySelector('input[type="number"]').value
  );

  // Calculations
  const fix19 = 1.19;
  const fix7 = 1.07;

  if (verfahrenVal === 'aufschlagen' && steuersatz === '19') {
    mwstOutput.textContent = userInputNum * fix19 - userInputNum;
    bruttoNettoOutput.textContent = userInputNum * fix19;
  } else if (verfahrenVal === 'aufschlagen' && steuersatz === '7') {
    mwstOutput.textContent = userInputNum * fix7 - userInputNum;
    bruttoNettoOutput.textContent = userInputNum * fix7;
  } else if (verfahrenVal === 'abziehen' && steuersatz === '19') {
    mwstOutput.textContent = userInputNum - userInputNum / fix19;
    bruttoNettoOutput.textContent = userInputNum / fix19;
  } else {
    mwstOutput.textContent = userInputNum - userInputNum / fix7;
    bruttoNettoOutput.textContent = userInputNum / fix7;
  }
};

form.addEventListener('submit', calculate);

// ! Fehlermeldung, wenn keine Eingabe
