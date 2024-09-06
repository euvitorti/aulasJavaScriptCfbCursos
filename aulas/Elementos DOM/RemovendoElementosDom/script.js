const caixa1 = document.querySelector("#caixa1");
// Seleciona o elemento HTML com o ID "caixa1" e o atribui à variável 'caixa1'.

const btn_c = [...document.querySelectorAll(".curso")];
// Seleciona todos os elementos com a classe "curso" e os coloca em um array utilizando o operador spread, atribuindo-o à variável 'btn_c'.

const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP", "REACT", "MYSQL"];
// Cria um array de strings com nomes de cursos e o atribui à variável 'cursos'.

cursos.map((elemento, chave) => {
// Faz um mapeamento do array 'cursos', onde 'elemento' representa o curso atual e 'chave' representa seu índice. O método map é usado para iterar sobre cada curso.

    const novoElemento = document.createElement("div");
    // Cria um novo elemento 'div' para cada curso no array.

    novoElemento.setAttribute("id", "c" + chave);
    // Define o atributo 'id' da nova div como "c" seguido do índice do curso (por exemplo, "c0", "c1").

    novoElemento.setAttribute("class", "curso");
    // Define o atributo 'class' da nova div como "curso".

    novoElemento.innerHTML = elemento;
    // Define o conteúdo interno (HTML) da nova div com o nome do curso correspondente.

    const lixeira = document.createElement("img");
    // Cria um novo elemento de imagem (img) que funcionará como um botão de lixeira para remover a div.

    lixeira.setAttribute("src", "trash.png");
    // Define o atributo 'src' da imagem para o caminho "trash.png", que seria o ícone da lixeira.

    lixeira.setAttribute("class", "trash");
    // Define o atributo 'class' da imagem como "trash" para facilitar a estilização.

    // REMOVENDO UM ATRIBUTO
    lixeira.addEventListener("click", (evento) => {
        caixa1.removeChild(evento.target.parentNode);
    });
    // Adiciona um evento de clique à lixeira. Quando o botão é clicado, a função remove a div pai do elemento clicado (a lixeira) da 'caixa1'.

    novoElemento.appendChild(lixeira);
    // Adiciona a lixeira como um filho da nova div do curso.

    caixa1.appendChild(novoElemento);
    // Adiciona a nova div do curso (com o nome do curso e a lixeira) como um filho do elemento 'caixa1' no HTML.
});
