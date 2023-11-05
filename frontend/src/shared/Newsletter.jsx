import React from 'react'
import './newsletter.css'

import {Container, Col, Row} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful traveling information.</h2>
                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter your email' />
                            <button className='newsletter__btn'>Subscribe</button>
                        </div>
                        <p>Subscribe now for invaluable travel insights, tips, and destination secrets delivered straight to your inbox. Join our community of wanderers and enhance your journey.
                        </p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='newsletter__img'>
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter