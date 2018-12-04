import React, { Component } from "react";




class BackgroundSelection extends Component {
    state = {
        // optionSelected: backgrounds[0],
    };

    //onClick - call handleBackgroundChange function to pass up color to app state

    render() {
        let backgrounds = {
            colors: ['3D348B', '7678ED', 'F7B801', 'F18701', 'F35B04', '119DA4', '19647E'],
            images: ['3D348B', '7678ED', 'F7B801', 'F18701', 'F35B04', '119DA4', '19647E'],
        }

        return (
            <div className={this.props.selectOption ? "background-options-main background-options-main-show" : "background-options-main background-options-main-hide"}>

                {backgrounds.colors.map((background, i) => {
                    return (
                    <div className="background-options">
                        <div className="background-option--wrapper">
                        <div className="background-options background-option">
                        </div>
                        </div>
                    </div>
                    )
                    })
                }
                
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