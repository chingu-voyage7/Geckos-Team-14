import React, { Component } from "react";
import Background from './Background.js';



let backgrounds = {
            Colors: ['#3D348B', '#7678ED', '#F7B801', '#F18701', '#F35B04', '#119DA4', '#19647E'],
            Images: ['#C0C0C0', '#7678ED', '#F7B801', '#F18701', '#F35B04', '#119DA4', '#19647E'],
        }
            
       
        console.log(backgrounds[2]);
        
class BackgroundSelection extends Component {
    state = {
        
    };

    //onClick - call handleBackgroundChange function to pass up color to app state

    // setBackground() {
    //     this.props.handleBackgroundChange(this.props.backgroundColor, this.props.backgroundImage)
    // }
    
    render() {
        

        return (
            <div>
            <div className={(this.props.selectOption) ? "background-options-main background-options-main-show" : "background-options-main background-options-main-hide"}>
                {backgrounds.Colors.map((background) =>    
                    <Background 
                    // style={{backgroundColor: `${backgrounds[i]}`}}
                    background={background}
                    handleBackgroundChange={this.props.handleBackgroundChange}
                    />  
                )}
            </div>
            <div className={(this.props.imageMenu) ? "background-options-main background-options-main-show" : "background-options-main background-options-main-hide"}>
                {backgrounds.Images.map((background) =>    
                    <Background 
                    // style={{backgroundColor: `${backgrounds[i]}`}}
                    background={background}
                    handleBackgroundChange={this.props.handleBackgroundChange}
                    />  
                )}
            </div>
            
            </div>
            
        )
    }
}
    
    export default BackgroundSelection;
    
    
// {sounds.map((sound, i) =>
//                     <DrumPad
//                         clipName={sounds[i].clipName}
//                         src={sounds[i].src}
//                         id={sounds[i].id}
//                         key={sounds[i].clipName}
//                         keyCode={sounds[i].keyCode}
//                         color={sounds[i].color}
//                         handler={this.props.handler}

//                     />

//                 )}