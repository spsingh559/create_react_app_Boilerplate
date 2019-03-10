import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Table} from 'react-bootstrap';

import EditIcon from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete';
import DownloadIcon from '@material-ui/icons/GetApp';
import SendIcon from '@material-ui/icons/Send'
// imported Component
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ViewModule from '@material-ui/icons/ViewModule';
import classnames from 'classnames';
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
import OpenInvoiceView from './OpenInvoiceView';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ShowMessage from './ShowMessage';

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

//   const sampleData={
  
//     invNumber:"INV12",
//     paymentProofNum:"PP123",
//       invDate:"12/02/2019",
//       invValue:1000,
//       transDetails:"acct5679065XXX",
//       iva:3900,
//       credit:6678,
//       remarks:"done",
//       selectedFile:"invoice.txt",
//       type:"Payment Proof"
//   }

const styles = theme => ({
  card: {
    minWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  table:{
    minWidth:"700px"
  },
  messageBoxFooter:{
    marginLeft:"2px",
    height: "60px",
    borderRadius:"10px",
    backgroundColor: "#ffffff",
    border: "solid 1px #d5d5d5",
  },
  messageBox:{
    
    marginLeft:"2px",
height: "270px",

backgroundColor: "#ffffff",

overflowY:"auto"
  },
});

const message=[
  {
    to:"BCA",
    from:"Supplier",
    msg:"Send Invoice"
},
{
  to:"Supplier",
  from:"BCA",
  msg:"Ack, need  details regarding payment"
},
{
  to:"BCA",
  from:"Supplier",
  msg:"Updated Invoice"
}

]

class EachInvoice extends Component {

    state={
        checkVerify:false,
        open:false,
        // newPOData:[sampleData],
        OpenInvoiceDial:false,
        newPOData:[],
        expanded: false,
        message:message,
        msgContent:''
    }

    handleMessage=(e)=>{
      this.setState({msgContent:e.target.value});
    }

    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };

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

      showInv=()=>{
        this.setState({OpenInvoiceDial:true})
      }

      handleCloseInvoiceView=()=>{
          this.setState({OpenInvoiceDial:false})
      }

      sendMsg=()=>{
        let newMsg={
          to:"BCA",
          from:"Supplier",
          msg:this.state.msgContent
        }

        let newData=this.state.message.concat([newMsg]);
        this.setState({message:newData});
        this.setState({msgContent:''})
      }
      
    render()    {
      let loginData=JSON.parse(sessionStorage.getItem("userLoginDetails"));
  
        const { classes } = this.props;
        let action;
        {loginData.dept=="supplier"?
 action=[
    <IconButton key={1}>
    <EditIcon />
</IconButton>,
<IconButton key={2}>
    <Delete />
</IconButton>,
<IconButton key={4} onClick={this.showInv}>
    <ViewModule />
</IconButton>,
  <IconButton aria-label="Download" key={5}>
  <DownloadIcon />
</IconButton>,
<IconButton aria-label="Add Payment Proof" key={6} onClick={this.addSubDoc}>
  <AttachMoney />
</IconButton>,

]:
action=[
  
<IconButton key={6} onClick={this.showInv}>
  <ViewModule />
</IconButton>,
  <IconButton aria-label="Download" key={7}>
  <DownloadIcon />
</IconButton>,
<FormControlLabel
key={8}
control={
  <Checkbox
    checked={this.state.checkVerify}
    onChange={this.handleChange}
    value="verify"
    color="primary"
  />
}
label="Verify"
></FormControlLabel>]}


let addRecord;
{loginData.dept=="supplier"? 
addRecord= [
<Fab color="primary" aria-label="Add" onClick={this.addSubDoc} key={5} style={{marginLeft:"50px"}}><AddIcon /></Fab>]
:
addRecord=[<Fab color="primary" aria-label="Add" onClick={this.addSubDoc} key={5} style={{marginLeft:"50px"}}><AddIcon /></Fab>]
}

// invNumber:'',
// invDate:new Date(),
// invValue:0,
// transDetails:'',
// iva:0,
// credit:0,
// remarks:'',
// selectedFile:null,
// value:"Invoice"
return(
   <Row style={{marginTop:"10px"}}>
     <Col md={8}>
<Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              I
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.data.invNumber}
          subheader={this.props.data.invDate}
        />
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        /> */}
        <CardContent key={20}>
        <Table striped bordered hover responsive className={classes.table}> 
<thead style={{backgroundColor:"#0038A9",color:"white","text-align": "center"}}>
  <tr>
    <th>Invoice Number</th>
    <th>Invoice date</th>
    <th>Invoice value</th>
    <th>Invoice IVA</th>
    <th>Credit</th>
    <th>Remarks</th>   
    
  </tr>
</thead>
<tbody>
<tr  key={this.props.data.invNumber}>
      <td  > {this.props.data.invNumber}</td>
      <td> {this.props.data.invDate}</td>
      <td>{this.props.data.invValue}</td>
      <td>{this.props.data.iva}</td>
      <td>{this.props.data.credit}</td>
      <td>{this.props.data.remarks}</td>
     
      
            
            </tr>
  </tbody>
  </Table>
        </CardContent>
       
        <CardActions className={classes.actions} disableActionSpacing>
        {action}
        
       <IconButton key={200}
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent key={23}>
          <Row>
          <Col md={12}>
          <PaymentProofTable data={this.state.newPOData}/>
          </Col>
          
          </Row>
            
          </CardContent>
        </Collapse>
      </Card>  
      </Col>
      <Col md={4}>
      <Paper elevation={1} style={{ border: "solid 1px #d5d5d5"}}>
      <Row className={classes.messageBox}>
            <ShowMessage data={this.state.message} />
          </Row>
        
        <Row className={classes.messageBoxFooter} style={{marginBottom:"10px"}}>
        <TextField
          id="standard-full-width"
          label="Add Clarification"                 
          onChange={this.handleMessage}
         value={this.state.msgContent}
          style={{width:"300px"}}
          margin="normal"
         
        />
     <IconButton aria-label="Send Message">
            <SendIcon onClick={this.sendMsg}/>
          </IconButton>
   
    {/* </center> */}
    

            </Row>
            </Paper>
      </Col>
      <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
            key={7}
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
    </Dialog>
     <Dialog
     open={this.state.OpenInvoiceDial}
     onClose={this.handleCloseInvoiceView}
     aria-labelledby="form-dialog-title"
   >
     <DialogTitle id="form-dialog-title">Invoice Detail for - {this.props.data.invNumber}</DialogTitle>
     <DialogContent>
     <OpenInvoiceView data={this.props.data}/>
     
     </DialogContent>
     <DialogActions>
       <Button onClick={this.handleCloseInvoiceView} color="primary">
         Close
       </Button>
    </DialogActions>
   </Dialog>
      </Row>
)
    
    }
}

EachInvoice.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(EachInvoice);

