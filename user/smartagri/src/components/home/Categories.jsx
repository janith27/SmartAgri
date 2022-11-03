import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

class Categories extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Catagories</h2>
            <p>some of our exclusive collection, you may like</p>
         </div>
            <Row>
                <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                   
                    <Row>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="h-100 w-100 text-center">
                                <Card.Body>
                                    <img className="center" src="" alt=""/>
                                    <h5 className="category-name">MOBILE</h5>
                     
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="h-100 w-100 text-center">
                                <Card.Body>
                                    <img className="center" src=""/>
                                    <h5 className="category-name">MOBILE</h5>
                     
                                </Card.Body>
                            </Card>
                        </Col> 

                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="h-100 w-100 text-center">
                                <Card.Body>
                                    <img className="center" src=""/>
                                    <h5 className="category-name">MOBILE</h5>
                     
                                </Card.Body>
                            </Card>
                        </Col> 

                    </Row>

                
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Categories
