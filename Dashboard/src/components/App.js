import React, { Component } from 'react';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';

const App = function(){
    return(
        <Router> 
            <Switch>
                <Route exact path = '/' component = {Dashboard}/> 
                
                <Route path = '/login' component = {Login}/> 
            </Switch>
        </Router>
    )
}

export default App;
