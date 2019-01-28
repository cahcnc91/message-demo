import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography, IconButton } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { logout } from "../../store/actions/index";
import { Button, Avatar } from "@material-ui/core/";

const styles = {
  root: {
    height: "100%"
  },
  menuButton: {
    marginRight: 20
  },
  typography: {
    color: "#fff"
  }
};

class Navbar extends React.Component {

  signOut() {
    this.props.logout();
  }

  render() {
    const { classes, auth } = this.props;
    let buttons;

    if (!auth.uid) {
      buttons = null;
    } else {
      buttons = (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Avatar alt="Remy Sharp" src={require("../../assets/djohnson.jpg")} />
          <Button
            style={{ marginLeft: "30px", color: "white", fontSize: 15 }}
            onClick={this.signOut.bind(this)}
          >
            Log Out
          </Button>
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "#4886B0",
            borderRadius: "2px",
            height: "100%"
          }}
        >
          <Toolbar
            style={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-between"
            }}
          >
            <div
              style={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography variant="h5" className={classes.typography}>
                  Message Demo
                </Typography>
              </Link>
            </div>
            {buttons}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { logout }
  )(Navbar)
);
