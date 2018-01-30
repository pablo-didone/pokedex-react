import React from 'react';
import PokemonItem from './pokemon-item';
import './pokemon-list.scss';

const PokemonList = (props) => (
  <div className="Pokemon-list">
  {
    props.data.map((e, i) => (
      <PokemonItem {...e}/>
    ))
  }
  </div>
);

export default PokemonList;
