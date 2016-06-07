import React        from 'react';
import Header       from '../../components/Header/Header';
import Menu         from '../../components/Menu/Menu';
import Footer       from '../../components/Footer/Footer';
import Styles       from '../App/css/App.less';


var App = React.createClass({
    getInitialState: function() {

        return {
            currentSeason       : 'season18',
            currentViewport     : 'regular'
        }
    },
    componentDidMount() {
        console.log(this.state);
    },

    render: function() {
        return (
            <div className="claudio-pizarro">
                <Header currentSeason={this.state.currentSeason}/>
                <Menu/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
});

export default App;
