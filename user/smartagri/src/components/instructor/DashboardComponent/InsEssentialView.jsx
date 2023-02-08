import React, { Component, Fragment, useState } from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import { Container, Row, Col, Form, Button, Label } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SearchItem from "../SearchItem";
import axios from "axios";
import AppURL from "../../../api/AppURL";

// delete follow after dynamic
const data02 = [
  { name: "Paddy", value: 50 },
  { name: "Coconut", value: 40 },
  { name: "Paddy & Coconut", value: 10 },
];

const InsEssentialView = () => {
  const [data, setData] = useState([]);

  const handleClick = async () => {
    const res = await axios.get(AppURL.JournalDatas);
    console.log(res);
    // const json = await response.json();
    // setData(json);
  };
  //   state={
  //     jouranls:[],
  //     loading:true,
  //   }

  //  async componentDidMount(){
  //     const res =await axios.get('/api/addjournals');
  //     // console.log(res);
  //     if(res.data.status===200){
  //       this.setState({
  //         journals:res.data.journals,
  //         loading:false,
  //       })
  //     }

  //   }

  return (
    <div className="appoinmentback">
      <Button variant="warning" className="btnx" onClick={handleClick}>
        Recent Appoinment
      </Button>

      {/* <div>Recent Appoinment</div> */}

      {
        <>
          {data.map((item) => (
            <SearchItem item={item} key={item._id} />
          ))}
        </>
      }
    </div>
  );
};

export default InsEssentialView;
