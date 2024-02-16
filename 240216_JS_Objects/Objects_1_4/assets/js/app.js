let unsereHaustiere = [
  {
    tiertyp: 'Katze',

    names: ['Gipsy', 'Nala', 'Dinky'],
  },
  {
    tiertyp: 'Hunde',
    names: ['Knöpfchen', 'Pinselchen', 'Droopy'],
  },
];

const nala = unsereHaustiere[0].names[1]; // Nala
const droopy = unsereHaustiere[1].names[2]; // Droopy

unsereHaustiere.forEach((tier) => console.log(tier.names));

unsereHaustiere[0].names[0] = 'Balu';
unsereHaustiere[0].names[1] = 'Snoopy';
delete unsereHaustiere[0].names[2];

console.log(unsereHaustiere[0].names);
