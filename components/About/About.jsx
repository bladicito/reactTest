import React        from 'react';

var About = React.createClass({

    render() {
        return(
            <div className={this.props.currentClub + ' component component-about'}>
                <h1>About component</h1>
            </div>
        )
    }
});

export default About;