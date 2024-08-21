// PERCORRER ARRAYS - VAI ITERAR TODA A COLEÇÃO
// const cursos = ['HTML', 'CSS', 'JAVASCRIPT', 'C#', 'REACT']
// let curso = cursos.map((elemento, posicao) =>{
//     // console.log(`Curso: ${elemento}.`)
//     // console.log(`Posição: ${posicao}.`)
//     // console.log("")
//     return elemento
// })

// console.log(curso)


// let elemento = document.getElementsByName("div")
// elemento = [...elemento]
// elemento.map((e, i) => {
//     e.innerHTML = "CFB Cursos: "
// })
// console.log(elemento)

// const elemento = document.getElementsByName("div")
// const valores = Array.prototype.map.call(elemento, ({ innerHTML }) => innerHTML)
// console.log(valores)

const converterInt = (e) => parseInt(e)
const dobrar = (e) => e * 2
let num = ['1', '2', '3'].map(dobrar)
console.log(num)