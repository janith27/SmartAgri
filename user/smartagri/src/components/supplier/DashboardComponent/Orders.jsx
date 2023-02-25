import React, { Fragment, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AppURL from "../../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Orders(user) {
  const supEmail = user.user.email;
  console.log(supEmail);
  const navigate = useNavigate();
  const [product_name, setProduct_Name] = useState("");
  // const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [remark, setRemark] = useState("");
  const [star, setStar] = useState("");

  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("supplier_email", supEmail);
    formData.append("description", description);
    formData.append("qty", qty);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("remark", remark);
    formData.append("star", star);

    await axios.post(AppURL.ProductDatas, formData).then(({ data }) => {
      console.log("Successfully Added");
      toast.success("Product Submit Successfully");
        document.getElementById("productform").reset();
    });
    navigate("/supplierdashboard").catch(({ Response }) => {});
  };

  return (
    <Fragment>
      <div className="appoinmentback">
        <div>Add Product</div>
        <div className="journalviewss">
          <Form name="productform" onSubmit={(event) => createProduct(event)}>
            <Form.Label>Product Name :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              value={product_name}
              onChange={(event) => {
                setProduct_Name(event.target.value);
              }}
            />
            {/* <Form.Label>Product Category :</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          /> */}
            <Form.Label>Description :</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <Row>
              <Col>
                <Form.Label>Quantity :</Form.Label>
                <Form.Control
                  type="text"
                  value={qty}
                  onChange={(event) => {
                    setQty(event.target.value);
                  }}
                />
              </Col>
              <Col>
                <Form.Label>Price :</Form.Label>
                <Form.Control
                  type="text"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </Col>
            </Row>
            <Form.Label>Upload Image :</Form.Label>
            <Form.Control
              type="file"
              value={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
            <Form.Label>Remark:</Form.Label>
            <Form.Control
              type="text"
              value={remark}
              onChange={(event) => {
                setRemark(event.target.value);
              }}
            />
            <Form.Label>Star :</Form.Label>
            <Form.Control
              type="text"
              value={star}
              onChange={(event) => {
                setStar(event.target.value);
              }}
            />
            <Button className="" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="empty"></div>
      </div>
    </Fragment>
  );
}

export default Orders;
