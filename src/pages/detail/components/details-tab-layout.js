import React from "react";
import "./details-tab-layout.scss";

const DetailsTabLayout = props => (
  <div className="DetailsTabLayout">
    <div className="DetailsTab-tab-container">
      <div
        className={`DetailsTab-tab ${props.selectedTab === 1 && "active"}`}
        onClick={() => props.onSelectTab(1)}
      >
        <p className="DetailsTab-tab-text">Pokedex</p>
      </div>
      <div
        className={`DetailsTab-tab ${props.selectedTab === 2 && "active"}`}
        onClick={() => props.onSelectTab(2)}
      >
        <p className="DetailsTab-tab-text">Stats</p>
      </div>
      <div
        className={`DetailsTab-tab ${props.selectedTab === 3 && "active"}`}
        onClick={() => props.onSelectTab(3)}
      >
        <p className="DetailsTab-tab-text">Evolution</p>
      </div>
    </div>
    <div className="DetailsTab-body">
      {props.selectedTab === 1 ? (
        <div className="DetailsTab-body-pokedex">
          <div className="DetailsTab-body-row DetailsTab-body-pokedex-type">
            <p className="DetailsTab-body-title">Type</p>
            {props.pokemon.type.map((e, i) => (
              <span
                className={`DetailsTab-body-type-pill type-${e.toLowerCase()}`}
                key={i}
              >
                {e}
              </span>
            ))}
          </div>
          <div className="DetailsTab-body-row DetailsTab-body-pokedex-height-weight">
            <p className="DetailsTab-body-title">Height</p>
            <p className="DetailsTab-body-desc">{props.pokemon.height}</p>
          </div>
          <div className="DetailsTab-body-row DetailsTab-body-pokedex-height-weight">
            <p className="DetailsTab-body-title">Weight</p>
            <p className="DetailsTab-body-desc">{props.pokemon.weight}</p>
          </div>
          <div className="DetailsTab-body-row DetailsTab-body-pokedex-abilities">
            <p className="DetailsTab-body-title">Abilities</p>
            <ul className="DetailsTab-body-list">
              {props.pokemon.abilities.map((el, i) => <li>{el}</li>)}
            </ul>
          </div>
        </div>
      ) : props.selectedTab === 2 ? (
        <div className="DetailsTab-body-stats">
          {Object.keys(props.pokemon.stats).map((el, i) => (
            <div className="DetailsTab-body-row" key={i}>
              <p className="DetailsTab-body-title">{el.toUpperCase()}</p>
              <p className="DetailsTab-body-stats-value">
                {props.pokemon.stats[el]}
              </p>
            </div>
          ))}
        </div>
      ) : (
        props.selectedTab === 3 && (
          <div className="DetailsTab-body-evolution">
            {props.pokemon.evolution.map((e, i) => (
              <div className="DetailsTab-body-evolution-item" key={i}>
                <img
                  src={require(`../../../assets/images/pokemons/${e.toLowerCase()}.jpg`)}
                  alt="asd"
                />
                <p className="DetailsTab-body-evolution-item-name">{e}</p>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  </div>
);

export default DetailsTabLayout;
