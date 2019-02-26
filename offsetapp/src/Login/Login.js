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
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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


  render() {
    const { classes } = this.props;
    return (
      <div style={{marginTop:"500px"}}>
     <Container>
       
   <Row>
     <center>

    <Col xs={6}>
    <Paper elevation={1}>
    {/* <form className={classes.container} noValidate autoComplete="off"> */}
        <TextField
          id="outlined-name"
          label="User Name"
          // className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
<br />
<TextField
          id="outlined-name"
          label="Password"
          // className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
<br />
<Button variant="contained" color="primary" >
        Submit
      </Button>
      <br />
        {/* </form> */}
        </Paper>
    </Col>
    </center>
    </Row>
   
    </Container>
      </div>
     
    );
  }
}

export default Login;
