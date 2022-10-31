import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
         <div className="section-title text-center mb-55">
            <h2>Collection</h2>
            <p>some of our exclusive collection, you may like</p>
         </div>
            <Row>
                <Col classname="p-0" x={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src=""/>
                        <Card.Body>
                            <p className="product-name-on-card">janith maduranga</p>
                            <p className="product-price-on-card">Price</p> 
                        </Card.Body>
                    </Card>
                </Col>

                <Col classname="p-0" x={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src=""/>
                        <Card.Body>
                            <p className="product-name-on-card">janith maduranga</p>
                            <p className="product-price-on-card">Price</p> 
                        </Card.Body>
                    </Card>
                </Col>

                <Col classname="p-0" x={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src=""/>
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

export default Collection
