import React, { useState } from "react";
import "./booking.css";
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";

import calculateRating from "./../../utils/avgRating";
import { useNavigate } from "react-router-dom";

export const Booking = ({ tour, avgRating, totalRating }) => {
  const { price, reviews } = tour;
  const [credential,setCredential]=useState({
    userId:"01",
    userEmail:"exma@gmail.com",
    fullName:"",
    phone:"",
    guestSize:1,
    bookAt:""
  })
const navigate=useNavigate()
  const handleChange = (e) => {
    setCredential(prev=>({...prev,[e.target.id]:e.target.value}))
  };

  const serviceFee=10;
  const totalFee=Number(price)*Number(credential.guestSize)+Number(serviceFee)

const handleClick=(e)=>{
e.preventDefault();
console.log(credential)
navigate('/thank-you')
}
  return (
    <div className="booking">
      <div className="booking_top d-flex align-item-ccenter justify-contant-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
          <i
            class="ri-star-fill"
            style={{ color: "var(--secondary-color)" }}
          ></i>
          {avgRating === 0 ? null : avgRating}
          {totalRating === 0 ? "Not Rated" : <span>({reviews?.length})</span>}
        </span>
      </div>
      <div className="booking_form">
        <h5>information</h5>
        <Form className="booking_info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="full-Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-item-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div className="booking_bottum">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">${price} <i class="ri-close-line"></i> 1 person</h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charges</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Total</h5>
            <span>${totalFee}</span>
          </ListGroupItem>
          
        </ListGroup>
        <Button className="btn primary_btn w-10 mt-4" onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  );
};
