import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Typography, ListItemSecondaryAction } from '@material-ui/core/';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 1
  },
  list: {
    width: '100%',
    height: '60vh',
    overflow: 'auto',
    backgroundColor: '#F8F8F8',
  },
  listItem: {
    backgroundColor: '#F8F8F8',
    padding: 0,
    margin: 1,
    width: "90%"
  }
});

class Attachments extends React.Component {
  state = {

  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h6">Attachments</Typography>
        <List className={classes.list}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(value => (
            <ListItem key={value} className={classes.listItem} style={{backgroundColor: '#F8F8F8'}}>
              <img
                  alt='file'
                  src={require("../../assets/word.png")}
              />
              <ListItemText primary="Attachment-sample" secondary="52kb by Camila Niero 4/5/2017" />
              <ListItemSecondaryAction style={{}}>
                <i className="fas fa-file-download"></i>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
      
    );
  }
}

Attachments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Attachments);