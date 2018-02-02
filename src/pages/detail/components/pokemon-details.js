import React from "react";
import "./pokemon-details.scss";
import DetailsTab from "../containers/details-tab";

const PokemonDetails = props => (
  <div className="PokemonDetails">
    <div className="Pokemon-details-header">
      <p className="Pokemon-details-header-title">{props.pokemon.name}</p>
      <p className="Pokemon-details-header-number">{`#${props.pokemon.id}`}</p>
    </div>
    <div className="PokemonDetails-container">
      <div className="PokemonDetails-image">
        <img
          src={require(`../../../assets/images/pokemons/${props.pokemon.name.toLowerCase()}.jpg`)}
          alt={props.pokemon.name}
        />
      </div>
      <div className="PokemonDetails-details">
        <DetailsTab pokemon={props.pokemon} />
      </div>
    </div>
  </div>
);

export default PokemonDetails;
