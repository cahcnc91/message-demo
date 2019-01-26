import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

import ListContacts from "./ListContacts";
import OptionsContacts from "./OptionsContacts";

const styles = {
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
};

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
    const { classes, allChats } = this.props;
    const { userChatList, userGroupList } = this.props;


    return (
      <Paper className={classes.contacts}>
        <OptionsContacts
          className={classes.optionsContacts}
          chatFilter={this.state.chatFilter}
          handleListChoice={this.handleListChoice}
          onChatFilterChange={this.handleChatFilter}
        />
        <ListContacts
          className={classes.contactsList}
          allChats={allChats}
          userChatList={userChatList}
          userGroupList={userGroupList}
          groupList={this.state.groupList}
          chatList={this.state.chatList}
          setActiveChat={this.props.setActiveChat}
        />
        <div className={classes.searchBox} />
      </Paper>
    );
  }
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    allChats: state.chat.allChats
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps
  )(Contacts)
);
