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

  function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

class TableL2 extends Component {

  state = {
    anchorEl: null,
    openDial:false
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

  showPO=()=>{
this.setState({openDial:true})
  }
  handleCloseDial=()=>{
    this.setState({openDial:false})
  }
    render()    {
      let loginData=JSON.parse(sessionStorage.getItem("userLoginDetails"));
        const {classes} = this.props;
        const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

        return(
      
      <tr>
      <td onClick={this.showPO} style={{color:"blue",cursor: "pointer"}}> {this.props.data.poNumber}</td>
      <td> {this.props.data.appID}</td>
      <td>{this.props.data.status}</td>
      <td>{this.props.data.deficit}</td>
      <td>{this.props.data.assignedTo}</td>
      <td>{this.props.data.poIVA}</td>
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
      <Dialog
          fullScreen
          open={this.state.openDial}
          onClose={this.handleCloseDial}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleCloseDial} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                {"PO Number "+this.props.data.poNumber}
              </Typography>
              <Button color="inherit" onClick={this.handleCloseDial}>
                Print
              </Button>
            </Toolbar>
          </AppBar>
          <div style={{
              minHeight:"700px",
          width: "100%",
          height: "100%",
          backgroundColor:"#eeeeee"}}>
          <center>
          <Paper elevation={1} style={{height:"300px", width:"500px", marginTop:"30px"}}>
          <Typography variant="h6" color="inherit"  >
          App ID  - {this.props.data.appID}
          </Typography>
         
          <Divider />
          <br/>
          <Typography variant="h6" color="inherit" >
          Current Status  - {this.props.data.status}
          </Typography>
          
          <Divider />
          <br/>
          <Typography variant="h6" color="inherit" >
          Offset Deficit  - {this.props.data.deficit}
          </Typography>
          
          <Divider />
          <br/>
          <Typography variant="h6" color="inherit" >
          assignedTo  - {this.props.data.assignedTo}
          </Typography>
          
          <Divider />
          <br/>
          <Typography variant="h6" color="inherit" >
          PO IVA  - {this.props.data.poIVA}
          </Typography>
          
          <Divider />
          <br/>
          </Paper>
          </center>
          </div>
        </Dialog>
      </tr>
    
        )
    
    }
}

TableL2.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(TableL2);