import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const styles = theme => ({
    
      list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 600,
        minHeight: 450
      },
      inline: {
        display: 'inline',
      },
  });

class Notification extends Component {
    render()
    {
        const {classes} = this.props;
        return(

            <List className={classes.list}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="S" src="../../images/noti.png" />
              </ListItemAvatar>
              <ListItemText
                primary="PO114 Created"
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline} color="textPrimary">
                      28th Feb, 2019 3:30 PM -
                    </Typography>
                    {" PO114 Created by Boeing assigned to You"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="B" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="PO115 Archievd"
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline} color="textPrimary">
                      28th Feb, 2019 3:30 PM -
                    </Typography>
                    {" PO115 Archieved by Boeing "}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="S" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="PO114 Created"
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline} color="textPrimary">
                      28th Feb, 2019 4:30 PM -
                    </Typography>
                    {" PO114 Clarfication sent to Boeing"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        )
    
    }
}

Notification.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)(Notification);