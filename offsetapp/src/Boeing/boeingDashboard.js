import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import {Container, Row, Col} from 'react-bootstrap';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
//  Imported Component
import CreatedPO from './POCount/createdPO';
import PendingPO from './POCount/pendingPO';
import CompletedPO from './POCount/completedPO';
import POTable from './POTable/poTable';
import Notification from './Notification/notification';
import YearSlider from '../NewDashboard/YearSlider';
import POStatus from './POStatus/POStatus';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import UploadIcon from '@material-ui/icons/CloudUpload';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import SaveIcon from '@material-ui/icons/Save';
import AttachMoney from '@material-ui/icons/AttachMoney';
import CalendarToday from '@material-ui/icons/CalendarToday';
import classNames from 'classnames';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Report from '@material-ui/icons/Assessment';
import Done from '@material-ui/icons/Done';
import TableData from './POTable/tableData';
import CreatePO from './CreatePO/createPO';
const styles = theme => ({
    root: {
        ...theme
            .mixins
            .gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    },
    container: {
      position: "fixed",
      width: "100%",
      height: "100%",
      zIndex: "-10",
      backgroundColor:"#eeeeee",
      marginTop:"100px",
    },
    button: {
        margin: theme.spacing.unit,
        backgroundColor:"#0038A9" ,
        '&:hover': {
          backgroundColor: "#0038A9"
        }
      },
      input: {
        marginLeft: 2,
        flex: 1,
      },
      iconButton: {
        padding: 1,
      },
      margin: {
        margin: theme.spacing.unit,
      },
      extendedIcon: {
        marginRight: theme.spacing.unit,
      },
      textField: {
        flexBasis: 200
    },
    dense: {
        marginTop: 19
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120
    },
    appBar: {
        position: 'relative',
      },
      flex: {
        flex: 1,
      },
      menu: {
        width: 200,
      },
});

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
  

class Home extends Component {

    state={
        selectedYear:2019,
        selectedDate: null,
        vendor: '',
        openDialog: false,
        poNumber:'',
        poOffsetPrice:0,
        poIVA:0,
        recIVA:0,
        poApplicableYear:2019,
        openSelect:false,
        poData:TableData
    }

    sendYear=(year)=>{
        this.setState({poApplicableYear:year})
        
    }

    createNewPo=()=>{
        const { router } = this.props;
        router.push('/boeing/createPo/'+this.state.selectedYear);
    }

    handleClickOpen = () => {
        this.setState({ openDialog: true });
        console.log("State Open"+this.props.openDialog)
    
      };
    
      handleClose = () => {
        this.setState({ openDialog: false });
      };
      handleSelectClose = () => {
        this.setState({ openSelect: false });
      };
      handleSelectOpen = () => {
        this.setState({ openSelect: true });
      };
    
      handleChangepoIVA=(event)=>{
        this.setState({poIVA: event.target.value}); 
    }

    handleChangeporecIVA=(event)=>{
        this.setState({recIVA: event.target.value}); 
    }

    handlepoApplicableYear=(event)=>{
        this.setState({poApplicableYear:event.target.value})
    }

    submit=(data)=>{
      let loginData=JSON.parse(sessionStorage.getItem("userLoginDetails"));
    //alert('form submitted successfully');

     

    let newData=[data].concat(this.state.poData);
    this.setState({poData:newData, openDialog:false});
      console.log('data submitted is', newData)
    }
    handleDateChange = e => {
        this.setState({selectedDate: e.target.value});
    };

    handleChange = event => {
        this.setState({vendor: event.target.value});
    };

    handleChangepoNumber=(event)=>{
      this.setState({poNumber: event.target.value});
    }

    handleChangepoOffsetPrice=(event)=>{
      this.setState({poOffsetPrice: event.target.value});
    }
  

