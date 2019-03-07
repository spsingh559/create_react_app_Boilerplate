import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';

import Paper from '@material-ui/core/Paper';
import {Table} from 'react-bootstrap';

const POObject = {
    "poNumber":"PO123458",
    "appID":"app3",
    "status":"PO Details Being Verified",
    "actionOwner":"boeing1@boeing.com",
    "supplierName":"supplier1",
    "eiva":2000,
    "riva":1800,
    "deficit":100,
}

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    table: {
        minWidth: 745,
      },
  });

class PODetailTable extends Component {
    render()    {
        const { classes } = this.props;
console.log('data in po table', this.props.data);
return(
    <Paper>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
         Details of Purchase Order
        </Typography>
      </Toolbar>
    </AppBar>
    <Container style={{marginTop:"10px"}}>

    <Table striped bordered hover responsive className={classes.table}> 
<thead style={{backgroundColor:"#ccddff"}}>
  <tr>
    <th>PO Number</th>
    <th>Status</th>
    <th>Action Owner</th>
    <th>Supplier Name</th>
    <th>EIVA</th>
    <th>RIVA</th>   
    <th>IVA Status</th>
    <th>Deficit</th>
      
  </tr>
</thead>
<tbody>
<tr>
      <td  > {this.props.data.poNumber}</td>
      <td> {this.props.data.status}</td>
      <td>{this.props.data.actionOwner}</td>
      <td>{this.props.data.supplierName}</td>
      <td>{this.props.data.eiva}</td>
      <td>{this.props.data.riva}</td>
      <td>{this.props.data.deficit}</td>
      <td>{(this.props.data.riva/this.props.data.eiva)*100 +"%"}</td>
            
            </tr>
  </tbody>
  </Table>
    
        {/* <Row style={{paddingBottom:"10px"}}>
            <Col md={4}>
            <Typography >
                <b>PO Number </b> - {POObject.poNumber}
                </Typography>
            </Col>
            <Col md={4}>
            <Typography >
                <b>App ID </b> - {POObject.appID}
                </Typography>
            </Col>
            <Col md={4}>
            <Typography >
                <b>PO Status </b> - {POObject.status}
                </Typography>
            </Col>
            </Row>

            <Row style={{paddingBottom:"10px"}}>
            <Col md={4}>
            <Typography >
                <b>Action Owner </b> - {POObject.actionOwner}
                </Typography>
            </Col>
            <Col md={4}>
            <Typography >
                <b>Supplier Name</b> - {POObject.supplierName}
                </Typography>
            </Col>
            <Col md={4}>
            <Typography >
                <b>EIVA</b> - {POObject.eiva}
                </Typography>
            </Col>
            </Row>

         
            <Row style={{paddingBottom:"10px"}}>
            <Col md={4}>
            <Typography >
                <b>RIVA </b> - {POObject.riva}
                </Typography>
            </Col>
            <Col md={4}>
            <Typography >
                <b>Deficit</b> - {POObject.deficit}
                </Typography>
            </Col>
            <Col md={4}>
            <Typography >
                <b>IVA Status</b> - {(POObject.riva/POObject.eiva)*100 +'%'}
                </Typography>
            </Col>
            </Row> */}

    </Container >
   
          {/* <TextField
          disabled
                id="standard-name"
                label="PO Number"
                className={classes.textField}
              defaultValue={POObject.poNumber}

                margin="normal"
              />

          <TextField
          disabled
            id="standard-uncontrolled"
            label="App ID"
            defaultValue={POObject.poNumber}
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="standard-uncontrolled"
            label="Status"
            defaultValue={POObject.status}
            className={classes.textField}
            margin="normal"
            disabled
          />
          <TextField
          disabled
            id="standard-uncontrolled"
            label="Deficit"
            defaultValue={POObject.deficit}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-uncontrolled"
            label="Status"
            defaultValue={POObject.assignedTo}
            className={classes.textField}
            margin="normal"
            disabled
          /> */}
      
        </Paper>
)
    
    }
}

PODetailTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(PODetailTable);

