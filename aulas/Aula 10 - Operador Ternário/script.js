let res = 11 % 2;

console.log("Verificação tradicional com if.");
if (res == 0) {
    console.log("Número par.");
} else {
    console.log("Número ímpar.");
}

// Se o resultado for verdadeiro, ele retorna o primeiro valor
// 0 - false, 1 - true
// desta seguinte forma: res = (10 % 2 ? "Número par." : "Número ímpar.");
// ele retorna ímpar, pois o resultado final é 0
console.log("Verificação com operador ternário (?).");
res = (!(10 % 2) ? "Número par." : "Número ímpar.");
console.log(res);