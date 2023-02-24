import React, { Fragment, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VisitorView() {
    const [visitData, setVisitData] = useState();

    const sendRequest = async () => {
      const res = await axios
        .get(AppURL.VisitorData)
        .catch((err) => console.log(err));
      const data = await res.data;
      // console.log(data);
      return data;
    };
    useEffect(() => {
      sendRequest().then((data) => setVisitData(data));
    }, []);
    //   console.log(visitData);
  
    const editHandle = () => {};
    return (
      <Fragment>
        <Container>
        <h3 className="adminViewTitle">Visitor Details</h3>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>IP Address</th>
                <th>Visit Time</th>
                <th>Visit Date</th>
              </tr>
            </thead>
            <tbody>
              {visitData &&
                visitData.map((visitData, index) => (
                  <tr>
                    <td>{visitData.id}</td>
                    <td>{visitData.ip_address}</td>
                    <td>{visitData.visit_time}</td>
                    <td>{visitData.visit_date}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </Fragment>
    );
}

export default VisitorView