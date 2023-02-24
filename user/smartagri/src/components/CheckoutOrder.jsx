import React, { Component } from 'react'

export class CheckoutOrder extends Component {
  render() {
    return (
      <div className='py-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-7'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Basic Information</h4>
                        </div>
                        <div className='card-body'>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group mb-3'>
                                        <label>First Name</label>
                                        <input type="text" name="firstname" className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group mb-3'>
                                        <label>Last Name</label>
                                        <input type="text" name="lastname" className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group mb-3'>
                                        <label>Phone Name</label>
                                        <input type="text" name="phone" className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group mb-3'>
                                        <label>Email Address</label>
                                        <input type="text" name="email" className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='form-group mb-3'>
                                        <label>Full Address</label>
                                        <textarea rows="3" className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='form-group text-end'>
                                        <button type="button" className='btn btn-primary'>Place Order</button>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>

                <div className='col-md-5'>
                    <table className='table table-bordered'>
                        
                        <tbody>
                            <tr>
                                <th >Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td>Fertilizer</td>
                                <td>200</td>
                                <td>2</td>
                                <td>400</td>
                               
                            </tr>
                            <tr>
                                <td colSpan="2" className='text-end fw-bold' >Grand Total</td>
                                <td colSpan="2" className='text-end  fw-bold'>400</td>
                                
                               
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default CheckoutOrder
