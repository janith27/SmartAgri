import React, { Component, Fragment } from "react";
import { Col, Row, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

class CropDetails extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  constructor() {
    super();
    this.state = {
      CropLog: [],
      email: "",
      crop: "",
      description: "",
      message: "",
      pageRefreshStatus: false,
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.CropLogData(this.state.email))
      .then((response) => {
        this.setState({ CropLog: response.data });
      })
      .catch((error) => {});
  }

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      crop: this.state.crop,
      description: this.state.description,
    };

    axios
      .post(AppURL.InputCropLog, data)
      .then((response) => {
        toast.success("Log Submit Successfully", { position: "top-left" });
        this.state({ pageRefreshStatus: true });
        // document.getElementById("croplogform").reset();
        window.location.reload(true);
      })

      .catch((error) => {
        this.setState({ message: error.response.data.message });
        toast.error(this.state.message, {
          position: "top-right",
        });
        window.location.reload(true);
      });
  };

  deleteLog = (event) => {
    let logId = event.target.getAttribute("logId");
    console.log(logId);
    axios
      .delete(AppURL.DeleteCropLog(logId))
      .then((response) => {
        this.state({ pageRefreshStatus: true });
        window.location.reload(true);
      })
      .catch((error) => {
        toast.error("Unable to Delete", { position: "top-left" });
        window.location.reload(true);
      });
  };

  pageRefresh = () => {
    if (this.state.pageRefreshStatus === true) {
      let URL = window.location;
      return <Navigate to={URL} />;
    }
  };

  render() {
    const myUser = this.props.user;
    this.state.email = myUser.email;
    // console.log(myUser.city);
    const HistoryLog = this.state.CropLog;
    const MyView = HistoryLog.map((HistoryLog, i) => {
      return (
        <Card
          border="primary"
          style={{ width: "18rem" }}
          className="crophistorycard"
        >
          <Card.Body>
            <Row>
              <Col xs={4} md={4}>
                <Card.Text>{HistoryLog.date}</Card.Text>
              </Col>
              <Col xs={3} md={3}>
                <Card.Text>{HistoryLog.crop}</Card.Text>
              </Col>
              <Col xs={4} md={4}>
                <Card.Text>{HistoryLog.description}</Card.Text>
              </Col>
              <Col xs={1} md={1}>
                <Button
                  variant="danger"
                  style={{ padding: "1px", fontSize: 15 }}
                  logId={HistoryLog.id}
                  onClick={this.deleteLog}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      );
    });

    return (
      <Fragment>
        <div className="cropdetail d-flex justify-content-center">
          <Row>
            <Col>
              <h1>Crop details</h1>

              <br />
              <h3>Crop History</h3>
              <Row className="d-flex justify-content-center">{MyView}</Row>

              <Form
                id="croplogform"
                onSubmit={this.formSubmit}
                className="onboardForm"
              >
                <h3>ADD Crop Log</h3>
                <input
                  className="form-control m-2"
                  type="text"
                  placeholder="Enter Crop"
                  onChange={(e) => {
                    this.setState({ crop: e.target.value });
                  }}
                />
                <Form.Control
                  className="form-control m-2"
                  as="textarea"
                  rows={3}
                  placeholder="Enter Your Log"
                  onChange={(e) => {
                    this.setState({ description: e.target.value });
                  }}
                />
                <Button
                  id="sendBtn"
                  type="submit"
                  className="btn btn-block m-2 site-btn-login"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
        <ToastContainer />
        {this.pageRefresh()}
      </Fragment>
    );
  }
}

export default CropDetails;
