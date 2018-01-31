import React, { Component } from 'react';
import AppLayout from './AppLayout';
import PokemonList from './pages/list/components/pokemon-list';
import Header from './widgets/components/header';
import data from './pokemons.json';
import PokemonDetails from './pages/detail/components/pokemon-details';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Header />
        <PokemonDetails />
        {/* <PokemonList data={data}/> */}
      </AppLayout>
    );
  }
}

export default App;
