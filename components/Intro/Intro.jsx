import React       from 'react';
import IntroStyles from '../../components/Intro/css/intro.less';

var Intro = React.createClass( {


    render() {

        return(
            <div className="component component-intro">
                <div className="container">
                    <div className="row content">
                        <div className="col-md-6 content__element content__element--text">

                        </div>
                        <div className="col-md-6 content__element content__element--image">
                            <img src="./assets/images/claudio.png" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Intro;