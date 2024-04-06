// CRIA UMA CLASSE, UMA BASE, DESDE MÉTODOS, ATÉ PROPRIEDADES, DEPOIS INSTÂNCIA OS OBJETOS DA CLASSE

class Carro {
    // MÉTODO
    constructor(nome, ptipo) {
        // AUTOMATICAMENTE CHAMADO QUANDO INSTÂNCIA UM NOVO OBJETO
        this.name = nome;
        if (ptipo == 1) {
            this.tipo = "Kia";
        } else {
            this.tipo = "Hyundai";
        }
    };

    getNome() {
        return this.name;
    }

    info() {
        console.log(`NOME: ${this.name}.`)
        console.log(`MARCA: ${this.tipo}. \n`)
    }
};

let primeiroCarro = new Carro("Rico", 1);
let segundoCarro = new Carro("Tirando onda", 2);

primeiroCarro.info();
segundoCarro.info();