import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BoeingDashboard from '../Boeing/boeingDashboard';

class Supplier extends Component {

    render(){

        return(
            <div>
                <BoeingDashboard />
                </div>
        )
    }
}

Supplier.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default Supplier;