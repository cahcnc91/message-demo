import React from "react";
import PropTypes from "prop-types";
import { IconButton, FormControl, Select, MenuItem } from "@material-ui/core/";
import { Settings, Group } from '@material-ui/icons/';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  optionsContacts: {
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 2
  },
  button: {
    color: "#4886B0",
    padding: theme.spacing.unit
  },
  formControl: {
    minWidth: `${theme.spacing.unit * 22}px`
  },
  select: {
    backgroundColor: '#FFFFFF',
    margin: theme.spacing.unit
  }
});

class OptionsContacts extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (e) => {
    this.props.onChatFilterChange(e.target.value);
  }

  render () {
    const { classes, chatFilter } = this.props;
    
    return (
      <div className={classes.optionsContacts}>
        <IconButton className={classes.button} onClick={this.props.handleListChoice}>
          <Group fontSize="large" />
        </IconButton>
        <IconButton className={classes.button}>
          <Settings fontSize="large" />
        </IconButton>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select 
            value={chatFilter} 
            onChange={this.handleChange}
            inputProps={{name: 'chatFilter'}}
            className={classes.select}
          >
              <MenuItem value="all-recent">All Recent</MenuItem>
              <MenuItem value="all-recent">Option 1</MenuItem>
              <MenuItem value="all-recent">Option 2</MenuItem>
              <MenuItem value="all-recent">Option 3</MenuItem>
          </Select>
        </FormControl>
      </div>
     
    );
  }

  
};

OptionsContacts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OptionsContacts);
