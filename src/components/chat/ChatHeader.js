import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText, Avatar, Button } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import { Call, Videocam, Settings } from '@material-ui/icons/';
import classNames from 'classnames';

import { connect } from 'react-redux';
import { selectChat } from '../../store/actions/index';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  root: {
    width: '65%'
  },
  avatar: {
    width: `${theme.spacing.unit * 8}px`,
    height: `${theme.spacing.unit * 8}px`,
    marginTop: 5
  },
  listItem: {
    paddingTop: 6
  },
  button: {
    margin: theme.spacing.unit,
    borderRadius: '20px'
  },
  cssRoot: {
    color: '#FFFFFF',
    backgroundColor: '#36A000',
    '&:hover': {
      backgroundColor: 'grey',
    },
  },
  iconButton: {
    margin: theme.spacing.unit,
    backgroundColor: '#36A000',
    padding: 5
  }
});

class ChatHeader extends React.Component {

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
                  <Typography variant="h5" color="textPrimary">
                    <b>{activeChat.senderName}</b>
                  </Typography>
                  <IconButton style={{marginLeft: 3}}>
                    <Settings fontSize="small" style={{color: "#36A000"}}/>
                  </IconButton>
                </div>
                  
              }
              secondary='2:30am Atlanta, GA | Web Developer'
              className={classes.listItem}
            />
          </ListItem>
        </List>
        <div>
          <IconButton aria-label="Call" className={classes.iconButton}>
            <Call fontSize="small" style={{color: '#FFFFFF'}}/>
          </IconButton>
          <IconButton aria-label="Call" className={classes.iconButton}>
            <Videocam fontSize="small" style={{color: '#FFFFFF'}}/>
          </IconButton>
          <Button variant="contained" color="primary" className={classNames(classes.button, classes.cssRoot)}>Payment</Button>
        </div>
       
      </div>
    );
  }
}

ChatHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    activeChat: state.chat.activeChat
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectChat: (chat) => dispatch(selectChat(chat))
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ChatHeader));