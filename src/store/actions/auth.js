import { auth } from '../../firebase';
import { SET_CURRENT_USER } from './actionTypes';

export function getUser() {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: user
      })
    })
  };
}

export function login(email, password) {
  return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  return dispatch => auth.signOut();
}

export function createAccount(email, password) {
  return dispatch => auth.createUserWithEmailAndPassword(email, password);
}