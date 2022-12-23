import { Link } from "react-router-dom";
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button,Label } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';



function MainNotify () {
    const [show, setShow] = useState(false);
  
    return (
        <div className='container-fluid px-4'>
        <br></br> 
       <div className='card mt-4'>
           <div className='card-header'>
              
               <h4><Button onClick={() => setShow(true)}>To do Activity</Button></h4>
           </div>
           <div className='card-body'>
           
          
           <Row>
            <Toast onClose={() => setShow(false)} show={show} >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Row>
        </div>
        
       </div>
       
   </div>
    )
  
}

export default MainNotify
