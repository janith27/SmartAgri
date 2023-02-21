import React, { Fragment, useEffect, useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

function AdminDashboard() {
  const [countData, setCountData] = useState();
  
  // const data02 = [
  //   { name: "Farmers", value: [countData.farmerCount] },
  //   { name: "Instructors", value: [countData.instructorCount] },
  //   { name: "Suppliers", value: [countData.supplierCount] },
  // ];

  const sendRequest = async () => {
    const res = await axios
      .get(AppURL.UserPieChartData)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setCountData(data));
  }, []);
    console.log(countData);
    // console.log(countData.farmerCount)
    // console.log(countData.instructorCount)
    // console.log(countData.supplierCount)
  return (
    <div className='"graph"'>
          <Card>
            <Card.Body>
              <Card.Title>Cultivated Crop Diversity</Card.Title>
              <Card.Text>
                This Graph show how many farmers cultivated on each crop.
                <PieChart width={250} height={400}>
                  <Pie
                    dataKey="value"
                    series={countData}
                    cx={130}
                    cy={150}
                    innerRadius={40}
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                  />
                  <Tooltip />
                </PieChart>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
  )
}

export default AdminDashboard