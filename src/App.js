import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import AppLayout from "./AppLayout";
import PokemonList from "./pages/list/components/pokemon-list";
import Header from "./widgets/components/header";
import PokemonDetails from "./pages/detail/components/pokemon-details";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppLayout>
          <Link to="/pokemons">
            <Header />
          </Link>
          <Switch>
            <Route
              path="/pokemons/:name"
              render={({ match }) => {
                const pokemon = this.props.pokemonList.find(
                  e => e.name === match.params.name
                );

                return <PokemonDetails pokemon={pokemon} />;
              }}
            />
            <Route
              path="/pokemons"
              render={() => (
                <PokemonList
                  data={
                    this.props.filteredPokemonList.length
                      ? this.props.filteredPokemonList
                      : this.props.pokemonList
                  }
                />
              )}
            />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state, props) => ({
  pokemonList: state.pokemonList,
  filteredPokemonList: state.filteredPokemonList
});

export default connect(mapStateToProps)(App);
