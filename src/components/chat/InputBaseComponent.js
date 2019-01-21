import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { InsertEmoticonOutlined, Settings, AttachFileOutlined }from '@material-ui/icons/';

const styles = theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "80%",
    margin: `${theme.spacing.unit * 2}px`
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 32,
    margin: 4,
  },
});

function InputBaseComponent(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input} placeholder="Messages Here" />
      <IconButton className={classes.iconButton} aria-label="Search">
        <InsertEmoticonOutlined />
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
        <AttachFileOutlined />
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
        <Settings />
      </IconButton>
    </Paper>
  );
}

InputBaseComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputBaseComponent);