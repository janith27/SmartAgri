import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Login from '../../assest/images/login.png'
import axios from 'axios'
import AppURL from '../../api/AppURL';
import Citylist from '../../components/dropdownlist/Citylist.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SupplierReg extends Component {

  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      password:'',
      password_confirmation:'',
      message:'',
      role:'1',
      loggedIn:false,
      title:"",
      fname:"",
      lname:"",
      street1:"",
      street2:"",
      city:"",
      mobileno:"",
      crop:""
    }
  }

  // Farmer Register Form Submit Method 
  formSubmit = (e) => {
    e.preventDefault();
    const data={
         name:this.state.fname,
         email:this.state.email,
         password:this.state.password,
         password_confirmation:this.state.password_confirmation,
         role:this.state.role,
         title:this.state.title,
         fname:this.state.fname,
         lname:this.state.lname,
         street1:this.state.street1,
         street2:this.state.street2,
         city:this.state.city,
         mobileno:this.state.mobileno,
         crop:this.state.crop
    }

    axios.post(AppURL.FarmerRegister,data).then(response =>{ 

         this.setState({message:response.data.message})

         toast.success(this.state.message,{
              position: "top-right"
         });
        //  document.getElementById("fromreset").reset();

    }).catch(error=>{
         this.setState({message:error.response.data.message})
         toast.error(this.state.message,{
              position: "top-right"
         });
    }); 

}


  render() {
    return (
      <Fragment>
      <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

              <Row className="text-center">
                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                  {/* <Form className="onboardForm">
                    <h4 className="section-title-login"> SUPPLIER REGISTER </h4>
                      
                      <Form.Select aria-label="Default select example " className="form-control m-2">
                        <option value="mr">Mr.</option>
                        <option value="miss">Miss.</option>
                        <option value="mrs">Mrs.</option>
                      </Form.Select>
                      
                      <Row>
                        <Col>
                        <input className="form-control m-2" type="text" placeholder="First Name" />
                        </Col>

                        <Col>
                        <input className="form-control m-2" type="text" placeholder="Last Name" />
                        </Col>
                      </Row>
          
                      <input className="form-control m-2" type="number" placeholder="Mobile Phone Number" />

                      <Row>
                        <Col>
                          <input className="form-control m-2" type="text" placeholder="Street 1" />
                        </Col>

                        <Col>
                          <input className="form-control m-2" type="text" placeholder="Street 2" />
                        </Col>
                      </Row>
                                
                      <Form.Select aria-label="Default select example " className="form-control m-2">
                        <option value="mr">Giriulla</option>
                        <option value="miss">Kurunegalla</option>
                        <option value="mrs">Matara</option>
                      </Form.Select>

                      <input className="form-control m-2" type="text" placeholder="Business Number" />
                      
                      <div className="form-control m-2">
                      <Row>
                        <Col><label className="m-2">Supply:</label></Col>
                        <Col>
                          <Form.Group className=" m-2" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Fertilizer" />
                          </Form.Group>
                        </Col>

                        <Col>
                          <Form.Group className="m-2" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="equipment" />
                          </Form.Group>
                        </Col>
                      </Row>
                      </div>
                      
                      

                      
                      <input className="form-control m-2" type="email" placeholder="Enter Your Email" />

                      {/* <input className="form-control m-2" type="text" placeholder="Enter NIC Number" /> 

                      <input className="form-control m-2" type="password" placeholder="Enter Your Password" />

                      <input className="form-control m-2" type="password" placeholder="Confirm Your Password" />


                      <Button className="btn btn-block m-2 site-btn-login"> Register </Button>
                      
                    <br></br> <br></br>
                    <hr />
                    <p> <b> Forget My Password? </b><Link><b> Froget Password </b> </Link> </p>

                    <p> <b> Already Have An Account ? </b><Link to="/login"><b> Login </b> </Link> </p>

                  </Form> */}


                </Col>

                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                    <img className="onboardBanner" src={Login} />
                </Col>
              </Row>

            </Col>
          </Row>
      </Container>
    </Fragment>
      
    )
  }
}

export default SupplierReg