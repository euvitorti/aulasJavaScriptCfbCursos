const caixa2 = document.querySelector("#caixa2");
const btn_c = [...document.querySelectorAll(".curso")];
const cursos = ["HTML", "JAVASCRIPT", "MYSQL", "TYPESCRIPT"];
const courseSelected = document.getElementById("courseselected");
const btnRemove = document.getElementById("toremove");
const btnAdicionarAntes = document.getElementById("toaddbefore");
const btnAdicionarDepois = document.getElementById("toaddafter");
const nomeCurso = document.getElementById("inputtext");

let indice = 0;

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + indice);
    novoElemento.setAttribute("class", "curso");
    novoElemento.innerHTML = curso;
    novoElemento.addEventListener("click", (evt) => {
        evt.target.classList.toggle("destacado");
    })

    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");

    comandos.appendChild(rb);

    novoElemento.appendChild(comandos);

    return novoElemento;
};

cursos.map((elemento, chave) => {
    const novoElemento = criarNovoCurso(elemento);
    caixa2.appendChild(novoElemento);
    indice++;
});

const radioSelecionado = () => {
    const todosOsRadios = [...document.querySelectorAll("input[type=radio]")];
    const radioSelecionado = todosOsRadios.filter((ele, ind, arr) => {
        return ele.checked;
    });

    return radioSelecionado[0];
};

courseSelected.addEventListener("click", (evt) => {
    const rs = radioSelecionado();

    try {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent;
        alert("Curso Selecionado" + cursoSelecionado);
    } catch (e) {
        alert("Selecione um curso!");
    };
});

btnRemove.addEventListener("click", (evt) => {
    const rs = radioSelecionado();
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode;
        cursoSelecionado.remove();
    } else {
        alert("Selecione um curso");
    };
});

btnAdicionarAntes.addEventListener("click", (evt) => {
    const rs = radioSelecionado();

    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = rs.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixa2.insertBefore(novoCurso, cursoSelecionado);
        } else {
            alert("Digite um curso!");
        };
    } catch (e) {
        alert("Selecione um curso!");
    };
});

btnAdicionarDepois.addEventListener("click", (evt) => {
    const rs = radioSelecionado();

    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = rs.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixa2.insertBefore(novoCurso, cursoSelecionado.nextSibling);
        } else {
            alert("Digite um curso!");
        };
    } catch (e) {
        alert("Selecione um curso!");
    };
});