import React            from 'react';
import ampersandMixin   from 'ampersand-react-mixin';
import Styles       from '../../components/Header/css/header.less';

var Header = React.createClass( {
    mixins: [ampersandMixin],

    render() {
        const dataSeason = this.props.seasonData;
        return (
            <div className="component component-header">
                <div className="container">
                    <h1>Header Component {this.props.seasonData.currentSeason}</h1>
                </div>
            </div>
        )
    }
});

export default Header;