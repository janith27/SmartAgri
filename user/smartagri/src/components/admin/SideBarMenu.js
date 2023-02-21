import React, { Fragment } from "react";

function SideBarMenu() {
  return (
    <Fragment>
      <div className="adminaccordionMenuDiv">
        <div className="adminaccordionMenuDivInside">
          
          <button className="adminaccordion">
            <img className="adminaccordionMenuIcon" src="" />
            &nbsp; Farmer Details
          </button>

          <button className="adminaccordion">
            <img className="adminaccordionMenuIcon" src="" />
            &nbsp; Instructor Details
          </button>

          <button className="adminaccordion">
            <img className="adminaccordionMenuIcon" src="" />
            &nbsp; Supplier Details
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBarMenu;
