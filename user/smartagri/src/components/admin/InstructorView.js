import React, { Fragment, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function InstructorView() {
  const [insData, setInsData] = useState();

  const sendRequest = async () => {
    const res = await axios
      .get(AppURL.InstructorData)
      .catch((err) => console.log(err));
    const data = await res.data;
    // console.log(data);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setInsData(data));
  }, []);
  //   console.log(insData);

  const deleteHandle = (event) => {
    let logEmail = event.target.getAttribute("logEmail");
    // console.log(logEmail);
    axios
      .delete(AppURL.DeleteInstructor(logEmail))
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
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Email</th>
              <th>Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Street-1</th>
              <th>Street-2</th>
              <th>City</th>
              <th>Mobile No</th>
              <th>Crop</th>
              <th>Education</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {insData &&
              insData.map((insData, index) => (
                <tr>
                  <td>{insData.email}</td>
                  <td>{insData.title}</td>
                  <td>{insData.fname}</td>
                  <td>{insData.lname}</td>
                  <td>{insData.street1}</td>
                  <td>{insData.street2}</td>
                  <td>{insData.city}</td>
                  <td>{insData.mobileno}</td>
                  <td>{insData.crop}</td>
                  <td>{insData.edu}</td>
                  <td>
                    <Button logEmail={insData.email} onClick={editHandle}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      logEmail={insData.email}
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

export default InstructorView;