    render() {
        let loginData=JSON.parse(sessionStorage.getItem("userLoginDetails"));
        console.log("login session data",loginData);

        const {classes} = this.props;
   
        let createPO = 10;
        return (
          <div style={{
          width: "100%",
          height: "100%",
          backgroundColor:"#eeeeee",
          position:"absolute"}}>

            <div style={{ marginTop: "10px"}}>

                <Container>
                    <Row>
                    {/* <Col md={2}>
      <Paper elevation={1} style={{height:"60px", width:"150px"}}> 
            <center>
            <Typography variant="h5" component="h3">
              selected Year
            </Typography>
            <Typography component="p">
            <h6>{this.state.selectedYear}</h6>
            </Typography>
            </center>
          </Paper>
      </Col> */}
      <center>
                      
                        <YearSlider 
                        sendYear={this.sendYear}
                        />
                </center>       
                        
                    </Row>
                   
                    <Row
                    style={{
                                marginTop: "10px",
                    }}
                    >
                        
                                <Col xs={3}
                                    style={{
                                    paddingLeft: "0"
                                }}>
                                    <CreatedPO createPO={createPO} heading={"# of Purchase Orders"}/>
                                </Col>
                                <Col xs={3}>
                                <CreatedPO createPO={"50"} heading={"# of Invoices"}/>
                                    {/* <PendingPO/> */}

                                </Col>
                                <Col xs={3}>
                                <CreatedPO createPO={"15"} heading={"# of Accepted PO"}/>
                                    {/* <CompletedPO/> */}

                                </Col>
                                <Col xs={3}>
                                <CreatedPO createPO={"10"} heading={"# of Pending PO"}/>
                           
                                    {/* <Fab color="primary" aria-label="Add" onClick={this.createNewPo}>
                                        <AddIcon />
                                    </Fab> */}
                                </Col>
     
      
                                
                            </Row>
                            {loginData.dept=="boeing"?
                            <Row
                                style={{
                                marginTop: "10px",
                              
                            }}>
                            <Col md={2}>
                            </Col>
                            <Col md={10}>
                            <Grid container spacing={4}>
                               
                                <Grid item>

                            <Button variant="contained" color="primary" className={classes.button}  onClick={this.handleClickOpen}>
                                Add PO
                                <AddIcon className={classes.margin} />
                            </Button>
                            </Grid>
                            <Grid item>
                            <Button variant="contained" color="primary" disabled className={classes.button}>
                                Upload PO/SS
                                <UploadIcon className={classes.margin} />
                            </Button>
                            </Grid>
                            <Grid item>
                            <Button variant="contained" color="primary" disabled className={classes.button}>
                                Generate Audit Report
                                <Report className={classes.margin} />
                            </Button>
                            </Grid>
                            <Grid item>
                            <Button variant="contained" color="primary" disabled className={classes.button}>
                                Generate Summary Report
                                <Report className={classes.margin} />
                            </Button>
                            </Grid>
                            </Grid>
                            </Col>
                            


<Dialog
          fullScreen
          open={this.state.openDialog}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >

        <AppBar className={classes.appBar} style={{backgroundColor:"#0038A9"}}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Enter PO Details
              </Typography>
              {/* <Button color="inherit" onClick={this.handleClose}>
                save
              </Button> */}
            </Toolbar>
          </AppBar>
          <Container style={{width:"100%",height:"100%"}}>
       
          <Paper style={{marginTop:"50px",marginLeft:"10px",marginRight:"10px",width:"100%",height:"50%"}}>
          <CreatePO submit={this.submit}/>
          </Paper>
          </Container>
        </Dialog>

                                
                                
                            </Row>
                            :null}
                            <Row
                                style={{
                                marginTop: "0"
                            }}>
                            <Col md={9}>
                               
                            </Col>
                                <Col md={3}>
                              
                                        <div className={classes.margin}>
                                                <Grid container spacing={4} alignItems="flex-end">
                                                
                                                <Grid item>
                                                <SearchIcon />
                                                </Grid>
                                                <Grid item>
                                                    <TextField id="search" label="Search" />
                                                </Grid>
                                                </Grid>
                                        </div>
  

                            
                                </Col>
                            </Row>
                            

                            <Row
                                style={{
                                marginTop: "30px"
                            }}>
                            <Col md={12}>
                                <Paper elevation={1}>
                                    <POTable data={this.state.poData}/>
                                </Paper>
                                </Col>
                            </Row>

                            {/* <Row style={{marginTop:"20px"}}>
                            <Paper elevation={1}>
                            <POStatus />
                                </Paper>
                               
                            </Row>
                        </Col>

                        <Col md={4}>
                            <Row>
                            <Fab color="primary" aria-label="Add" onClick={this.createNewPo}>
        <AddIcon />
      </Fab>
      <Paper elevation={1} style={{height:"75px", width:"280px", marginLeft:"20px"}}> 
            <center>
            <Typography variant="h5" component="h3">
              selected Year
            </Typography>
            <Typography component="p">
            <h2>{this.state.selectedYear}</h2>
            </Typography>
            </center>
          </Paper>
                                
                            </Row>
                            <Row style={{marginTop:"50px"}}>
                                <Notification />
                                
                            </Row>

                        </Col>

                    </Row> */}
                    

                </Container>
                {/* <Paper elevation={1}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper> */}

            </div>


            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
 
};

export default withStyles(styles)(Home);