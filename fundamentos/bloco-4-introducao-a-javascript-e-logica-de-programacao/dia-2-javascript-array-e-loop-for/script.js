let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 01:
console.log('Exercício 01:');

for (i of numbers) {
    console.log(i);
}

console.log('');
// *************************************************************************

// Exercício 02:
console.log('Exercício 02:');

let somatorio =0;
for (i of numbers) {
    somatorio = somatorio + i;
}
console.log(somatorio);
console.log('');
// *************************************************************************

// Exercício 03:
console.log('Exercício 03:');

let somatorio3 =0;
for (i of numbers) {
    somatorio3 = somatorio3 + i;
}
console.log(somatorio3 / numbers.length);
console.log('');
// *************************************************************************

// Exercício 04:
console.log('Exercício 04:');

if (somatorio3 > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}
console.log('');
// *************************************************************************

// Exercício 05:
console.log('Exercício 05:');

let maiorValor = numbers[0];

for (j of numbers) {
    if (j > maiorValor) {
        maiorValor = j;
    } 
}
console.log(maiorValor);
console.log('');
// *************************************************************************

// Exercício 06:
console.log('Exercício 06:');

let impares = 0;

for (k of numbers) {
    if ((k % 2) != 0 ) {
        impares += 1;
    }
}
if (impares == 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log( impares + ' valores ímpares encontrados');
}
console.log('');
// *************************************************************************

// Exercício 07:
console.log('Exercício 07:');

let menorValor = numbers[0];

for (k of numbers) {
    if (k < menorValor) {
        menorValor = k;
    } 
}
console.log(menorValor);
console.log('');
// *************************************************************************

// Exercício 08:
console.log('Exercício 08:');

let array = [];

for (let l =1; l < 26; l +=1) {
    array.push(l);
}
console.log(array);
console.log('');
// *************************************************************************

// Exercício 09:
console.log('Exercício 09:');

for (m of array) {
    console.log(m / 2);
}