import React from "react";
import BackgroundType from "./Background/BackgroundType.js";

// import { library, config } from '@fortawesome/fontawesome-svg-core'; config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const menuTitles = ["Menu", "Change Background", ["Colors", "Photos"]];

class MainMenu extends React.Component {
  state = {
    menuTitle: menuTitles[0],
    TypeMenuTitle: true,

    changeBackground: false,

    colorMenu: false,
    imageMenu: false
  };

  toggleMenuControl = () => {
    if (this.state.colorMenu || this.state.imageMenu) {
      this.setState(() => ({
        colorMenu: false,
        imageMenu: false
      }));
    } else this.toggleBackgroundMenu();
  };

  //closes and opens the type menu
  toggleBackgroundMenu = () => {
    //arrow shows when type menu and option menus are open
    this.setState(prevState => ({
      changeBackground: !prevState.changeBackground,
      menuTitle: prevState.changeBackground ? "Menu" : "Change Background"
    }));
  };

  //closes and opens the color options menu
  toggleOptionsMenu = () => {
    this.setState(prevState => ({
      colorMenu: !prevState.colorMenu,
      menuTitle: !prevState.colorMenu ? "Colors" : "Change Background"
    }));
    this.props.handleBackgroundColor();
  };

  //closes and opens the image options menu
  toggleImageMenu = () => {
    this.setState(prevState => ({
      imageMenu: !prevState.colorMenu,
      menuTitle: !prevState.imageMenu ? "Photos" : "Change Background"
    }));
    this.props.handleBackgroundImage();
  };

  // updateMenuTitle = () => {

  // };

  render = () => {
    return (
      <div
        className={
          this.props.MMisOpen
            ? "main-menu__wrapper"
            : "main-menu__wrapper--hide"
        }
      >
        <div
          className={
            this.props.MMisOpen
              ? "main-menu main-menu--show"
              : "main-menu main-menu--hide "
          }
        >
          <BackgroundType
            changeBackground={this.state.changeBackground}
            toggleOptionsMenu={this.toggleOptionsMenu}
            toggleImageMenu={this.toggleImageMenu}
            colorMenu={this.state.colorMenu}
            imageMenu={this.state.imageMenu}
            handleBackgroundChange={this.props.handleBackgroundChange}
            handleBackgroundColor={this.props.handleBackgroundColor}
            handleBackgroundImage={this.props.handleBackgroundImage}
          />
          <div className="main-menu__section">
            {this.state.changeBackground ? (
              <button
                className="main-menu-arrow main-menu-arrow-show"
                onClick={this.toggleMenuControl}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
            ) : (
              <button
                className="main-menu-arrow main-menu-arrow-hide"
                onClick={this.toggleMenuControl}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
            )}

            <h2 className="main-menu__title">{this.state.menuTitle}</h2>
            <button
              className="btn--close-menu"
              onClick={this.props.toggleCloseButton}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="main-menu__section">
            <ul className="options__list">
              <li
                className="option__item icon__item"
                onClick={this.toggleBackgroundMenu}
              >
                <i className="fas fa-brush menu-icon"></i>Change Background
              </li>
              <li className="option__item icon__item">
                <i className="fas fa-filter menu-icon"></i>Filter Cards
              </li>
              <li className="option__item icon__item">
                <i className="fas fa-fill menu-icon"></i>Stickers
              </li>
              <li className="option__item icon__item">
                <i className="fas fa-ellipsis-h menu-icon"></i>More
              </li>
            </ul>
          </div>
          <div className="main-menu__section">
            <h3 className="activity-menu__title icon__item">
              <i className="fas fa-tasks menu-icon"></i>Activity
            </h3>
          </div>
        </div>
      </div>
    );
  };
}

export default MainMenu;
