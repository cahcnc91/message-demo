import { ADD_MESSAGE, SELECT_CHAT, CREATE_CHAT } from './actionTypes';

export const createChat = (chat) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //async call to database
    const firestore = getFirestore();
    firestore.collection('chats').add({
      
    })
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