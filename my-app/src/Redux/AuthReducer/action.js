import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./actionTypes";
import axios from "axios";

export const login = (userData) => (dispatch) => {
  // Complete login logic here
  dispatch({ type : LOGIN_REQUEST })
  return axios
  .get("https://destination-api00.onrender.com/user", userData)
  .then((res) => {
    console.log(res.data);
    dispatch({type : LOGIN_SUCCESS})
  })
  .catch((err) => {
    console.log(err);
    dispatch({ type: LOGIN_FAILURE })
  })
};
export const signup = (userData) => (dispatch) => {
  // Complete login logic here
  dispatch({ type : LOGIN_REQUEST })
  return axios
  .post("https://destination-api00.onrender.com/users", userData)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
    dispatch({ type: LOGIN_FAILURE })
  })
};

