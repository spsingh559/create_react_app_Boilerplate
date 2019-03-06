import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableL2 from './TableL2';
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

class TableL1 extends Component {
    render()    {

        const {classes} = this.props;

        console.log('data reached to first child', this.props.data);
        let newData = this.props.data.map((data,i)=>{
            return(
                <TableL2
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
    <th>Status</th>
    <th>Action Owner</th>
    <th>Supplier Name</th>
    <th>EIVA</th>
    <th>RIVA</th>   
    <th>IVA Status</th>
    <th>Deficit</th>
        <th>Action</th>
  </tr>
</thead>
<tbody>
{newData}
  </tbody>
  </Table>
        )
    
    }
}

TableL1.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(TableL1);

