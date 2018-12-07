import React, { Component } from "react";
import Background from './Background.js';
import Scene1 from './images/scene1.jpg';
import Scene2 from './images/scene2.jpg';
import Scene3 from './images/scene3.jpg';
import Scene4 from './images/scene4.jpg';
import Scene5 from './images/scene5.jpg';
import Scene6 from './images/scene6.jpg';
import Scene7 from './images/scene7.jpg';
import Scene8 from './images/scene8.jpg';
import Scene9 from './images/scene9.jpg';

let backgrounds = {
    Colors: ['#3D348B', '#7678ED', '#F7B801', '#F18701', '#F35B04', '#119DA4', '#19647E'],
    Images: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9],
}


console.log(backgrounds[2]);

class BackgroundSelection extends Component {
    state = {
        backgroundColor: 'none',
        backgroundImage: 'none'
    };

    //onClick - call handleBackgroundChange function to pass up color to app state

    // setBackground() {
    //     this.props.handleBackgroundChange(this.props.backgroundColor, this.props.backgroundImage)
    // }

    setBackground(backgroundColor, backgroundImage) {
        this.setState({
            backgroundColor: backgroundColor,
            backgroundImage: backgroundImage
        })
        this.props.handleBackgroundChange(backgroundColor, backgroundImage)
    }

    render() {


        return (
            <div>
                <div className={(this.props.selectOption) ? "background-options-main background-options-main-show" : "background-options-main background-options-main-hide"}>
                    {backgrounds.Colors.map((backgroundColor) =>
                        // <Background 
                        // backgroundColor={background}
                        // handleBackgroundChange={this.props.handleBackgroundChange}
                        // />  
                        <div className="background-options">
                            <div className="background-option--wrapper">
                                <div
                                    style={{ backgroundColor: `${backgroundColor}` }}
                                    className="background-options background-option"

                                    onClick={this.setBackground}
                                >
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={(this.props.imageMenu) ? "background-options-main background-options-main-show" : "background-options-main background-options-main-hide"}>
                    {backgrounds.Images.map((backgroundImage) =>
                        // <Background 
                        // backgroundImage={background}
                        // handleBackgroundChange={this.props.handleBackgroundChange}
                        // />  
                        <div className="background-options">
                            <div className="background-option--wrapper">
                                <div
                                    style={{ backgroundImage: `url(${backgroundImage})`}}
                                    className="background-options background-option"

                                    onClick={this.setBackground}
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

