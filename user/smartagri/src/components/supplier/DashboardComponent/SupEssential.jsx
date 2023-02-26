import axios from "axios";
import React, { Component, Fragment } from "react";
import AppURL from "../../../api/AppURL";

class SupEssential extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      itemData: [],
    };
  }

  componentDidMount() {
    axios.get(AppURL.MySupply(this.state.email)).then((res) => {
      this.setState({ itemData: res.data });
    }).catch((err)=>{});
  }
  render() {
    this.state.email = this.props.user.email;
// console.log(this.state.itemData)

const iData = this.state.itemData
const myView = iData.map((iData,i)=>{
  return (
    <div>
      <div className="searchItemss">
        <img src={iData.image} alt="" className="siImg" />
        <div className="siDec">
          <h4 className="siTitles">{iData.product_name}</h4>
          <span className="siSubtitle">
            <b>Brand New</b>
          </span>
          <span className="siimportant">Rs.{iData.price}.00</span>
          <span className="siFinal">Stock: {iData.qty}</span>
        </div>
      </div>
    </div>
  );


})
    
    return (
     <Fragment>
      <h2>My Selling Items</h2>
        <div>
          {myView}
        </div>
      
     </Fragment>
    );
  }
}

export default SupEssential;
