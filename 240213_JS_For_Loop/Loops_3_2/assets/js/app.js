let numArr = [5, 22, 15, 100, 55];

let content = [];

for (let i = 0; i < numArr.length; i++) {
  for (let j = 2; j < numArr[i]; j++) {
    if (numArr[i] % j === 0) {
      content.push(
        `<p>${numArr[i]} is devidable by ${i}. The result is: ${j}</p>`
      );
    }
  }
}

const newContent = [...content].join(' ');

document.write(newContent);
