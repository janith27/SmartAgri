import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Logo from '../../assest/images/smartagrilogo.png'
import {Link} from "react-router-dom"
import InstructorMegaMenuMobile from './InstructorMegaMenuMobile';

class InstructorNavMobile extends Component {
    constructor(){
        super();
        this.state={
             SideNavState: "sideNavClose",
             ContentOverState: "ContentOverlayClose"
        }
    }
    
    logout=()=>{
        localStorage.clear();
    }
    
    MenuBarClickHandler=()=>{
        this.SideNavOpenClose();
    }
    
    ContentOverlayClickHandler=()=>{
        this.SideNavOpenClose();
    }
    
    
    SideNavOpenClose=()=>{
        let SideNavState = this.state.SideNavState;
        let ContentOverState = this.state.ContentOverState;
        if(SideNavState==="sideNavOpen"){
             this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})
    
        }
        else{
             this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
        }
    }

  render() {
    return (
        <Fragment>
        <div className="TopSectionDown">
    
        <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
            <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
                <div class="d-flex justify-content-between">
                <Link to="/"><img className="nav-logo" src={Logo}/></Link>
                
                <Button onClick={this.MenuBarClickHandler} className="bar-btn justify-content-end"><i className="fa fa-bars"></i></Button>
                </div>
                
            </Col>

            </Row>
        </Container>
        <div className={this.state.SideNavState}>
        <InstructorMegaMenuMobile />
        </div>

        <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

        </div>

        </div>
  </Fragment>
    )
  }
}

export default InstructorNavMobile
