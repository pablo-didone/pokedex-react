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
      <img src={require(`../../../assets/images/pokemons/${props.name.toLowerCase()}.jpg`)} alt={props.name}/>
    </div>
    <div className="pokemon-types">
    {
      props.type.map((e, i) => (
        <span className={`type-label type-${e.toLowerCase()}`} key={i}>{e}</span>
      ))
    }
    </div>
  </div>
);

export default PokemonItem;
