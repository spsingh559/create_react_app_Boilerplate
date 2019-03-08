import React, { Component } from 'react';
import {Container,Row,Col, Tab} from 'react-bootstrap';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid} from '@material-ui/core';
import {Table} from 'react-bootstrap';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  table: {
    minWidth: 745,
  },
});

class OpenInvoiceView extends React.Component {

  

    render() {
      const { classes } = this.props;
      return (
        <Table striped bordered hover responsive className={classes.table}> 

<tbody>
<tr>
    <td> Invoice Number</td>
    <td> {this.props.data.invNumber}</td>
</tr>

<tr>
    <td> Invoice date</td>
    <td> {this.props.data.invDate}</td>
</tr>

<tr>
    <td> Invoice value</td>
    <td> {this.props.data.invValue}</td>
</tr>

<tr>
    <td> Invoice Details</td>
    <td> {this.props.data.transDetails}</td>
</tr>


<tr>
    <td> Invoice IVA</td>
    <td> {this.props.data.iva}</td>
</tr>

<tr>
    <td> Credit</td>
    <td> {this.props.data.credit}</td>
</tr>

<tr>
    <td> Remarks</td>
    <td> {this.props.data.remarks}</td>
</tr>

<tr>
    <td> Invoice Attachement</td>
    <td> {this.props.data.selectedFile}</td>
</tr>

<tr>
    <td> Doc type</td>
    <td> {this.props.data.type}</td>
</tr>
  </tbody>
  </Table>
      );
    }
  }

  OpenInvoiceView.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles) (OpenInvoiceView);