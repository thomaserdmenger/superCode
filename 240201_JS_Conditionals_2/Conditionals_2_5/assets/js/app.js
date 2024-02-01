const btn = document.querySelector('input[type="button"]');

const check = () => {
  const userInput = document.querySelector('input[type="text"]');
  let userInputVal = userInput.value.toLowerCase();
  const message = document.querySelector('#bundeslandInfoErgebnis');

  switch (userInputVal) {
    case 'baden-württemberg':
      message.textContent =
        'Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt';
      break;
    case 'bayern':
      message.textContent =
        'Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt';
      break;
    case 'berlin':
      message.textContent =
        'Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt';
      break;
    case 'brandenburg':
      message.textContent =
        'Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt';
      break;
    case 'bremen':
      message.textContent =
        'Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt';
      break;
    case 'hamburg':
      message.textContent =
        'Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt';
      break;
    case 'hessen':
      message.textContent =
        'Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt';
      break;
    case 'mecklenburg-vorpommern':
      message.textContent =
        'Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt';
      break;
    case 'niedersachsen':
      message.textContent =
        'Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt';
      break;
    case 'nordrhein-westfalen':
      message.textContent =
        'Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt';
      break;
    case 'rheinland-pfalz':
      message.textContent =
        'Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt';
      break;
    case 'saarland':
      message.textContent =
        'Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt';
      break;
    case 'sachsen':
      message.textContent =
        'Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt';
      break;
    case 'sachsen-anhalt':
      message.textContent =
        'Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt';
      break;
    case 'schleswig-holstein':
      message.textContent =
        'Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt';
      break;
    case 'thüringen':
      message.textContent =
        'Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt';
      break;
    default:
      message.textContent =
        'Ein solches Bundesland gibt es in Deutschland nicht.';
      break;
  }

  document.querySelector('input[type="text"]').value = '';
};

btn.addEventListener('click', check);
