import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login/Login';
import Home from './home/home';
import ParentComponent from './UILayout/Parent';
import * as serviceWorker from './serviceWorker';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';


ReactDOM.render(
    <Router history ={hashHistory} >
    <Route path="/login" component={Login} />
    
    <Route path="/" component={ParentComponent}>
    <Route path="/dashboard" component={Home} />
    <IndexRoute component={Home} />
    </Route>
    </Router>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
