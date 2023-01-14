function validaChute(chute) {
    const numero = +chute;

    if (isNumber(numero)) {
        elementoChute.innerHTML += "<div>Diga um número <br> Caso já seja um número diga o 0 antes. <br> Ex: 'zero dois'</div>"
        return;
    }

    if (!estaNoIntervalo(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Inválido: O número deve estar entre ${menorvalor} e ${maiorvalor}</div>`
        return;
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;


    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    }
}

function isNumber(numero) {
    return Number.isNaN(numero);
}

function estaNoIntervalo(numero) {
    return !(numero < menorvalor || numero > maiorvalor);
}
document.body.addEventListener("click", evento => {
    if (evento.target.id == "jogar-novamente") {
        window.location.reload();
    } else if (evento.target.id == "jogar") {
        document.querySelector("#jogar").style.visibility = 'hidden';
        document.querySelectorAll(".mic").forEach(elemento => {
            elemento.className = "fa-solid fa-microphone mic";
        })
        recognition.start();
    }
})