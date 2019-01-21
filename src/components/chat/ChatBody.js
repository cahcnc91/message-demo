import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import Messages from "./Messages";

const styles = theme => ({
  root: {
    height: "75%",
    display: "flex",
    flexDirection: "column",
    overflow: "auto"
  },
  date: {
    padding: 3,
    borderTop: "1px solid #CAD0D3",
    borderBottom: "1px solid #CAD0D3",
    color: "#707070"
  }
});

class ChatBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes, activeChat } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.date}>
          <Typography>Wednesday, June9, 2017</Typography>
        </div>
        <Messages activeChat={activeChat} />
        <div className={classes.date}>
          <Typography>Wednesday, June9, 2017</Typography>
        </div>
        <Messages activeChat={activeChat} />
      </div>
    );
  }
}

ChatBody.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChatBody);
