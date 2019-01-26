import { ADD_MESSAGE, SELECT_CHAT} from '../actions/actionTypes';

const initialState = {
  activeChat: "",
  allChats: [
    {id: "1", member: "Camila", memberTwo: "Daniel", messages: {id: "1", sentAt: "10:30", sentBy: "Camila", text: "Whats up"}},
    {id: "2", member: "Julia", memberTwo: "Daniel", messages: {id: "1", sentAt: "10:45", sentBy: "Daniel", text: "Whats up panana"}}
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
          chat: state.chat.messages.concat({
          sentBy: action.userName,
          message: action.message,
          sentAt: new Date ()
        })
      };
    case SELECT_CHAT:
      return {
        ...state,
        activeChat: action.activeChat
      };
    default:
      return state;
  }
};

export default reducer;