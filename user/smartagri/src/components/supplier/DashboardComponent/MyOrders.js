import axios from "axios";
import React, { Component, Fragment } from "react";
import AppURL from "../../../api/AppURL";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class MyOrders extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      itemData: [],
    };
  }

  componentDidMount() {
    axios.get(AppURL.SupplierGetOrders(this.state.email)).then((res) => {
      this.setState({ itemData: res.data });
    }).catch((err)=>{});
  }
  render() {
    this.state.email = this.props.user.email;
console.log(this.state.itemData)

const iData = this.state.itemData
const myView = iData.map((iData,i)=>{
  return (
    <div>
      <div className="searchItemsss">
        <img src={iData.image} alt="" className="siImg" />
        <div className="siDec">
          <h4 className="siTitles">{iData.first_name} {iData.last_name}</h4>
          <span className="siimportant">Product:{iData.product_name}.00</span>
          <span className="siimportant">Rs.{iData.price}.00</span>
          <span className="siimportant">Quntity: {iData.qty}</span>
          <span className="siimportant">Shipping : {iData.address}</span>
          <span className="siimportant">Tel No : {iData.phoneno}</span>
          <span className="siimportant">Collect : {iData.collect}</span>
        </div>
      </div>
    </div>
  );

})
    
    return (
     <Fragment>
       <h2>Orders</h2>
        <div>
          {myView}
        </div>
      
     </Fragment>
    );
  }
}

export default MyOrders;
