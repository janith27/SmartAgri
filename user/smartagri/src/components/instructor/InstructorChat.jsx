import React, { Component } from "react";
import SideBar from "../common/SideBar";
import SideNotify from "./SideNotify";

class InstructorChat extends Component {
  render() {
    return (
      <div className="instruct">
        <div className="instructGlass">
          <SideBar />
          <SideNotify />
        </div>
      </div>
    );
  }
}

export default InstructorChat;
