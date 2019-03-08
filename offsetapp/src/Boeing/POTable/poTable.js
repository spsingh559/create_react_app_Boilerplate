import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TableL1 from './tableL1';
const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

class POTable extends Component {
    render()
    {
        const {classes} = this.props;
        return(
            
            <TableL1 data={this.props.data}/>
        )
    
    }
}

POTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(POTable);