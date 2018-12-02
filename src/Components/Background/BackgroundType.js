import React, { Component } from "react";
import BackgroundSelection from './BackgroundSelection.js';

class BackgroundType extends Component {
    state = {
        changeBackground: false,
    };

    render() {


        return (
            <div className={this.props.changeBackground ? "background-menu-main background-menu-main-show" : "background-menu-main background-menu-main-hide"}>
                <div className="background-types">
                    <div className="background-types--wrapper"><div className="background-menu background-menu--colors"></div><h3>Colors</h3></div>
                    <div className="background-types--wrapper"><div className="background-menu background-menu--images"></div><h3>Photos</h3></div>
                </div>
            </div>
        )
    }
}

export default BackgroundType;