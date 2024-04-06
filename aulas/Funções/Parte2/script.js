// FUNÇÃO COM RETORNO

function soma() {
    let a = 1
    let b = 2
    let c = a % b
    if (c == 0) {
        return "Par"
    } else {
        return "ÍMPAR"
    }
}

let res = soma()
console.log(res)