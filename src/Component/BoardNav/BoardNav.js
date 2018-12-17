import React, { Component } from "react";
import BoardTitleMenu from './BoardTitleMenu.js';
import MainMenu from "../MainMenu.js";

class BoardNav extends Component {
  state = {
    BoardName: "Add Board Name",
    showNameMenu: false,

    MMisOpen: false,
    starColor: 'white',
  };

  // -- handle main menu --

  toggleCloseButton = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      MMisOpen: !prevState.MMisOpen
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
    const inputLength = newName.length;
    if (inputLength === 0) {
      alert('please enter a name')
    } else if (inputLength !== 0) {
      this.setState({
        BoardName: newName,
        showNameMenu: false,
      });
    } 
  }

  toggleYellow = () => {
    this.setState((prevState) => ({
      starColor: (prevState.starColor === '#f2d600' ? 'white' : '#f2d600')
    }));
  };

  render() {
    const { showNameMenu, BoardName } = this.state;
    return (
      <div className="board-nav-wrapper">
        <MainMenu
          menuState={false}
          MMisOpen={this.state.MMisOpen}
          toggleCloseButton={this.toggleCloseButton}
          handleBackgroundChange={this.props.handleBackgroundChange}
          handleBackgroundColor={this.props.handleBackgroundColor}
          handleBackgroundImage={this.props.handleBackgroundImage}
        />
        <div className="board-nav">
          <div className="menu-wrapper">
            <button
              onClick={this.handleShowMenu}
              className="btn board-nav--title">
              {BoardName}
            </button>
            <button 
              className="btn board-star" onClick={this.toggleYellow} style={{color: `${this.state.starColor}`}}>
              <i class="far fa-star"></i>
            </button>
          </div>
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