const elementos = ["pedra", "papel", "tesoura"];

console.log(elementos)

console.log(elementos)

function sortearElementoComputador(elementos) {
    const indiceAleatorio = Math.floor(Math.random() * elementos.length);

    return elementos[indiceAleatorio];
}

console.log("O computador escolheu: " + sortearElementoComputador(elementos));

