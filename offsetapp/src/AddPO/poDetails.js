import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import POData from '../Boeing/POTable/tableData';

import PODetailTable from './PODetailTable/PODetailTable';
import InvoiceTable from './Invoice/InvoiceTable';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import POAddData from './AddDetails/POAddData/POAddData';
const POObject = {
    "poNumber":"PO123456",
    "appID":"app1",
    "status":"created",
    "deficit":"100",
    "assignedTo":"supplier1@boeing.com"
}

const sampleData={
  
  invNumber:"INV12",
    invDate:"12/02/2019",
    invValue:1000,
    transDetails:"acct5679065XXX",
    iva:3900,
    credit:6678,
    remarks:"done",
    selectedFile:"invoice.txt",
    type:"Invoice"
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width:100
  },
  fab: {
    margin: theme.spacing.unit,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class PODetails extends Component {

  state = {
    value: 0,
    open: false,
    edit:false,
    showDialog:false,
    newPOData:[sampleData]
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  
  handleClickOpen = () => {
    this.setState({ open: true });
    console.log("State Open"+this.props.open)

  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // Function for PO Submit 

  poSubmittedData=(data)=>{

    let newData=[data].concat(this.state.newPOData);
    this.setState({newPOData:newData, open:false});
  }

  

  render() {
      const { classes } = this.props;
    console.log('ponumber from route is', this.props.params.poNumber);
      const { value } = this.state;
      const { fullScreen } = this.props;
    return (
      <div  >
      
      <AppBar position="static">

<Toolbar
    style={{
    backgroundColor: "black",
    alignItems: "center"
}}>
    <Typography variant="h6" color="inherit">
       PO Detail Page
    </Typography>
</Toolbar>

</AppBar>

<br/>
       <Container style={{margintop:"100px"}}>

   
       

              <Row>
                <Col md={12}>
                        <PODetailTable data={POData[0]}/>
                </Col>               
              </Row>
              <Row>
                <div style={{marginTop:"30px", marginLeft:"800px"}}>

               
              <Button variant="contained" color="primary" style={{marginRight:"20px"}} onClick={this.handleClickOpen} >
                                                      PO  History
  </Button> 
  
  <Button variant="contained" color="primary" onClick={this.handleClickOpen} className="pull-right" style={{float: "right"}}>
                                                      Add PO Details
  </Button>
  
  </div>
              </Row>

              <Row>
                <Col md="12">
                <Paper>
                    <InvoiceTable data={this.state.newPOData}/>
                    </Paper>
                </Col>
                
              </Row> 
                                  
   
    <Row>
 

    <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
     <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleCloseDial} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
               Add PO Details
              </Typography>
              
            </Toolbar>
          </AppBar>
          <div style={{
              minHeight:"700px",
          width: "100%",
          height: "100%",
          backgroundColor:"#eeeeee"}}>
          <center>
          <Paper elevation={1} style={{height:"500px", width:"600px", marginTop:"100px"}}>
          <POAddData poSubmittedData={this.poSubmittedData}/>
          </Paper>
         
          </center>
          </div>
    <DialogActions>
      <Button onClick={this.handleClose} color="primary">
        OK
      </Button>
      {/* <Button onClick={this.handleClose} color="primary" autoFocus>
        Agree
      </Button> */}
    </DialogActions>
</Dialog>

        </Row>
    </Container>
       
   
      </div>
    );
  }
}

PODetails.propTypes = {
  classes: PropTypes.object.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  
};

export default withStyles(styles)(PODetails);