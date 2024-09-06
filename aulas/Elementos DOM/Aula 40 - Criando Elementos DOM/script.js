const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL"];

cursos.map((elemento, chave) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", `c${chave}`);
    novoElemento.setAttribute("class", "curso");
    novoElemento.innerHTML = elemento;

    caixa1.appendChild(novoElemento);
});
