import React, { Component } from "react";
import Plants from "../../data/Plants";
import MenuItem from "./MenuItem";
import PlantDetail from "./PlantDetail";

class Menu extends Component {
  state = {
    plants: Plants,
    selectedPlant: null,
  };

  onPlantSelect = (plant) => {
    this.setState(
      {
        selectedPlant: plant,
      }
    );
  };

  render() {
    const menu = this.state.plants.map((item) => {
      return (
        <MenuItem
          onPlantSelect={() => this.onPlantSelect(item)}
          plants={item}
          key={item.id}
        />
      );
    });

    let plantDetail = null;
    if (this.state.selectedPlant != null) {
      plantDetail = <PlantDetail plant={this.state.selectedPlant} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{menu ? menu : null}</div>
          <div className="col-6">{plantDetail}</div>
        </div>
      </div>
    );
  }
}

export default Menu;
