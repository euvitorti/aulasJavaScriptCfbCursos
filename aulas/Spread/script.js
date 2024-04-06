// OPERADOR SPREAD - QUEBRAR UMA ARRAY - DEVOLVE OS ELEMENTOS

// PODERIA COPIAR UM VALOR DE UMA ARRAY ASSIM (NUM3 = NUM), PORÉM PODE USAR O SPREAD
// SE AS PROPRIEDADES FOREM AS MESMAS, ELE PEGARÁ OS DADOS DO ÚLTIMO
// LOGO AS PROPRIEDADES DEVEM SER DIFERENTE


// const jogador = {nome:"BRUNO",energia:100,vida:3, poder:"voar"}
// const jogador2 = {nome:"VÍTOR",energia:100,vida:5, velocidade:80}
// const jogador3 = {...jogador, ...jogador2}

// console.log(jogador3)

const soma = (v1,v2,v3) =>{
    return v1 + v2 + v3
}

let valores = [1,5,4]

console.log(soma(...valores))