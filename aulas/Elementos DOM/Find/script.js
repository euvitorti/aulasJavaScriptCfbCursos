// RETORNA O PRIMEIRO ELEMENTO

const p_array = document.querySelector("#array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementos_array = ["JAVA", "CSS", "C#"];

p_array.innerHTML = "[" + elementos_array + "]";

btnPesquisar.addEventListener("click", (evt) => {

    const ret = elementos_array.find((e, i) => {    
        if (e == txt_pesquisar.value) {
            i++;
            resultado.innerHTML = `VALOR ENCONTRADO ${e} NA POSIÇÃO ${i}`;
            return e;
        } else {
            resultado.innerHTML = `VALOR NÃO ENCONTRADO.`;
        };
    });
    console.log(ret)
});