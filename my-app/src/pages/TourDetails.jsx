import React, { useRef, useState } from "react";
import "../styles/tour-details.css";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import { Col, Container, Row, Form ,ListGroup  } from "reactstrap";
import calculateAvgRating from "./../utils/avgRating";
import avatar from "../assets/images/avatar.jpg"
import { Booking } from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";


const TourDetails = () => {
  const { id } = useParams();
  const reviewmsgRef=useRef('')
  const [tourRating,setTourRating]=useState(null)
  const tour = tourData.find((tour) => tour.id == id);

  const option ={day:'numeric', month:'long',year:'numeric'}

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    maxGroupSize,
    distance,
    address,
  } = tour;

  console.log(tour);

  const submitHandle=(e)=>{
    e.preventDefault();
    const reviewtext=reviewmsgRef.current.value;

    alert(`${reviewtext}, ${tourRating}`)
  }
  const { avgRating, totalRating } = calculateAvgRating;
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour_content">
                <img src={photo} alt="" />
                <div className="tour_info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__location d-flex align-items-center gap-1">
                      <i class="ri-map-pin-fill"></i>
                      {city}
                    </span>
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        class="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not Rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                    <span>
                      <i class="ri-map-pin-fill"></i>
                      {address}
                    </span>
                  </div>
                  <div className="tour_extra_details">
                    <span>
                      <i class="ri-map-pin-line"></i>
                      {city}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i>${price} / per
                      person
                    </span>
                    <span>
                    <i class="ri-pin-distance-line"></i>{distance} / km
                    </span>
                    <span>
                      <i class="ri-group-line"></i>
                      {maxGroupSize}
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                <div className="tour_reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandle}>
                    <div className="d-flex align-item-center gap-3 mb-4 rating_group" >
                      <span onClick={()=>setTourRating(1)}>
                        1<i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=>setTourRating(2)}>
                        2<i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=>setTourRating(3)}>
                        3<i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=>setTourRating(4)}>
                        4<i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=>setTourRating(5)}>
                        5<i class="ri-star-s-fill"></i>
                        </span>
                    </div>
                    <div className="review_input">
                      <input type="text"  ref={reviewmsgRef} placeholder="shear your thoughts" required/>
                      <button className="btn primary_btn" type="submit">Submit</button>

                    </div>
                  </Form>

                  <ListGroup className="user_review">
                    {
                      reviews?.map(review=>(
                        <div className="review_item">
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-item-center justify-content-between">
                              <div>
                                <h5>muhib</h5>
                                <p>{new Date('01-18-2023').toLocaleDateString('en-US',option)}</p>
                              </div>
                              <span className="d-flex align-item-center ">5<i class="ri-star-s-fill"></i></span>
                            </div>
                            <h6>Amazing tour</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} totalRating={totalRating}/>

            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default TourDetails;
