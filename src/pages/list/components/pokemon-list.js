import React from 'react';
import PokemonItem from './pokemon-item';
import './pokemon-list.scss';

const PokemonList = (props) => (
  <div className="Pokemon-list">
    <div className="Pokemon-list-header">
      <p className="Pokemon-list-header-title">Pokedex</p>
      <p className="Pokemon-list-header-count">
        Showing
        <span className="count-number">{props.data.length}</span>
        Pokemons
      </p>
    </div>
    <div className="Pokemon-list-container">
      {
        props.data.map((e, i) => (
          <PokemonItem {...e} key={i}/>
        ))
      }
    </div>
  </div>
);

export default PokemonList;
