import React            from 'react';
import GlobalApp        from 'ampersand-app';
import ampersandMixin   from 'ampersand-react-mixin';


var Stats = React.createClass({
    mixins: [ampersandMixin],

    updateSeason :function() {
        GlobalApp.seasonData.currentSeason = 'season20';

    },
    componentDidMount() {



    },
    
    render() {
        return(
            <div className={' component component-stats'}>
                <h1 onClick={this.updateSeason}>STATS component</h1>
            </div>
        );
    }
});

export default Stats;