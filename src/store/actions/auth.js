import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOG_OUT_SUCCESS,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR
} from "./actionTypes";

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

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOG_OUT_SUCCESS });
      });
  };
};

export const createAccount = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      )
      .then((resp) => {
        return firestore.collection('users').doc(resp.user.uid).set({
          name: newUser.name
        })
      })
      .then(() => {
        dispatch({ type: CREATE_USER_SUCCESS })
      })
      .catch(err => {
        dispatch({ type: CREATE_USER_ERROR, err });
      });
  };
};
