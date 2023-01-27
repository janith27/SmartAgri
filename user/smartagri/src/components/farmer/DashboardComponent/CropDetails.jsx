import React,{ Component, Fragment } from 'react'
import { Col, Row ,Form,Button} from 'react-bootstrap'
import axios from 'axios'
import AppURL from '../../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CropDetails extends Component {

  constructor(){
    super();
    this.state={

      email:'janith@gmail.com',
      crop:"",
      description:"",
      message:''
    }
  }

  // Farmer Register Form Submit Method 
  formSubmit = (e) => {
    e.preventDefault();
    const data={
         
         email:this.state.email,
         crop:this.state.crop,
         description:this.state.description
    }

    axios.post(AppURL.InputCropLog,data).then(response =>{ 

         this.setState({message:response.data.message})

         toast.success(this.state.message,{
              position: "top-right"
         });
        document.getElementById("croplogform").reset();

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
        <div className='cropdetail d-flex justify-content-center'>
        <Row>
            <Col>
            
                <h1>Crop details</h1>
                <br/>
                <h3>Crop History</h3>

                <Form id="croplogform" onSubmit={this.formSubmit} className="onboardForm">
    
            <input className="form-control m-2" type="text" placeholder="Enter Crop" onChange={(e)=>{this.setState({crop:e.target.value})}}/>


            <Form.Control className="form-control m-2" as="textarea" rows={3} placeholder="Enter Your Log" onChange={(e)=>{this.setState({description:e.target.value})}}/>
            <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login"> Submit </Button>

        </Form>



            </Col>
        </Row>
        </div>
      </Fragment>
    )
  }
}

export default CropDetails