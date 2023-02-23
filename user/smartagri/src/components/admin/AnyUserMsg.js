import React, { Fragment, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AnyUserMsg() {
  const [msgData, setMsgData] = useState();

  const sendRequest = async () => {
    const res = await axios
      .get(AppURL.AnyUserMessage)
      .catch((err) => console.log(err));
    const data = await res.data;
    // console.log(data);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setMsgData(data));
  }, []);
  //   console.log(msgData);

  const deleteHandle = (event) => {
    let logId = event.target.getAttribute("logId");
    // console.log(logId);
    axios
      .delete(AppURL.DeleteAnyUserMessage(logId))
      .then((response) => {
        this.state({ pageRefreshStatus: true });
        window.location.reload(true);
      })
      .catch((error) => {
        toast.error("Unable to Delete", { position: "top-left" });
        window.location.reload(true);
      });
  };
  const editHandle = () => {};
  return (
    <Fragment>
      <Container>
      <h3 className="adminViewTitle">Any User Message</h3>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Message Date</th>
              <th>Message Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {msgData &&
              msgData.map((msgData, index) => (
                <tr>
                  <td>{msgData.id}</td>
                  <td>{msgData.name}</td>
                  <td>{msgData.email}</td>
                  <td>{msgData.message}</td>
                  <td>{msgData.msg_date}</td>
                  <td>{msgData.msg_time}</td>
                  <td>
                    <Button
                      logId={msgData.id}
                      variant="danger"
                      onClick={deleteHandle}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
}

export default AnyUserMsg;
