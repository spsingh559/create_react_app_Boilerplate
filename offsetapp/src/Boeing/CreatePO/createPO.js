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
import Done from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import TableData from '../POTable/tableData';
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
        poApplicableYear:2019,
        recIVA:0,
        poData:TableData,
        dialogClose:true
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
        this.setState({openDialog: false});
     
    };

    handleOpen = () => {
        this.setState({openDialog: true});
    };

    handleChangepoIVA=(event)=>{
        this.setState({poIVA: event.target.value}); 
    }

    handlepoApplicableYear=(event)=>{
        this.setState({poApplicableYear:event.target.value})
    }
    handleChangeporecIVA=(event)=>{
        this.setState({recIVA: event.target.value}); 
    }
    submit=()=>{
        let loginData=JSON.parse(sessionStorage.getItem("userLoginDetails"));
        
              let obj={
                poNumber : this.state.poNumber,
                poDate:this.state.selectedDate,
                actionOwner:this.state.vendor,
                poOffsetPrice:this.state.poOffsetPrice,
                eiva:this.state.poIVA,
                createBy:loginData.userId,
                timeStamp:new Date(),
                poApplicableYear:this.state.selectedYear,
                riva:this.state.recIVA,
                "appID":"",
                "status":"PO Initiated",
               "supplierName":this.state.vendor,
                "deficit":this.state.poIVA-this.state.recIVA,
              }
        

        
           // let newData=[obj].concat(this.state.poData);
            this.props.submit(obj);
           // this.setState({poData:newData, open:false,dialogClose:false});
              console.log('data submitted is', obj)
    }

    render()

    {
        const {classes} = this.props;
        // console.log('year from routing is', this.props.params.year);
        return (
            <div>

            
          <form  noValidate autoComplete="off" style={{marginLeft:"20%",marginTop:"10%",marginRight:"20%"}}>
              <br/>
              <center>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                PO Details
              </Typography>
              </center>
              <br/>
                                <Row>
                                    <Col md={5}>
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
                                    <Col md={2}>
                                        
                                    </Col>

                                    <Col md={5}>
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
                                </Row>
                                <br/>
                                <Row >
                                    <Col md={5}>

                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="demo-controlled-open-select">Select Vendor</InputLabel>
                                            <Select
                                                open={this.state.openSelect}
                                                onClose={this.handleSelectClose}
                                                onOpen={this.handleSelectOpen}
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
                                    <Col md={2}>
                                   
                                    </Col>
                                    <Col md={5}>
                                    <TextField id="standard-dense" label="PO Applicable Year"
                                    value={this.state.poApplicableYear}
                                onChange={this.handlepoApplicableYear}
                               type="number" className={classNames(classes.textField, classes.dense)} margin="dense" InputProps={{
                                   startAdornment: (
                                       <InputAdornment position="start">
                                           <CalendarToday />
                                       </InputAdornment>
                                   )
                                   }}/></Col>
                                </Row>
                                <Row>
                                    <Col md={5}>
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
                                    <Col md={2}>
                                 
                                    </Col>
                                    <Col md={5}>
                                    <TextField id="standard-dense" label="Received IVA"
                                    value={this.state.recIVA}
                                onChange={this.handleChangeporecIVA}
                               type="number" className={classNames(classes.textField, classes.dense)} margin="dense" InputProps={{
                                       startAdornment: (
                                           <InputAdornment position="start">
                                               <AttachMoney/>
                                           </InputAdornment>
                                       )
                                   }}/>
                                    </Col>
                                </Row>

                                {/* <Row>
                                    <Col md={4}>
                                 
                               
                                    </Col>
                                    <Col md={4}>
                                   
                                    </Col>
                                    <Col md={4}>
                                    </Col>
                                </Row> */}
                             <br/>
                             <br/>
                                    <Row>
                                       
                                        <Col md={6}>
                                            <center>
                                            <Button variant="contained" color="primary"  className={classes.button} onClick={this.submit} disabled>
                                                Save
                                                <SaveIcon className={classes.margin} />
                                            </Button>
                                            </center>
                                       
                                        </Col>
                                      
                                        <Col md={6}>
                                        <center>
                                            <Button variant="contained" color="primary"  className={classes.button} onClick={this.submit}>
                                                Submit
                                                <Done className={classes.margin} />
                                            </Button>
                                            </center>
                                        </Col>
                                      
                                    </Row>
                                    
        
                                    
                           

                            </form>
                           
                      
       
            </div>
        )

    }
}

CreatePO.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreatePO);