
import React, { Component } from 'react';
import {Container,Row,Col, Tab} from 'react-bootstrap';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  table: {
    minWidth: 745,
  },
});


class EachMessage extends React.Component {

    render(){
        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
        if(this.props.data.from=="BCA"){
            console.log("from");
            return(
                <Row>
                <Col xs={10}>
                <Chip style={{marginTop:"5px"}}  
                label= {this.props.data.msg}
                avatar={<Avatar>{this.props.data.from.substring(0, 3)}</Avatar>}>
              
             </Chip> 
             </Col>
             <Col xs={2}>
             </Col>
             </Row>
            )
        }else{
            console.log("to");
            return(
                <Row>
                     <Col xs={2}>
             </Col>
                <Col xs={10}>
                <Chip style={{marginTop:"5px"}}  
                label= {this.props.data.msg}
                avatar={<Avatar>{this.props.data.from.substring(0, 3)}</Avatar>}>
              
             </Chip> 
             </Col>
            
             </Row>
            )
        }
       
        
    }
  
  }

  EachMessage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles) (EachMessage);