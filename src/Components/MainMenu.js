import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faFill, faBrush, faEllipsisH, faTimes, faTasks } from '@fortawesome/free-solid-svg-icons';


class MainMenu extends React.Component {

    state = {
        isOpen: true
    }

    toggleCloseButton = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            isOpen : !prevState.isOpen
        }))
    }

    render = () => {
        return (
            <div className={this.state.isOpen ? "main-menu main-menu--show" : "main-menu"}>
                <div className="main-menu__section">
                    <h2 className="main-menu__title">Menu</h2>
                    <button 
                        className="btn btn--close-menu"
                        onClick={this.toggleCloseButton}
                        ><FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>
                <div className="main-menu__section">
                    <ul className="options__list">
                        <li className="option__item"><FontAwesomeIcon className="icon__item" icon={faBrush}/>Change Background</li>
                        <li className="option__item"><FontAwesomeIcon className="icon__item" icon={faFilter}/>Filter Cards</li>
                        <li className="option__item"><FontAwesomeIcon className="icon__item" icon={faFill}/>Stickers</li>
                        <li className="option__item"><FontAwesomeIcon className="icon__item" icon={faEllipsisH}/>More</li>
                    </ul>
                </div>
                <div className="main-menu__section">
                    <h3 className="activity-menu__title"><FontAwesomeIcon className="icon__item" icon={faTasks}/>Activity</h3>
                </div>
            </div>
        );
    }
}

export default MainMenu;