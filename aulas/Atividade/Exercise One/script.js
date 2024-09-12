const primeiraCaixa = document.querySelector("#caixa1");
const segundaCaixa = document.querySelector("#caixa2");
const botao = document.querySelector("#btn_copiar");
const todosCursos = [...document.querySelectorAll(".curso")];

// Itera sobre cada elemento do array `todosCursos` utilizando o método `forEach`
todosCursos.forEach((elemento) => {

    // Adiciona um event listener para o evento de clique em cada elemento do array `todosCursos`
    elemento.addEventListener("click", (evento) => {

        // Armazena o elemento que foi clicado na variável `curso`
        const curso = evento.target;

        // Alterna a classe "destaque" no elemento clicado;
        // Adiciona a classe se ela não estiver presente, ou a remove se ela estiver presente
        curso.classList.toggle("destaque");
    });
});

// Adiciona um event listener para o evento de clique no botão `botao`
botao.addEventListener("click", () => {

    // Seleciona todos os elementos com a classe "destaque" e os converte para um array
    // Armazenando-o na variável `cursosSelecionados`
    const cursosSelecionados = [...document.querySelectorAll(".destaque")];

    // Seleciona todos os elementos com a classe "curso" que não possuem a classe "destaque"
    // Converte o NodeList resultante em um array e o armazena na variável `cursosNaoSelecionados`    
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.destaque)")];

    // Itera sobre cada elemento do array `cursosSelecionados` utilizando o método `forEach`
    cursosSelecionados.forEach((el) => {

        // Move cada elemento `el` selecionado para o contêiner `segundaCaixa`
        segundaCaixa.appendChild(el);
    });

    // Itera sobre cada elemento do array `cursosNaoSelecionados` utilizando o método `forEach`
    cursosNaoSelecionados.forEach((el) => {

        // Move cada elemento `el` não selecionado de volta para o contêiner `primeiraCaixa`
        primeiraCaixa.appendChild(el);
    });
});
