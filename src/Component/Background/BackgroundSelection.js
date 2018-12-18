import React, { Component } from "react";

import Scene1 from './images/scene1.jpg';
import Scene2 from './images/scene2.jpg';
import Scene3 from './images/scene3.jpg';
import Scene4 from './images/scene4.jpg';
import Scene5 from './images/scene5.jpg';
import Scene6 from './images/scene6.jpg';
import Scene7 from './images/scene7.jpg';
import Scene8 from './images/scene8.jpg';
import Scene9 from './images/scene9.jpg';
import Dragon from './images/dragon.jpg';
import Sunset from './images/sunset.jpg';

let backgrounds = {
    Colors: ['#3D348B', '#7678ED', '#F7B801', '#F18701', '#F35B04', '#119DA4', '#19647E'],
    Images: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Dragon, Sunset],
}

class BackgroundSelection extends Component {
    state = {

    };


    setBackground = (newBackground) => { this.props.handleBackgroundChange(newBackground)}

    render() {

        return (
            <div>
                <div className={(this.props.colorMenu) ? "background-options-main background-options-main-show" : "background-options-main background-options-main-hide"}>
                    {backgrounds.Colors.map((newBackground) =>
                        <div className="background-options" key={newBackground}>
                            <div className="background-option--wrapper">
                                <div
                                    style={{ backgroundColor: `${newBackground}` }}
                                    className="background-options background-option"
                                    onClick={() => this.setBackground(newBackground)}
                                >
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={(this.props.imageMenu) ? "background-options-main background-options-main-show" : "background-options-main background-options-main-hide"}>
                    {backgrounds.Images.map((newBackground) =>
                        <div className="background-options" key={newBackground}>
                            <div className="background-option--wrapper">
                                <div
                                    style={{ backgroundImage: `url(${newBackground})` }}
                                    className="background-options background-option"
                                    onClick={() => this.setBackground(newBackground)}
                                >
                                </div>
                            </div>
                        </div>
                    )}
                </div>


 


            </div>

        )
    }
}

export default BackgroundSelection;

// <div className={(this.props.colorMenu) ? "background-options-main background-options-main-show" : "background-options-main background-options-main-hide"}>
// {backgrounds.Colors.map((backgroundColor) =>
//     <div className="background-options" key={backgroundColor}>
//         <div className="background-option--wrapper">
//             <div
//                 style={{ backgroundColor }}
//                 className="background-options background-option"
//                 onClick={() => this.setBackground(backgroundColor)}
//             >
//             </div>
//         </div>
//     </div>
// )}
// </div>
// <div className={(this.props.imageMenu) ? "background-options-main background-options-main-show" : "background-options-main background-options-main-hide"}>
// {backgrounds.Images.map((backgroundImage) =>
//     <div className="background-options" key={backgroundImage}>
//         <div className="background-option--wrapper">
//             <div
//                 style={{ backgroundImage: `url(${backgroundImage})` }}
//                 className="background-options background-option"
//                 onClick={() => this.setBackground(backgroundImage)}
//             >
//             </div>
//         </div>
//     </div>
// )}
// </div>