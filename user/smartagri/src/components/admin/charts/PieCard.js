import React, { Fragment } from "react";
import PieChart from "./PieChart";

function PieCard() {
  return (
    <Fragment>
      <div className="pieCard">
        <div className="text">
          <h4>Users</h4>
        </div>
        <PieChart />
      </div>
    </Fragment>
  );
}

export default PieCard;
