import * as firebase from 'firebase';
import { GET_USER_PROFILE, WRITE_NEW_PROFILE, GET_ALL_PROFILES } from './actionTypes';

export function newProfile(avatar, userId, name) {
  return dispatch => {
    firebase.database().ref('/profiles' + userId).set({
      avatar: avatar,
      name: name
    })
  };
}








