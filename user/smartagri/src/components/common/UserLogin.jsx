import React, { Component, Fragment } from 'react'
import { Container, Row , Col, Button, Form } from 'react-bootstrap'
import Login from '../../assest/images/login.png'
import {Link, Navigate} from "react-router-dom"
import axios from 'axios'
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UserLogin extends Component {

  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      role:'',
      message:'',
      loggedIn:false
    }
  }

//Login Form Submit Method
formSubmit = (e)=>{
  e.preventDefault();
  const data ={
    email:this.state.email,
    password:this.state.password
  }

  axios.post(AppURL.UserLogin,data).then(response =>{ 

      localStorage.setItem('token',response.data.token);
      // localStorage.setItem('role',response.data.user.role);
      this.setState({loggedIn:true});
      this.setState({role:response.data.user.role});
      

  }).catch(error=>{
    console.log(error);
      this.setState({message:error.response.data.message})
      toast.error(this.state.message,{
      position: "top-right"
    });
  }); 

}

  render() {

    // After loging redirect to loging page //

    if(this.state.loggedIn){
      if(this.state.role==1)
      {
        return <Navigate to ='/farmerdashboard' />
      }
      else if(this.state.role==2)
      {
        return <Navigate to ='/instructordashboard' />
      }
      else if(this.state.role==1)
      {
        return <Navigate to ='/farmerdashboard' />
      }
        
    }

    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <Row className="text-center">
                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>

                  <Form className="onboardForm" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login">User Sign in</h4>
                    <h6 className="section-sub-title">Please Enter Your Mobile Number</h6>

                    <input className="form-control m-2" type="text" placeholder="Enter Email Address" onChange={(e)=>{this.setState({email:e.target.value})}} />
                    <input className="form-control m-2" type="password" placeholder="Enter Your Password" onChange={(e)=>{this.setState({password:e.target.value})}} />

                    <Button type="submit" className="btn btn-block m-2 site-btn-login">Login</Button>
                    <div class="font-weight-light">
                      <hr/>
                      <p className="section-sub-title">Forget My Password? :
                        <Link to="/forgetpassword" className="h6 btn"><Button variant="link">Forget Password</Button></Link>
                      </p>
                      <p className="section-sub-title">If you not have an account :
                        <Link to="/registrationchose" className="h6 btn"><Button variant="link">Create an account</Button></Link>
                      </p>
                      
                    </div>
                    
                  </Form>

                </Col>

                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Login} />
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}

export default UserLogin