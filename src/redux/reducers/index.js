import { combineReducers } from "redux"
// import { Intro } from "../actions/appIntroAction";
import types from "../types";
import { UserStatus } from "./auth";

const appReducer = combineReducers({
    UserStatus, 
    // Intro
});


const rootReducer = (state, action) => {
    if(action.type == types.CLEAR_REDUX_STATE){
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer