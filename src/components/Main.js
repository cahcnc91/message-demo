import React from 'react';
import Grid from "@material-ui/core/Grid";
import Chat from "./chat";
import Contacts from "./contacts";
import LeftBar from "./leftbar";
import { truncate } from "fs";
import { getUser, createChat, createProfile } from '../../src/store/actions/index';
import { connect } from 'react-redux';

class Main extends React.Component {
    
  render() {
    let content;

    const userChatList = [
      {
        senderName: "Camila",
        senderId: "3",
        messages: [
          { sendAt: "10:30pm", text: "hey friend", isRead: false },
          { sendAt: "10:30pm", text: "hey friend", isRead: false }
        ]
      }
    ];
    const userGroupList = [
      {
        senderName: "Laura",
        senderId: "1",
        messages: { sendAt: "12:30am", text: "Hi, whats up?", isRead: truncate }
      },
      {
        senderName: "Daniel",
        senderId: "2",
        messages: { sendAt: "12:35am", text: "NO", isRead: true }
      }
    ];

    const gridSidesProps = { xl: 3, lg: 3, md: 3, xs: 3, sm: 3 };
    const gridMiddleProps = { xl: 6, lg: 6, md: 6, xs: 6, sm: 6 };

    return (
      <Grid style={{height: "80vh"}} container>
        <Grid item {...gridSidesProps}>
          <LeftBar />
        </Grid>
        <Grid item {...gridMiddleProps}>
          <Chat />
          {content}
        </Grid>
        <Grid item {...gridSidesProps}>
          <Contacts userChatList={userChatList} userGroupList={userGroupList} />
        </Grid>
      </Grid>
    );

  };
}

const mapDispatchToProps = dispatch => {
  return {
    createChat: (chat) => dispatch(createChat(chat)),
    createProfile: (profile) => dispatch(createProfile(profile))
  }
}

const mapStateToProp = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProp, mapDispatchToProps)(Main);