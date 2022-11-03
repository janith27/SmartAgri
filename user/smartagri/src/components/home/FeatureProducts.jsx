import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'


class FeatureProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>feature</h2>
            <p>some of our exclusive Jurnels when published by Instructors</p>
         </div>  
            <Row>
                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                <Card className="image-box">
                  <img className="center" src=""/>
                    <Card.Body>
                     <p className="product-name-on-card">janith maduranga</p>
                     <p className="product-price-on-card">Price</p> 
                    </Card.Body>
                </Card>

                </Col>

                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                <Card className="image-box">
                  <img className="center" src=""/>
                    <Card.Body>
                     <p className="product-name-on-card">janith maduranga</p>
                     <p className="product-price-on-card">Price</p> 
                    </Card.Body>
                </Card>

                </Col>

                
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default FeatureProducts
