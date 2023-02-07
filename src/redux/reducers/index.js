import { combineReducers } from "redux";
import movieReducer from "./movieReducers";


export default combineReducers({
    movie : movieReducer,
}); 