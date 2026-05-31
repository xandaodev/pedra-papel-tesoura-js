const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const elementos = ["pedra", "papel", "tesoura", "lagarto", "spock"];

function sortearElementoComputador(elementos) {
    const indiceAleatorio = Math.floor(Math.random() * elementos.length);
    return elementos[indiceAleatorio];
}

function determinarVencedor(jogador, computador){
    if(jogador === computador){
        return "Deu empate!";
    }else if(
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "tesoura" && computador === "papel") ||

        (jogador === "papel" && computador === "spock") ||
        (jogador === "pedra" && computador === "lagarto") ||
        (jogador === "tesoura" && computador === "lagarto") ||
        (jogador === "lagarto" && computador === "spock") ||
        (jogador === "lagarto" && computador === "papel") ||
        (jogador === "spock" && computador === "tesoura") ||
        (jogador === "spock" && computador === "pedra")
    ){
        return "Você ganhou!";
    }else{
        return "O computador ganhou!";
    }
}

app.get('/jogar/:escolha', (req, res) => {
    const escolhaUsuario = req.params.escolha;

    const escolhaComputador = sortearElementoComputador(elementos);
    const resultado = determinarVencedor(escolhaUsuario, escolhaComputador);

    res.json({
        usuario: escolhaUsuario,
        computador: escolhaComputador,
        vencedor: resultado
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000! Acesse: http://localhost:3000');
});