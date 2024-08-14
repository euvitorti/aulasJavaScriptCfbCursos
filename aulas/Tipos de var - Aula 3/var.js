"use strict"

// DAQUI PARA FRENTE, ESSA VARIÁVEL ESTARÁ DISPONÍVEL EM QUALQUER BLOCO
var nome = 'João';

// MESMO ESTANDO DECLARADA EM UM ESCOPO, PODEMOS ACESSA-LA
if (nome = 'João') {
    var idade = 20;

    // LET PODE APENAS SER ACESSADA ONDE FOI DECLARADA
    let saudacao = `Olá ${nome}! Você tem ${idade} anos de idade?`;
}

console.log(idade);

// ACONTECE O SEGUINTE ERRO SE TENTAR EXECUTAR A PRÓXIMA LINHA:
// Uncaught ReferenceError ReferenceError: saudacao is not defined
// saudacao NÃO ESTÁ DECLARADA
// console.log(saudacao);

// QUANDO DECLARA UMA CONST, O SEU VALOR NÃO PODE SER ALTERADO
const curso = 'Java';
console.log(curso);

// ERRO ACONTECE NA PRÓXIMA LINHA
// Uncaught TypeError TypeError: Assignment to constant variable
curso = 'React';
console.log(curso);
