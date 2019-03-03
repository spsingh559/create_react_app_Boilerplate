import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ButtonBB from 'react-bootstrap/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {Container, Row, Col} from 'react-bootstrap';

//  Imported Component
import CreatedPO from './POCount/createdPO';
import PendingPO from './POCount/pendingPO';
import CompletedPO from './POCount/completedPO';
import POTable from './POTable/poTable';
import Notification from './Notification/notification';
import YearSlider from '../NewDashboard/YearSlider';

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

    render() {
        const {classes} = this.props;
        let createPO = 10;
        return (
          <div style={{position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: "-10",
          backgroundColor:"#eeeeee"}}>

            <div style={{ marginTop: "50px"}}>

                <Container>
                    <Row>
                        <Col md={12}>
                        <YearSlider />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Row>
                                <Col
                                    style={{
                                    paddingLeft: "0"
                                }}>
                                    <CreatedPO createPO={createPO}/>
                                </Col>
                                <Col>
                                    <PendingPO/>

                                </Col>
                                <Col>
                                    <CompletedPO/>

                                </Col>
                            </Row>

                            <Row
                                style={{
                                marginTop: "30px"
                            }}>
                                <Paper elevation={1}>
                                    <POTable/>
                                </Paper>
                            </Row>

                            {/* <Row>
                                Blockchain View
                            </Row> */}
                        </Col>

                        <Col md={4}>
                            <Row>
                                <Notification />
                                
                            </Row>

                        </Col>

                    </Row>

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
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);