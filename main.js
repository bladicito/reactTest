import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { render }                       from 'react-dom';
import { Router, Route, hashHistory }   from 'react-router';
import App                              from './components/App/App';
import About                            from './components/About/About';
import Stats                            from './components/Stats/Stats';
import globalApp                        from 'ampersand-app';
import SeasonModel                      from './models/season';
import Helpers                          from './helpers';

// to access global app via console. --> remove later.
window.globalApp        = globalApp;
globalApp.defaultSeason = 'season18';

var config = {
    apiKey          : "AIzaSyBUZcqIzlyJwudGsBnORI6szdfwHktz31g",
    authDomain      : "claudiopizarro.firebaseapp.com",
    databaseURL     : "https://claudiopizarro.firebaseio.com",
    storageBucket   : "project-7474876761560799876.appspot.com"
};


firebase.initializeApp(config);
firebase.database().ref(globalApp.defaultSeason).once('value').then(function(snapshot) {
    var seasonDataPulled = snapshot.val();

    globalApp.currentSeason = new SeasonModel({
        currentSeason       : globalApp.defaultSeason,
        currentClub         : seasonDataPulled.club,
        currentClubCss      : seasonDataPulled.club.replace(' ', '-').toLowerCase(),
        mainImage           : seasonDataPulled.mainImage,
        currentSeasonYear   : seasonDataPulled.year,
        matchesData         : seasonDataPulled.matches,
        currentClubColors   : Helpers.getClubColors(seasonDataPulled.club)
    });

    globalApp.on('updateCurrentSeason', function(data) {
        globalApp.currentSeason.currentSeason = data.currentSeason;
    });


    
    render(
        (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="/stats" component={Stats}/>
                    <Route path="/about" component={About}/>
                </Route>
            </Router>
        ), document.getElementById('react-container'));
    });