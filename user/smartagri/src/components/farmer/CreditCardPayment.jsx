import React from "react";
import { useParams } from "react-router-dom";

function CreditCardPayment({ uData }) {
  const itemId = useParams().id;
  const proName = useParams().pname;
  const qty = useParams().qty;
  const unitPrice = useParams().price;
  return (
    <div className="creditcontainer">
      <form>
        <div className="creditrow">
          <div className="creditcol">
            <h6 className="creditorder"> Hi {uData.name} </h6>
            <p>
              Thank For your order.Your Order is on-hold until confirmed that
              payment is received
            </p>
            <h3 className="credittitle">Our Bank Details</h3>

            <div className="creditinputBox">
              <div className="creditcls">
                <span>Bank : Bank of Ceylon(Battaramulla)</span>
              </div>
              <div className="creditcls">
                <span>Account Number : 200100039000</span>
              </div>
            </div>

            <div className="creditinputBox">
              <div className="creditcls">
                <span>Bank : Sampath Bank(Battaramulla)</span>
              </div>
              <div className="creditcls">
                <span>Account Number : 81580070</span>
              </div>
            </div>

            <div className="creditinputBox">
              <div className="creditcls">
                <span>Bank : Commercial Bank(Battaramulla)</span>
              </div>
              <div className="creditcls">
                <span>Account Number : 8290044000</span>
              </div>
            </div>

            <div className="creditinputBox">
              <table border="1" width="100%">
                <tr>
                  <th> Product ID </th>
                  <th> Product </th>
                  <th> Quantity </th>
                  <th> Total Price </th>
                </tr>
                <tr>
                  <td>{itemId}</td>
                  <td>{proName}</td>
                  <td>{qty}</td>
                  <td>{qty * unitPrice}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreditCardPayment;
