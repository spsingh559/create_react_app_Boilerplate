import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import {Container, Row, Col} from 'react-bootstrap';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
//  Imported Component
import CreatedPO from './POCount/createdPO';
import PendingPO from './POCount/pendingPO';
import CompletedPO from './POCount/completedPO';
import POTable from './POTable/poTable';
import Notification from './Notification/notification';
import YearSlider from '../NewDashboard/YearSlider';
import POStatus from './POStatus/POStatus';

const styles = theme => ({
    root: {
        ...theme
            .mixins
            .gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    },
    container: {
      position: "fixed",
      width: "100%",
      height: "100%",
      zIndex: "-10",
      backgroundColor:"#eeeeee",
      marginTop:"100px"
    }
});

class Home extends Component {

    state={
        selectedYear:2019
    }

    sendYear=(year)=>{
        this.setState({selectedYear:year})
        
    }

    createNewPo=()=>{
        const { router } = this.props;
        router.push('/boeing/createPo/'+this.state.selectedYear);
    }

    render() {
        const {classes} = this.props;
        let createPO = 10;
        return (
          <div style={{
              minHeight:"700px",
          width: "100%",
          height: "100%",
          backgroundColor:"#eeeeee"}}>

            <div style={{ marginTop: "10px"}}>

                <Container>
                    <Row>
                    <Col md={2}>
      <Paper elevation={1} style={{height:"60px", width:"150px"}}> 
            <center>
            <Typography variant="h5" component="h3">
              selected Year
            </Typography>
            <Typography component="p">
            <h6>{this.state.selectedYear}</h6>
            </Typography>
            </center>
          </Paper>
      </Col>
                        <Col md={10}>
                        <YearSlider 
                        sendYear={this.sendYear}
                        />
                        </Col>
                        
                    </Row>
                   
                    <Row>
                        
                                <Col xs={3}
                                    style={{
                                    paddingLeft: "0"
                                }}>
                                    <CreatedPO createPO={createPO}/>
                                </Col>
                                <Col xs={3}>
                                    <PendingPO/>

                                </Col>
                                <Col xs={3}>
                                    <CompletedPO/>

                                </Col>
                                <Col xs={3}>
                           
                           
                            <Fab color="primary" aria-label="Add" onClick={this.createNewPo}>
        <AddIcon />
      </Fab>
      </Col>
     
      
                                
                            </Row>
                          
                     
                            

                            <Row
                                style={{
                                marginTop: "30px"
                            }}>
                            <Col md={12}>
                                <Paper elevation={1}>
                                    <POTable/>
                                </Paper>
                                </Col>
                            </Row>

                            {/* <Row style={{marginTop:"20px"}}>
                            <Paper elevation={1}>
                            <POStatus />
                                </Paper>
                               
                            </Row>
                        </Col>

                        <Col md={4}>
                            <Row>
                            <Fab color="primary" aria-label="Add" onClick={this.createNewPo}>
        <AddIcon />
      </Fab>
      <Paper elevation={1} style={{height:"75px", width:"280px", marginLeft:"20px"}}> 
            <center>
            <Typography variant="h5" component="h3">
              selected Year
            </Typography>
            <Typography component="p">
            <h2>{this.state.selectedYear}</h2>
            </Typography>
            </center>
          </Paper>
                                
                            </Row>
                            <Row style={{marginTop:"50px"}}>
                                <Notification />
                                
                            </Row>

                        </Col>

                    </Row> */}
                    

                </Container>
                {/* <Paper elevation={1}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper> */}

            </div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);