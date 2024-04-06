// Determines whether all the members of an array satisfy the specified test.

const p_array = document.querySelector("#array");
const btnReduzir = document.querySelector("#btnReduzir");
const resultado = document.querySelector("#resultado");

const elementos_array = [3, 2, 5];
let ant = [];
let atu = [];

p_array.innerHTML = `[${elementos_array}]`;

btnReduzir.addEventListener("click", (evt) => {
    resultado.innerHTML = elementos_array.reduce((anterior, atual, posicao) => {
        ant.push(anterior);
        atu.push(atual);
        return atual + anterior;
    });
    resultado.innerHTML += `<br>VALOR ANTERIOR: ${ant}<br>VALOR ATUAL:${atu}`;
});