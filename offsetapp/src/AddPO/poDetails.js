import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainerNew from './AddDetails/TabContainerNew';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Grid from '@material-ui/core/Grid';
import FileData from './fileData'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';


import POTable from './PODetail/POTable';
import InvoiceTable from './Invoice/InvoiceTable';
import Comment from './Comments/Comment';
import TabView from './AddDetails/TabView';
import AddDetailsDialog from './AddDetails/AddDetailsDialog';

const POObject = {
    "poNumber":"PO123456",
    "appID":"app1",
    "status":"created",
    "deficit":"100",
    "assignedTo":"supplier1@boeing.com"
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

class PODetails extends Component {

  state = {
    value: 0,
    open: false,
    edit:false,
    showDialog:false
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

              <Row>
                <Col md={12}>
                        <POTable/>
                </Col>               
              </Row>

              {/* <Row>
                <Col md="12">
                    <InvoiceTable/>
                </Col>
              </Row>  */}
                                  
        </Col>
        {/* <Col md={4}>
                            
            <Comment/>
                                
        </Col>  */}
    </Row>   
    {/* <Row>
      
         <Col md={12}>
         <TabView/>
      
            
            
             </Col> 
    </Row>    */}
    <Row>
  <Button variant="contained" color="primary" style={{marginTop:"30px",position:"center"}} onClick={this.handleClickOpen}>
                                                      PO Transaction History
  </Button> 
  
  <Button variant="contained" color="primary" style={{marginTop:"30px",position:"center"}} onClick={this.handleClickOpen}>
                                                      Add Details
  </Button> 

  <Dialog
    fullScreen={fullScreen}
    open={this.state.open}
    onClose={this.handleClose}
    aria-labelledby="responsive-dialog-title"
    fullWidth={true}
    maxWidth='xl'
>
    <DialogTitle id="responsive-dialog-title">{"Summary Report"}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Add PO Details
      </DialogContentText>
    </DialogContent>
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