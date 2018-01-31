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
            <span className="DetailsTab-body-type-pill">Grass</span>
          </div>
          <div className="DetailsTab-body-row DetailsTab-body-pokedex-height-weight">
            <p className="DetailsTab-body-title">Height</p>
            <p className="DetailsTab-body-desc">45654654</p>
          </div>
          <div className="DetailsTab-body-row DetailsTab-body-pokedex-height-weight">
            <p className="DetailsTab-body-title">Weight</p>
            <p className="DetailsTab-body-desc">45654654</p>
          </div>
          <div className="DetailsTab-body-row DetailsTab-body-pokedex-abilities">
            <p className="DetailsTab-body-title">Abilities</p>
            <ul className="DetailsTab-body-list">
              <li>asdasd</li>
              <li>asdasd</li>
            </ul>
          </div>
        </div>
      ) : props.selectedTab === 2 ? (
        [1, 2, 3, 4].map((el, i) => (
          <div className="DetailsTab-body-stats">
            <div className="DetailsTab-body-row">
              <p className="DetailsTab-body-title">Height</p>
              <p className="DetailsTab-body-stats-value">123</p>
            </div>
          </div>
        ))
      ) : (
        props.selectedTab === 3 && (
          <div className="DetailsTab-body-evolution">
            <div className="DetailsTab-body-evolution-item">
              <img
                src={require("../../../assets/images/pokemons/bulbasaur.jpg")}
                alt="asd"
              />
              <p className="DetailsTab-body-evolution-item-name">Bulbasaur</p>
            </div>
          </div>
        )
      )}
    </div>
  </div>
);

export default DetailsTabLayout;
