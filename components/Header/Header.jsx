import React        from 'react';
import Styles       from '../../components/Header/css/header.less';

var Header = React.createClass( {
    render() {
        return (
            <div className="component component-header">
                <h1>Header Component {this.props.currentSeason}</h1>
            </div>
        )
    }
});

export default Header;