import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StatusTableL2 from './StatusTableL2';
import {Table} from 'react-bootstrap';
const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    table: {
        minWidth: 745,
      },
  });

class StatusTableL1 extends Component {
    render()    {

        const {classes} = this.props;

        console.log('data reached to first child', this.props.data);
        let newData = this.props.data.map((data,i)=>{
            return(
                <StatusTableL2
                key={i}
                data={data}
                />
            )
        })

        return(
<Table striped bordered hover responsive className={classes.table}> 
<thead style={{backgroundColor:"#ccddff"}}>
  <tr>
  <th>PO Number</th>
    <th>Initiated</th>
    <th>Detail Entered</th>
    <th>Verified</th>
    <th>Accepted</th>
    <th>Archieved</th>
    <th>End</th>
  </tr>
</thead>
<tbody>
{newData}
  </tbody>
  </Table>
        )
    
    }
}

StatusTableL1.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(StatusTableL1);

