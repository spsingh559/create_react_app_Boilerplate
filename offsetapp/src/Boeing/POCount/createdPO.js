import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

class CreatedPO extends Component {
    render()
    {
        const {classes} = this.props;
        return(
            <Paper elevation={1} style={{height:"75px", paddingLeft:"20px"}} square={false}>
                        <center>
                          <Typography variant="h5" component="h3">
                            {this.props.heading}
                          </Typography>
                          <Typography component="p" color="primary">
                          <h2>{this.props.createPO}</h2>
                          </Typography>
                        </center>
                      </Paper>
        )
    
    }
}

CreatedPO.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(CreatedPO);