import React from 'react'
import './commonSection.css'
import { Container,Row,Col } from 'reactstrap'

export const CommonSection = ({title}) => {
  return (
    <section className="common_section">
        <container>
            <Row>
                <Col lg='12'>
                <h1>{title}</h1>
                </Col>
            </Row>
        </container>
    </section>
  )
}
