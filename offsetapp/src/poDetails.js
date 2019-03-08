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
import TabContainer from './TabContainer';
import TabContainerNew from './TabContainerNew';
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
import Chip from '@material-ui/core/Chip';


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
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleEdit =() =>{
    console.log("Inside Edit");
    this.setState({ 
      edit: true 
    });
  }

  render() {
      const { classes } = this.props;
    
      const { value } = this.state;
      const { fullScreen } = this.props;
    return (
      <div  >
      
          <AppBar position="static">
        
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    View PO Details
                  </Typography>
                </Toolbar>
          </AppBar>


<br/>
       <Container style={{margintop:"100px","max-width": "100%","padding-left":"50px","padding-right":"50px"}}>


        {/* <Row>
          <Col>
        <Container style={{margintop:"10px","padding-left":"15px","padding-right":"15px"}}> */}
        <Grid container spacing={8}>
        <Grid item xs={9} >
                  <Paper>
                            <AppBar position="static" color="default">
                              <Toolbar>
                                <Typography variant="h6" color="inherit">
                                  PO Details
                                </Typography>
                              </Toolbar>
                            </AppBar>
                            <form className={classes.container} noValidate autoComplete="off" style={{"padding-left":"15px","padding-right":"15px","padding-bottom":"15px"}}>
                                  <TextField
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
                                  />
                                </form>
                                </Paper>
<br/>
                                <Paper>
                          <AppBar position="static" color="default">
                          <Toolbar>
                                <Typography variant="h6" color="inherit">
                                Invoice Details
                                </Typography>
                           </Toolbar>
                          </AppBar>

                          <Table>
            
            <TableHead>
              <TableRow>
                <TableCell>Invoice#</TableCell>
                <TableCell>Invoice Date</TableCell>
                <TableCell>Value</TableCell>
                <TableCell>Bank Transaction Details</TableCell>
                <TableCell>India Value Add</TableCell>
                <TableCell>Credit</TableCell>
                <TableCell>Remarks</TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {FileData.map(item => {
                return (
                  <TableRow>
                    <TableCell>{item.invNumber}</TableCell>
                    <TableCell>{item.invDate}</TableCell>
                    <TableCell>{item.inValue}</TableCell>
                    <TableCell>{item.transDetails}</TableCell>
                    <TableCell>{item.ivav}</TableCell>
                    <TableCell>{item.credit}</TableCell>
                    <TableCell>{item.remarks}</TableCell>
                    {/* <TableCell><input type="button"  className="btn btn-primary" value="Edit" onClick={this.handleEdit}/></TableCell> */}
                    <TableCell><Fab color="primary" aria-label="Edit" className={classes.fab} onClick={this.handleEdit}>
        <Icon>edit_icon</Icon>
      </Fab></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
                          </Paper>
                                {/* </Container>
                      </Col> */}

                     </Grid>
                  
                     <Grid item xs>
                      {/* <Col>
                      <Container style={{margintop:"10px",marginbottom:"10px","max-width": "100%","padding-left":"15px","padding-right":"15px"}}> */}
                        <Paper>
                          <AppBar position="static" color="default">
                          <Toolbar>
                                <Typography variant="h6" color="inherit">
                                Comment
                                </Typography>
                           </Toolbar>
                          </AppBar>
                     <br/>
                     <div style={{"padding-top":"10px","align":"left"}}>
                      <Chip
                      avatar={<Avatar>B</Avatar>}
                      label="Invoice#### :: — Please attach Invoice document"
                    
                      className={classes.chip}
                      
                    />
                    </div>
                    
                    <div style={{"padding-top":"10px","align":"right"}}>
                    <Chip
                      avatar={<Avatar>S</Avatar>}
                      label="Invoice#### :: — Please provide more details on PO"
                    
                      className={classes.chip}
                      
                    />
                    </div>
      {/* <List >

      <ListItem>
      <ListItemAvatar>
      <Avatar alt="Boeing" src="./images/boeing.png" />
    </ListItemAvatar>
    <ListItemText
      primary="Invoice####"
      secondary={
        <React.Fragment>
          <Typography component="span" className={classes.inline} color="textPrimary">
            To Supplier
          </Typography>
          {" Invoice#### :: — Please provide more details on PO"}
        </React.Fragment>
      }
    />
        </ListItem>
    
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Supplier" src="./images/supplier.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Invoice####"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                To Boeing
              </Typography>
              {" — Please provide more details on PO"}
            </React.Fragment>
          }
        />
      </ListItem>
      
    </List> */}

                            <form style={{"padding-left":"15px","padding-right":"15px"}}>
                            <TextField
                            id="filled-multiline-flexible"
                            label="Please enter your comments here"
                            multiline
                            rowsMax="10"
                          
                            className={classes.textField}
                            margin="normal"
                            
                            variant="filled"
                           style={{width:"500px"}}
                          />
                          <br/>
                          <Button variant="contained" color="primary" style={{marginBottom:"30px"}} >
                                                          Enter
                          </Button> 
                          </form>
                          </Paper>
                        
                          {/* </Container>
                </Col>
                 </Row>
          
                 <Row>   */}
            </Grid>
            </Grid>
            <br/>
            <Grid container spacing={8}>
              
        <Grid item xs={9}>
          
                  <AppBar position="static" color="default">
                    <Tabs value={value} onChange={this.handleChange} centered>
                      <Tab label="Add Invoice data" />
                      <Tab label="Add PO data" />
                    </Tabs>
                  </AppBar>
                
                  {value === 0 && <TabContainerNew></TabContainerNew>}
                  {value === 1 && <TabContainerNew></TabContainerNew>}
         
              <br/>
            
            
        {/* </Row> */}
              </Grid>
              </Grid>
  </Container>
  <Container>
  <Button variant="contained" color="primary" style={{marginTop:"30px",position:"center"}} onClick={this.handleClickOpen}>
                                                      PO Transaction History
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
              Summary Details of PO 
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