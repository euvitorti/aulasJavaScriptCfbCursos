// TEM O SEU RETORNO ADIADO ATÉ QUANDO PRECISAR RETORNAR, PODE IR RETORNANDO AO LONGO DO PROGRAMA
//RETORNA SEMPRE QUE ENCONTRA yield

// function* cores() {
//     yield 'BLACK'
//     yield 'PURPLE'
// }

// let gerar = cores()
// console.log(gerar.next().value)

// function* perguntas() {
//     const nome = yield 'QUAL SEU NOME? '
//     const esporte = yield 'QUAL SEU ESPORTE FAVORITO? '
//     return `OLÁ ${nome}, TAMBÉM GOSTO DE ${esporte}.`
// }

// const gerar = perguntas()
// console.log(gerar.next().value)
// console.log(gerar.next('JOÃO').value)
// console.log(gerar.next('CALISTENIA').value)

function* contador() {
    let i = 0
    while (true) {
        yield i++
        if(i > 5){
            break
        }
    }
}

const iterador = contador()
// for (let c = 0; c <= 10; c++) {
//     console.log(iterador.next().value)
// }

for (let c of iterador) {
    console.log(c)
}