import React from "react";
class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      img: props.img,
      typesOfPokemons: props.typesOfPokemons,
    };
  }

  render() {
    const pokemonsInCard = this.state.typesOfPokemons.map((pokemonType, i) => {
      return (
        <li className="card__list" key={i}>
          {pokemonType}
        </li>
      );
    });

    return (
      <article className="card">
        <img
          className="card__img "
          src={this.state.img}
          alt="Imagen de Pokemon"
        />
        <h3 className="card__title">{this.state.name}</h3>
        <ul className="position">{pokemonsInCard}</ul>
      </article>
    );
  }
}

export default Pokemon;
