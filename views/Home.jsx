import React        from 'react';
import Header       from '../components/Footer/Footer';
import Footer       from '../components/Header/Header';



var Home = React.createClass({
    getInitialState: function() {

        return {
            currentSeason       : 'season18',
            currentViewport     : 'smalls'
        }
    },
    componentDidMount() {
        console.log(this.state);
    },
    render() {
        return (
            <div className="home">
                <Header/>
                    <div>
                        <h1>Home Page</h1>
                    </div>
                <Footer/>
            </div>
        );
    }
});


export default Home;