import { useState } from 'react';
const elementos = ["pedra", "papel", "tesoura"];

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
        (jogador === "tesoura" && computador === "papel")
    ){
        return "Você ganhou!";
    }else{
        return "O computador ganhou!";
    }
}

function App() {
    const [escolhaDoUsuario, setEscolhaDoUsuario] = useState("");
    const [escolhaDoComputador, setEscolhaDoComputador] = useState("");
    const [resultadoFinal, setResultadoFinal] = useState("");

    function jogar(escolha) {
        const computador = sortearElementoComputador(elementos);

        setEscolhaDoUsuario(escolha);
        setEscolhaDoComputador(computador);

        const resultado = determinarVencedor(escolha, computador);
        setResultadoFinal(resultado);
    }

    return (
        <div>
            <h1>Pedra, Papel e Tesoura</h1>

            <button onClick={() => jogar("pedra")}>Pedra</button>
            <button onClick={() => jogar("papel")}>Papel</button>
            <button onClick={() => jogar("tesoura")}>Tesoura</button>

            <div style={{ marginTop: '20px' }}>
                <p><strong>Você escolheu:</strong> {escolhaDoUsuario} </p>
                <p><strong>Computador escolheu:</strong> {escolhaDoComputador} </p>
                <h2><strong>Resultado:</strong> {resultadoFinal} </h2>
            </div>
        </div>
    );
}

export default App;