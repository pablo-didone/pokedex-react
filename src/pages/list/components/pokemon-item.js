import React from 'react';
import './pokemon-item.scss';

const PokemonItem = (props) => (
  <div className="PokemonItem">
    <div className="header">
      <p className="pokemon-name">{props.name}</p>
      <p className="pokemon-type">{props.species}</p>
      <p className="pokemon-number">{`#${props.id}`}</p>
    </div>
    <div className="pokemon-image">
      <img src={require(`../../../assets/images/pokemons/${props.name.toLowerCase()}.jpg`)}/>
    </div>
    <div className="pokemon-types">
      <span className={`type-label type-`}>Grass</span>
      <span className={`type-label type-`}>Poisson</span>
    </div>
  </div>
);

export default PokemonItem;
