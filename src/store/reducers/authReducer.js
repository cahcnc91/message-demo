import { SET_CURRENT_USER, LOGIN_ERROR, LOGIN_SUCCESS, LOG_OUT_SUCCESS } from "../actions/actionTypes";
import isEmpty from "../../validation/isEmpty";

const initialState = {
  authError: null,
  isAuthenticated: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login Failed',
        isAuthenticated: false
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        authError: null,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case LOG_OUT_SUCCESS:
      console.log('signoutsuccess')
      return state;
    default:
      return state;
  }
}
