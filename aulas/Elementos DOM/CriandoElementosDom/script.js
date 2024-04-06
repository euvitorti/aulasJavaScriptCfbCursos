const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP", "REACT", "MYSQL"];

cursos.map((elemento, chave) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + chave);
    novoElemento.setAttribute("class", "curso");
    novoElemento.innerHTML = elemento;

    // REMOVENDO UM ATRIBUTO
    novoElemento.addEventListener("click", (evento) => {
        caixa1.removeChild(evento.target);
    });

    caixa1.appendChild(novoElemento);
});