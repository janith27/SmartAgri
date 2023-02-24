import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assest/images/smartagrilogo.png";
import { Link } from "react-router-dom";


function AdminNaviMobile() {
    const [sideNavState,setSideNavState] = useState("sideNavClose")
    const [contentOverState, setContentOverState] = useState("ContentOverlayClose");
   
  const logout = () => {
    localStorage.clear();
  };

 const MenuBarClickHandler = () => {
    this.SideNavOpenClose();
  };

 const ContentOverlayClickHandler = () => {
    this.SideNavOpenClose();
  };

 const SideNavOpenClose = () => {
    let sideNavState = sideNavState;
    let contentOverState = contentOverState;
    if (sideNavState === "sideNavOpen") {
      this.setState({
        sideNavState: "sideNavClose",
        contentOverState: "ContentOverlayClose",
      });
    } else {
      this.setState({
        sideNavState: "sideNavOpen",
        contentOverState: "ContentOverlayOpen",
      });
    }
  };
  return (
    <Fragment>
      <div className="TopSectionDown">
        <Container
          fluid={"true"}
          className="fixed-top shadow-sm p-2 mb-0 bg-white"
        >
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div class="d-flex justify-content-between">
                <Link to="/">
                  <img className="nav-logo" src={Logo} />
                </Link>

                <Button
                  onClick={MenuBarClickHandler}
                  className="bar-btn justify-content-end"
                >
                  <i className="fa fa-bars"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={sideNavState}>
          {/* <InstructorMegaMenuMobile /> */}
        </div>

        <div
          onClick={ContentOverlayClickHandler}
          className={contentOverState}
        ></div>
      </div>
    </Fragment>
  );
}

export default AdminNaviMobile;
