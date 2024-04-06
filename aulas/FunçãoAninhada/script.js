const soma = (...valores) => {
    const somar = valor => {
        let res = 0
        for (i of valor) {
            res += i
        }
        return res
    }
    // RETORNA O RETORNO DA FUNÇÃO somar()
    return somar(valores)
}

console.log(soma(5, 5, 5))