import React, { useEffect, useState } from "react";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { Row, Col, Form, Button } from "react-bootstrap";
import Citylist from "../../components/dropdownlist/Citylist.json";
import { useParams, useNavigate } from "react-router-dom";

function FarmerUpdate() {
  const navigate = useNavigate();
  const famData = useParams().keyemail;
  const [farmerData, setFarmerData] = useState();
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchDetails = async () => {
    const res = await axios
      .get(AppURL.FarmerData(famData))
      .catch((err) => console.log(err));
    const [data] = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setFarmerData(data.farmerData);
      setInput({
        title: data.farmerData.title,
        fname: data.farmerData.fname,
        lname: data.farmerData.lname,
        street1: data.farmerData.street1,
        street2: data.farmerData.street2,
        city: data.farmerData.city,
        mobileno: data.farmerData.mobileno,
        crop: data.farmerData.crop,
      });
    });
  }, [famData]);

  const sendRequest = async () => {
    const res = await axios
      .put(AppURL.UpdateFarmer(famData), {
        title: input.title,
        fname: input.fname,
        lname: input.lname,
        street1: input.street1,
        street2: input.street2,
        city: input.city,
        mobileno: input.mobileno,
        crop: input.crop,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  console.log(input);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/adminfarmerview"));
  };

  return (
    <Form className="onboardForm" onSubmit={handleSubmit} id="fromreset">
      <h4 className="section-title-login"> FARMER UPDATE </h4>
      <select name="title" onChange={handleChange} className="form-control m-2">
        <option selected disabled defaultValue={input.title}></option>

        <option value="Mr">Mr</option>
        <option value="Miss">Miss</option>
        <option value="Mrs">Mrs</option>
      </select>

      <Row>
        <Col>
          <input
            type="text"
            name="fname"
            value={input.fname}
            onChange={handleChange}
          />
        </Col>

        <Col>
          <input
            type="text"
            name="lname"
            value={input.lname}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <input
        type="text"
        name="mobileno"
        value={input.mobileno}
        onChange={handleChange}
      />
      <Row>
        <Col>
          <input
            type="text"
            name="street1"
            value={input.street1}
            onChange={handleChange}
          />
        </Col>

        <Col>
          <input
            type="text"
            name="street2"
            value={input.street2}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <select name="city" onChange={handleChange} className="form-control m-2">
        <option value="" selected disabled defaultValue={input.city}></option>

        {Citylist.map((getcity) => (
          <option value={getcity.value}>{getcity.cname}</option>
        ))}
      </select>
      {/* end new add */}
      <input
        type="text"
        name="crop"
        value={input.crop}
        onChange={handleChange}
      />

      <Button type="submit" className="btn btn-block m-2 site-btn-login">
        Update
      </Button>
    </Form>
  );
}

export default FarmerUpdate;
