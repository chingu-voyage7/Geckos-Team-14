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


class Background extends Component {
    state = {
        // optionSelected: backgrounds[0],
    };

    //onClick - call handleBackgroundChange function to pass up color to app state

    // setBackground() {
    //     let newColor = 'green';
    //     let newImage = 'none'
    //     this.props.handleBackgroundChange(this.props.backgroundColor, this.props.backgroundImage)
    // }

    render() {
        
        
        return (
       
                
                    <div className="background-options">
                        <div className="background-option--wrapper">
                            <div 
                                style={{backgroundColor: `${this.props.backgroundImage}`}}    
                                className="background-options background-option"
                                
                                onClick={this.setBackground}
                                >
                            </div>
                        </div>
                    </div>
                    
            
            
        )
    }
}
    
    export default Background;