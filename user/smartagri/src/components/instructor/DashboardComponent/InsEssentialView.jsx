import React, { Component, Fragment } from 'react'
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import { Container,Row,Col, Form,Button,Label } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

// delete follow after dynamic
const data02 = [
    
    { name: "Paddy", value: 50 },
    { name: "Coconut", value: 40 },
    { name: "Paddy & Coconut", value: 10 }
  ];
  
//upto now

class InsEssentialView extends Component {
  render() {
    return (
      <Fragment>  
      <div>InsEssentialView</div>
      <Container>
      <Row>
        <Col md={12} lg={6} sm={12} xs={12}>
            <PieChart width={1000} height={400}>
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
        </Col>

        <Col md={6} lg={6} sm={12} xs={12}>
        <Card className="text-center cardappointment contain">
                    
                    <Card.Body>
                        <Card.Title>Cultivated Crop Diversity</Card.Title>
                        <Card.Text>
                          his Graph show how many farmers cultivated on each crop.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
        </Col>
      </Row>
      </Container>

      </Fragment>
    )
  }
}

export default InsEssentialView