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
//registerPlugin(FilePondPluginImagePreview);
import Form1 from './Form1';
import Table1 from './Table1'

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  });


class TabContainerNew extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      fileLocation:'',
     invNumber:'',
      date:'',
      invValue:'',
      transDetails:'',
      ivav:'',
     credit:'',
      remarks:'',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({invNumber: this.state.invNumber, date: this.state.date,invValue:this.state.invValue,transDetails:this.state.transDetails,ivav:this.state.ivav,credit:this.state.credit,remarks:this.state.remarks});
    // items.push({name: this.state.name, description: this.state.description,fileLocation:this.state.fileLocation});

    this.setState({
      items,
      name: '',
      description: '',
      fileLocation:'',
     invNumber:'',
      date:'',
      invValue:'',
      transDetails:'',
      ivav:'',
     credit:'',
      remarks:'',
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  handleFileChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = e.target.files[0];
console.log(value);
    this.setState({
      [name]: value
    })
  };
      
  

    render(){
        const { classes } = this.props;
        
        return(
          <div>
            
             <Paper>
              <Container style={{"padding-top":"30px"}}>
            <Form1 handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange } newname={ this.state.name } newdescription={ this.state.description }  handleFileChange ={this.handleFileChange}/>
            </Container>
            <br/>
            <br/>
          </Paper>
            <Paper>
            <Container>
          <Table1 items={ this.state.items }/>
          </Container>
          </Paper>
         
         </div> 
        )
    }
}

TabContainerNew.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  
export default withStyles(styles)(TabContainerNew);