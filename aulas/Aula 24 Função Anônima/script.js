// SÓ VAI SER EXECUTADA QUANDO FOR CHAMADA
// ELA NÃO TEM NOME, É ASSOCIADA A UMA VARIÁVEL

// const anonima = function (...valores) {
//     let res = 0
//     for (i of valores) {
//         res += i
//     }
//     return res

//     // CONSTRUTOR -> FUNÇÃO SIMPLES
// }

// CONSTRUTOR -> FUNÇÃO SIMPLES
const anonima = new Function ("a", "b", "return a + b")

console.log(anonima(10, 2))