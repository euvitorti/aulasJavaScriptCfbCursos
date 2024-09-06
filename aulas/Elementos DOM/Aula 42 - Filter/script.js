// TRATAR UM ARRAY E PERMITE UMA FILTRAGEM, E RETORNA ALGUNS DETERMINADOS ARRAYS
const idades = [12, 20, 35, 5, 6, 54, 25, 35, 49, 9, 14, 5, 32];

// COLECIONANDO AS PESSOAS QUE SÃO MAIORES DE 18

const filtroMaioridade = (valor) => {
    if (valor >= 18) {
        return valor;
    };
};

const filtroMenoridade = (valor) => {
    if (valor < 18) {
        return valor;
    };
};

const maiorDeIdade = idades.filter(filtroMaioridade);
const menorDeIdade = idades.filter(filtroMenoridade);

console.log(`Todas as idades: ${idades}.\n`);
console.log(`Menor de idade: ${maiorDeIdade}.\n`);
console.log(`Maior de idade: ${menorDeIdade}.`);
