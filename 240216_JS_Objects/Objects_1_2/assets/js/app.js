const person = {
  name: 'Bruce Wayne',
  alter: 80,
  sagNameAlter() {
    alert(`${this.name} ist ${this.alter} Jahre alt`);
  },
};

const { name, alter } = person;

console.log(name); // Bruce Wayne
console.log(alter); // 80
person.sagNameAlter(); // Bruce Wayne ist 80 Jahre alt
