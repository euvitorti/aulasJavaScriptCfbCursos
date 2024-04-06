const primeiraCaixa = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".cursoc1")];

primeiraCaixa.addEventListener("click", (evento) => {
    console.log("CLICOU");
    console.log(evento);
})

cursos.map((elementos) => {
    elementos.addEventListener("click", (evento) => {
        evento.stopPropagation();
    })
});