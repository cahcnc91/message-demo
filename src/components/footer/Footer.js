import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";

const styles = theme => ({
  root: {
    height: "100%"
  },
  alignCenterColumn: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#222222",
    justifyContent: "center"
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
        classes.alignCenterColumn
      )}
      elevation={1}
    >
      <Typography component="p" className={classes.footerText}>
        © 2019 Camila Niero
      </Typography>

    </Paper>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
