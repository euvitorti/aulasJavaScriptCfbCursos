const valores = [5, 7, 4, 1];

const it_valores = valores[Symbol.iterator]();

const curso = "JAVA";
const it_texto = curso[Symbol.iterator]();

console.log(valores);

for (let index = 0; index <= valores.length; index++) {
    console.log(it_valores.next().value);
}

for (let index = 0; index <= curso.length; index++) {
    console.log(it_texto.next());
}