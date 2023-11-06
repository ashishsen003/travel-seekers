import { TOUR_FAILURE, TOUR_REQUEST, TOUR_SUCCESS } from "./actionTypes"
// let totalPages=Math.ceil(`https://destination-api00.onrender.com/tours.length`)/10



const initialState = {
    isLoading: false,
    isError: false,
    tours: [],
    totalPages:0
}

export const reducer = (state = initialState , { type, payload }) => {
    switch(type) {
        case TOUR_REQUEST: {
            return {...state, isLoading : true}
        }
        case TOUR_SUCCESS : {

            const totalItems = payload.length; 
            const itemsPerPage = 2; 
      
            const totalPages = Math.ceil(totalItems / itemsPerPage); 
            return {...state, isLoading : false, tours: payload, isError:false,totalPages}
        }
        case TOUR_FAILURE : {
            return {...state, isLoading : false, isError : true}
        }
        default : return state
    }
}