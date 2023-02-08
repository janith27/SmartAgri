import React, { Component } from "react";
import NewUserFarmer from "./NewUserFarmer";

import Updates from "./Updates";

class RightSide extends Component {
  render() {
    return (
      <div className="RightSide">
        <div>
          <h3>
            <b>Updates</b>
          </h3>
          <Updates />
        </div>
        <div>
          <h3>
            <b>New Join Farmers</b>
          </h3>
          <NewUserFarmer />
        </div>
      </div>
    );
  }
}

export default RightSide;
