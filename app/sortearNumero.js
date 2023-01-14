var menorvalor = 0;
var maiorvalor = 100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * (maiorvalor - menorvalor + 1) + menorvalor);
}

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorvalor;
const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorvalor;