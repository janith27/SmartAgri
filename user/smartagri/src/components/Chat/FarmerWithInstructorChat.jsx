import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TextChat from "./TextChat";
import VideoChat from "./VideoChat";

class FarmerWithInstructorChat extends Component {
  render() {
    return (
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="text" title="Text Chat">
          <TextChat />
        </Tab>
        <Tab eventKey="video" title="Live Video Chat">
          <VideoChat />
        </Tab>
      </Tabs>
    );
  }
}

export default FarmerWithInstructorChat;
