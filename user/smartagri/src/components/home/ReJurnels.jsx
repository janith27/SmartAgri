import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

import ph1 from "../../assest/images/jurnelimg/keeda.jpg"
import ph2 from "../../assest/images/jurnelimg/dilira.jpg"
import ph3 from "../../assest/images/jurnelimg/palamakka.jpg"
import ph4 from "../../assest/images/jurnelimg/mitadoc.jpg"

class ReJurnels extends Component {
  render() {
    return (
        <Fragment>
        <Container className="text-center" fluid={true}>
         <div className="section-title text-center mb-55">
            <h2>Recent Jurnels</h2>
            <p>some of our exclusive Jurnels when published by Instructors</p>
         </div>
            <Row>
                <Col classname="p-0" x={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src={ph1}/>
                        <Card.Body>
                            <p className="product-name-on-card">කීඩෑ හානිය</p>
                            <p className="product-price-on-card">වී වගාව</p> 
                        </Card.Body>
                    </Card>
                </Col>

                <Col classname="p-0" x={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src={ph2}/>
                        <Card.Body>
                            <p className="product-name-on-card">දිලීර හානිය</p>
                            <p className="product-price-on-card">පොල් වගාව</p> 
                        </Card.Body>
                    </Card>
                </Col>

                <Col classname="p-0" x={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src={ph3}/>
                        <Card.Body>
                            <p className="product-name-on-card">Pala makka</p>
                            <p className="product-price-on-card">Paddy</p> 
                        </Card.Body>
                    </Card>
                </Col>

                <Col classname="p-0" x={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src={ph4}/>
                        <Card.Body>
                            <p className="product-name-on-card">Mita dices</p>
                            <p className="product-price-on-card">Coconut</p> 
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ReJurnels
