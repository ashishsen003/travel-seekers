// import React, { useEffect, useState} from "react";
// import { CommonSection } from "../shared/CommonSection";
// import "../styles/tour.css";
// import { Container, Row, Col } from "reactstrap";
// import SearchBar from "../shared/SearchBar";
// // import tourData from "../assets/data/tours";
// // import tours from "../assets/data/tours";
// import TourCard from "../shared/TourCard";
// import Newsletter from "../shared/Newsletter";
// import {shallowEqual, useDispatch, useSelector} from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import { getTour } from "../Redux/ToursReducer/action";
// import { Sidebar } from "../components/Sidebar";

// const Tours = () => {
//   const [page, setPage] = useState(1)
//   const { isLoading, isError, tours } = useSelector((store) => {
//     return {
//       isLoading : store.tourReducer.isLoading,
//       isError : store.tourReducer.isError,
//       tours : store.tourReducer.tours,     
//     }
//   },shallowEqual);


//   const [searchParams] = useSearchParams();
//   const dispatch = useDispatch();

//  useEffect(() => {
//     const params = {
//       _q:searchParams.get("q"),
//       _limit:12,
//       _page: page,
//       _sort : searchParams.get("order") && "price",
//       _order : searchParams.get("order")
//     }
//     dispatch(getTour(params))
//   },[dispatch, searchParams])
//   return (
//     <>
//       <CommonSection title="All Tours" />
//       <section>
//         <Container>
//           <Row>
//             <SearchBar />
//             <Sidebar/>
//           </Row>
//         </Container>
//       </section>
//       <section className="pt-0">
//         <Container>
//         { isLoading &&  <h1>Loading...</h1>}
//         {isError && <h1>Errorrrr...</h1>}
//           <Row>
//             {!isLoading && !isError && tours?.map((tour) => (
//               <Col lg="3" gap="10px" key={tour.id}>
//                 <TourCard tour={tour} />
//               </Col>
//             ))}

//             <Col lg="12"></Col>
//             {/* <div className="pagination d-flex align-items-center justify-content-center mt-4 gap">
//               {
//               [...Array(pageCount).keys()].map((number) => (
//                 <span
//                   key={number}
//                   onClick={() => setPage(number)}
//                   className={(page == number ? "active_number" : "")}
//                 >
//                   {number + 1}
//                 </span>
//               ))
//               }
//             </div> */}
//           </Row>
//         </Container>
//       </section>
//       <Newsletter/>
//     </>
//   );
// };

// export default Tours;




import React, { useEffect, useState } from "react";
import { CommonSection } from "../shared/CommonSection";
import "../styles/tour.css";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
import Newsletter from "../shared/Newsletter";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getTour } from "../Redux/ToursReducer/action";
import { Sidebar } from "../components/Sidebar";
import Pagination from "./Pagination"; 

const Tours = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, tours, totalPages } = useSelector((store) => {
    return {
      isLoading: store.tourReducer.isLoading,
      isError: store.tourReducer.isError,
      tours: store.tourReducer.tours,
      totalPages: store.tourReducer.totalPages, 
    };
  }, shallowEqual);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      _q: searchParams.get("q"),
      _limit: 12,
      _page: page,
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    };
    dispatch(getTour(params));
  }, [dispatch, searchParams, page]);

  console.log(tours);


  return (
    <>
      <CommonSection title="All Tours" />
      <section>
        <Container>
          <Row>
            <SearchBar />
            <Sidebar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {isLoading && <h1>Loading...</h1>}
          {isError && <h1>Errorrrr...</h1>}
          <Row>
            {!isLoading && !isError && tours?.map((tour) => (
              <Col lg="3" gap="10px" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg="12"></Col>
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              setCurrentPage={setPage}
            />
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
