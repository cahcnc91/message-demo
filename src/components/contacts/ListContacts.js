import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemSecondaryAction, ListItemText, Typography, IconButton } from '@material-ui/core/';
import { connect } from 'react-redux';
import { selectChat } from '../../store/actions/index';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Clear } from '@material-ui/icons/';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: "#F8F8F8",
    
  },
  list: {
    textAlign: 'center',
    fontFamily: 'Helvetica'
  },
  singleItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: '2px',
    height:`${theme.spacing.unit * 8}px`,
    width: 'auto',
    margin: theme.spacing.unit,
    
  },
  avatar: {
    width: `${theme.spacing.unit * 7}px`,
    height: `${theme.spacing.unit * 7}px`,
    //marginRight: theme.spacing.unit
  },
  badge: {
  }
});

class ListContacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dense: false,
      invisible: false,
    }
    this.handleSelectedChat = this.handleSelectedChat.bind(this);
  }

  handleSelectedChat (chat) {
    this.props.onSelectChat(chat);
  }

  handleBadgeVisibility = () => {
    this.setState(prevState => ({ invisible: !prevState.invisible }));
  };

  render() {
    const { classes, activeChat,allChats } = this.props;
    const { dense } = this.state;

    /*
    if (chatList === true && groupList === false) {
      listToDisplay = userChatList; 
    } else {
      listToDisplay = userGroupList;
    }
    */

    return (
      <div className={classes.root}>
        <List dense={dense} className={classes.list}>
          {allChats.map(chat =>(
            <ListItem key={chat.id} button={true} className={classes.singleItem} onClick={() => this.handleSelectedChat(chat)} style={ activeChat.id === chat.id ? {backgroundColor: '#4886B0', color: 'white'} : null}>
              <Avatar
                alt="DJohnson"
                src={require("../../assets/djohnson.jpg")}
                className={classes.avatar}
              />
              <Badge color="secondary" badgeContent={2} value={2} invisible={this.state.invisible} className={classes.badge}>
                <ListItemText
                  primary={<Typography style={activeChat.id === chat.id? {color: 'white'}: null} variant="h6" ><b>{chat.member}</b></Typography>}
                  secondary={<Typography style={activeChat.id === chat.id? {color: 'white'}: null} variant="caption">Invated by you</Typography>}
                  style={{padding: 1}}
                />
                </Badge>
              
              <ListItemSecondaryAction>
                <ListItemText
                    primary={<Typography style={this.state.selectedChat === chat.senderId? {color: 'white'}: null} variant="caption">10:35</Typography>}
                    secondary={
                          <IconButton><Clear style={this.state.selectedChat === chat.senderId? {color: 'white'}: null} fontSize="small"/></IconButton>
                    }
                  />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
          
    );
  }
}

ListContacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    activeChat: state.chat.activeChat,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectChat: (chat) => dispatch(selectChat(chat))
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ListContacts));