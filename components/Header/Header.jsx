import React from 'react';

var Header = React.createClass( {
    render() {
        return (
            <div className="component component-header">
                <h1>{this.props.currentSeason}</h1>
            </div>
        )
    }
});

export default Header;