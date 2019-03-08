import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class POPaymentProof extends React.Component {

  state={
    invNumber:'',
    invDate:new Date(),
    invValue:0,
    transDetails:'',
    iva:0,
    credit:0,
    remarks:'',
    selectedFile:null,
    value:"Invoice"
  }

  handleInvNumber=(e)=>{
    this.setState({invNumber:e.target.value})
  }
  
  handleinvDate=(e)=>{
    this.setState({invDate:e.target.value})
  }

  handleinvValue=(e)=>{
    this.setState({invValue:e.target.value})
  }
 
  handleTransDetails=(e)=>{
    this.setState({transDetails:e.target.value})
  }

  handleIVA=(e)=>{
    this.setState({iva:e.target.value})
  }

  handleCredit=(e)=>{
    this.setState({credit:e.target.value})
  }
  handleRemarks=(e)=>{
    this.setState({remarks:e.target.value})
  }

  handleFileChange=(e)=>{
    this.setState({selectedFile: e.target.files[0]})
  }

  handleChange=(e)=>{
    this.setState({value:e.target.value});
  }

  submitForm=()=>{

    // const data = new FormData()
    // data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    let poAddedData={
      invNumber:this.props.invNumber,
      paymentProofNum:Date.now(),
    invDate:this.state.invDate,
    invValue:this.state.invValue,
    transDetails:this.state.transDetails,
    iva:this.state.iva,
    credit:this.state.credit,
    remarks:this.state.remarks,
    selectedFile:this.state.selectedFile.name,
    type:"PaymentProof"
    }
    console.log('poAddedData is', poAddedData);
    this.props.poSubmittedData(poAddedData);
    
  }

    render() {
      const { classes } = this.props;
      return (
        <div id="Form">
          <Container>
      
          <form  noValidate autoComplete="off" onSubmit={this.props.handleFormSubmit}>
          <Row>

            <Col>
             <TextField
                id="invNumber"
                label="Invoice Number"
                className={classes.textField}
                value={this.props.invNumber}
                margin="normal"
                name="invNumber"
                disabled={true}
            />
          
            </Col>
            <Col>
            <TextField
        id="date"
        label="Invoice Date"
        type="date"
        defaultValue="2019-03-01"
        className={classes.textField}
        value={this.state.invDate}
        onChange={this.handleinvDate}
        InputLabelProps={{
          shrink: true,
        }}/>
            </Col>
         
            <Col>
              <TextField
                id="invValue"
                label="Value"
                value={this.state.invValue}
                onChange={this.handleinvValue}
                className={classes.textField}                        
                margin="normal"
                name="invValue"
              />
           </Col>
         </Row>
         <Row>   

         <Col>
             <TextField
                id="transDetails"
                label="Bank Tx Details"
                className={classes.textField}
                value={this.state.transDetails}
                onChange={this.handleTransDetails}
                margin="normal"
                name="transDetails"
            />
         
            </Col>

          
            <Col>
             <TextField
                id="ivav"
                label="India Value Add"
                className={classes.textField}
                value={this.state.iva}
                onChange={this.handleIVA}
                margin="normal"
                name="ivav"
            />
          
            </Col>
            <Col>
             <TextField
                id="credit"
                label="Credit Claim Value"
                className={classes.textField}
                value={this.state.credit}
                onChange={this.handleCredit}
                margin="normal"
                name="credit"
            />
          
            </Col>

            
</Row>
<Row>
<Col>
             <TextField
                id="remarks"
                label="Remarks"
                className={classes.textField}
                value={this.state.remarks}
                onChange={this.handleRemarks}
                margin="normal"
                name="remarks"
            />
          
            </Col>
            <Col>
       
      <input
        accept="any/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
         onChange={this.handleFileChange}
      />
      
      <br/>

      <label htmlFor="contained-button-file">
       
      </label>
                               
                           </Col>

        </Row>
        
        <br/>
        <div style={{marginTop:"30px"}}>
        <Button variant="contained" color="primary" style={{position:"center"}} onClick={this.submitForm}>
                                                     Submit Payment Proof
                      </Button> 
                      <Button variant="contained" color="primary" style={{marginLeft:"30px",position:"center"}} >
                                                     Cancel
                      </Button>  
                      </div>
        
          </form>
          </Container>
        </div>
      );
    }
  }

  POPaymentProof.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles) (POPaymentProof);