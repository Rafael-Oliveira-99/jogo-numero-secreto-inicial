alert("Bem-vindo ao jogo do número secreto");
    let numeroMaximo = 450;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroUsuario;
let tentativas = 1;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (numeroUsuario == numeroSecreto) {
        break;
    }

    else {
        if (numeroUsuario > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroUsuario}.`)
        }

        else {
            alert(`O número secreto é maior que ${numeroUsuario}.`)
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns, Você acertou o número secreto com ${tentativas} ${palavraTentativa}.`);