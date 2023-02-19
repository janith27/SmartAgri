import React, { Component } from "react";

import { InfinitySpin } from "react-loader-spinner";

export class PlaceHolder extends Component {
  render() {

    let isLoading = this.props.isLoading;
    return (
      
        <div className={isLoading}>
            <div className="back">
          <InfinitySpin color="#4fa94d" />
          </div>
        </div>
      
    );
  }
}

export default PlaceHolder;
