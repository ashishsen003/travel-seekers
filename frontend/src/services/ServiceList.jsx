import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'Stay informed with up-to-the-minute weather updates for your location, anytime, anywhere.'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Your key to the best tour experience, with knowledgeable guides and insider tips for unforgettable adventures.'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Tailor your journey to perfection with our seamless customization options, ensuring every detail fits your desires.'
    }
]

const ServiceList = () => {
  return (
    <>
        {servicesData.map((item, index)=>(
            <Col lg='3' key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
    </>
  )
}

export default ServiceList