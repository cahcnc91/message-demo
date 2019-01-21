import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography, IconButton } from '@material-ui/core/';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Clear, Check } from '@material-ui/icons/';

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
    top: -10,
    left: -40
  }
});

class ListContacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dense: false,
      invisible: false,
      selectedChat: ""
    }
    this.handleSelectedChat = this.handleSelectedChat.bind(this);
  }

  handleSelectedChat (chat) {
    this.setState({ selectedChat: chat.senderId});
    this.props.setActiveChat(chat);
  }

  handleBadgeVisibility = () => {
    this.setState(prevState => ({ invisible: !prevState.invisible }));
  };

  render() {
    const { classes } = this.props;
    const { chatList, groupList, userChatList, userGroupList } = this.props;
    const { dense } = this.state;
    let listToDisplay;

    if (chatList === true && groupList === false) {
      listToDisplay = userChatList; 
    } else {
      listToDisplay = userGroupList;
    }
    
    return (
      <div className={classes.root}>
        <List dense={dense} className={classes.list}>
          {listToDisplay.map(chat =>(
            <ListItem key={chat.senderId} button={true} className={classes.singleItem} button={true} onClick={() => this.handleSelectedChat(chat)} style={this.state.selectedChat === chat.senderId? {backgroundColor: '#4886B0', color: 'white'}: null}>
              <Avatar
                alt="DJohnson"
                src={require("../../assets/djohnson.jpg")}
                className={classes.avatar}
              />
              <ListItemText
                primary={<Typography style={this.state.selectedChat === chat.senderId? {color: 'white'}: null} variant="h6" ><b>{chat.senderName}</b></Typography>}
                secondary={<Typography style={this.state.selectedChat === chat.senderId? {color: 'white'}: null} variant="caption">Invated by you</Typography>}
                style={{padding: 1}}
              />
              <Badge color="secondary" badgeContent={2} invisible={this.state.invisible} className={classes.badge}>
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

export default withStyles(styles)(ListContacts);