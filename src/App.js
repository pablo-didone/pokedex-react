import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import AppLayout from "./AppLayout";
import PokemonList from "./pages/list/components/pokemon-list";
import Header from "./widgets/components/header";
import data from "./pokemons.json";
import PokemonDetails from "./pages/detail/components/pokemon-details";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Link to="/pokemons">
          <Header />
        </Link>
        <Switch>
          <Route
            path="/pokemons/:name"
            render={({ match }) => {
              const pokemon = data.find(e => e.name === match.params.name);

              return <PokemonDetails pokemon={pokemon} />;
            }}
          />
          <Route path="/pokemons" render={() => <PokemonList data={data} />} />
        </Switch>
      </AppLayout>
    );
  }
}

export default App;
