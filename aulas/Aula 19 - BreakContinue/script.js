// CONTINUE - PARA A ITERAÇÃO ATUAL E PULA PARA A PRÓXIMA

let n = 0
let max = 10

// while(n < max){
//     if(n > 10){
//         break
//     }
//     console.log(n)
//     n++
// }

let pares = 0

for (let i = n; i <= max; i++){
    console.log(i)
    if(i % 2 != 0){
        //SE O RESULTADO FOR VERDADEIRA ELE VOLTA O LOOP, QUANDO NÃO É, ELE FAZ TUDO
        continue
    }
    pares ++
}

console.log(" ")
console.log(pares)