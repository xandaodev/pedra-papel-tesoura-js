function App() {

  function jogar(escolhaDoUsuario) {
    console.log("Voce clicou em: " + escolhaDoUsuario);
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