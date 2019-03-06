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

class Comment extends Component {

  

    render()    {
        const { classes } = this.props;

return(

    <Paper>
    <AppBar position="static" color="default">
    <Toolbar>
          <Typography variant="h6" color="inherit">
          Comment
          </Typography>
     </Toolbar>
    </AppBar>

    <List >
<ListItem>
<ListItemAvatar>
<Avatar alt="Boeing" src="./images/boeing.png" />
</ListItemAvatar>
<ListItemText
primary="Invoice####"
secondary={
<React.Fragment>
<Typography component="span" className={classes.inline} color="textPrimary">
To Supplier
</Typography>
{" — Please attach Invoice document"}
</React.Fragment>
}
/>
</ListItem>

<ListItem>
<ListItemAvatar>
<Avatar alt="Supplier" src="./images/supplier.png" />
</ListItemAvatar>
<ListItemText
primary="Invoice####"
secondary={
<React.Fragment>
<Typography component="span" className={classes.inline} color="textPrimary">
To Boeing
</Typography>
{" — Please provide more details on PO"}
</React.Fragment>
}
/>
</ListItem>

</List>

      <form style={{"padding-left":"15px","padding-right":"15px"}}>
      <TextField
      id="filled-multiline-flexible"
      label="Please enter your comments here"
      multiline
      rowsMax="10"
    
      className={classes.textField}
      margin="normal"
      
      variant="filled"
     style={{width:"500px"}}
    />
    <br/>
    <Button variant="contained" color="primary" style={{marginBottom:"30px"}} >
                                    Enter
    </Button> 
    </form>
    </Paper>
   
)
    
    }
}

Comment.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Comment);

