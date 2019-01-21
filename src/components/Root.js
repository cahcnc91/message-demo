import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chat from "./chat";
import Contacts from "./contacts";
import LeftBar from "./leftbar";
import { truncate } from "fs";

const styles = () => ({
  root: {
    height: '100%'
  }
});

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeChat: ""
    };
    this.setActiveChat = this.setActiveChat.bind(this);
  }

  setActiveChat(chat) {
    this.setState({ activeChat: chat });
  }

  render() {
    const { classes } = this.props;

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
      <Grid className={classes.root} container>
        <Grid item {...gridSidesProps}>
          <LeftBar />
        </Grid>
        <Grid item {...gridMiddleProps}>
          <Chat activeChat={this.state.activeChat} />
        </Grid>
        <Grid item {...gridSidesProps}>
          <Contacts
            userChatList={userChatList}
            userGroupList={userGroupList}
            setActiveChat={this.setActiveChat}
          />
        </Grid>
      </Grid>
    );
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Root);
