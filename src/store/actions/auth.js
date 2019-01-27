import {
  SET_CURRENT_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOG_OUT_SUCCESS,
  CURRENT_USER_ERROR
} from "./actionTypes";

export function getUser(user) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth
      .onAuthStateChanged(user)
      .then(() => {
        dispatch({ type: SET_CURRENT_USER, payload: user });
      })
      .catch(err => {
        dispatch({ type: CURRENT_USER_ERROR, err });
      });
  };
}

export const login = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth.signOut().then(() => {
      dispatch({ type: LOG_OUT_SUCCESS });
    });
  };
};

export const createAccount = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .cre(email, password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  };
};
