import React, { Component } from 'react'
import {Form,Button } from 'react-bootstrap'

class AnyUserMsgform extends Component {
  render() {
    return (
      
        <Form className="onboardForm">
            <h4 className="section-title-login">CONTACT WITH US </h4>
            <h6 className="section-sub-title">Please Contact With Us </h6>
            <input className="form-control m-2" type="text" placeholder="Enter Your Name" />

            <input className="form-control m-2" type="email" placeholder="Enter Email" />

            <input className="form-control m-2" type="text" placeholder="Enter Your Message" />
            <Button className="btn btn-block m-2 site-btn-login"> Send </Button>

        </Form>
      
    )
  }
}

export default AnyUserMsgform
