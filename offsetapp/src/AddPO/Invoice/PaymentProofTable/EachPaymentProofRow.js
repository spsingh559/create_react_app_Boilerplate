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

  
    render()    {

        let action=[
            <IconButton key={1}>
            <EditIcon />
        </IconButton>,
        <IconButton key={2}>
        <Delete />
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
      </tr>
    
        )
    
    }
}

EachPaymentProofRow.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(EachPaymentProofRow);