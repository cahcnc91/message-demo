import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    textAlign: 'center',
    height: '100%',
    padding: theme.spacing.unit
  },
  textarea: {
    border: '1px solid #F8F8F8',
    height: '75%',
    width: '80%'
  }
});

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
  }

  handleBodyChange(e) {
    const body = e.target.value;
    this.setState({ body: body });
  }

  handleRemoval(){
    
  }

  render() {
    const { classes } = this.props;
    const note = {body: 'this is a test note'};
    
    if (note) {
      return (
        <div className={classes.root}>
          <Typography variant="h6" gutterBottom>Personal NotePad</Typography>
          <textarea className={classes.textarea} value={this.state.body} placeholder="Your notes here" onChange={this.handleBodyChange.bind(this)}></textarea>
        </div>
      );
    } else {
      return (
        <p>
          Pick or create a note
        </p>
      );
    }
  }
};

Notes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Notes);