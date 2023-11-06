import { TOUR_FAILURE, TOUR_REQUEST, TOUR_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    tours: [],
}

export const reducer = (state = initialState , { type, payload }) => {
    switch(type) {
        case TOUR_REQUEST: {
            return {...state, isLoading : true}
        }
        case TOUR_SUCCESS : {
            return {...state, isLoading : false, tours: payload, isError:false}
        }
        case TOUR_FAILURE : {
            return {...state, isLoading : false, isError : true}
        }
        default : return state
    }
}