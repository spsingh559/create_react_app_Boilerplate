import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableData from '../POTable/tableData';
import StatusTableL1 from './StatusTableL1';
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
            
            <StatusTableL1 data={TableData}/>
        )
    
    }
}

POTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(POTable);