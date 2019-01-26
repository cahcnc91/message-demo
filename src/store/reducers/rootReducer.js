import { combineReducers } from 'redux';

import chatReducer from './chatReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  auth: authReducer,
  profiles: profileReducer
})

export default rootReducer;