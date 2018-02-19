import React from 'react';
import './header.scss';
import SearchContainer from '../containers/search';


const Header = (props) => (
  <div className="Header">
    <img className="Header-logo" src={require("../../assets/images/pokedex-logo.png")} alt="logo"/>
    <p className="Header-brand">Pokedex</p>
    <SearchContainer />
  </div>
);

export default Header;

