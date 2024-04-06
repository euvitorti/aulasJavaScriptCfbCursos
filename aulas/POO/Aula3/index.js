// CRIA UMA CLASSE, UMA BASE, DESDE MÉTODOS, ATÉ PROPRIEDADES, DEPOIS INSTÂNCIA OS OBJETOS DA CLASSE

class Pessoa {
    // MÉTODO
    constructor(nomePessoa, idadePessoa) {
        // AUTOMATICAMENTE CHAMADO QUANDO INSTÂNCIA UM NOVO OBJETO
        this.name = nomePessoa;
        this.idade = idadePessoa;
    };

    getNome() {
        return this.name;
    }

    getIdade() {
        return this.idade;
    }

    setNome(pessoaNome) {
        this.name = pessoaNome;
    }

    setIdade(pessoaIdade) {
        this.idade = pessoaIdade;
    }

    info() {
        console.log(`NOME: ${this.name}.`)
        console.log(`IDADE: ${this.idade}. \n`)
    }
};

let pessoas = [];

const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

const addPessoa = () => {
    res.innerHTML = "";
    pessoas.map((people) => {
        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");
        div.innerHTML = `Nome: ${people.getNome()}, Idade: ${people.getIdade()}. \n`;
        res.appendChild(div);
    });
};

btn_add.addEventListener("click", (evt) => {
    const person = document.querySelector("#f_nome");
    const age = document.querySelector("#f_idade");

    const people = new Pessoa(person.value, age.value);

    pessoas.push(people);

    person.value = "";
    age.value = "";
    person.focus();
    addPessoa();
});