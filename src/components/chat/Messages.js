import {Component} from "react";
import React from "react";
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Avatar, IconButton, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Clear, Check } from '@material-ui/icons/';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    margin: `${theme.spacing.unit * 5}px 0 ${theme.spacing.unit * 2}px`,
  },
  singleItem: {
    border: "1px solid black", 
    height: "8vh",
  },
  avatar: {
    width: "3.5rem",
    height: "3.5rem",
    marginTop: 5
  },
  rightAlign: {
    textAlign: 'right',
    justifyContent: 'flex-end',
  }
});

class Messages extends Component {
  render() {
    const { classes, activeChat } = this.props;
    let showChat;
    const userChatList = [{name: "Laura Vogue", id:"0", messages: {text: "Hey", isRead: false}}, {name: "Camila Niero", id: "1", messages: {text: "Hello friend", isRead: false}}];
    console.log(activeChat);

    if (!activeChat) {
      showChat = (
        <div>
          Choose chat
        </div>
      )
    } else {
      showChat = (
        <div className={classes.container}>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <Avatar alt="user-avatar" src={require("../../assets/djohnson.jpg")} className={classes.avatar} />
              <ListItemText
                primary={
                  <div style={{display:"flex", flexDirection: 'row', alignItems: 'center'}}>
                    <Typography variant="subtitle1" color="textPrimary">Camila Niero</Typography>  
                    <Typography style={{paddingLeft: 30}}variant="caption" color="textPrimary">10:35 pm</Typography> 
                  </div>    
                }
                secondary='This is a test message, how does it look?'
                className={classes.listItem}
              />
            </ListItem>
            <ListItem className={classes.rightAlign}>   
              <ListItemText
                primary={
                    <Typography variant="subtitle1" color="textPrimary">Camila Niero</Typography>   
                }
                secondary='This is a test message, how does it look?'
                className={classes.listItem}
              />
            </ListItem>
          </List>
          <div>

          </div>
        
        </div>
      )
    }

    return (
      <div>
        {showChat}
      </div>
    );
  }

}

Messages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Messages);