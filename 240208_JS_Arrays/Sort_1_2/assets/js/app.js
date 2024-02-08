let languages = [
  'JavaScript',
  'Python',
  'Java',
  'Ruby',
  'PHP',
  'C++',
  'CSS',
  'C#',
  'Go',
  'C',
  'TypeScript',
  'Swift',
];

const sortierung2 = (languages) => {
  return languages.sort().reverse();
};

const result = sortierung2(languages);
console.log(result);
