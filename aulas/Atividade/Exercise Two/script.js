const caixa2 = document.querySelector("#caixa2");
// Seleciona o elemento HTML com o id "caixa2" e o atribui à variável 'caixa2'.
// Este será o container onde os cursos serão adicionados dinamicamente.

const btn_c = [...document.querySelectorAll(".curso")];
// Seleciona todos os elementos com a classe "curso" e os converte em um array, armazenando-os na variável 'btn_c'.
// Esses elementos representam os cursos existentes.

const cursos = ["HTML", "JAVASCRIPT", "MYSQL", "TYPESCRIPT"];
// Cria um array de strings chamado 'cursos', contendo os nomes de alguns cursos.

const courseSelected = document.getElementById("courseselected");
// Seleciona o botão HTML com o id "courseselected" e o atribui à variável 'courseSelected'.
// Este botão será usado para exibir o curso selecionado.

const btnRemove = document.getElementById("toremove");
// Seleciona o botão HTML com o id "toremove" e o atribui à variável 'btnRemove'.
// Este botão será usado para remover o curso selecionado.

const btnAdicionarAntes = document.getElementById("toaddbefore");
// Seleciona o botão HTML com o id "toaddbefore" e o atribui à variável 'btnAdicionarAntes'.
// Este botão será usado para adicionar um curso antes do curso selecionado.

const btnAdicionarDepois = document.getElementById("toaddafter");
// Seleciona o botão HTML com o id "toaddafter" e o atribui à variável 'btnAdicionarDepois'.
// Este botão será usado para adicionar um curso depois do curso selecionado.

const nomeCurso = document.getElementById("inputtext");
// Seleciona o campo de entrada de texto (input) com o id "inputtext" e o atribui à variável 'nomeCurso'.
// Este campo será usado para inserir o nome de um novo curso.

let indice = 0;
// Inicializa a variável 'indice' com o valor 0. Esta será usada para gerar IDs únicos para os cursos adicionados.

const tirarSelecao = () => {
    // Define uma função chamada 'tirarSelecao', que remove a seleção de todos os cursos destacados.

    const cursoSelecionados = [...document.querySelectorAll(".destaque")];
    // Seleciona todos os elementos que têm a classe "destaque" (indicando que estão selecionados) e os converte em um array.

    cursoSelecionados.map((el) => {
        el.classList.remove("destaque");
    });
    // Itera sobre o array de elementos selecionados e remove a classe "destaque" de cada um, desmarcando-os.
};

const criarNovoCurso = (curso) => {
    // Define uma função chamada 'criarNovoCurso' que cria e retorna um novo elemento de curso (div) com o nome passado como argumento.

    const novoElemento = document.createElement("div");
    // Cria um novo elemento 'div' para representar o curso.

    novoElemento.setAttribute("id", "c" + indice);
    // Atribui um ID único ao novo elemento, concatenando "c" com o valor atual de 'indice'.

    novoElemento.setAttribute("class", "curso");
    // Define a classe "curso" para o novo elemento, para que ele tenha o mesmo estilo dos cursos já existentes.

    novoElemento.innerHTML = curso;
    // Define o conteúdo interno (texto) da 'div' como o nome do curso fornecido.

    novoElemento.addEventListener("click", (evt) => {
        tirarSelecao();
        // Ao clicar no curso, a função 'tirarSelecao' é chamada para remover a seleção de todos os outros cursos.

        evt.target.classList.toggle("destaque");
        // Alterna a classe "destaque" no elemento clicado, destacando-o se ainda não estiver ou removendo o destaque se já estiver selecionado.
    })

    return novoElemento;
    // Retorna o novo elemento criado.
};

cursos.map((elemento, chave) => {
    // Mapeia o array 'cursos', para cada elemento do array executa uma função.

    const novoElemento = criarNovoCurso(elemento);
    // Chama a função 'criarNovoCurso' para cada curso e armazena o resultado (um novo elemento 'div') na variável 'novoElemento'.

    caixa2.appendChild(novoElemento);
    // Adiciona o novo curso como um filho do elemento 'caixa2', ou seja, ele será exibido na página.

    indice++;
    // Incrementa o valor de 'indice' para garantir que o próximo curso tenha um ID único.
});

const cursoSelecionado = () => {
    // Define uma função chamada 'cursoSelecionado' que retorna o primeiro curso que está selecionado (com a classe "destaque").

    const cursoSelecionados = [...document.querySelectorAll(".destaque")];
    // Seleciona todos os cursos que têm a classe "destaque" e os converte em um array.

    return cursoSelecionados[0];
    // Retorna o primeiro elemento do array (o curso selecionado).
};

courseSelected.addEventListener("click", (evt) => {
    // Adiciona um evento de clique ao botão 'courseSelected', que exibe o nome do curso selecionado.

    try {
        alert(`Curso ${cursoSelecionado().innerHTML} selecionado.`);
        // Exibe um alerta com o nome do curso selecionado, acessando seu conteúdo HTML.
    } catch (e) {
        alert("Selecione um curso!");
        // Se nenhum curso estiver selecionado (erro ao acessar 'cursoSelecionado'), exibe um alerta pedindo para selecionar um curso.
    };
});

btnRemove.addEventListener("click", (evt) => {
    // Adiciona um evento de clique ao botão 'btnRemove' para remover o curso selecionado.

    cs = cursoSelecionado();
    // Chama a função 'cursoSelecionado' para obter o curso atualmente selecionado.

    if (cs != undefined) {
        cs.remove();
        // Se um curso estiver selecionado, remove-o da página.
    } else {
        alert("Selecione um curso");
        // Se nenhum curso estiver selecionado, exibe um alerta pedindo para selecionar um curso.
    };
});

btnAdicionarAntes.addEventListener("click", (evt) => {
    // Adiciona um evento de clique ao botão 'btnAdicionarAntes' para adicionar um novo curso antes do curso selecionado.

    try {
        if (nomeCurso.value != "") {
            // Verifica se o campo de entrada 'nomeCurso' não está vazio.

            const novoCurso = criarNovoCurso(nomeCurso.value);
            // Cria um novo curso com o nome fornecido no campo de entrada.

            caixa2.insertBefore(novoCurso, cursoSelecionado());
            // Insere o novo curso antes do curso atualmente selecionado na 'caixa2'.
        } else {
            alert("Digite um curso!");
            // Se o campo de entrada estiver vazio, exibe um alerta pedindo para digitar um curso.
        };
    } catch (e) {
        alert("Selecione um curso!");
        // Se não houver curso selecionado, exibe um alerta pedindo para selecionar um curso.
    };
});

btnAdicionarDepois.addEventListener("click", (evt) => {
    // Adiciona um evento de clique ao botão 'btnAdicionarDepois' para adicionar um novo curso depois do curso selecionado.

    try {
        if (nomeCurso.value != "") {
            // Verifica se o campo de entrada 'nomeCurso' não está vazio.

            const novoCurso = criarNovoCurso(nomeCurso.value);
            // Cria um novo curso com o nome fornecido no campo de entrada.

            caixa2.insertBefore(novoCurso, cursoSelecionado().nextSibling);
            // Insere o novo curso depois do curso atualmente selecionado na 'caixa2'.
        }
    } catch (e) {
        alert("Selecione um curso!");
        // Se não houver curso selecionado, exibe um alerta pedindo para selecionar um curso.
    };
});
