import { useState } from 'react';
import './App.css';

function App() {
    const [escolhaDoUsuario, setEscolhaDoUsuario] = useState("");
    const [escolhaDoComputador, setEscolhaDoComputador] = useState("");
    const [resultadoFinal, setResultadoFinal] = useState("");

    const [pontosUsuario, setPontosUsuario] = useState(0);
    const [pontosComputador, setPontosComputador] = useState(0);

    async function jogar(escolha) {
        try{
            const respostaHTTP = await fetch(`http://localhost:3000/jogar/${escolha}`);
            const dadosDaAPI = await respostaHTTP.json();
            setEscolhaDoUsuario(dadosDaAPI.usuario);
            setEscolhaDoComputador(dadosDaAPI.computador);
            setResultadoFinal(dadosDaAPI.vencedor);

            if(dadosDaAPI.vencedor === "Você ganhou!"){
                setPontosUsuario(pontosUsuario + 1);
            }else if(dadosDaAPI.vencedor === "O computador ganhou!"){
                setPontosComputador(pontosComputador + 1);
            }
        }catch(erro){
            console.error("Erro ao conectar com a API:", erro);
            setResultadoFinal("Erro no servidor. A API está ligada?");
        }
    }

    return (
        <div className="container">
            <h1>📄✂️ Jokenpô + Lagarto e Spock 🦎🖖</h1>

            <div className="placar">
                <div className="pontos-box voce">
                    <h2>Você</h2>
                    <h1>{pontosUsuario}</h1>
                </div>
                <div className="pontos-box pc">
                    <h2>PC</h2>
                    <h1>{pontosComputador}</h1>
                </div>
            </div>

            <div className="botoes">
                <button className="btn-jogada" onClick={() => jogar("pedra")}>🪨 Pedra</button>
                <button className="btn-jogada" onClick={() => jogar("papel")}>📄 Papel</button>
                <button className="btn-jogada" onClick={() => jogar("tesoura")}>✂️ Tesoura</button>
                <button className="btn-jogada" onClick={() => jogar("lagarto")}>🦎 Lagarto</button>
                <button className="btn-jogada" onClick={() => jogar("spock")}>🖖 Spock</button>
            </div>

            <div className="resultado-box">
                <p>Você escolheu: <strong>{escolhaDoUsuario || "..."}</strong> </p>
                <p>Computador escolheu: <strong>{escolhaDoComputador || "..."}</strong> </p>
                <h2 style={{ marginTop: '1rem', color: resultadoFinal === 'Você ganhou!' ? '#a6e3a1' : resultadoFinal === 'O computador ganhou!' ? '#f38ba8' : '#cdd6f4' }}>
                    {resultadoFinal || "Aguardando jogada..."}
                </h2>
            </div>
        </div>
    );
}

export default App;