import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";

function JournelViews() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };
  const createJournal = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    console.log(image);
    formData.append("image", image);

    await axios
      .post(AppURL.JournalData, formData)
      .then(({ data }) => {
        console.log("Successfully Added");
      })
      .then(navigate("/instructordashboard"))
      .catch(({ Response }) => {});
  };

  return (
    <div className="appoinmentback">
      <div>Add Journals</div>
      <div className="journalviews">
        <Form onSubmit={(event) => createJournal(event)}>
          <Form.Label>Journal Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Journal Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Form.Label>Description :</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <Form.Label>Upload Image :</Form.Label>
          <input type="file" onChange={handleImageChange} />
          <Button className="" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="empty"></div>
    </div>
  );
}
export default JournelViews;
