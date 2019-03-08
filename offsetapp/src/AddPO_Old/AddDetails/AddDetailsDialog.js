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
import TabContainerNew from './TabContainerNew';
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

class AddDetailsDialog extends Component {
    state = {

        openDial: this.props.open,
        
        
      };
    
    //   handleClickOpen = () => {
    //     this.setState({ open: true });
    //   };

      handleClose = () => {
        this.setState({openDial:false})
      };

    render()    {
        const { classes } = this.props;
        const { fullScreen } = this.props;
       console.log('openDial', this.state.openDial);
       console.log('open', this.props.open)

return(
    <div>
    <Dialog
    fullScreen={fullScreen}
    open={this.state.openDial}
    onClose={this.handleClose}
    aria-labelledby="responsive-dialog-title"
    fullWidth={true}
    maxWidth='xl'
>
    <DialogTitle id="responsive-dialog-title">{"Summary Report"}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Add PO Details
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={this.handleClose} color="primary">
        OK
      </Button>
      {/* <Button onClick={this.handleClose} color="primary" autoFocus>
        Agree
      </Button> */}
    </DialogActions>
</Dialog>
</div>
)
    
    }
}

AddDetailsDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    fullScreen: PropTypes.bool.isRequired,
    open:PropTypes.bool.isRequired
  };
  
export default withStyles(styles)(AddDetailsDialog);

