import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { render }                       from 'react-dom';
import { Router, Route, hashHistory }   from 'react-router';

import App                              from './components/App/App';
import About                            from './components/About/About';
import Stats                            from './components/Stats/Stats';
import GlobalApp                        from 'ampersand-app';

window.GlobalApp = GlobalApp;

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/stats" component={Stats}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('react-container'));
