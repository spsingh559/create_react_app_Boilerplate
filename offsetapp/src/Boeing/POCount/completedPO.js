import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Container,Row, Col } from 'react-bootstrap';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

class CompletedPO extends Component {
    render()
    {
        const {classes} = this.props;
        return(
            <Paper elevation={1} style={{height:"75px"}}> 
            <center>
            <Typography variant="h5" component="h3">
              Completed PO
            </Typography>
            <Typography component="p">
            <h2>8</h2>
            </Typography>
            </center>
          </Paper>
        )
    
    }
}

CompletedPO.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(CompletedPO);