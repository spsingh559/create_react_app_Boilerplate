import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ButtonBB from 'react-bootstrap/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {Container, Row, Col} from 'react-bootstrap';
import YearSlider from './YearSlider';

//  Imported Component


const styles = theme => ({
    root: {
        ...theme
            .mixins
            .gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    },
    container: {
      position: "fixed",
      width: "100%",
      height: "100%",
      zIndex: "-10",
      backgroundColor:"#eeeeee",
      marginTop:"100px"
    }
});

class NewDashboard extends Component {

    render() {
        const {classes} = this.props;
       
        return (
          <div style={{position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: "-10",
          backgroundColor:"#eeeeee"}}>

            <div style={{ marginTop: "50px"}}>
<YearSlider />
                           </div>
                           </div>
        );
    }
}

NewDashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewDashboard);