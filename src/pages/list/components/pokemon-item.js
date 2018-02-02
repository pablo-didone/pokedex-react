import React from "react";
import { Link } from "react-router-dom";
import "./pokemon-item.scss";

const PokemonItem = props => (
  <div className="PokemonItem">
    <div className="header">
      <p className="pokemon-name">{props.name}</p>
      <p className="pokemon-type">{props.species}</p>
      <p className="pokemon-number">{`#${props.id}`}</p>
    </div>
    <div className="pokemon-image">
      <Link to={`/pokemons/${props.name}`}>
        <img
          src={require(`../../../assets/images/pokemons/${props.name.toLowerCase()}.jpg`)}
          alt={props.name}
        />
      </Link>
    </div>
    <div className="pokemon-types">
      {props.type.map((e, i) => (
        <span className={`type-label type-${e.toLowerCase()}`} key={i}>
          {e}
        </span>
      ))}
    </div>
  </div>
);

export default PokemonItem;
