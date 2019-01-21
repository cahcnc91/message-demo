import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import ListContacts from "./ListContacts";
import OptionsContacts from "./OptionsContacts";

const styles = theme => ({
  root: {
    height: "100%"
  },
  contacts: {
    textAlign: "center",
    backgroundColor: "#F8F8F8",
    position: "relative",
    height: "100%"
  },
  optionsContacts: {
    height: "15%"
  },
  contactsList: {
    height: "70%"
  },
  searchBox: {
    width: "100%",
    bottom: 0,
    position: "absolute"
  },
  searchBar: {
    margin: 10,
    borderRadius: "20px"
  }
});

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatFilter: "all-recent",
      groupList: false,
      chatList: true,
      search: ""
    };
    this.handleListChoice = this.handleListChoice.bind(this);
    this.handleChatFilter = this.handleChatFilter.bind(this);
  }

  handleListChoice() {
    this.setState(prevState => ({
      chatList: !prevState.chatList,
      groupList: !prevState.groupList
    }));
  }

  handleChatFilter(filter) {
    this.setState({ chatFilter: filter });
  }

  render() {
    const { classes } = this.props;
    const { userChatList, userGroupList } = this.props;

    return (
      <Grid className={classes.root}>
        <Paper className={classes.contacts}>
          <OptionsContacts
            className={classes.optionsContacts}
            chatFilter={this.state.chatFilter}
            handleListChoice={this.handleListChoice}
            onChatFilterChange={this.handleChatFilter}
          />
          <ListContacts
            className={classes.contactsList}
            userChatList={userChatList}
            userGroupList={userGroupList}
            groupList={this.state.groupList}
            chatList={this.state.chatList}
            setActiveChat={this.props.setActiveChat}
          />
          <div className={classes.searchBox} />
        </Paper>
      </Grid>
    );
  }
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contacts);
