import React from "react";
import { Grid } from "@material-ui/core/";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TabsList from "./TabsList";
import TabItem from "./TabItem";

const styles = () => ({
  root: {
    flexGrow: 1,
    height: "100%"
  }
});

class LeftBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0
    }
    this.handleSelectTab = this.handleSelectTab.bind(this);

  }

  handleSelectTab (tab) {
    this.setState({selectedTab: tab})  
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} direction={"row"}>
          <Grid item xl={2} lg={2} md={2} sm={2}>
            <TabsList handleSelectTab={this.handleSelectTab} selectedTab={this.state.selectedTab}/>
          </Grid>
          <Grid item xl={10} lg={10} md={10} sm={10}>
            <TabItem selectedTab={this.state.selectedTab} />
          </Grid>

  
      </Grid>
    );
  }
}
LeftBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeftBar);