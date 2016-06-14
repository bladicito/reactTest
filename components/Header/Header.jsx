import React            from 'react';
import ampersandMixin   from 'ampersand-react-mixin';
import Styles       from '../../components/Header/css/header.less';

var Header = React.createClass( {
    mixins: [ampersandMixin],

    render() {
        
        return (
            <div className="component component-header">
                <h1>Header Component {this.props.currentSeason}</h1>
            </div>
        )
    }
});

export default Header;