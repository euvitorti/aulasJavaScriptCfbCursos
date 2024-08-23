const primeiraCaixa = document.querySelector("#caixa1");

// const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".curso")];

primeiraCaixa.addEventListener("click", (evento) => {
    window.alert("Clicou");
    console.log(evento);
})


// Teste antes de utilizar o seguinte código

// cursos.map((elementos) => {
//     elementos.addEventListener("click", (evento) => {
//         evento.stopPropagation();
//     })
// });
