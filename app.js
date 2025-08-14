alert('Bem vindo ao jogo de adivinhação do numero secreto!');

const dificuldade = parseInt(prompt('Escolha a dificuldade do jogo: \n1 - Fácil\n2 - Médio\n3 - Difícil'));
let multiplicador;

if(dificuldade === 1) multiplicador = 100;
else if(dificuldade === 2) multiplicador = 1000
else if(dificuldade === 3) multiplicador = 10000;
else {
    alert('Dificuldade inválida! O jogo será iniciado no modo fácil.');
    multiplicador = 100;
}

const numeroSecreto = Math.floor(Math.random() * multiplicador) + 1;
console.log(`Numero secreto: ${numeroSecreto}`);

let tentativas = 1;
let chute;

while (numeroSecreto !== chute) {
    chute = parseInt(prompt(`Digite um número entre 1 e ${multiplicador}:`));

    if(chute === numeroSecreto) {
        break;
    }
    else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que "${chute}"! Tente novamente.`);
    }
    else if (chute < numeroSecreto) {
        alert(`O número secreto é maior que "${chute}"! Tente novamente.`);
    }
    else {
        alert('Valor inválido! Tente novamente.');
        continue;
    }
    tentativas++;
}

if(tentativas === 1)
    alert(`Uau! Você acertou de primeira! O número secreto é ${numeroSecreto}.`);
else
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
