// Determines whether all the members of an array satisfy the specified test.

const p_array = document.querySelector("#array");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementos_array = [51, 62, 3, 57, 38, 19];

p_array.innerHTML = `[${elementos_array}]`;

btnPesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = "ARRAY NÃO CONFORME";

    const retorno = elementos_array.every((e, i) => {
        i++;
        if (e < 18) {
            resultado.innerHTML = `ARRAY NÃO CONFORME NA POSIÇÃO DO ${i}.`;
        }
        return e >= 18;
    });

    if (retorno) {
        resultado.innerHTML = "OK";
    }

    // console.log(retorno);
});