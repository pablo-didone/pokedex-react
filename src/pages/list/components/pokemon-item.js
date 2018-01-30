import React from 'react';
import './pokemon-item.scss';

const PokemonItem = () => (
  <div className="PokemonItem">
    <div className="header">
      <p className="pokemon-name">Bulbasaur</p>
      <p className="pokemon-type">Seed pokemon</p>
      <p className="pokemon-number">#001</p>
    </div>
    <div className="pokemon-image">
      <img src={require("../../../assets/images/pokemons/bulbasaur.jpg")}/>
    </div>
    <div className="pokemon-types">
      <span className="type-label">Grass</span>
      <span className="type-label">Poisson</span>
    </div>
  </div>
);

export default PokemonItem;
