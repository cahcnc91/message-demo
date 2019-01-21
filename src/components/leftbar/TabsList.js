import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Attachment, Link, Menu } from '@material-ui/icons/';


const styles = theme => ({
  tabs: {
    display: 'flex',
    flexDirection: 'column'
  },
  tab: {
    textAlign: 'center',
    cursor: 'pointer',
    padding: theme.spacing.unit,
  }
});

class TabsList extends React.Component {

  render() {
    const { classes } = this.props;
    const icons = [<Attachment />, <Link />, <Menu />];

    return (
        <div className={classes.tabs}>
          {icons.map((item, index) =>(
          <div key={index} className={classes.tab} onClick={() => this.props.handleSelectTab(index)} style={this.props.selectedTab === index? {backgroundColor: '#F8F8F8'}: null}>
            {item}
          </div>
          ))}
        </div>
    );
  }
}

TabsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabsList);
