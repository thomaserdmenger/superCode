const gallery = document.querySelector('#gallery');

gallery.innerHTML = '<figure class="figOne"></figure>';
gallery.innerHTML += '<figure class="figTwo"></figure>';
gallery.innerHTML += '<figure class="figThree"></figure>';

const figOne = document.querySelector('.figOne');
const figTwo = document.querySelector('.figTwo');
const figThree = document.querySelector('.figThree');

figOne.innerHTML = "<img src='./assets/images/cat.jpg' alt='Funny Cat' />";
figOne.innerHTML += '<figcaption>Fig. 1</figcaption>';

figTwo.innerHTML = "<img src='./assets/images/cat.jpg' alt='Funny Cat' />";
figTwo.innerHTML += '<figcaption>Fig. 2</figcaption>';

figThree.innerHTML = "<img src='./assets/images/cat.jpg' alt='Funny Cat' />";
figThree.innerHTML += '<figcaption>Fig. 3</figcaption>';
