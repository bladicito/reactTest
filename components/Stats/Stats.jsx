import React        from 'react';

import GlobalApp    from 'ampersand-app';


var Stats = React.createClass({
    updateSeason :function() {
        GlobalApp.trigger('updateSeason', {currentSeason: '2015'});

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