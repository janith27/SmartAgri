import React, { Fragment, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FarmersView() {
  const [famData, setFamData] = useState();
//   const [email, setEmail] = useEffect();

  const sendRequest = async () => {
    const res = await axios
      .get(AppURL.FarmerData)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setFamData(data));
  }, []);
  //   console.log(famData);

  const deleteHandle = (event) => {
    let logEmail = event.target.getAttribute("logEmail");
    console.log(logEmail);
    axios
      .delete(AppURL.DeleteFarmer(logEmail))
      .then((response) => {
        this.state({ pageRefreshStatus: true });
        window.location.reload(true);
      })
      .catch((error) => {
        toast.error("Unable to Delete", { position: "top-left" });
        window.location.reload(true);
      });
  };
  const editHandle = () => {

  };
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
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {famData &&
              famData.map((famData, index) => (
                <tr>
                  <td>{famData.email}</td>
                  <td>{famData.title}</td>
                  <td>{famData.fname}</td>
                  <td>{famData.lname}</td>
                  <td>{famData.street1}</td>
                  <td>{famData.street2}</td>
                  <td>{famData.mobileno}</td>
                  <td>{famData.city}</td>
                  <td>{famData.crop}</td>
                  <td>
                    <Button logEmail={famData.email} onClick={editHandle}>Edit</Button>
                  </td>
                  <td>
                    <Button logEmail={famData.email} variant="danger" onClick={deleteHandle}>
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

export default FarmersView;
