import React, { Fragment } from "react";
import AreaChart from "./AreaChart";

function AreaCard() {
  return (
    <Fragment>
      <div className="pieCard">
        <div className="text">
          <h4>Users</h4>
        </div>
        <AreaChart />
      </div>
    </Fragment>
  )
}

export default AreaCard