import React from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import InputBaseComponent from "./InputBaseComponent";

const styles = theme => ({
  root: {
    height: '100%'
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  chatSection: {
    flexGrow: 1
  },
  button: {
    margin: `${theme.spacing.unit * 2}px 0` 
  },
  input: {
    height: '80%'
  }
});

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }  
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newMessage = {
      //will check data
    };

  }


  render() {
    const { classes, activeChat } = this.props;

    return (
      <Grid container className={classes.root} direction={"column"}>
        <Grid style={{ height: "85%" }} className={classes.chatSection}>
          <ChatHeader />
          <ChatBody activeChat={activeChat} />
        </Grid>
        <Grid style={{ height: "15%", display:"flex", flexDirection: "row" }}>
          <InputBaseComponent className={classes.input}/>
          <Button variant="contained" className={classes.button}>
            Send
          </Button>
        </Grid>
      </Grid>
    );
  }
};

Chat.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Chat);
