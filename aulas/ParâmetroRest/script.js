// NÃO PRECISA ESPECIFICAR A QUANTIDADE DE PARÂMETROS

function soma(...valores) {
    // let tam = valores.length
    let res = 0

    //     for (let i = 0; i < tam; i++) {
    //         res += valores[i]
    //     }
    //     return res

    for (let c of valores) {
        res += c
    }
    return res
}


console.log(soma(20, 10, 5, 2.5, 1.25))