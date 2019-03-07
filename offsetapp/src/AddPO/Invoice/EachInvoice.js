import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import {Table} from 'react-bootstrap';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete';
// imported Component
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Container,Row,Col} from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Slide from '@material-ui/core/Slide';

import CloseIcon from '@material-ui/icons/Close';

import POPaymentProof from './POPaymentProof'
import PaymentProofTable from './PaymentProofTable/PaymentProofTable'
function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

  const sampleData={
  
    invNumber:"INV12",
    paymentProofNum:"PP123",
      invDate:"12/02/2019",
      invValue:1000,
      transDetails:"acct5679065XXX",
      iva:3900,
      credit:6678,
      remarks:"done",
      selectedFile:"invoice.txt",
      type:"Payment Proof"
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

class EachInvoice extends Component {

    state={
        checkVerify:false,
        open:false,
        newPOData:[sampleData]
    }

    handleChange = (event) => {
        this.setState({ checkVerify: event.target.checked });
      };

 
    addSubDoc=()=>{
        this.setState({open:true});
    }
   
    poSubmittedData=(data)=>{
        let newData=[data].concat(this.state.newPOData);
        this.setState({newPOData:newData, open:false});
      }
    render()    {
        const { classes } = this.props;
       
const action=[
    <IconButton key={1}>
    <EditIcon />
</IconButton>,
<IconButton key={2}>
    <Delete />
</IconButton>,
<FormControlLabel
key={3}
  control={
    <Checkbox
      checked={this.state.checkVerify}
      onChange={this.handleChange}
      value="verify"
      color="primary"
    />
  }
  label="Verify"
></FormControlLabel>
]

const expandedData=[
<Fab color="primary" aria-label="Add" onClick={this.addSubDoc} key={1}>
        <AddIcon />
      </Fab> ,
      <Row key={2}>
          <Col md={12}>
          <PaymentProofTable data={this.state.newPOData}/>
          </Col>
          </Row>
]

return(
   
     <ExpansionPanel>
        
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          {/* <Typography className={classes.heading}>Expansion Panel 1</Typography>
<Typography>
{this.props.data.invNumber} - {this.props.data.type} - {this.props.data.selectedFile} - Action
</Typography> */}


      <Table className={classes.table}> 
<thead >
  <tr>
    <th>{this.props.data.invNumber}</th>
    <th>{this.props.data.type}</th>
    <th>{this.props.data.selectedFile} </th>
    <th>
       {action}
    </th>
    
    </tr>
    </thead>
   
  </Table>

        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        {expandedData}
       </ExpansionPanelDetails>
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
               Add Payment Proofs for Invoice - {this.props.data.invNumber}
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
          <POPaymentProof invNumber={this.props.data.invNumber} poSubmittedData={this.poSubmittedData}/>
          </Paper>
         
          </center>
          </div>
    <DialogActions>
    
    </DialogActions>
</Dialog>

        </Row>
      </ExpansionPanel>

  
)
    
    }
}

EachInvoice.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(EachInvoice);

