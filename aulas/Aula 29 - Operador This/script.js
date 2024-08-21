class aluno {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota

        this.dadosArrowAnonimos = function () {
            setTimeout(() => {
                console.log(this.nome)
                console.log(this.nota)
            }, 1000)
        }
    }
}

const primeiroAluno = new aluno("Bruno", 100)
primeiroAluno.dadosArrowAnonimos()