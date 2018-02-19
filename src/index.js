import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import data from "./pokemons.json";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import pokemonListReducer from './reducers/pokemon-list';

const initialState = {
  pokemonList: data,
  filteredPokemonList: []
};

const store = createStore(pokemonListReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
