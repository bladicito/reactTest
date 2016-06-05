import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { render }                       from 'react-dom';
import { Router, Route, hashHistory }   from 'react-router';

import Home                             from './views/Home';
import About                            from './views/About';
import Stats                            from './views/Stats';



render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/stats" component={Stats}/>
        <Route path="/about" component={About}/>
    </Router>
), document.getElementById('react-container'));
