import React, { Fragment, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function SupplierView() {
  const [supData, setSupData] = useState();

  const sendRequest = async () => {
    const res = await axios
      .get(AppURL.SupplierData)
      .catch((err) => console.log(err));
    const data = await res.data;
    // console.log(data);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setSupData(data));
  }, []);
  //   console.log(supData);

  const deleteHandle = (event) => {
    let logEmail = event.target.getAttribute("logEmail");
    // console.log(logEmail);
    axios
      .delete(AppURL.DeleteSupplier(logEmail))
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
        <h3 className="adminViewTitle">Supplier Details</h3>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Street-1</th>
              <th>Street-2</th>
              <th>City</th>
              <th>Mobile No</th>
              <th>Items</th>
              <th>Business Reg. No.</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {supData &&
              supData.map((supData, index) => (
                <tr>
                  <td>{supData.title}</td>
                  <td>{supData.fname}</td>
                  <td>{supData.lname}</td>
                  <td>{supData.email}</td>
                  <td>{supData.street1}</td>
                  <td>{supData.street2}</td>
                  <td>{supData.city}</td>
                  <td>{supData.mobileno}</td>
                  <td>{supData.items}</td>
                  <td>{supData.bisregnum}</td>
                  <td>{supData.created_at}</td>
                  <td>{supData.updated_at}</td>
                  <td>
                    <Link to={"/supplierupdate/" + supData.email}>
                      <Button logEmail={supData.email} onClick={editHandle}>
                        Edit
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      logEmail={supData.email}
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

export default SupplierView;
