import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SupplierUpdate() {
  const supEmail = useParams().keyemail;
  return <div>SupplierUpdate</div>;
}

export default SupplierUpdate;
