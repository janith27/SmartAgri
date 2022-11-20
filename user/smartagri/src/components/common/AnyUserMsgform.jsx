import React, { Component, Fragment } from 'react'
import {Form,Button } from 'react-bootstrap'
import Validation from '../../validation/Validation';
import axios from 'axios' 
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AnyUserMsgform extends Component {

  constructor(){
    super();
    this.state={
      name:"",
      email:"",
      message:""
    }
  }

  nameonChange=(event)=>{
    let name=event.target.value;
    // alert(name);
    this.setState({name:name})
  }

  emailonChange=(event)=>{
    let email=event.target.value;
    // alert(email);
    this.setState({email:email})
  }

  messageonChange=(event)=>{
    let message=event.target.value;
    // alert(message);
    this.setState({message:message})
  }

  onFormSubmit =(event)=>{
    
    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;
    let sendBtn = document.getElementById('sendBtn');
    let contactForm = document.getElementById('contactForm')

    if(message.length==0){
      toast.error("Please write your message");
    }
    else if(name.length==0){
      toast.error("Please write your name");
    }
    else if(name.length==0){
      toast.error("Please write your email");
    }

    else if(!(Validation.NameRegx).test(name)){
      toast.error("Invaid Name");
 }
    else{
      
      sendBtn.innerHTML = "Sending...";      
      let MyFormData = new FormData();
      MyFormData.append("name",name)
      MyFormData.append("email",email)
      MyFormData.append("message",message)

      axios.post(AppURL.PostAnyUserMsg,MyFormData).then(function (response) {
        if(response.status==200 && response.data==1){
          toast.success("Message Send Successfully");
            sendBtn.innerHTML="send";
            contactForm.reset();
        }
        else{
          toast.error("error"); 
          sendBtn.innerHTML="send";
        }
      })
      .catch(function (error) {
        toast.error(error);
        sendBtn.innerHTML="send";
      });
    }

    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <Form id="contactForm" onSubmit={this.onFormSubmit} className="onboardForm">
            <h4 className="section-title-login">CONTACT WITH US </h4>
            <h6 className="section-sub-title">Please Contact With Us </h6>
            <input onChange={this.nameonChange} className="form-control m-2" type="text" placeholder="Enter Your Name" />

            <input onChange={this.emailonChange} className="form-control m-2" type="email" placeholder="Enter Email" />

            <Form.Control onChange={this.messageonChange} className="form-control m-2" as="textarea" rows={3} placeholder="Enter Your Message"/>
            <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login"> Send </Button>

        </Form>
        <ToastContainer />
        </Fragment>  
      
    )
  }
}

export default AnyUserMsgform
