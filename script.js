const elementos = ["pedra", "papel", "tesoura"];

console.log(elementos)

console.log(elementos)

function sortearElementoComputador(elementos) {
    const indiceAleatorio = Math.floor(Math.random() * elementos.length);

    return elementos[indiceAleatorio];
}


const elementoUsuario = prompt("Digite pedra, papel ou tesoura: ").toLowerCase();

const elementoComputador = sortearElementoComputador(elementos);

console.log("Você escolheu: " + elementoUsuario + " | Computador escolheu: " + elementoComputador);


function determinaVencedor(usuario, computador) {
    if (computador === usuario) {
        return "Deu empate";
    }else if(
        (usuario === "papel" && computador === "pedra") ||
        (usuario === "pedra" && computador === "tesoura") ||
        (usuario === "tesoura" && computador === "papel")
    ){
        return "Voce ganhou!";
    }else{
        return "O computador ganhou!";
    }
}