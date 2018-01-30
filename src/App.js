import React, { Component } from 'react';
import AppLayout from './AppLayout';
import PokemonList from './pages/list/components/pokemon-list';
import Header from './widgets/components/header';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Header />
        <PokemonList />
      </AppLayout>
    );
  }
}

export default App;
