import types from "../types";
import { SIGNUP_API } from "../../config/urls";
import { apiPost } from "../../utils/utils";

export const SignUp = (data) => {
  return apiPost(SIGNUP_API, data)
}


