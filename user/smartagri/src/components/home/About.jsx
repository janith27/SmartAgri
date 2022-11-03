import React, { Component, Fragment } from 'react'
import { Container} from 'react-bootstrap'

class About extends Component {
  render() {
    return (
        <Fragment>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
                <h2>About</h2>
                <p>The agricultural sector will be more crucial than ever in the coming decades as
                    it must meet the demands of a growing population. For better analytics and 
                    increased output capacity, this is why farmers and agribusinesses are relying
                    on smart farming technologies. The idea behind smart farming is to give
                    the agricultural sector the infrastructure it needs to exploit cutting-edge
                    technologies for automating, tracking, and analyzing activities. 
                    Smart farming, also referred to as precision agriculture, is software-managed
                    and sensor-monitored. The need for smart agriculture, the rising demand for 
                    higher crop yields, the need to use natural resources more effectively, the 
                    growing use and sophistication of information and communication technology, 
                    and the expanding global population all contribute to the growing importance
                    of smart farming. Nowadays, the majority of people work in agriculture, and
                    when they encounter a difficulty, they must go see an instructor. They may 
                    also wish to meet their suppliers in order to purchase fertilizer or 
                    agricultural machinery. Sometimes they are not at work or it's their day off
                    when farmers go to meet them. The farmers are in a lot of trouble as a result.
                    The modern agricultural business has various smart farming systems, but none
                      of them connects these three parties. In response to this query, we present 
                      our system. These three parties (farmer, educator, and supplier) 
                      can communicate with one another using our System.</p>
            </div>
            
          </Container>
      </Fragment>
    )
  }
}

export default About
