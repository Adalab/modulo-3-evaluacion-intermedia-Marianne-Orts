import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const datosArray = this.props.pokemons.map((pokemon, i) => {
      return (
        <li className="card__list" key={i}>
          <Pokemon
            name={pokemon.name}
            img={pokemon.url}
            typesOfPokemons={pokemon.types}
          />
        </li>
      );
    });
    return <div className="container">{datosArray}</div>;
  }
}
export default PokeList;
