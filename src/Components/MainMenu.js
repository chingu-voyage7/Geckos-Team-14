import React from 'react';

const MainMenu = (props) => {

    return (
        <div className="main-menu">
            <div className="main-menu__section">
                <h2 className="main-menu__title">Menu</h2>
                <button 
                    className="btn btn--close-menu"
                    onClick={(e)=>{
                        e.preventDefault();
                        console.log("Closes Menu");
                    }}
                    >X</button>
            </div>
            <div className="main-menu__section">
                <ul className="options__list">
                    <li className="option__item">Change Background</li>
                    <li className="option__item">Filter Cards</li>
                    <li className="option__item">Stickers</li>
                    <li className="option__item">More</li>
                </ul>
            </div>
        </div>
    );
}

export default MainMenu;