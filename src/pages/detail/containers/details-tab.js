import React, { Component } from "react";
import DetailsTabLayout from "../components/details-tab-layout";

class DetailsTab extends Component {
  state = {
    selectedTab: 1
  };

  selectTab = tab => {
    this.setState({ selectedTab: tab });
  };

  render() {
    return (
      <DetailsTabLayout
        pokemon={this.props.pokemon}
        selectedTab={this.state.selectedTab}
        onSelectTab={this.selectTab}
      />
    );
  }
}

export default DetailsTab;
