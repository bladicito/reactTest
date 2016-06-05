import React        from 'react';
import Header       from '../components/Footer/Footer';
import Footer       from '../components/Header/Header';



var Stats = React.createClass({
    getInitialState: function() {

        return {
            currentSeason       : 'season18',
            currentViewport     : 'regular'
        }
    },
    componentDidMount() {
        console.log(this.state);
    },
    render() {
        return (
            <div className="stats">
                <Header/>
                <div>
                    <h1>Stats Page</h1>
                </div>
                <Footer/>
            </div>
        );
    }
});


export default Stats;