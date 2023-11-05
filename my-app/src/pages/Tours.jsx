import React, { useEffect, useState } from "react";
import { CommonSection } from "../shared/CommonSection";
import "../styles/tour.css";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../shared/SearchBar";
import tourData from "../assets/data/tours";
import tours from "../assets/data/tours";
import TourCard from "../shared/TourCard";
import Newsletter from "../shared/Newsletter";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);
  return (
    <>
      <CommonSection title="All Tours" />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

            <Col lg="12"></Col>
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap">
              {
              [...Array(pageCount).keys()].map((number) => (
                <span
                  key={number}
                  onClick={() => setPage(number)}
                  className={(page == number ? "active_number" : "")}
                >
                  {number + 1}
                </span>
              ))
              }
            </div>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default Tours;
