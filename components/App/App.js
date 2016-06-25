import React            from 'react';
import Header           from '../../components/Header/Header';
import Menu             from '../../components/Menu/Menu';
import Footer           from '../../components/Footer/Footer';
import Styles           from '../App/css/App.less';
import globalApp        from 'ampersand-app';
import SeasonModel      from '../../models/season';
import ampersandMixin   from 'ampersand-react-mixin';


console.log(globalApp);

var App = React.createClass({
    mixins: [ampersandMixin],

    render: function() {
        return (
            <div className="claudio-pizarro">
                <Header seasonData={globalApp.seasonData}/>
                <Menu/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
});

export default App;
