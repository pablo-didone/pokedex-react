const pokemonListReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_POKEMON": {
      if (action.payload.name === "") {
        return state;
      }

      const filteredPokemonList = state.pokemonList.filter(e =>
        e.name.toLowerCase().includes(action.payload.name.toLowerCase())
      );

      if (filteredPokemonList.length === 0) {
        return state;
      }

      return Object.assign({}, state, { filteredPokemonList });
    }

    default:
      return state;
  }
};

export default pokemonListReducer;
