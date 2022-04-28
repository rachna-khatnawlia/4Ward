import { combineReducers } from "redux"
import types from "../types";
import { UserStatus } from "./auth";

const appReducer = combineReducers({
    UserStatus, 
});


const rootReducer = (state, action) => {
    if(action.type == types.CLEAR_REDUX_STATE){
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer