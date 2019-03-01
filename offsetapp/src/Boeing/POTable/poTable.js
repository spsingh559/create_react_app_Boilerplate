import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Container,Row, Col } from 'react-bootstrap';
import TableData from './tableData';
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
            
            <TableL1 data={TableData}/>
        )
    
    }
}

POTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(POTable);