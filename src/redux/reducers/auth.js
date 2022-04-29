import { removeLoginLocally, setLoginLocally } from "../../utils/utils";
import types from "../types";

const initialState = {
    userLoginState: {}
};

export const UserStatus = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN: {
            const data = action.payload;
            console.log("data on action type login", data);
            setLoginLocally(data);
            return {
                userLoginState: data
            }
        }

        case types.USER_LOGOUT: {
            removeLoginLocally();
            return { 
                userLoginState: undefined
             }
        }

        default: return state
    }
}