import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AppoinmentRightSide extends Component {
  render() {
    return (
      <div>
        <div className="searchItem">
          <div className="siDec">
            <h3 className="siTitle">Check Appoinment Details</h3>

            <Form className="form">
              <label className="label">
                <b>UserID :</b>{" "}
              </label>

              <Form.Control type="text" placeholder="Enter UserID" />
            </Form>
            <Button className="button" variant="primary">
              Search{" "}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppoinmentRightSide;
