import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonBB from 'react-bootstrap/Button';
import {Container,Row,Col} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router';



class App extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div>
        <Container>
         <AppBar position="static">
        
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    View PO Details
                  </Typography>
                </Toolbar>
        </AppBar>
        
          <Row>
               
                    <h3> PO Details </h3>
    
                    <form className={classes.container} noValidate autoComplete="off">
                         <TextField
                              disabled
                              id="standard-disabled"
                              label="Disabled"
                              defaultValue="PO Number"
                              className={classes.textField}
                              margin="normal"
                            />

                        <br />
                        <br />
                         <TextField
                                  disabled
                                  id="standard-disabled"
                                  label="Disabled"
                                  defaultValue="App ID"
                                  className={classes.textField}
                                  margin="normal"
                                />
</form>
                        <br />

        </Row>
   
    </Container>
      </div>
     
    );
  }
}


export default App;
