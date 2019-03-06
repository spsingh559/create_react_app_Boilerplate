import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Table1 extends React.Component {
    render() {
      const items = this.props.items;
      return (
        <div id="Table">
          <Table>
            <TableBody>
              <TableRow>
              <TableCell>Invoice#</TableCell>
              <TableCell>Invoice Date</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Bank Transaction Details</TableCell>
              <TableCell>India Value Add</TableCell>
              <TableCell>Credit</TableCell>
              <TableCell>Remarks</TableCell>
              </TableRow>
              {items.map(item => {
                return (
                
                  <TableRow>
                  <TableCell>{item.invNumber}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.invValue}</TableCell>
                  <TableCell>{item.transDetails}</TableCell>
                  <TableCell>{item.ivav}</TableCell>
                  <TableCell>{item.credit}</TableCell>
                  <TableCell>{item.remarks}</TableCell>
                  </TableRow>
                );
               
              })}
            </TableBody>
          </Table>
        </div>
      );
    }
  }
  
  export default Table1;