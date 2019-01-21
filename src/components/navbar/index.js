import React, { Component, Fragment } from "react";
// import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import FontAwesome from "react-fontawesome";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Search from "@material-ui/icons/Search";
// import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    height: "10vh"
  },
  flex: {
    flexGrow: 1
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  },
  menuButton: {
    left: "-20px",
    top: "50px"
  },
  navStyle: {
    display: "flex",
    flexGrow: 12,
    justifyContent: "space-around"
  },
  navStyleSmall: {
    display: "flex",
    justifyContent: "space-around"
  },
  navItems: {
    fontWeight: "Lighter",
    fontSize: "22px"
  },
  status: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    backgroundColor: "#36A000",
    zIndex: 10,
    position: "relative",
    left: 55,
    bottom: 20
  },
  invisible: {
    "&$invisChecked": {
      color: "gray"
    }
  },
  invisChecked: {},
  onlineChecked: {},
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  formControl: {
    marginLeft: theme.spacing.unit * 3
  },
  formControlSmall: {},
  icon: {
    color: "#fafafa",
    backgroundColor: "#4886B0",
    padding: "5px",
    borderRadius: "5px"
  },
  fullList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%"
  }
});

class MenuAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true, //props.auth is missing  ====> replace props.auth instead of true
      anchorEl: null,
      loginVisibility: "Online",
      bottom: false,
      showMenu: false
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleRadioChange = event => {
    this.setState({ loginVisibility: event.target.value });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const largeScreen = true; // window.innerWidth >= 1440

    const fullList = (
      <div className={classes.fullList}>
        <FormControl component="fieldset" className={classes.formControlSmall}>
          <RadioGroup
            aria-label="login-visibility"
            name="login-visibility"
            className={classes.group}
            value={this.state.loginVisibility}
            onChange={this.handleRadioChange}
          >
            <FormControlLabel
              value="Online"
              control={
                <Radio
                  color="inherit"
                  className={classNames(classes.online, classes.onlineChecked)}
                />
              }
              label="Online"
            />
            <FormControlLabel
              value="Invisible"
              control={
                <Radio
                  color="inherit"
                  className={classNames(
                    classes.invisible,
                    classes.invisChecked
                  )}
                />
              }
              label="Invisible"
              style={{
                position: "relative",
                bottom: 18
              }}
            />
          </RadioGroup>
        </FormControl>
        <Divider style={{ width: "100%" }} />
        <List>
          <Typography className={classes.navItems}>OPTION1</Typography>
        </List>
        <List>
          <Typography className={classes.navItems}>OPTION2</Typography>
        </List>
        <List>
          <Typography className={classes.navItems}>OPTION3</Typography>
        </List>
        <List>
          <Typography className={classes.navItems}>OPTION4</Typography>
        </List>
        <List>
          <Typography className={classes.navItems}>MESSAGES</Typography>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit" style={{ height: "100%" }}>
          <Toolbar>
            <Typography
              variant="title"
              className={classes.flex}
              component={null} //ToHome
            >
              <img
                src={require("../../assets/logo-black.png")}
                alt="logo"
                style={{
                  position: "relative",
                  height: 60,
                  marginTop: 10,
                  marginLeft: -30,
                  paddingRight: 40,
                  paddingLeft: 40
                }}
              />
            </Typography>

            {true && //put auth instead of true props.auth
              (largeScreen ? (
                <div className={classes.navStyle}>
                  <Typography className={classes.navItems}>OPTION1</Typography>
                  <Typography className={classes.navItems}>OPTION2</Typography>
                  <Typography className={classes.navItems}>OPTION3</Typography>
                  <Badge
                    className={classes.padding}
                    badgeContent={4}
                    color="secondary"
                  >
                    <Typography className={classes.navItems}>
                      MESSAGES
                    </Typography>
                  </Badge>
                  <Badge
                    className={classes.padding}
                    badgeContent={45}
                    color="primary"
                  >
                    <Typography className={classes.navItems}>
                      OPTION5
                    </Typography>
                  </Badge>
                </div>
              ) : null)}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
