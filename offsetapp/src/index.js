import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login/Login';
import Boeing from './Boeing/boeingDashboard';
import ParentComponent from './UILayout/Parent';
import Supplier from './Supplier/supplierDashboard';
import CreatePO from './Boeing/CreatePO/createPO';
import * as serviceWorker from './serviceWorker';
// import NewDashboard from './NewDashboard/NewDashboard';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import AddPODetail from './AddPO/poDetails';


ReactDOM.render(
    <Router history ={hashHistory} >
    <Route path="/login" component={Login} />
    
    <Route path="/boeing" component={ParentComponent}>
    {/* <Route path="/newDashboard" component={NewDashboard} /> */}
    <Route path="/supplier" component={Supplier} />
    <Route path="/addPODetail/:poNumber" component={AddPODetail} />
    {/* <Route path="/addPODetail" component={AddPODetail} /> */}
    <Route path="/boeing/createPO/:year" component={CreatePO}/>
    <IndexRoute component={Boeing} />
    </Route>
    </Router>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
