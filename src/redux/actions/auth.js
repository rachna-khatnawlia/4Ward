import { store } from "../store";
import types from "../types";
import { apiPost } from "../../utils/utils";
import { EDIT_PROFILE_API, LOGIN_API, SIGNUP_API, UPDATE_PASSWORD_API } from "../../config/urls";

const { dispatch } = store;

export const loginFunction = (data) => {
  dispatch({
    type: types.LOGIN,
    payload: data
  })
}

export const Logout = () => {
  dispatch({
    type: types.USER_LOGOUT,
  })
}

export const SignUp = (data) => {
  return apiPost(SIGNUP_API, data)
}

export const Login = (data) => {
  console.log(data, 'the given data for login')
  return new Promise((resolve, reject) => {
    apiPost(LOGIN_API, data)
      .then((res) => {
        loginFunction(res.data)
        resolve(res)
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const editProfile = (data) => {
  console.log(data, 'the given data for profile update');
  return new Promise((resolve, reject) => {
    apiPost(EDIT_PROFILE_API, data)
      .then((res) => {
        loginFunction(res.data);
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const UpdatePassword = (data) => {
  return apiPost(UPDATE_PASSWORD_API, data)
}

export const Intro = (data) => {
  console.log("data>>>>>>>>>>>>>>>>>>", data)
  dispatch({
      type: types.INTRO,
      payload: data,
  })
};