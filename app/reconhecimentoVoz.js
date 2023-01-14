window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const elementoChute = document.getElementById("chute");
recognition.lang = 'pt-Br';

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    validaChute(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener("end", () => {
    document.querySelectorAll(".mic").forEach(elemento => {
        elemento.className = "fa-solid fa-microphone-slash mic";
    })
    document.querySelector("#jogar").style.visibility = 'visible';
})