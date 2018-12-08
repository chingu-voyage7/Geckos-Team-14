import React, { Component } from "react";
import BoardTitleMenu from './BoardTitleMenu.js';
import MainMenu from "../MainMenu.js";

class BoardNav extends Component {
  state = {
    BoardName: "Add Board Name",
    showNameMenu: false,

    MMisOpen: false,
  };

  // -- handle main menu --

  toggleCloseButton = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
        MMisOpen : !prevState.MMisOpen
    }))
}

  // -- update name menu --
  handleShowMenu = () => {
    const { showNameMenu } = this.state;
    this.setState({
      showNameMenu: !showNameMenu
    });
  };

  handleNameSubmit = e => {
    e.preventDefault();
    const newName = e.target.elements.name.value
    this.setState({
      BoardName: newName,
      showNameMenu: false,
    });
  }

  render() {
    const { showNameMenu, BoardName } = this.state;
    return (
      <div>
        <MainMenu 
          menuState={false} 
          MMisOpen={this.state.MMisOpen} 
          toggleCloseButton={this.toggleCloseButton}
          handleBackgroundChange={this.props.handleBackgroundChange} />
        <div className="board-nav">
          <button
            onClick={this.handleShowMenu}
            className="btn board-nav--title">
            {BoardName}
          </button>
          <button className="btn board-nav--menu" onClick={this.toggleCloseButton}><i className="fas fa-ellipsis-h"></i>Show Menu</button>
          {
            showNameMenu && (
              <BoardTitleMenu
                handleShowMenu={this.handleShowMenu}
                handleNameSubmit={this.handleNameSubmit}
                BoardName={BoardName}
              />
            )}
        </div>
      </div>
    )
  }
}

export default BoardNav;