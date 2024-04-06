const primeiraCaixa = document.querySelector("caixa1");
const segundaCaixa = document.querySelector("caixa2");
const botao = document.querySelector("#btn_copiar");
const todosCursos = [...document.querySelectorAll(".cursoc1")];

todosCursos.map((elementos) => {
    elementos.addEventListener("click", (evento) => {
        const curso = evento.target;
        curso.classList.toggle("destaque");
    });
});

botao.addEventListener("click", () => {
    const cursoSelecionados = [...document.querySelectorAll(".destaque")];
    const cursoNaoSelecionados = [...document.querySelectorAll(".curso:not(.destaque)")];

    cursoSelecionados.map((el) => {
        caixa2.appendChild(el);
    });

    cursoNaoSelecionados.map((el) => {
        caixa1.appendChild(el);
    });
});