import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Pagination} from 'react-bootstrap';



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

  state={

  }

    yearSelect=()=>{
        // alert(this.props.year);
        // this.setState({activeYear:''})
        this.props.sendYear(this.props.year);
        // this.setState({activeYear:this.props.year})
    }
    render() {
        const {classes} = this.props;

       console.log('index is', this.props.index)
        return (
        
            <Pagination.Item key={this.props.number} 
            onClick={this.yearSelect}
            active={this.props.year===this.props.activeYear}
            >
            {this.props.year}
          </Pagination.Item>
                        
        );
    }
}

EachPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EachPage);