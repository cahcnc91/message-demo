import { LOGIN_ERROR, LOGIN_SUCCESS, LOG_OUT_SUCCESS, CREATE_USER_SUCCESS, CREATE_USER_ERROR } from "../actions/actionTypes";

const initialState = {
  authError: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login Failed',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case LOG_OUT_SUCCESS:
      console.log('signout success')
      return state;
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case CREATE_USER_ERROR:
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
}
