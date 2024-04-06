const caixa2 = document.querySelector("#caixa2");
const btn_c = [...document.querySelectorAll(".curso")];
const cursos = ["HTML", "JAVASCRIPT", "MYSQL", "TYPESCRIPT"];
const courseSelected = document.getElementById("courseselected");
const btnRemove = document.getElementById("toremove");
const btnAdicionarAntes = document.getElementById("toaddbefore");
const btnAdicionarDepois = document.getElementById("toaddafter");
const nomeCurso = document.getElementById("inputtext");

let indice = 0;

const tirarSelecao = () => {
    const cursoSelecionados = [...document.querySelectorAll(".destaque")];
    cursoSelecionados.map((el) => {
        el.classList.remove("destaque");
    });
};

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + indice);
    novoElemento.setAttribute("class", "curso");
    novoElemento.innerHTML = curso;
    novoElemento.addEventListener("click", (evt) => {
        tirarSelecao();
        evt.target.classList.toggle("destaque");
    })

    return novoElemento;
};

cursos.map((elemento, chave) => {
    const novoElemento = criarNovoCurso(elemento);
    caixa2.appendChild(novoElemento);
    indice++;
});

const cursoSelecionado = () => {
    const cursoSelecionados = [...document.querySelectorAll(".destaque")];

    return cursoSelecionados[0];
};

courseSelected.addEventListener("click", (evt) => {
    try {
        alert("Curso Selecionado" + cursoSelecionado().innerHTML);
    } catch (e) {
        alert("Selecione um curso!");
    };
});

btnRemove.addEventListener("click", (evt) => {
    cs = cursoSelecionado();
    if (cs != undefined) {
        cs.remove();
    } else {
        alert("Selecione um curso");
    };
});

btnAdicionarAntes.addEventListener("click", (evt) => {

    try {
        if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixa2.insertBefore(novoCurso, cursoSelecionado());
        } else {
            alert("Digite um curso!");
        };
    } catch (e) {
        alert("Selecione um curso!");
    };
});

btnAdicionarDepois.addEventListener("click", (evt) => {

    try {
        if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixa2.insertBefore(novoCurso, cursoSelecionado().nextSibling);
        } else {
            alert("Digite um curso!");
        };
    } catch (e) {
        alert("Selecione um curso!");
    };
});