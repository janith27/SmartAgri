import React, { Component, Fragment } from "react";

class FarmerPrifile extends Component {
  render() {
    let name;
    let email;
    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
    }

    return (
      <Fragment>
        <h1> User Profile Page </h1>

        <ul className="list-group">
          <li className="list-group-item">Name : {name} </li>
          <li className="list-group-item">Email : {email} </li>
        </ul>
      </Fragment>
    );
  }
}

export default FarmerPrifile;
