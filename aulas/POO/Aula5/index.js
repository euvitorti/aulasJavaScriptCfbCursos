// OBJETOS LITERAIS

// NÃO EXISTEM OBJETOS INDEPENDENTES - TODOS APONTAM PARA O MESMO ENDEREÇO

const Pessoa = {
    // AQUI TEM OS MÉTODOS E PROPRIEDADE. ATRIBUIÇÃO COM DOIS PONTOS
    nome: "VÍTOR",

    // MÉTODO
    getNome: function () {
        return this.nome;
    },

    setNome: function (nome) {
        return this.nome = nome;
    }

};

const segundaPessoa = Pessoa;

// SE ATUALIZAR TODOS VÃO RECEBER O MESMO NOME
segundaPessoa.nome = 'Cladisvardson';
Pessoa.setNome('Maridisvardisa');

console.log(Pessoa.nome);
console.log(segundaPessoa.getNome());