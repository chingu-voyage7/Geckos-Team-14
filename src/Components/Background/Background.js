import React, { Component } from "react";

class Background extends Component {
    state = {
        // optionSelected: backgrounds[0],
    };

    //onClick - call handleBackgroundChange function to pass up color to app state

    setBackground() {
        let newColor = 'green';
        let newImage = 'none'
        this.props.handleBackgroundChange(newColor, newImage)
    }

    render() {
        
        
        return (
       
                
                    <div className="background-options">
                        <div className="background-option--wrapper">
                            <div 
                                style={{backgroundColor: `${this.props.background}`}}    
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