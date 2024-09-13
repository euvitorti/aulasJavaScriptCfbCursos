const valores = [5, 7, 4, 1]; // Array de valores
const it_valores = valores[Symbol.iterator](); // Cria um iterador para o array

const curso = "JAVA"; // String
const it_texto = curso[Symbol.iterator](); // Cria um iterador para a string

// Exibe o array completo no console
console.log(valores);

// Percorre o iterador do array "valores" e exibe cada valor
for (let index = 0; index <= valores.length; index++) {
    console.log(it_valores.next().value); // Mostra o valor atual ou "undefined" se acabou
}

// Percorre o iterador da string "curso" e exibe cada caractere
for (let index = 0; index <= curso.length; index++) {
    console.log(it_texto.next()); // Mostra o valor atual e o estado "done"
}
