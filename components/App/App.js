import React            from 'react';
import Header           from '../../components/Header/Header';
import Menu             from '../../components/Menu/Menu';
import Footer           from '../../components/Footer/Footer';
import Styles           from '../App/css/App.less';
import globalApp        from 'ampersand-app';
import SeasonModel      from '../../models/season';
import ampersandMixin   from 'ampersand-react-mixin';



var App = React.createClass({

    render: function() {

        const data = globalApp.currentSeason;
        
        return (
            <div className="claudio-pizarro">
                <Header currentSeason={data.currentSeason}/>
                <Menu/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
});

export default App;
