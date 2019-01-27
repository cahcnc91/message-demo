import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

import chatReducer from './chatReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  auth: authReducer,
  profiles: profileReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer;