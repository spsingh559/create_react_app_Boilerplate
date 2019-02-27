import React, { Component } from 'react';
// import logo from './logo.svg';
import './Login.css';
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
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router';
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  dense: {
    marginTop: 19,
  },
});
class Login extends Component {

  state={
    name: '',
    pwd :""
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  
  submit=()=>{
    const { router } = this.props;
    router.push('/')

  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Loginbackground">
     <Container>
     <AppBar position="static">
        
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Offset Login
          </Typography>
        </Toolbar>
      </AppBar>
   <Row>
     <center>

   
    <Paper elevation={5} style={{height:"300px", width:"300px", marginTop:"100px"}}>
    <h3> Offset Authentication System </h3>
    <center>
    <form className={classes.container} noValidate autoComplete="off">
    <TextField
          id="standard-dense"
          label="User Name"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
        />
<br />
<br />
<TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
<br />
<Button variant="contained" color="primary" style={{marginTop:"30px"}} onClick={this.submit}>
        Submit
      </Button>
      <br />
      <br />
      <br />
        </form>
        </center>
        </Paper>
    
    </center>
    </Row>
   
    </Container>
      </div>
     
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};
export default withStyles(styles)(Login);
