import { useState } from 'react';

function App() {
    const [escolhaDoUsuario, setEscolhaDoUsuario] = useState("");
    const [escolhaDoComputador, setEscolhaDoComputador] = useState("");
    const [resultadoFinal, setResultadoFinal] = useState("");

    async function jogar(escolha) {
        try{
            const respostaHTTP = await fetch(`http://localhost:3000/jogar/${escolha}`);
            const dadosDaAPI = await respostaHTTP.json();
            setEscolhaDoUsuario(dadosDaAPI.usuario);
            setEscolhaDoComputador(dadosDaAPI.computador);
            setResultadoFinal(dadosDaAPI.vencedor);
        }catch(erro){
            console.error("Erro ao conectar com a API:", erro);
            setResultadoFinal("Erro no servidor. A API está ligada?");
        }
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