import {
  CHANGE_PASSWORD,
  CONTACT_API,
  CONTACT_US,
  EDIT_PROFILE,
  FAQ,
  FORGOT_API,
  FORGOT_PASSWORD,
  GET_CURRENT_USER,
  LOGIN_API,
  NEED_HELP,
  PROFILE_BASIC_INFO,
  RESEND_OTP,
  SEND_OTP,
  SIGN_UP_API,
  UPDATE_PASSWORD,
  USER_AUTH_CHECK,
  VERIFY_ACCOUNT,
  VIEW_DATA,
  UPLOAD_PROFILE_IMAGE,
  SOCAIL_LOGIN_API,
  RESET_PASSWORD,
  SEND_REFFERAL_CODE,
  GET_ALL_SUBSCRIPTION_PLANS,
  SELECT_SPECIFIC_PLAN,
  PURCHASE_SPECIFIC_PLAN,
  GET_LOYALTY_INFO,
  CANCEL_SPECIFIC_PLAN,
  LOGIN_BY_USERNAME,
  PHONE_LOGIN_OTP,
  UPLOAD_PHOTO,
} from '../../config/urls';
import {apiGet, apiPost, clearUserData, setUserData} from '../../utils/utils';
import store from '../store';
import types from '../types';
const {dispatch} = store;

export const saveUserData = data => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

export const login = (data, headers = {}) => {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN_API, data, headers)
      .then(res => {
        setUserData(res.data).then(suc => {
          saveUserData(res.data);
          resolve(res);
        });
      })
      .catch(error => {
        reject(error);
      });
  });
};
