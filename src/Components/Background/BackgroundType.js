import React, { Component } from "react";
import BackgroundSelection from './BackgroundSelection.js';

class BackgroundType extends Component {
    state = {
        type: 'Colors',
    };

    handleColorMenu = () => {   
        this.props.toggleOptionsMenu()
        this.setState({
            type: 'Colors'
        })  
        
    }
    
    handleImageMenu = () => {
        this.props.toggleImageMenu()
        this.setState({
            type: 'Images'
        }) 
        
    }

    

    render() {
        console.log(this.state.type)
        return (
            <div className={this.props.changeBackground ? "background-menu-main background-menu-main-show" : "background-menu-main background-menu-main-hide"}>
            <BackgroundSelection 
                selectOption={this.props.selectOption} 
                imageMenu={this.props.imageMenu}
                
                type={this.state.type}
                backgroundColor={this.props.backgroundColor}
                backgroundImage={this.props.backgroundImage}
                handleBackgroundChange={this.props.handleBackgroundChange}
                />    
            <div className="background-types">
                    <div className="background-types--wrapper"><div onClick={this.handleColorMenu} className="background-menu background-menu--colors"></div><h3>Colors</h3></div>
                    <div className="background-types--wrapper"><div onClick={this.handleImageMenu} className="background-menu background-menu--images"></div><h3>Photos</h3></div>
                </div>
            </div>
        )
    }
}

export default BackgroundType;