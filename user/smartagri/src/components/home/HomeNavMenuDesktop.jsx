import React, { Component, Fragment } from 'react'
import { Container,Navbar, Row , Col, Button } from 'react-bootstrap'
import Logo from '../../assest/images/easyshop.png'
import {Link} from "react-router-dom"
import { FaUserPlus, FaUserCircle } from "react-icons/fa";

class HomeNavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
        <Navbar fixed={"top"} className="navbar" bg="dark">
          <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Link to="/">
                  <img className="nav-logo" src={Logo}/>
                </Link>
                
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <div className="input-group w-100">
                  <input type="text" className="form-control" />
                  <Button type="button" className="btn site-btn">
                    <i className="fa fa-search"></i>

                  </Button>
                </div>
              </Col>

              <Col className="p-1 mt-1 inverse" lg={4} md={4} sm={12} xs={12}>
                
                <Link to="/" className="h4 btn"><Button variant="link">About</Button></Link>
                <Link to="/" className="h4 btn"><Button variant="success"><FaUserPlus /> Sign up</Button></Link>
                <Link to="/" className="h4 btn"><Button variant="outline-success"><FaUserCircle /> Login</Button></Link>
                
              </Col>

            </Row>
          </Container>
        </Navbar>
        </div>
      </Fragment>
      
    )
  }
}

export default HomeNavMenuDesktop