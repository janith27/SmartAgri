import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddJournal = () => {
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
        // console.log("Successfully Added");

        document.getElementById("journalAddForm").reset();
        window.location.reload(false);
        toast.success("Journal Submit Successfully");
      })

      .catch(({ Response }) => {});
  };

  return (
    <Fragment>
      <div className="appoinmentback">
        <div>Add Journals</div>
        <div className="journalviews">
          <Form id="journalAddForm" onSubmit={(event) => createJournal(event)}>
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
      <ToastContainer />
    </Fragment>
  );
};

export default AddJournal;
