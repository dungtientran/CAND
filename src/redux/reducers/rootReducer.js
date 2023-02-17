import { combineReducers } from "redux";
import listPostReducer from "./listPostReducer";



const rootReducer = combineReducers({
    listPost: listPostReducer
})


export default rootReducer