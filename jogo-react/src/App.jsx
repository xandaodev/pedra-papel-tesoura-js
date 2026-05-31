const elementos = ["pedra", "papel", "tesoura"];


function sortearElementoComputador(elementos) {
    const indiceAleatorio = Math.floor(Math.random() * elementos.length);
    return elementos[indiceAleatorio];
}


function App() {

  function jogar(escolhaDoUsuario) {
      const escolhaComputador = sortearElementoComputador(elementos);
    console.log("Voce clicou em: " + escolhaDoUsuario + "; e o computador escolheu: " + escolhaComputador);
  }
  return (
      <div>
        <h1>Pedra, Papel e Tesoura</h1>

        <button onClick={() => jogar("pedra")}>Pedra</button>
        <button onClick={() => jogar("papel")}>Papel</button>
        <button onClick={() => jogar("tesoura")}>Tesoura</button>
      </div>
  );
}
export default App;