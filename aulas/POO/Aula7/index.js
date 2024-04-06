// UMA CLASSE QUE HERDA OUTRA CLASSE - TUDO QUE ESTÁ IMPLEMENTADO NA CLASSE PAI VALE PARA A CLASSE FILHO
// NÃO FOI NECESSÁRIO DECLARAR NOVAMENTE AS PROPRIEDADES E MÉTODOS PARA A CLASSE FILHO, SIMPLISMENTE REAPROVEITOU AS ATRIBUIÇÕES

const tipoMilitar = document.querySelector("#f_tipoMilitar");
const tipoComum = document.querySelector("#f_tipoComum");
const blindagem = document.querySelector("#f_blindagem");
const municao = document.querySelector("#f_municao");
const divCarros = document.querySelector("#carros");
const btn_addCarro = document.querySelector("#btn_addCarro");
const nomeCarro = document.querySelector("#f_nome");
const portasCarro = document.querySelector("#f_portas");

let carros = [];

tipoMilitar.addEventListener("click", (evt) => {
    blindagem.removeAttribute("disabled");
    municao.removeAttribute("disabled");
});

tipoComum.addEventListener("click", (evt) => {
    blindagem.value = 0;
    municao.value = 0;
    blindagem.setAttribute("disabled", "disabled");
    municao.setAttribute("disabled", "disabled");
});

const gerenciarExibicaoCarros = () => {
    divCarros.innerHTML = "";

    carros.forEach((element) => {
        const div = document.createElement("div");
        div.setAttribute("class", "carro");
        div.innerHTML = element.nome;
        divCarros.appendChild(div);
    });

};

btn_addCarro.addEventListener("click", (evt) => {
    if (tipoComum.checked) {
        const c = new Carro(nomeCarro.value, portasCarro.value);
        carros.push(c);
    } else {
        const c = new Carro(nomeCarro.value, portasCarro.value, blindagem.value, municao.value);
        carros.push(c);
    };
    gerenciarExibicaoCarros();
});

// CLASSE PAI
class Carro {

    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
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

// const carro = new Carro("Kia", 4,);
// carro.setCor("White");

// const segundoCarro = new Militar("Tanque", 2, 100, 87);

// console.log(`Nome: ${carro.nome}.`);
// console.log(`Portas: ${carro.portas}.`);
// console.log(`Cor: ${carro.cor}.`);
// console.log(`Ligado: ${(carro.ligado ? "Ligado" : "Desligado")}. \n`);

// console.log(`Nome: ${segundoCarro.nome}.`);
// console.log(`Portas: ${segundoCarro.portas}.`);
// console.log(`Cor: ${segundoCarro.cor}.`);
// console.log(`Ligado: ${(segundoCarro.ligado ? "Ligado" : "Desligado")}. \n`);