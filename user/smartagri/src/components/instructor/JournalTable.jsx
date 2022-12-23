import { Link } from "react-router-dom";
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button,Label } from 'react-bootstrap'


class JournalTable extends Component {
    render() {
        return (
            
            <div className='container-fluid px-4'>
                 <br></br> 
                <div className='card mt-4'>
                    <div className='card-header'>
                       
                        <h4><b>Add Journal</b>
                            <Link to='' className='btn btn-primary btn-sm float-end'><b>View Journal</b></Link>
                        </h4>
                    </div>
                    <div className='card-body'>
                    <Form>

                            <label>Journal ID :</label>
                            <input type='number' name='JournalId' className="form-control" />
                            <br></br>
                            <label>Date :</label>
                            <input type='number' name='JournalId' className="form-control" />
                            <br></br>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description :</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <label>Image :</label>
                            <input type='file' name='image' className="form-control" />

                        
                    </Form>

                    <div>
                    <br/>
                    <Button className='Submit' variant="primary"> Submit </Button>
                    </div>
                    
                    
                    





                    </div>
                </div>
                
            </div>
        );
    }
}

export default JournalTable;