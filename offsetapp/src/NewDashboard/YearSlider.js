import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ButtonBB from 'react-bootstrap/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {Container, Row, Col,Pagination} from 'react-bootstrap';

import EachPage from './EachPage';
//  Imported Component


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
      marginTop:"100px"
    }
});
let year=[2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990];
class YearSlider extends Component {

    state={
        
        yearData:[],
        leftFlag:false,
        rightFlag:true,
        nextPointer:0,
        prevPointer:0
    }

    componentDidMount=()=>{
      
        
        let newYear=year.slice(0,10)
        this.setState({
            yearData:newYear,
            leftFlag:false,
            rightFlag:true,
            nextPointer:10,
            prevPointer:0
        })
    }
   
    prev=()=>{
 let newYear=year.slice(this.state.prevPointer-10, this.state.prevPointer);
 this.setState({
            yearData:newYear,
            nextPointer:this.state.nextPointer-10,
            prevPointer:this.state.prevPointer-10
        })
    }
    next=()=>{

        let newYear=year.slice(this.state.nextPointer, this.state.nextPointer+10);
 this.setState({
            yearData:newYear,
            nextPointer:this.state.nextPointer+10,
            prevPointer:this.state.prevPointer+10
        })

    }
    render() {
        const {classes} = this.props;

        let active = 2019;
        let items = [];
     let newData=  this.state.yearData.map((y,i)=>{

return(
    <EachPage 
    key={y}
    year={y}
   index={i}
    />
)
     })
               
            
          
        
       
        return (
         

            <div>

<Pagination size="lg">

  {this.state.prevPointer==0? <Pagination.Prev disabled={true}/>:<Pagination.Prev onClick={this.prev}/>}
 
 {newData}

 {this.state.nextPointer==30? <Pagination.Next disabled={true}/>:<Pagination.Next onClick={this.next}/>}
  </Pagination>
  
                           </div>
                        
        );
    }
}

YearSlider.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(YearSlider);