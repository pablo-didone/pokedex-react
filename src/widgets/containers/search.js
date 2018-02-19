import React, { Component } from "react";
import Search from "../components/search";
import { connect } from "react-redux";

class SearchContainer extends Component {
  state = {
    searchValue: ""
  };

  searchPokemonByName = name => {
    this.props.dispatch({
      type: "SEARCH_POKEMON",
      payload: { name }
    });
  };

  handleSubmit = (e, query) => {
    e.preventDefault();
  };

  handleInputChange = e => {
    this.setState({
      searchValue: e.target.value
    });

    this.searchPokemonByName(e.target.value);
  };

  render() {
    return (
      <Search
        onSubmit={this.handleSubmit}
        onInputChange={this.handleInputChange}
        value={this.state.searchValue}
      />
    );
  }
}

export default connect()(SearchContainer);
