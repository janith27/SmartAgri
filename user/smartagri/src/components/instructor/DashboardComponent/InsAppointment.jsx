import React, { Component, Fragment, useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Table from "react-bootstrap/Table";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

function InsAppointment() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const data02 = [
    { name: "Paddy", value: 50 },
    { name: "Coconut", value: 40 },
    { name: "Paddy & Coconut", value: 10 },
  ];

  return (
    <Fragment>
      <div className="appoinmentback">
        <div> Check Appoinment</div>
        <Calendar
          className="date"
          onChange={handleDateChange}
          value={selectedDate}
        />

        <div className='"graph"'>
          <Card>
            <Card.Body>
              <Card.Title>Cultivated Crop Diversity</Card.Title>
              <Card.Text>
                This Graph show how many farmers cultivated on each crop.
                <PieChart width={250} height={400}>
                  <Pie
                    dataKey="value"
                    data={data02}
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
      </div>
    </Fragment>
  );
}

export default InsAppointment;
