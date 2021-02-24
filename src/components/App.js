import "./App.scss";
import PokeList from "./PokeList";
import pokemons from "../data/data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi lista de Pokemon</h1>
      </header>
      <main>
        <PokeList pokemons={pokemons} />
      </main>
    </div>
  );
}

export default App;
