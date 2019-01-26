import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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

class Messages extends React.Component {
  render() {
    const { classes, activeChat } = this.props;

    return (
      <div className={classes.container}>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <Avatar alt="user-avatar" src={require("../../assets/djohnson.jpg")} className={classes.avatar} />
            <ListItemText
              primary={
                <div style={{display:"flex", flexDirection: 'row', alignItems: 'center'}}>
                  <Typography variant="subtitle1" color="textPrimary">{activeChat.senderName}</Typography>  
                  <Typography style={{paddingLeft: 30}}variant="caption" color="textPrimary">10:35 pm</Typography> 
                </div>    
              }
              secondary={'This is a test message, how does it look?'}
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
 
        
      </div>
    );
  }

}

Messages.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    activeChat: state.chat.activeChat
  };
};

export default withStyles(styles)(connect(mapStateToProps)(Messages));