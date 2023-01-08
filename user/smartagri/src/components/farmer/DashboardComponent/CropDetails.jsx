import React,{ Component, Fragment } from 'react'
import { Col, Row ,Form,Button} from 'react-bootstrap'


class CropDetails extends Component {
  render() {
    return (
      <Fragment>
        <div className='cropdetail d-flex justify-content-center'>
        <Row>
            <Col>
            

                <h1>Crop details</h1>
                <p>Crop Name : </p>
                <br/>
                <h3>Crop History</h3>
                <Form className='cropformdivision'>
                <input className="form-control cropform " type="text" placeholder="Enter Date" />
                <Form.Control className="form-control cropform" as="textarea" rows={3} placeholder="Enter Your Crop Log"/>
                <Button id="create" type="submit" className="btnmargin"> Create Log </Button>
                </Form>



            </Col>
        </Row>
        </div>
      </Fragment>
    )
  }
}

export default CropDetails