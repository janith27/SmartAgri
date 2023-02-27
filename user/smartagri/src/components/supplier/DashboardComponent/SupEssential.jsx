import axios from "axios";
import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import AppURL from "../../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  deleteItem = (event) => {
    let logId = event.target.getAttribute("logId");
    console.log(logId);
    axios
      .delete(AppURL.DeleteItem(logId))
      .then((response) => {
        this.state({ pageRefreshStatus: true });
        window.location.reload(true);
      })
      .catch((error) => {
        toast.error("Unable to Delete", { position: "top-left" });
        window.location.reload(true);
      });
  };

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
        <div>
        <Button variant="danger" 
                  logId={iData.id}
                  onClick={this.deleteItem}>Delete</Button>
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
