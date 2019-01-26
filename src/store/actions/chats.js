import { ADD_MESSAGE, SELECT_CHAT } from './actionTypes';

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