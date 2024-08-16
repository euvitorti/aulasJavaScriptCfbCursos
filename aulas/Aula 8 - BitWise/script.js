// OPERANDO OS BITS DOS ELEMENTOS

let n1 = 10;
let n2 = 14;
// xor - ^, retorna um aonde tem apenas um bit
let res = n1 ^ n2;
console.log(res);

// com operador &, ele retorna um onde ambos tem um,
// e retorna o valor em decimal correspondente ao binário
res = n1 & n2;
console.log(res);

// onde tem o bit um, ele retorna um
res = n1 | n2;
console.log(res);

//DESLOCAMENTO DO BIT << - ESQUERDA | >> - DIREITA
let n3 = 30;
let res2 = n3 >> 1;
console.log(res2);

//128 64 32 16 8 4 2 1 - decimal
//  0  0  0  1 1 1 1 0 (binário) - 30
//  0  0  0  0 1 1 1 1 (binário) - 15
//  0  0  0  0 1 1 1 0 (binário) - 14
//  0  0  0  0 1 0 1 0 (binário) - 10
//  0  0  0  0 0 1 0 0 (binário) - 4