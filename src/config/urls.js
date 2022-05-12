export const API_BASE_URL = 'http://192.168.100.101:8002/api';

export  const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const LOGIN_API = getApiUrl('/userlogin');
export const SIGNUP_API = getApiUrl('/signup');
export const EDIT_PROFILE_API = getApiUrl('/edit_profile');
export const UPDATE_PASSWORD_API = getApiUrl('/change_password');
export const SINGLE_IMAGE_POST_API = getApiUrl('/img_upload');
export const POST_SEND_API = getApiUrl('/post_send');