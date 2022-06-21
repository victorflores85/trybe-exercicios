// Exercicio 01:
console.log('Exercício 01:')

const a = 1;
const b = 1;
const c = 15;

console.log('a = ' + a);
console.log('b = ' + b);
console.log('Adição (a + b) = ' + (a + b));
console.log('Subtração (a - b) = ' + (a - b));
console.log('Multiplicação (a * b) = ' + (a * b));
console.log('Divisão (a / b) = ' + (a / b));
console.log('Módulo (a % b) = ' + (a % b));
console.log(" ");

// Exercício 02:
console.log('Exercício 02:')

let maiorNumero;

if (a > b) {
    maiorNumero = a;
} else if (b > a) {
    maiorNumero = b;
} else {
    maiorNumero = 'Números iguais'
}
console.log('O maior número é : ' + maiorNumero);
console.log(" ");

// Exercício 03:
console.log('Exercício 03:')

if (a > b && a > c) {
    console.log('O maior número é : ' + a);
} else if (b > a && b > c) {
    console.log('O maior número é : ' + b);
} else if (c > a && c > b) {
    console.log('O maior número é : ' + c);
}
console.log(" ");

// Exercício 04:
console.log('Exercício 04:')

if (a > 0) {
    console.log('A constante a é positiva!' );
} else if (a < 0) {
    console.log('A constante a é negativa!' );
} else {
    console.log('A constante a é zero!' );
}
console.log(" ");
 
// Exercício 05:
console.log('Exercício 05:')

const angulo1 = 0;
const angulo2 = 50;
const angulo3 = 100;

if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
    console.log('Erro: temos algum angulo negativo ou nulo!')
} else if ( (angulo1 + angulo2 + angulo3) == 180) {
    console.log(true);
} else {
    console.log(false);
}
console.log(" ");

// Exercício 06:
console.log('Exercício 06:')

let peca = 'RAINHA';
let pecaLowerCase = peca.toLowerCase();

switch (pecaLowerCase) {
    case 'rei':
        console.log('horizontal, vertical e diagonal, porém somente uma casa por vez.');
        break
    case 'rainha':
        console.log('horizontal, vertical e diagonais, porém não pode pular outras peças.');
        break
    case 'bispo':
        console.log('diagonais, porém não pode pular outras peças.');
        break
    case 'cavalo':
        console.log('formato de L, único que pode pular outras peças.');
        break
    case 'torre':
        console.log('vertical ou horizontal, porém não pode pular outras peças.');
        break
    case 'peão':
        console.log('somente para frente, porém somente captura outras peças na diagonal.');
        break
}
console.log(" ");

// Exercício 07:
console.log('Exercício 07:')

const nota = -5;

if (nota < 0 || nota > 100) {
    console.log('Erro: Nota deve estar entre 0 e 100!');
} else if (nota < 50) {
    console.log('Nota F');
} else if (nota < 60) {
    console.log('Nota E');
} else if (nota < 70) {
    console.log('Nota D');
} else if (nota < 80) {
    console.log('Nota C');
} else if (nota < 90) {
    console.log ('Nota B');
} else {
    console.log('Nota A');
}
console.log(" ");

// Exercício 08:
console.log('Exercício 08:')

if ( (a % 2 == 0) || (b % 2 == 0) || (c % 2 == 0)) {
    console.log(true);
} else {
    console.log(false);
}
console.log(" ");

// Exercício 09:
console.log('Exercício 09:')

if ( (a % 2 != 0) || (b % 2 != 0) || (c % 2 != 0)) {
    console.log(true);
} else {
    console.log(false);
}
console.log(" ");

// Exercício 10:
console.log('Exercício 10:')

const custo = 100;
const venda = 110;
const imposto = 0.2;

let valorCustoTotal = custo + custo * imposto;
let lucro = venda - valorCustoTotal;

if ((custo < 0) || (venda < 0) || (imposto < 0)) {
    console.log('Erro: Algum input é menor do que zero!');
} else {
    console.log('Lucro/Prejuizo de ' + (lucro * 1000));
}
console.log(" ");

// Exercício 11:
console.log('Exercício 11:')

let salarioBruto = 3000;

let inss;
if (salarioBruto < 1556.95) {
    inss = 0.08;
} else if ( salarioBruto < 2594.93) {
    inss = 0.09;
} else if ( salarioBruto  < 5189.83) {
    inss = 0.11;
} else if ( 5189.83 < salarioBruto ) {
    inss = 570.88;
} 

let salarioMenosInss = salarioBruto - salarioBruto * inss;
let ir;
let aliquota;

if (salarioMenosInss < 1903.98) {
    ir = 0;
} else if ( salarioMenosInss < 2826.65) {
    ir = 0.075;
    aliquota = 142.80;
} else if ( salarioMenosInss < 3751.05) {
    ir = 0.15;
    aliquota = 354.80;
} else if ( salarioMenosInss < 4664.68) {
    ir = 0.225;
    aliquota = 636.13;
} else if ( 4664.68 < salarioMenosInss) {
    ir = 0.275;
    aliquota = 869.36;
} 

let liquidoReceber = salarioMenosInss - (ir * salarioMenosInss - aliquota);

console.log('Valor líquido a receber: ' + liquidoReceber)

