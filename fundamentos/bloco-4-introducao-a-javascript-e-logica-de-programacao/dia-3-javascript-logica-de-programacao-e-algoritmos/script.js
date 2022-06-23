// Exercício 01:
console.log('Exercício 01:')
let numero = 10;
let fatorial = 1;

for ( let index = numero; index > 0; index -= 1) {
    fatorial = fatorial * index;
}
console.log(fatorial);
console.log("");
// *********************************************************

// Exercicio 02:
console.log('Exercício 02:')
let word = 'tryber';
let invertedWord = "";

for ( i = word.length-1; i >= 0; i -= 1) {
    invertedWord += word[i];
}
console.log(invertedWord);
console.log("");
// *********************************************************

// Exercicio 03:
console.log('Exercício 03:')
let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = 0;
let menorPalavra = 0;

for ( let j = 1; j < array.length ; j += 1) {
    if (array[j].length > array[maiorPalavra].length) {
        maiorPalavra = j;
    }
    if (array[j].length < array[menorPalavra].length) {
        menorPalavra = j;
    }
}
console.log("Maior palavra:", array[maiorPalavra]);
console.log("Menor palavra:" ,array[menorPalavra]);
console.log("")
// *********************************************************

// Exercicio 04:
console.log('Exercício 04:')
let min = 2;
let max = 50;

let primos =[]

for (let index = min; index <= max; index +=1) {
    let count = 0;
    for (let i = 2; i < index; i +=1 ){
        if (index % i === 0) {
            count += 1;
        }
    }    
    if (count == 0) {
        primos.push(index);
    }
}

console.log(primos);
console.log('O maior número primo entre', min, 'e', max, 'é', primos.pop());