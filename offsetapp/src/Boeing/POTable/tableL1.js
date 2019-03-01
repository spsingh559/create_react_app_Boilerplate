import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Container,Row, Col } from 'react-bootstrap';
// import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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

        //     <Table className={classes.table}>
        //     <TableHead style={{position: 'relative',
        // overflowY: 'auto',}}>
        //       <TableRow>
        //         <TableCell>PO Number</TableCell>
        //         <TableCell align="right">App Id</TableCell>
        //         <TableCell align="right">Status</TableCell>
        //         <TableCell align="right">Deficit</TableCell>
        //         <TableCell align="right">Assigned To</TableCell>
        //         <TableCell align="right">Action</TableCell>
        //       </TableRow>
        //     </TableHead>
        //     <TableBody>
        //       {newData}
        //     </TableBody>
        //   </Table>

<Table striped bordered hover responsive className={classes.table}> 
<thead>
  <tr>
    <th>PO Number</th>
    <th>App Id</th>
    <th>Status</th>
    <th>Deficit</th>
    <th>Assigned To</th>
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

