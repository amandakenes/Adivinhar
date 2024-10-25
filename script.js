let numeroInput = document.getElementById("input-numero");
let adivinharBtn = document.getElementById("btn-adivinhar");
let resultado = document.getElementById("resultado");
let tentativasRestantes = document.getElementById("tentativas-restantes");
let tentarNovamenteBtn;

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;

function Adivinhar() { 
    for (let i = 0; i < 1; i++) {
        let palpite = parseInt(numeroInput.value);

        if (palpite >= 1 && palpite <= 100) {
            tentativas--;

            if (palpite === numeroAleatorio) {
                resultado.textContent = "Parabéns! Você acertou o número!";
                finalizarJogo();
                break;
            } else if (palpite < numeroAleatorio) {
                resultado.textContent = "O número é maior.";
            } else {
                resultado.textContent = "O número é menor.";
            }

            tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;

            if (tentativas === 0) {
                resultado.textContent = `Fim de jogo! O número era ${numeroAleatorio}.`;
                finalizarJogo();
                break;
            }
        } else {
            alert('Insira um número de 1 a 100 para jogar o jogo de adivinhação!');
            break;
        }
    }
}

function finalizarJogo() {
    adivinharBtn.disabled = true;
    numeroInput.disabled = true;
    criarBotaoTentarNovamente();
}

function criarBotaoTentarNovamente() {
    tentarNovamenteBtn = document.createElement("button");
    tentarNovamenteBtn.id = "tentarNovamente";
    tentarNovamenteBtn.textContent = "Tentar Novamente";
    tentarNovamenteBtn.addEventListener("click", reiniciarJogo);
    document.querySelector(".resultado-area").appendChild(tentarNovamenteBtn);
}

function reiniciarJogo() {
    tentativas = 10;
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    resultado.textContent = "";
    tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
    numeroInput.value = "";
    numeroInput.disabled = false;
    adivinharBtn.disabled = false;
    tentarNovamenteBtn.remove();
}


adivinharBtn.addEventListener("click", Adivinhar);
