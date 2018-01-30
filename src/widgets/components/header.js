import React from 'react';
import './header.scss';

const Header = (props) => (
  <div className="Header">
    <img className="Header-logo" src={require("../../assets/images/pokedex-logo.png")} />
    <p className="Header-brand">Pokedex</p>
  </div>
);

export default Header;

