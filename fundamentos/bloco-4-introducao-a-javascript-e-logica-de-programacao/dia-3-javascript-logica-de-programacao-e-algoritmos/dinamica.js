//Exercício 01:
console.log("Exercício 01:")
let soma = 0;

let numeroInicial = 2;
let numeroFinal = 150;

for (let index = numeroInicial; index <= numeroFinal; index +=1) {
    soma += index;
}
console.log('A soma total de', numeroInicial, 'a', numeroFinal, 'é', soma);
console.log("")

//Exercício 02:
console.log("Exercício 02:")
let count = 0;

for (let index2 = numeroInicial; index2 <= numeroFinal; index2 +=1) {
    if (index2 % 3 === 0) {
        count += 1;
    }
}

if (count === 50) {
    console.log('Mensagem secreta');
}
console.log("")

//Exercício 03:
console.log("Exercício 03:")

array =['pedra', 'papel', 'tesoura'];
let playerOne = Math.floor(Math.random() * 3 +1);
let playerTwo = Math.floor(Math.random() * 3 +1);

if (playerOne ===1 && playerTwo ===3 || playerOne === 2 && playerTwo ===1 || playerOne === 3 && playerTwo === 2) {
    console.log('playerOne wons');
} else if (playerOne === playerTwo) {
    console.log( 'A ties');
} else {
    console.log('playerTwo wons');
}
console.log("")

//Exercício 04:
console.log("Exercício 04:")

let idade = 17;

if (idade >= 18){
    console.log('A pessoa é maior de idade');
} else {
    console.log('A pessoa é menor de idade');
}
console.log("")

//Exercício 05:
console.log("Exercício 05:")

let Carolzita = 23;
let Murilo = 28;
let Baeta = 21;



