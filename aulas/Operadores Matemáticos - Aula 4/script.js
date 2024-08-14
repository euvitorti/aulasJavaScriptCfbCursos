/*
    +
    -
    /
    *
    %

    OPERADORES DE INCREMENTO {
        ++
        --
        +=
        -=
    }
*/


let primeiroValor = 5;
let segundoValor = 2;
let res = primeiroValor % segundoValor;

console.log(`Resto da divisão entre ${primeiroValor} e ${segundoValor}: ${res}\n`);

console.log('\nCALCULADORA DE MULTIPLICAÇÃO\n')
for (let i = 0; i < 10; i++) {
    let number = 2
    let result = i * number;
    console.log(`${i} X ${number}= ${result}`)
}

console.log('\nCALCULADORA DE DIVISÃO\n')
for (let i = 0; i < 10; i++) {
    let number = 2;
    let result = i / number;
    console.log(`${i} / ${number}= ${result}`);
}

console.log('\nCALCULADORA DE SUBTRAÇÃO\n')
for (let i = 0; i < 10; i++) {
    let number = 2;
    let result = i - number;
    console.log(`${i} - ${number}= ${result}`);
}

console.log('\nCALCULADORA DE SOMA\n')
for (let i = 0; i < 10; i++) {
    let number = 2
    let result = i + number;
    console.log(`${i} + ${number}= ${result}`);
}

console.log('\nCALCULADORA DE RESTO DE DIVISÃO\n')
for (let i = 0; i < 10; i++) {
    let number = 2
    let result = i % number;
    console.log(`${i} % ${number}= ${result}`);
}
