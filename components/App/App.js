import React            from 'react';
import Header           from '../../components/Header/Header';
import Menu             from '../../components/Menu/Menu';
import Footer           from '../../components/Footer/Footer';
import Intro            from '../../components/Intro/Intro';
import Styles           from '../App/css/App.less';
import globalApp        from 'ampersand-app';
import SeasonModel      from '../../models/season';
import ampersandMixin   from 'ampersand-react-mixin';
import BootstrapStyles  from '../../assets/css/bootstrap/bootstrap.css';

var App = React.createClass({
    mixins: [ampersandMixin],

    render: function() {
        return (
            <div className="claudio-pizarro">
                <Header seasonData={globalApp.seasonData}/>
                <Menu/>
                <Intro/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
});

export default App;
