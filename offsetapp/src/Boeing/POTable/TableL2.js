import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Container,Row, Col } from 'react-bootstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    table: {
        minWidth: 700,
      },
  });

class TableL2 extends Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    console.log('value of click', this.state.anchorEl)
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleUpdate=()=>{
    alert('update clicked')
    this.setState({ anchorEl: null });
  }

  handleDelete =()=>{
    alert('Delete clicked')
    this.setState({ anchorEl: null });
  }
    render()    {
      let loginData=JSON.parse(sessionStorage.getItem("userLoginDetails"));
        const {classes} = this.props;
        const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

        return(
      
      <tr>
      <td> {this.props.data.poNumber}</td>
      <td> {this.props.data.appID}</td>
      <td>{this.props.data.status}</td>
      <td>{this.props.data.deficit}</td>
      <td>{this.props.data.assignedTo}</td>
      <td>
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
     
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
             >
        
            <MenuItem  onClick={this.handleUpdate}>
            update
            </MenuItem>
            <MenuItem  onClick={this.handleDelete}>
            Delete
            </MenuItem>
            <MenuItem  onClick={this.handleClose}>
            Archive
            </MenuItem>
        </Menu>
      </div>
             
      </td>
      </tr>
    
        )
    
    }
}

TableL2.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(TableL2);