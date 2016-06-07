import React        from 'react';
import NavLink      from '../../components/NavLink/NavLink';

var Menu = React.createClass({
    render : function() {
        return (
            <div className={this.props.currentClub + ' component component-menu'}>
                <ul>
                    <li><NavLink to="/" onlyActiveOnIndex>HOME</NavLink></li>
                    <li><NavLink to="/stats">STATS</NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                </ul>
            </div>
        );
    }
});

export default Menu;