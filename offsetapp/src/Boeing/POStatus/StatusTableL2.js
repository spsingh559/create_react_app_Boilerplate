import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ProgressBar } from 'react-bootstrap';


const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    table: {
        minWidth: 700,
      },
  });

class StatusTableL2 extends Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    console.log('value of click', this.state.anchorEl)
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleUpdate=()=>{
    alert('update clicked')
    this.setState({ anchorEl: null });
  }

  handleDelete =()=>{
    alert('Delete clicked')
    this.setState({ anchorEl: null });
  }
    render()    {
      let loginData=JSON.parse(sessionStorage.getItem("userLoginDetails"));
        const {classes} = this.props;
        const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
let statusData;
    if(this.props.data.status==="PO Initiated"){
        return(
            <tr>
            <td>
                {this.props.data.poNumber}
            </td>
            <td>
                 <ProgressBar variant="success" now={100} />
            </td>
             <td>
            <ProgressBar variant="warning" now={100} />
        </td>
        <td>
NA
        </td>
        <td>
            NA
            </td>
            <td>
        NA
        </td>
        <td>
        NA
        </td>
        </tr>
        )
    }else if(this.props.data.status==="PO Details Being Entered"){
        return(
        <tr>
        <td>
            {this.props.data.poNumber}
        </td>
     
    
          <td>
             <ProgressBar variant="success" now={100} />
        </td>
         <td>
        <ProgressBar variant="success" now={100} />
    </td>
    <td>
    <ProgressBar variant="warning" now={100} />
    </td>
    <td>
        NA
        </td>
        <td>
        NA
        </td>
        <td>
        NA
        </td>
    </tr>
        )
    }else if(this.props.data.status==="PO Details Being Verified"){
        return(
        <tr>
        <td>
            {this.props.data.poNumber}
        </td>
     
    
          <td>
             <ProgressBar variant="success" now={100} />
        </td>
         <td>
        <ProgressBar variant="success" now={100} />
    </td>
    <td>
    <ProgressBar variant="success" now={100} />
    </td>
    <td>
    <ProgressBar variant="warning" now={100} />
   
        </td>
        <td>
        NA
        </td>
        <td>
        NA
        </td>
    </tr>
        )
    }else if(this.props.data.status==="PO Details Accepted"){
        return(
        <tr>
        <td>
            {this.props.data.poNumber}
        </td>
     
    
          <td>
             <ProgressBar variant="success" now={100} />
        </td>
         <td>
        <ProgressBar variant="success" now={100} />
    </td>
    <td>
    <ProgressBar variant="success" now={100} />
    </td>
    <td>
    <ProgressBar variant="success" now={100} />
  
        </td>
        <td>
        <ProgressBar variant="warning" now={100} />
   
        </td>
        <td>
        NA
        </td>
    </tr>
        )
    }else if(this.props.data.status==="PO Archived"){
        return(
        <tr>
        <td>
            {this.props.data.poNumber}
        </td>
     
    
          <td>
            NA
        </td>
         <td>
       NA
    </td>
    <td>
    NA
    </td>
    <td>
   NA
  
        </td>
        <td>
        <ProgressBar variant="danger" now={100} />
   
        </td>
        <td>
        NA
        </td>
    </tr>
        )
    }else if(this.props.data.status==="END"){
        return(
        <tr>
        <td>
            {this.props.data.poNumber}
        </td>
     
    
          <td>
             <ProgressBar variant="success" now={100} />
        </td>
         <td>
        <ProgressBar variant="success" now={100} />
    </td>
    <td>
    <ProgressBar variant="success" now={100} />
    </td>
    <td>
    <ProgressBar variant="success" now={100} />
  
        </td>
        <td>
        <ProgressBar variant="success" now={100} />
   
        </td>
        <td>
        <ProgressBar variant="success" now={100} />
        </td>
    </tr>
        )
    }
    else return null;
       
        
    
    
    
    }
}

StatusTableL2.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(StatusTableL2);