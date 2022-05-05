import { combineReducers } from "redux";
import types from "../types";
import { UserStatus } from "./auth";
import introReducer from "./introReducer";

const appReducer = combineReducers({
    UserStatus, 
    introReducer
});


const rootReducer = (state, action) => {
    if(action.type == types.CLEAR_REDUX_STATE){
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer