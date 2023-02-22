import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function SideBarMenu() {
  return (
    <Fragment>
      <div className="adminaccordionMenuDiv">
        <div className="adminaccordionMenuDivInside">
          <Link to="/adminfarmerview">
            <button className="adminaccordion">
              <img className="adminaccordionMenuIcon" />
              &nbsp; Farmer Details
            </button>
          </Link>
          <Link to="/admininstructorview">
            <button className="adminaccordion">
              <img className="adminaccordionMenuIcon" />
              &nbsp; Instructor Details
            </button>
          </Link>
          <Link to="/adminsupplierview">
            <button className="adminaccordion">
              <img className="adminaccordionMenuIcon" />
              &nbsp; Supplier Details
            </button>
          </Link>
          <Link to="/anyusermsgview">
            <button className="adminaccordion">
              <img className="adminaccordionMenuIcon" />
              &nbsp; Any User Messages
            </button>
          </Link>
          <Link to="/adminregisterview">
            <button className="adminaccordion">
              <img className="adminaccordionMenuIcon" />
              &nbsp; Register Admin
            </button>
          </Link>
          <Link to="/adminview">
            <button className="adminaccordion">
              <img className="adminaccordionMenuIcon" />
              &nbsp; Admin Details
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBarMenu;
