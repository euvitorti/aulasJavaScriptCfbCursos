// CRIA UMA CLASSE, UMA BASE, DESDE MÉTODOS, ATÉ PROPRIEDADES, DEPOIS INSTÂNCIA OS OBJETOS DA CLASSE

class Pessoa {
    // MÉTODO
    constructor(nome) {
        // AUTOMATICAMENTE CHAMADO QUANDO INSTÂNCIA UM NOVO OBJETO
        this.name = nome;
    };
};

let primeiraPessoa = new Pessoa("Vítor");
let segundaPessoa = new Pessoa("Bruno");

console.log(primeiraPessoa.name);
console.log(segundaPessoa.name);