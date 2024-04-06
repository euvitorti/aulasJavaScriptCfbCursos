const divC1 = document.getElementById("c1");
const divC2 = document.getElementById("c2");
const divC3 = document.getElementById("c3");

console.log(divC1);
console.log(divC1.id);
console.log(divC1.innerHTML);

// ALTERANDO O VALOR
// divC1.innerHTML = "CFBCURSOS";

// RETORNA UMA COLEÇÃO
const colecaoHTML = [...document.getElementsByTagName("div")];

console.log(colecaoHTML);

colecaoHTML.map((e) => {
    console.log(e);
});
