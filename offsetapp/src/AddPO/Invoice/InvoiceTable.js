import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Table} from 'react-bootstrap';

// imported Component

import EachInvoice from './EachInvoice';


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

class InvoiceTable extends Component {

    

    render()    {
        const { classes } = this.props;
       

        console.log('data reached to first child', this.props.data);
        let newData = this.props.data.map((data,i)=>{
            return(
                <EachInvoice
                key={i}
                data={data}
                />
            )
        })

        const invoiceView=[
            <Table striped bordered hover responsive className={classes.table} key={10}> 
            <thead style={{backgroundColor:"#ccddff"}}>
              <tr>
                <th>File Name</th>
                <th>Type</th>
                <th>Attachement </th>
                <th>Action</th>
                
                </tr>
                </thead>
               
              </Table>,
              <div key={12}>
            {newData}
            </div>
        ]


return(
   <div>
       {invoiceView}
    </div>
)
    
    }
}

InvoiceTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(InvoiceTable);

