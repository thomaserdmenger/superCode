let album = [
  'holidays.jpg',
  'Restaurant.jpg',
  'desktop',
  'rooms.GIF',
  'DOGATBEACH.jpg',
];

// map() and replace()
// const result = album.map((title) => {
//   if (title.includes('.jpg')) {
//     return title.replace('.jpg', '').toLowerCase();
//   } else if (title.includes('.GIF')) {
//     return title.replace('.GIF', '').toLowerCase();
//   } else {
//     return (title = 'invalid');
//   }
// });

// map() and slice()
const result = album.map((title) => {
  let newTitle = title.toLowerCase();

  if (newTitle.includes('.gif') || newTitle.includes('.jpg')) {
    return newTitle.slice(0, newTitle.length - 4);
  } else {
    return (newTitle = 'invalid');
  }
});

console.log(result);
