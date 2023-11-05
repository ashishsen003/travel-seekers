import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava04 from '../../assets/images/ava-4.jpg'
import ava05 from '../../assets/images/ava-5.avif'
import ava06 from '../../assets/images/ava-6.jpeg'
import ava07 from '../../assets/images/ava-7.jpg'

const Testimonials = () => {
  // ❝αѕн¡ѕн ѕεη…❞      ❜  ❛ 
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed:2000,
    slidesToShow: 3,

    responsive:[
      {
        breakpoint: 992,
        settings:{
          slidesToshow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
      },
      {
        breakpoint: 576,
        settings:{
          slidesToshow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }
  return ( <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
      <p>❝I've been a loyal customer for years, and every trip they've planned has been a remarkable adventure. Their expertise shines through in every detail, from the destinations they recommend to the seamless logistics. I trust them completely with my travel plans, and they've never disappointed.❞
      </p>

      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>James Anderson</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>❝Impressive attention to detail and personalized service make this travel agency stand out. From the moment I started using their services, my travel experiences have become stress-free and unforgettable. They go above and beyond to create memorable journeys.❞
      </p>

      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava05} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Michael Johnson</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>❝Thanks to their recommendations, I've discovered hidden gems in every destination I've visited. Their travel expertise is unmatched, and I'm always in awe of the places they suggest. I'm a happy wanderer thanks to them.❞
      </p>

      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava06} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Benjamin Smith</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>❝Efficiency, reliability, and incredible knowledge define this travel agency. Every trip they've planned for me has turned into an unforgettable experience. They handle every aspect of travel with grace and professionalism, making them truly exceptional in the industry.❞
      </p>

      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava07} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>William Turner</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>❝This is the best travel service I've ever used. Their 15 years of experience is evident in every aspect of their planning, from itinerary design to on-the-ground support. They've elevated my travel experiences to a whole new level.❞
      </p>

      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Emily Davis</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>❝I can't imagine traveling without their guidance. With over 12,000 successful trips, they've proved time and again that they are the experts in the field. Their recommendations and service have transformed my vacations into remarkable adventures.❞
      </p>

      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Oliver Mitchell</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
  </Slider>
  )
}

export default Testimonials