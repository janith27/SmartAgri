import React, { Component } from 'react';
import { Container,Row,Col, Form,Button } from 'react-bootstrap'



class JournalRightSide extends Component {
    render() {
        return (
            <div>
        <div className='searchItem'>
           
            <div className='siDec'>
                <h3 className='siTitle'>Edit Journal Information</h3>

                <Form className='form'>
               
                <label className='label'><b>Journal ID :</b> </label>
                
                <Form.Control type="text" placeholder="Enter Journal ID" />
                </Form>

                <Row>
                                  <Col>
                                  <Button className='button' variant="primary">Update </Button>
                                  </Col>

                                  <Col>
                                  <Button className='button' variant="primary">Delete </Button>
                                  </Col>
                                </Row>
                
              
            </div>
           
            
                        
           
           
        </div>
        
      </div>
        );
    }
}

export default JournalRightSide;

