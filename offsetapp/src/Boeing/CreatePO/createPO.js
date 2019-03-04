import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import AttachMoney from '@material-ui/icons/AttachMoney';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Fab from '@material-ui/core/Fab';
const styles = theme => ({
    root: {
        ...theme
            .mixins
            .gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
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
    margin: {
      margin: theme.spacing.unit,
      marginTop:"30px"
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
});

class CreatePO extends Component {
    state = {
        // The first commit of Material-UI
        selectedDate: null,
        vendor: '',
        open: false,
        poNumber:'',
        poOffsetPrice:0,
        poIVA:0,
        poApplicableYear:this.props.params.year
    };

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

    handleClose = () => {
        this.setState({open: false});
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleChangepoIVA=(event)=>{
        this.setState({poIVA: event.target.value}); 
    }

    handlepoApplicableYear=(event)=>{
        this.setState({poApplicableYear:event.target.value})
    }

    submit=()=>{
      let loginData=JSON.parse(sessionStorage.getItem("userLoginDetails"));
alert('form submitted successfully');
      let obj={
        poNumber : this.state.poNumber,
        poDate:this.state.selectedDate,
        poVendor:this.state.vendor,
        poOffsetPrice:this.state.poOffsetPrice,
        poIVA:this.state.poIVA,
        createBy:loginData.userId,
        timeStamp:new Date()
      }
      console.log('data submitted is', obj)
    }

    render()

    {
        const {classes} = this.props;
        console.log('year from routing is', this.props.params.year);
        return (
            <div>

                <AppBar position="static">

                    <Toolbar
                        style={{
                        backgroundColor: "black",
                        alignItems: "center"
                    }}>
                        <Typography variant="h6" color="inherit">
                            Create PO Page
                        </Typography>
                    </Toolbar>

                </AppBar>
<div style={{position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: "-10",
          backgroundColor:"#eeeeee"}}>
                <div>
                    <Container>
                        <Paper
                            elevation={1}
                            style={{
                            height: "400px",
                            width: "700px",
                            marginTop: "30px"
                        }}>
                        <center>
                            <h2>Enter PO Details</h2>
                            </center>
                            <form className={classes.container} noValidate autoComplete="off" style={{ marginLeft:"100px" ,marginTop:"30px"}}>
                                <Row>
                                    <Col md={4}>
                                        <TextField id="standard-dense" label="Enter PO Number" 
                                        value={this.state.poNumber}
                                     onChange={this.handleChangepoNumber}
                                   className={classNames(classes.textField, classes.dense)} margin="dense" InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle/>
                                                </InputAdornment>
                                            )
                                        }}/>
                                    </Col>
                                    <Col md={4}>
                                        <TextField
                                            id="date"
                                            label="PO Date"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            className={classes.textField}
                                            value={this.state.selectedDate}
                                            onChange={this.handleDateChange}
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CalendarToday />
                                                </InputAdornment>
                                            )
                                        }}/>
                                    </Col>

                                    <Col md={4}></Col>
                                </Row>
                                <Row >
                                    <Col md={4}>

                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="demo-controlled-open-select">Select Vendor</InputLabel>
                                            <Select
                                                open={this.state.open}
                                                onClose={this.handleClose}
                                                onOpen={this.handleOpen}
                                                value={this.state.vendor}
                                                onChange={this.handleChange}
                                                InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AccountCircle/>
                                                    </InputAdornment>
                                                )
                                            }}>
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"supplier1@supplier.com"}>supplier1@supplier.com</MenuItem>
                                                <MenuItem value={"supplier2@supplier.com"}>supplier2@supplier.com</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Col>
                                    <Col md={4}>
                                        <TextField id="standard-dense" label="Enter offset Price"
                                         value={this.state.poOffsetPrice}
                                     onChange={this.handleChangepoOffsetPrice}
                                    type="number" className={classNames(classes.textField, classes.dense)} margin="dense" InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AttachMoney/>
                                                </InputAdornment>
                                            )
                                        }}/>
                                    </Col>
                                    <Col md={4}></Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                    <TextField id="standard-dense" label="Expected IVA"
                                         value={this.state.poIVA}
                                     onChange={this.handleChangepoIVA}
                                    type="number" className={classNames(classes.textField, classes.dense)} margin="dense" InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AttachMoney/>
                                                </InputAdornment>
                                            )
                                        }}/>
                                    </Col>
                                    <Col md={4}>
                                    <TextField id="standard-dense" label="PO Applicable Year"
                                         value={this.state.poApplicableYear}
                                     onChange={this.handlepoApplicableYear}
                                    type="number" className={classNames(classes.textField, classes.dense)} margin="dense" InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <CalendarToday />
                                            </InputAdornment>
                                        )
                                        }}/>
                                    </Col>
                                    <Col md={4}>
                                    </Col>
                                </Row>
                             
                                    <Row>
                                        <Col>
                                        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin} onClick={this.submit}>
          <SaveIcon className={classes.extendedIcon} />
      Save
        </Fab>
                                        </Col>
                                        <Col>
                                        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin} onClick={this.submit}>
          <AddIcon className={classes.extendedIcon} />
      Submit
        </Fab>
                                        </Col>
                                    </Row>
                                    
        
                                    
                           

                            </form>
                        </Paper>
                    </Container>
                </div>
            </div>
            </div>
        )

    }
}

CreatePO.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreatePO);