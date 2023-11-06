import { TOUR_FAILURE, TOUR_REQUEST, TOUR_SUCCESS } from "./actionTypes";
import axios from "axios";


export const getTour =(params) => (dispatch) => {
    // Write logic here
    dispatch({type : TOUR_REQUEST})
    axios
    .get("https://destination-api00.onrender.com/tours",{
      params : params
    })
    .then((res) => {
      console.log(res.data)
      dispatch({ type : TOUR_SUCCESS, payload : res.data })
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type : TOUR_FAILURE })
    })
  };