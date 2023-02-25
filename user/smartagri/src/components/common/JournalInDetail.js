import React, { Component, Fragment } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";

import { Link } from "react-router-dom";

class JournelView extends Component {
  constructor() {
    super();
    this.state = {
      journalDatas: [],
      email: "",
      message: "",
      journalId: "",
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.JournalDetailView(this.state.journalId))
      .then((response) => {
        this.setState({ journalDatas: response.data });
      })
      .catch((error) => {});
  }

  render() {
    this.state.journalId = this.props.journalId;
    const journalData = this.state.journalDatas;
    const MyView = journalData.map((journalData, i) => {
      return (
        <div className="placeContainer">
          <div className="placeWrapper">
            <h1 className="PlaceDistances">{journalData.name}</h1>
            <div className="placeAddress">
              <i class="fa-solid fa-location-dot"></i>
              <div className="placeImgWrapper">
                <img src={journalData.image} />
              </div>
              <br></br>
            </div>
            <span className="PlaceDistancess">
              <div>
                <span>{journalData.description}</span>
              </div>
            </span>
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <Col>
          {/* <div className="d-flex justify-content-center"> */}
          <Row>
            <h1>Journels</h1>
          </Row>
          <Row className="d-flex justify-content-center">{MyView}</Row>

          {/* </div> */}
        </Col>
      </Fragment>
    );
  }
}

export default JournelView;
