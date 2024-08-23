const todosCursos = [...document.getElementsByClassName("curso")];
const canal = [...document.getElementsByClassName("canal")];

console.log(todosCursos);
console.log(canal);

// ADICIONANDO UMA CLASSE
todosCursos.map((el) => {
    el.classList.add("destaque");
});
