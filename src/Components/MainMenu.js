import React from 'react';
import BackgroundType from './Background/BackgroundType.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faFill, faBrush, faEllipsisH, faTimes, faTasks } from '@fortawesome/free-solid-svg-icons';

// let menuTitle = ['Menu', 'Change Background']
// let i = 0

class MainMenu extends React.Component {

    state = {
        menuTitle: 'Menu',
        TypeMenuTitle: true,
        
        changeBackground: false,
        selectOption: false,
    }

    toggleMenuControl = () => { this.state.selectOption ? this.toggleOptionsMenu() : this.toggleBackgroundMenu(); }

    //closes and opens the type menu
    toggleBackgroundMenu = () => {
        //menu 0 = main; menu 1 = type; menu 2=option
        //arrow shows when type menu and option menus are open
        
        this.setState((prevState) => ({
            changeBackground: !prevState.changeBackground,
        }))
        this.updateMenuTitle()
    }

    //closes and opens the options menu
    toggleOptionsMenu = () => {
        this.setState((prevState) => ({
            selectOption: !prevState.selectOption,
            
        }))
        // this.updateMenuTitle()
    }

    updateMenuTitle() {
        if (this.state.menuTitle === 'Main') {
            this.setState({
                menuTitle: 'Change Background'
            })
        } else if (this.state.menuTitle === 'Change Background') {
            this.setState({
                menuTitle: 'Colors'
            })
        }
    }



    render = () => {
        return (
            <div className={this.props.MMisOpen ? "main-menu__wrapper" : "main-menu__wrapper--hide"}>
                <div className={this.props.MMisOpen ? "main-menu main-menu--show" : "main-menu "}>
                    <BackgroundType
                        changeBackground={this.state.changeBackground}
                        toggleOptionsMenu={this.toggleOptionsMenu}
                        selectOption={this.state.selectOption} />
                    <div className="main-menu__section">
                        <button 
                            className="main-menu-arrow" 
                            onClick={this.toggleMenuControl}>
                            <i className="fas fa-arrow-left"></i>
                            </button>
                        <h2 className="main-menu__title">{this.state.menuTitle}</h2>
                        <button
                            className="btn--close-menu"
                            onClick={this.props.toggleCloseButton}
                        ><FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>

                    <div className="main-menu__section">
                        <ul className="options__list">
                            <li className="option__item" onClick={this.toggleBackgroundMenu}><FontAwesomeIcon className="icon__item" icon={faBrush} />Change Background</li>
                            <li className="option__item"><FontAwesomeIcon className="icon__item" icon={faFilter} />Filter Cards</li>
                            <li className="option__item"><FontAwesomeIcon className="icon__item" icon={faFill} />Stickers</li>
                            <li className="option__item"><FontAwesomeIcon className="icon__item" icon={faEllipsisH} />More</li>
                        </ul>
                    </div>
                    <div className="main-menu__section">
                        <h3 className="activity-menu__title"><FontAwesomeIcon className="icon__item" icon={faTasks} />Activity</h3>
                    </div>

                </div>
            </div>
        );
    }
}

export default MainMenu;