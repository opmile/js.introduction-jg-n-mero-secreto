let numeroSecreto = gerarNumeroAletatorio();
let tentativas = 1;

function exibirTextonNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}

exibirTextonNaTela("h1", "Jogo do número secreto");
exibirTextonNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextonNaTela("h1", "Acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextonNaTela("p", mensagemTentativas)
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {;
        exibirTextonNaTela("p", "O número secreto é menor");
        } else {
            exibirTextonNaTela("p", "O número secreto e maior");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAletatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAletatorio();
    limparCampo();
    tentativas = 1;
}