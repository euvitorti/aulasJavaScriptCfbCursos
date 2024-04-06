// UMA CLASSE QUE HERDA OUTRA CLASSE - TUDO QUE ESTÁ IMPLEMENTADO NA CLASSE PAI VALE PARA A CLASSE FILHO

// NÃO FOI NECESSÁRIO DECLARAR NOVAMENTE AS PROPRIEDADES E MÉTODOS PARA A CLASSE FILHO, SIMPLISMENTE REAPROVEITOU AS ATRIBUIÇÕES

// CLASSE PAI
class Carro {

    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = 'Off';
        this.vel = 0;
        this.cor = undefined;
    };

    ligar = function () {
        return true;
    };

    desligar = function () {
        return false;
    };

    setCor = function (cor) {
        this.cor = cor;
    };
};

// CLASSE FILHO OU BASE
class Militar extends Carro {

    constructor(nome, portas, blindagem, municao) {

        // INVOCANDO ALGO ESPECÍFICO DA CLASSE PAI
        super(nome, portas);

        this.blindagem = blindagem;
        this.municao = municao;
        this.setCor("Verde");
    };

    atirar = function () {
        if (this.municao > 0) {
            this.municao--;
        };
    };
};

const carro = new Carro("Kia", 4,);
carro.setCor("White");

const segundoCarro = new Militar("Tanque", 2, 100, 87);

console.log(`Nome: ${carro.nome}.`);
console.log(`Portas: ${carro.portas}.`);
console.log(`Cor: ${carro.cor}.`);
console.log(`Ligado: ${(carro.ligado ? "Ligado" : "Desligado")}. \n`);

console.log(`Nome: ${segundoCarro.nome}.`);
console.log(`Portas: ${segundoCarro.portas}.`);
console.log(`Cor: ${segundoCarro.cor}.`);
console.log(`Ligado: ${(segundoCarro.ligado ? "Ligado" : "Desligado")}. \n`);