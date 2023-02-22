import React, { Fragment, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminView() {
  const [adminData, setAdminData] = useState();

  const sendRequest = async () => {
    const res = await axios
      .get(AppURL.AdminData)
      .catch((err) => console.log(err));
    const data = await res.data;
    // console.log(data);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setAdminData(data));
  }, []);
  //   console.log(adminData);

  const deleteHandle = (event) => {
    let logId = event.target.getAttribute("logId");
    // console.log(logId);
    axios
      .delete(AppURL.AdminDelete(logId))
      .then((response) => {
        this.state({ pageRefreshStatus: true });
        window.location.reload(true);
      })
      .catch((error) => {
        toast.error("Unable to Delete", { position: "top-left" });
        window.location.reload(true);
      });
  };
  
  return (
    <Fragment>
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {adminData &&
              adminData.map((adminData, index) => (
                <tr>
                  <td>{adminData.id}</td>
                  <td>{adminData.name}</td>
                  <td>{adminData.email}</td>
                  <td>{adminData.created_at}</td>
                  <td>{adminData.updated_at}</td>
                  <td>
                    <Button
                      logId={adminData.id}
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

export default AdminView;
