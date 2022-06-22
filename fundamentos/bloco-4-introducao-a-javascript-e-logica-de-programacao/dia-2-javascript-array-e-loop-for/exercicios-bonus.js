// Exercícios Bonus dia 4.2:
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

  console.log(array);
// *************************************************************************

// Exercício 01:
console.log('Exercício 01:');

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

console.log(numbers);
console.log("");
// *************************************************************************

// Exercício 02:
console.log('Exercício 02:');


for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

console.log(numbers);
console.log("");
// *************************************************************************

// Exercício 03:
console.log('Exercício 03:');

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumbers = [];

for (let i =0; i < numbers3.length -1; i += 1) {
    novoNumbers.push(numbers3[i] * numbers3[i+1]);
}

novoNumbers.push(numbers3[numbers3.length-1]*2);
console.log(novoNumbers);