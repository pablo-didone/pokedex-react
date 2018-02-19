import React from "react";

const Search = props => (
  <form onSubmit={props.onSubmit} className="Search">
    <input
      placeholder="Search"
      className="Search-input"
      type="text"
      value={props.searchValue}
      onChange={props.onInputChange}
    />
  </form>
);

export default Search;
