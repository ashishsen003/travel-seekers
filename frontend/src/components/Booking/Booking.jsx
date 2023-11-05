import React from "react";
import "./booking.css";
import { Form, FormGroup } from "reactstrap";

import calculateRating from "./../../utils/avgRating";

export const Booking = ({ tour, avgRating, totalRating }) => {
  const { price, reviews } = tour;

  const handleChange = (e) => {};

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
        <Form className="booking_info-form">
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
              placeholder=""
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};
