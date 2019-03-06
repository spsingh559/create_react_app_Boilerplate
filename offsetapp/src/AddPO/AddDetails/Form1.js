import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Form1 extends React.Component {
  
    render() {
      const { classes } = this.props;
      return (
        <div id="Form">
          <Container>
      
          <form className={classes.container} noValidate autoComplete="off" onSubmit={this.props.handleFormSubmit}>
          <Row>

            <Col>
             <TextField
                id="invNumber"
                label="Invoice Number"
                className={classes.textField}
                value={this.props.invNumber}
                onChange={this.props.handleInputChange}
                margin="normal"
                name="invNumber"
            />
          
            </Col>
            <Col>
            <TextField
        id="date"
        label="Invoice Date"
        type="date"
        defaultValue="2019-03-01"
        className={classes.textField}
        value={this.props.date}
        onChange={this.props.handleInputChange}
        InputLabelProps={{
          shrink: true,
        }}/>
            </Col>
         
            <Col>
              <TextField
                id="invValue"
                label="Value"
                value={this.props.invValue}
                onChange={this.props.handleInputChange}
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
                label="Bank Transaction Details"
                className={classes.textField}
                value={this.props.transDetails}
                onChange={this.props.handleInputChange}
                margin="normal"
                name="transDetails"
            />
         
            </Col>

          
            <Col>
             <TextField
                id="ivav"
                label="India Value Add"
                className={classes.textField}
                value={this.props.ivav}
                onChange={this.props.handleInputChange}
                margin="normal"
                name="ivav"
            />
          
            </Col>
            <Col>
             <TextField
                id="credit"
                label="Credit Claim Value"
                className={classes.textField}
                value={this.props.credit}
                onChange={this.props.handleInputChange}
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
                value={this.props.remarks}
                onChange={this.props.handleInputChange}
                margin="normal"
                name="remarks"
            />
          
            </Col>
            <Col>
           


              
              {/* <FilePond allowMultiple={true} onChange={this.handleChangeLocation}/> */}

              
              {/* <input type="file" name="location" value={this.props.newfilelocation} onChange={this.props.handleFileChange}/> */}
                                {/* <img src={this.state.file}/> */}
      <input
        accept="any/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        value={this.props.newfilelocation} 
        onChange={this.props.handleFileChange}
      />
      <br/>

      <label htmlFor="contained-button-file">
        {/* <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button> */}
      </label>
                               
              {/* <Button variant="contained" color="primary" style={{marginTop:"30px"}} onClick={this.submit}>
                                        Upload
              </Button>  */}
              </Col>

        </Row>
        <Row>
        <button type="submit" value="Submit">Add Item</button>
        </Row>  
        <br/>
        
       
        <Button variant="contained" color="primary" style={{marginTop:"30px",position:"center"}} >
                                                     Submit
                      </Button>  

            {/* <label htmlFor="name">
            Name:
            <input id="name" value={this.props.newname} type="text" name="name" onChange={this.props.handleInputChange} />
            </label>
            <label for="description">
            Description:
            <input id="description" value={this.props.newdescription} type="text" name="description" onChange={this.props.handleInputChange} />
            </label>
            <label for="location">
            Location:
            <input id="location" value={this.props.newfilelocation} type="file" name="location" onChange={this.props.handleFileChange} />
            </label>
            <button type="submit" value="Submit">Add Item</button> */}
          </form>
          </Container>
        </div>
      );
    }
  }

  Form1.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles) (Form1);