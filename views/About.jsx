import React        from 'react';
import Header       from '../components/Footer/Footer';
import Footer       from '../components/Header/Header';



var About = React.createClass({
    getInitialState: function() {

        return {
            currentSeason       : 'season18',
            currentViewport     : 'big'
        }
    },

    componentDidMount() {
        console.log(this.state);
    },

    render() {
        return (
            <div className="About">
                <Header/>
                    <div>
                        <h1>About Page</h1>
                    </div>
                <Footer/>
            </div>
        );
    }
});


export default About;