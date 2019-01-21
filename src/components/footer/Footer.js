import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: "flex",
    height: '6vh',
  },
  alignCenterColumn: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#222222",
    justifyContent: "flex-end"
  },
  button: {
    margin: theme.spacing.unit
  },
  footerText: {
    color: "#ffffff"
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <Paper
      className={classNames(
        classes.root,
        classes.alignCenterColumn,
        classes.position
      )}
      elevation={1}
    >
      <Typography component="p" className={classes.footerText}>
        © 2019 Camila Niero
      </Typography>
      <Typography component="p" className={classes.footerText}>
        Terms of Service | Privacy Policy
      </Typography>
    </Paper>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
