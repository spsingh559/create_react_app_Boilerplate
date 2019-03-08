import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import EditIcon from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete';
import {Link} from 'react-router';
import ViewModule from '@material-ui/icons/ViewModule';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import OpenPaymentView from '../OpenPaymentView';
const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    table: {
        minWidth: 700,
      },
      appBar: {
        position: 'relative',
      },
      flex: {
        flex: 1,
      },
  });



class EachPaymentProofRow extends Component {

    state={
        OpenInvoiceDial:false
    }

    showInv=()=>{
        this.setState({OpenInvoiceDial:true})
      }

      handleCloseInvoiceView=()=>{
          this.setState({OpenInvoiceDial:false})
      }
  
    render()    {

        let action=[
            <IconButton key={1}>
            <EditIcon />
        </IconButton>,
        <IconButton key={2}>
        <Delete />
    </IconButton>,
    <IconButton key={4} onClick={this.showInv}>
    <ViewModule />
</IconButton>
        ]
      
        const {classes} = this.props;
       

       
  
        return(
            
      <tr>
      <td  style={{color:"blue",cursor: "pointer"}}>  {this.props.data.paymentProofNum}</td>
      <td> {this.props.data.type}</td>
      <td>{this.props.data.selectedFile} </td>
      <td>
      {action}
            </td>
            <Dialog
     open={this.state.OpenInvoiceDial}
     onClose={this.handleCloseInvoiceView}
     aria-labelledby="form-dialog-title"
   >
     <DialogTitle id="form-dialog-title">Invoice Detail for - {this.props.data.invNumber}</DialogTitle>
     <DialogContent>
     <OpenPaymentView data={this.props.data}/>
     
     </DialogContent>
     <DialogActions>
       <Button onClick={this.handleCloseInvoiceView} color="primary">
         Close
       </Button>
    </DialogActions>
   </Dialog>
      </tr>
    
        )
    
    }
}

EachPaymentProofRow.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(EachPaymentProofRow);