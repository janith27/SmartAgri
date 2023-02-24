import React, { Fragment } from "react";
import { Col,Row } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import AreaCard from "./charts/AreaCard";
import PieCard from "./charts/PieCard";

function AdminDashboard() {
  return (
    <Fragment>
      <Row>
        <Col>
        <PieCard />
        </Col>
        <Col>
        <AreaCard />
        </Col>
      </Row>
      
    </Fragment>
  );
}

export default AdminDashboard;
