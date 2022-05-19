import { store } from "../store";
import { apiGet, apiPost } from "../../utils/utils";
import { EDIT_PROFILE_API, GET_COMMENT_API, GET_POST_API, LOGIN_API, POST_COMMENT_API, POST_LIKE_API, POST_SEND_API, SIGNUP_API, SINGLE_IMAGE_POST_API, UPDATE_PASSWORD_API } from "../../config/urls";
import types from "../types";

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
}

// ----------------Single Image Upload Api Action-------------------
export const singleImageApi = (data, header) => {
  return apiPost(SINGLE_IMAGE_POST_API, data, header)
}

export const post = (data, header) => {
  return apiPost(POST_SEND_API, data, header)
}

export const getPost = (query = '', data = {}) => {
  return new Promise((resolve, reject) => {
    apiGet(GET_POST_API + query, data)
      .then((res) => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });

}

export const likePost = (data) => {
  return apiPost(POST_LIKE_API, data)
}


// --------------get and post comment api----------------
export const getComment = (query = '') => {
  return new Promise((resolve, reject) => {
    apiGet(GET_COMMENT_API + query)
      .then((res) => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}


export const postComment = (query = '') => {
  return new Promise((resolve, reject) => {
    apiPost(POST_COMMENT_API + query)
      .then((res) => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });

}

