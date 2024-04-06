// ITERAÇÃO

// for(c = 0; c <= 10; c ++){
//     if(c == 0){
//         console.log("Zero é ímpar")
//         break
//     }
//     if(c % 2 == 0){
//         console.log(`${c} é par.`)
//     } else{
//         console.log(`${c} é ímpar`)
//     }
// }

// FOR IN E FOR OF

let num = [10, 20, 30, 40, 50]

for (n in num){
    console.log(n)
}

// ELE FOI NOS VALORES DO ARRAY,  NO IN TEM QUE USAR O NUM[I] - IDENTIFICAR A POSIÇÃO
for (n of num){
    console.log(n)
}