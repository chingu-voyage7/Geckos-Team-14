import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
class ListMenu extends React.Component {

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
            <div className="list-menu__wrapper">
                <div className={this.state.isOpen ? "list-menu list-menu--show" : "list-menu"}>
                    <div className="list-menu__section">
                        <h2 className="list-menu__title">List Actions</h2>
                        <button 
                            className="btn btn--close-menu"
                            onClick={this.toggleCloseButton}
                            ><FontAwesomeIcon icon={faTimes}/>
                        </button>
                    </div>
                    <div className="list-menu__section">
                        <ul className="options__list">
                            <li className="option__item">Add Card<FontAwesomeIcon className="icon__item" icon={faEllipsisH}/></li>
                            <li className="option__item">Copy List<FontAwesomeIcon className="icon__item" icon={faEllipsisH}/></li>
                            <li className="option__item">Move List<FontAwesomeIcon className="icon__item" icon={faEllipsisH}/></li>
                            <li className="option__item">Watch</li>
                        </ul>
                    </div>
                    <div className="list-menu__section">
                        <h3 className="activity-menu__title">Sort By<FontAwesomeIcon className="icon__item" icon={faEllipsisH}/></h3>
                    </div>
                    <div className="list-menu__section">
                        <h3 className="activity-menu__title">
                            Move All Cards in This List
                            <FontAwesomeIcon className="icon__item" icon={faEllipsisH}/>
                        </h3>
                        <h3 className="activity-menu__title">
                            Archive All Cards in This List
                            <FontAwesomeIcon className="icon__item" icon={faEllipsisH}/>
                        </h3>
                    </div>
                    <div className="list-menu__section">
                        <h3 className="activity-menu__title">Archive This List</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListMenu;