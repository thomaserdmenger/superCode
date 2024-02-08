let album = [
  'holidays.jpg',
  'Restaurant.jpg',
  'desktop',
  'rooms.GIF',
  'DOGATBEACH.jpg',
];

const result = album.map((title) => {
  if (title.includes('.jpg')) {
    return title.replace('.jpg', '').toLowerCase();
  } else if (title.includes('.GIF')) {
    return title.replace('.GIF', '').toLowerCase();
  } else {
    return (title = 'invalid');
  }
});

console.log(result);
