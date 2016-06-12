import React            from 'react';
import Header           from '../../components/Header/Header';
import Menu             from '../../components/Menu/Menu';
import Footer           from '../../components/Footer/Footer';
import Styles           from '../App/css/App.less';
import globalApp        from 'ampersand-app';
import ampersandMixin   from 'ampersand-react-mixin';



var App = React.createClass({
    mixins : [ampersandMixin],

    getInitialState: function() {

        return {
            currentSeason       : 'season18',
            currentViewport     : 'regular',
            currentClub         : 'bayern-munich'
        }

    },

    updateSeason(data) {
        this.state.currentSeason = data.currentSeason;

        this.setState({
            currentSeason: this.state.currentSeason
        });
    },

    componentDidMount() {
        var _this = this;

        globalApp.on('updateSeason', function(data) {
            _this.updateSeason(data);
        });

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
