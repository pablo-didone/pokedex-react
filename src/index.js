import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import data from "./pokemons.json";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  pokemonList: data
};

const store = createStore(state => state, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
