import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { reducer as authReducer } from './AuthReducer/reducer';
import { reducer as tourReducer } from './ToursReducer/reducer';

const rootReducer = combineReducers({
    authReducer,
    tourReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))