import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Button } from "react-bootstrap";
import Logo from "../../assest/images/smartagrilogo.png";
import { Link } from "react-router-dom";
import { FaUserPlus, FaUserCircle } from "react-icons/fa";

class SupplierNavMenuDesktop extends Component {
  logout = () => {
    localStorage.clear();
  };

  render() {
    let name;
    if (this.props.user) {
      name = this.props.user.name;
    }

    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={"top"} className="navbar" bg="dark">
            <Container
              fluid={"true"}
              className="fixed-top shadow-sm p-2 mb-0 bg-white"
            >
              <Row>
                <div class="d-flex justify-content-between">
                  <Link to="/">
                    <img className="nav-logo" src={Logo} />
                  </Link>
                  <div>
                    <Link to="/supplierdashboard" className="h4 btn">
                      <Button variant="outline-success">Dashboard</Button>
                    </Link>
                    {/* <Link to="/" className="h4 btn">
                      <Button variant="outline-success">Chat</Button>
                    </Link> */}
                    <Link to="/supplierprofile" className="h4 btn">
                      <Button variant="outline-success">Profile</Button>
                    </Link>
                    {/* <Link to="/" className="h4 btn">
                      <Button variant="outline-success">Notifiction</Button>
                    </Link> */}
                    <Link to="/" onClick={this.logout} className="h4 btn">
                      <Button variant="outline-success">Logout</Button>
                    </Link>
                    
                  </div>
                </div>
              </Row>
            </Container>
          </Navbar>
        </div>
      </Fragment>
    );
  }
}

export default SupplierNavMenuDesktop;
