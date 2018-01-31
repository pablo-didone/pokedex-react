import React from "react";
import "./pokemon-details.scss";
import DetailsTab from "../containers/details-tab";

const PokemonDetails = props => (
  <div className="PokemonDetails">
    <div className="Pokemon-details-header">
      <p className="Pokemon-details-header-title">Bulbasaur</p>
      <p className="Pokemon-details-header-number">#001</p>
    </div>
    <div className="PokemonDetails-container">
      <div className="PokemonDetails-image">
        <img
          src={require("../../../assets/images/pokemons/bulbasaur.jpg")}
          alt="bulbasaur"
        />
      </div>
      <div className="PokemonDetails-details">
        <DetailsTab />
      </div>
    </div>
  </div>
);

export default PokemonDetails;
