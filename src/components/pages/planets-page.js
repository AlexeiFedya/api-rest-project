import React, { Component } from 'react';
import PlanetDetails from '../sw-components/planet-details';
import {PlanetList} from '../sw-components/item-lists';
import Row from '../row/row';

export default class PlanetsPage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />} />
    );
  }
}
