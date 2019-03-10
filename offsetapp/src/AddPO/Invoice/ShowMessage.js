import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import EachMessage from './EachMessage';
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  table: {
    minWidth: 745,
  },
});


class ShowMessage extends React.Component {

  

    render(){
        let newData = this.props.data.map((data,index)=>{
            return(
            <EachMessage
            key={index}
             data={data}
            />
            )
           });


        return(
            <div >
              {newData}
                </div>
        )
    }
  }

  ShowMessage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles) (ShowMessage);