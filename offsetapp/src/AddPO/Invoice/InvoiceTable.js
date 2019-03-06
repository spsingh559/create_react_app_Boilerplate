import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import FileData from '../fileData'



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

    handleEdit =() =>{
        console.log("Inside Edit");
        this.setState({ 
          edit: true 
        });
      }

    render()    {
        const { classes } = this.props;

return(
    <Paper>
                            
    <AppBar position="static" color="default">
    <Toolbar>
          <Typography variant="h6" color="inherit">
          Invoice Details
          </Typography>
     </Toolbar>
    </AppBar>

    <Table>
<TableBody>
<TableRow>
<TableCell><b>Invoice#</b></TableCell>
<TableCell><b>Invoice Date</b></TableCell>
<TableCell><b>Value</b></TableCell>
<TableCell><b>Bank Transaction Details</b></TableCell>
<TableCell><b>India Value Add</b></TableCell>
<TableCell><b>Credit</b></TableCell>
<TableCell><b>Remarks</b></TableCell>
</TableRow>
{FileData.map(item => {
return (
<TableRow>
<TableCell>{item.invNumber}</TableCell>
<TableCell>{item.invDate}</TableCell>
<TableCell>{item.inValue}</TableCell>
<TableCell>{item.transDetails}</TableCell>
<TableCell>{item.ivav}</TableCell>
<TableCell>{item.credit}</TableCell>
<TableCell>{item.remarks}</TableCell>
{/* <TableCell><input type="button"  className="btn btn-primary" value="Edit" onClick={this.handleEdit}/></TableCell> */}
<TableCell><Fab color="primary" aria-label="Edit" className={classes.fab} onClick={this.handleEdit}>
<Icon>edit_icon</Icon>
</Fab></TableCell>
</TableRow>
);
})}
</TableBody>
</Table>
    </Paper>
)
    
    }
}

InvoiceTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(InvoiceTable);

