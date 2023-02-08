import React, { Component } from "react";
import SideBar from "../common/SideBar";
import AppoinmentTable from "../common/AppoinmentTable";
import AppoinmentRightSide from "../common/AppoinmentRightSide";

class InstructorAppoinment extends Component {
  render() {
    return (
      <div className="instruct">
        <div className="instructGlass">
          <SideBar />
          <AppoinmentTable />
          <AppoinmentRightSide />
        </div>
      </div>
    );
  }
}

export default InstructorAppoinment;
