import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ButtonBB from 'react-bootstrap/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {Container, Row, Col,Pagination,Badge} from 'react-bootstrap';



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

class EachPage extends Component {

    yearSelect=()=>{
        alert(this.props.year);
    }
    render() {
        const {classes} = this.props;

       console.log('index is', this.props.index)
        return (
        
            <Pagination.Item key={this.props.number} 
            active={this.props.index === 0}
            onClick={this.yearSelect}>
            {this.props.year}
            {/* <br /> */}
            {/* <Badge pill variant="primary">
    4
  </Badge>
  <Badge pill variant="secondary">
    5
  </Badge>
  <Badge pill variant="success">
    9
  </Badge> */}
          </Pagination.Item>
                        
        );
    }
}

EachPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EachPage);