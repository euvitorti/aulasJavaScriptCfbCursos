// REPRESENTAR FUNÇÃO ANÔNIMA, CONHECIDA TAMBÉM COMO FUNÇÃO LAMBDA OU FUNÇÃO LAMBIDA

// const soma = function (a, b) { return a + b }

const soma = (a, b) => {
    return a + b;
}

console.log(soma(10, 5));

// pode usar sem o return

const somaSemReturn = n => n + 10;

console.log(somaSemReturn(20));
