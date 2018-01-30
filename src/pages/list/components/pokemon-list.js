import React from 'react';
import PokemonItem from './pokemon-item';
import './pokemon-list.scss';

const PokemonList = (props) => (
  <div className="Pokemon-list">
  {
    [1,2,3,4,5,6,7,8,9,10,11].map((e, i) => (
      <PokemonItem />
    ))
  }
  </div>
);

export default PokemonList;
