import React, { useState } from "react";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Citylist from "../../components/dropdownlist/Citylist.json";

function FarmerUpdate() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    title: "",
    fname: "",
    lname: "",
    street1: "",
    street2: "",
    city: "",
    mobileno: "",
    crop: "",
  });

  const {
    title,
    fname,
    lname,
    street1,
    street2,
    city,
    mobileno,
    crop,
  } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(AppURL.UpdateFarmer, formData);
      console.log(res.data);
      setFormData({
        email: "",
        message: "",
        title: "",
        fname: "",
        lname: "",
        street1: "",
        street2: "",
        city: "",
        mobileno: "",
        crop: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="name">Name</label>
    //     <input type="text" name="name" value={name} onChange={handleChange} />
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email</label>
    //     <input
    //       type="email"
    //       name="email"
    //       value={email}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="message">Message</label>
    //     <textarea name="message" value={message} onChange={handleChange} />
    //   </div>
    //   <button type="submit">Update</button>
    // </form>

    <Form className="onboardForm" onSubmit={handleSubmit} id="fromreset">
      <h4 className="section-title-login"> FARMER Update </h4>
      <select
      name="title"
      onChange={handleChange}
        className="form-control m-2"
      >
        <option value="" selected disabled defaultValue={{title}}>
        
        </option >
        
        <option value="Mr">Mr</option>
        <option value="Miss">Miss</option>
        <option value="Mrs">Mrs</option>
      </select>
   
      <Row>
        <Col>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={handleChange}
          />
        </Col>

        <Col>
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <input
        type="text"
        name="mobileno"
        value={mobileno}
        onChange={handleChange}
      />
      <Row>
        <Col>
          <input
            type="text"
            name="street1"
            value={street1}
            onChange={handleChange}
          />
        </Col>

        <Col>
          <input
            type="text"
            name="street2"
            value={street2}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <select
      name="city"
        onChange={handleChange}
        className="form-control m-2"
      >
        <option value="" selected disabled defaultValue={ {city}}>
        </option>

        {Citylist.map((getcity) => (
          <option value={getcity.value}>{getcity.cname}</option>
        ))}
      </select>
      {/* end new add */}
      <input
        type="text"
        name="crop"
        value={crop}
        onChange={handleChange}
      />
      
      <Button type="submit" className="btn btn-block m-2 site-btn-login">
        {" "}
        Register{" "}
      </Button>
      
    </Form>
  );
}

export default FarmerUpdate;
