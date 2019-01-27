import { ADD_MESSAGE, SELECT_CHAT, CREATE_CHAT } from './actionTypes';

export const createChat = (chat) => {
  return (dispatch, getState) => {
    //async call to database
    dispatch({type: CREATE_CHAT, chat})
  }
}

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message: message
  };
}

export const selectChat = (chat) => {
  return {
    type: SELECT_CHAT,
    activeChat: chat
  };
}