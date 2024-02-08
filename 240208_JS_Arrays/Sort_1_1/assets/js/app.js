const languages = [
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

const sortierung = (languages) => {
  return languages.sort();
};

const result = sortierung(languages);

console.log(result);
// ['C', 'C#', 'C++', 'CSS', 'Go', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Swift', 'TypeScript']
