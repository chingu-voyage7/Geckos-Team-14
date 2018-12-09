import React from 'react';
import BackgroundType from './Background/BackgroundType.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faFill, faBrush, faEllipsisH, faTimes, faTasks } from '@fortawesome/free-solid-svg-icons';


class MainMenu extends React.Component {

    state = {
        menuTitle: 'Menu',
        TypeMenuTitle: true,

        changeBackground: false,

        selectOption: false,
        imageMenu: false,
    }

    toggleMenuControl = () => {
        if (this.state.selectOption || this.state.imageMenu) {
            this.setState(() => ({
                selectOption: false,
                imageMenu: false
            }))
        } else this.toggleBackgroundMenu()
    }

    //closes and opens the type menu
    toggleBackgroundMenu = () => {
        //arrow shows when type menu and option menus are open
        this.setState((prevState) => ({
            changeBackground: !prevState.changeBackground,
        }))
        this.updateMenuTitle()
    }

    //closes and opens the color options menu
    toggleOptionsMenu = () => {
        this.setState((prevState) => ({
            selectOption: !prevState.selectOption,

        }))
        this.props.handleBackgroundColor();  
        // this.updateMenuTitle()
    }

    //closes and opens the image options menu
    toggleImageMenu = () => {
        this.setState((prevState) => ({
            imageMenu: !prevState.selectOption,

        }))
        this.props.handleBackgroundImage(); 
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
                        toggleImageMenu={this.toggleImageMenu}
                        selectOption={this.state.selectOption}
                        imageMenu={this.state.imageMenu}
                        
                        handleBackgroundChange={this.props.handleBackgroundChange}
                        handleBackgroundColor={this.props.handleBackgroundColor}
                        handleBackgroundImage={this.props.handleBackgroundImage} 
                        />
                    <div className="main-menu__section">
                        {this.state.changeBackground ? (
                            <button
                                className="main-menu-arrow"
                                onClick={this.toggleMenuControl}>
                                <i className="fas fa-arrow-left"></i>
                            </button>
                        ) : ''
                        }


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