import React from "react";
import { useParams } from "react-router-dom";

function InstructorUpdate() {
  const insEmail = useParams().keyemail;
  return <div>InstructorUpdate</div>;
}

export default InstructorUpdate;
