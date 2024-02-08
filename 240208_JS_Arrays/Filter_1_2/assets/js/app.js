const heros = [
  'Superman',
  'Batman',
  undefined,
  'Wonder Woman',
  'Spider-Man',
  'Black Widow',
  'Iron Man',
  'Thor',
  'Catwoman',
  null,
];

const myHeros = heros.filter((hero) => hero !== undefined && hero !== null);

console.log(myHeros);
