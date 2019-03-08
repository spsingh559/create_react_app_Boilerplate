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
import Button from '@material-ui/core/Button';
import { FilePond, registerPlugin  } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import FileData from 'json!./fileData.json';
//import FileData from './fileData';
registerPlugin(FilePondPluginImagePreview);



const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  });

  const rows=[];
  let id = 0;
  function createData(name, description, location) {
    id += 1;
    return { id, name, description, location };
  }
  
const FileData=[];
const state={};

class TabContainer extends Component {
    state=
    {
      name:"",
      description:"",
      location:""
    }
     submit=()=>{
       console.log("Clicked Upload");
     
       console.log(state);
       FileData.push(state);
       console.log(FileData);
     }

    handleChangeFileName =(event)=>{
        this.setState({name:event.target.value});
    }
    
      handleChangeDescription =(event)=>{
        this.setState({description:event.target.value});
    }
    handleChangeLocation =(event)=>{
        this.setState({location:event.target.value});
    }

    /*File Upload*/
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
    
        this.handleChange = this.handleChange.bind(this)
      }
    
      handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
        console.log("File location"+event.target.files[0]);
      }

      

    render(){
        const { classes } = this.props;
        return(
            <div>
                 <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">File Name</TableCell>
                                <TableCell align="center">Description</TableCell>
                                <TableCell align="center">Reference Location</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            
                        {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.description}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.location}
                            </TableCell>
                        </TableRow>
                    ))}
        </TableBody>
      </Table>
    </Paper>

                <form className={classes.container} noValidate autoComplete="off">
                    <Row>
                                <TextField
                            id="standard-name"
                            label="File Name"
                            className={classes.textField}
                            value={this.state.name}
          onChange={this.handleChangeFileName}
                            margin="normal"
                            />
                    </Row>
                    <Row>
                        <Col>
                                <TextField
                                        id="standard-uncontrolled"
                                        label="Description"
                                        value={this.state.description}
          onChange={this.handleChangeDescription}
                                        className={classes.textField}
                                        
                                        margin="normal"
                                />
                        </Col>
                            
                        <Col>
                        <TextField
                                        id="standard-uncontrolled"
                                        label="location"
                                        value={this.state.location}
                                    onChange={this.handleChangeLocation}
                                        className={classes.textField}
                                        
                                        margin="normal"
                                />
                                {/* <FilePond allowMultiple={true} onChange={this.handleChangeLocation}/> */}

                                <input type="file" onChange={this.handleChange}/>
                                {/* <img src={this.state.file}/> */}
                                 <Button variant="contained" color="primary" style={{marginTop:"30px"}} onClick={this.submit}>
                                        Upload
                                    </Button> 
                        </Col>

                    </Row>
                </form>
            </div>
        )
    }
}

TabContainer.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  
export default withStyles(styles)(TabContainer);