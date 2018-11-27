import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faFill, faBrush, faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';


const MainMenu = (props) => {

    return (
        <div className="main-menu main-menu--show">
            <div className="main-menu__section">
                <h2 className="main-menu__title">Menu</h2>
                <button 
                    className="btn btn--close-menu"
                    onClick={(e)=>{
                        e.preventDefault();
                        console.log("Closes Menu");
                    }}
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
        </div>
    );
}

export default MainMenu;