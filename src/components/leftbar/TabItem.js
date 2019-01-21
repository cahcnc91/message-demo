import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchBar from "material-ui-search-bar";

import Attachments from './Attachments';
import Links from './Links';
import Notes from './Notes';

const styles = theme => ({
  root: {
    height: "100%",
    backgroundColor: "#F8F8F8"
  },
  notepad: {
    height: "100%",
    backgroundColor: "#F8F8F8",
    position: "relative",
  },
  searchBar: {
    bottom: 0,
    position: "absolute",
    margin: 10,
    borderRadius: "20px",
  }
  
});

const TabItem = props => {
  const { classes, selectedTab } = props;
  let board;

  if (selectedTab === 0) {
    board = (
      <Attachments />
    )
  } else if (selectedTab === 1) {
    board = (
      <Links />
    )
  } else {
    board = (
      <Notes />
    )
  }

  return (
    <Grid className={classes.root}>
        <div className={classes.notepad}>
          <div>
          {board}
          </div>
          <div className={classes.searchBar}>
            <SearchBar
              style={{borderRadius: "20px"}}
              //value={this.state.search}
              //onChange={(newSearch) => this.setState({ search: newSearch })}
              //onRequestSearch={() => doSomethingWith(this.state.search)}
            />
          </div>
        </div>
    </Grid>
  );
};

TabItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabItem);
