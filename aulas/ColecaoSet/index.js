// NÃO PERMITE VALORES DUPLICADOS

const caixa = document.querySelector("#caixa");

let musicas = new Set(["HOPE", "LOVEHURTS", "JOKE"]);

// CONFERIR NO CONSOLE, NÃO ADICIONA MAIS DE UMA VEZ

musicas.add("BE CAREFUL");
musicas.add("HAPPY");
musicas.add("HAPPY");

// musicas.delete("HAPPY");
// musicas.clear();

console.log(musicas);

musicas.forEach(
    (el) => {
        caixa.innerHTML += `MUSICA: ${el}. <br>`;
    }
);