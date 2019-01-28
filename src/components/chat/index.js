import React from "react";
import PropTypes from "prop-types";
import { Grid, Button, Typography } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import InputBaseComponent from "./InputBaseComponent";

const styles = theme => ({
  root: {
    height: '100%'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: `${theme.spacing.unit * 3}px 0`,
    backgroundColor: "#4886B0",
    color: "white" 
  },
  input: {
    height: '80%'
  }
});

class Chat extends React.Component {
  constructor(props) {
    super(props);
 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

  }


  render() {
    const { classes, activeChat } = this.props;
    let displayChat;

    if (activeChat === "") {
      displayChat = (
        <Typography variant="h6">Choose a chat</Typography>
      );

    } else {
      displayChat = (
        <div>
            <ChatHeader />
            <ChatBody />
        </div>
      );
    }

    return (
      <div className={classes.root}>
          <div style={{ height: "85%" }}>
            {displayChat}
          </div>
          
          <div style={{ height: "15%", display: 'flex', flexDirection: 'row' }}>
            <InputBaseComponent className={classes.input}/>
            <Button variant="contained" className={classes.button}>
              Send
            </Button>
          </div>
          
      </div>
    );
  }
};

Chat.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    activeChat: state.chat.activeChat
  };
};


export default withStyles(styles)(connect(mapStateToProps)(Chat));

