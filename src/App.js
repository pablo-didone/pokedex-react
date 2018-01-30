import React, { Component } from 'react';
import AppLayout from './AppLayout';
import PokemonList from './pages/list/components/pokemon-list';
import Header from './widgets/components/header';
import data from './pokemons.json';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Header />
        <PokemonList data={data}/>
      </AppLayout>
    );
  }
}

export default App;
