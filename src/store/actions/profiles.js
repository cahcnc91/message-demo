import * as firebase from 'firebase';
import { CREATE_PROFILE } from './actionTypes';

export const createProfile = (profile) => {
  return (dispatch, getState) => {
    //async call to database
    dispatch({type: CREATE_PROFILE, profile})
  }
}








