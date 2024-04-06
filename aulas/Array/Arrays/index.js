// PODE ARMAZENAR QUALQUER COISA

const caixa = document.querySelector("#caixa");

let cores = ["AZUL","BRANCO","AMARELO"];
let cursos = ["Html", "Css", "JavaScript", cores];

// cursos[0] = "TypeScript";

// ADICIONA NO FINAL
// cursos.push("C#");

// ADICIONA NO INICIO
// cursos.unshift("Python");

// REMOVE O PRIMEIRO
// cursos.shift();

// EXCLUI O ÚLTIMO
// cursos.pop();

console.log(cursos[3][1]);

cursos.map((el) => {
    let p = document.createElement("p");
    p.innerHTML = el;
    caixa.appendChild(p);
});
