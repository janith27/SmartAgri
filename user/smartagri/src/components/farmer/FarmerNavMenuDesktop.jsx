import React, { Component, Fragment } from 'react'
import { Container,Navbar, Row , Col, Button } from 'react-bootstrap'
import Logo from '../../assest/images/easyshop.png'
import {Link} from "react-router-dom"
import { FaUserPlus, FaUserCircle } from "react-icons/fa";

class FarmerNavMenuDesktop extends Component {
  render() {
    return (
        <Fragment>
            <div className="TopSectionDown">
                <Navbar fixed={"top"} className="navbar" bg="dark">
                    <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                        <Row>
                            <div class="d-flex justify-content-between">
                            
                                <Link to="/">
                                    <img className="nav-logo" src={Logo}/>
                                </Link>
                                
                                <div>
                                    <Link to="/" className="h4 btn"><Button variant="link">Chat</Button></Link>
                                    <Link to="/registrationchose" className="h4 btn"><Button variant="success"><FaUserPlus />Cart</Button></Link>
                                    <Link to="/login" className="h4 btn"><Button variant="outline-success"><FaUserCircle />Notifiction</Button></Link>
                                </div>
                            </div>
                        
                        </Row>
                    </Container>
                </Navbar>
            </div>
      </Fragment>
    )
  }
}

export default FarmerNavMenuDesktop