import React, { Component } from "react";
import BoardTitleMenu from './BoardTitleMenu.js';

class BoardNav extends Component {
  state = {
    BoardName: "Add Board Name",
    showNameMenu: false
  };

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
      <div className="board-nav">
        <button
          onClick={this.handleShowMenu}
          className="btn board-nav--title">
          {BoardName}
        </button>
        <button className="btn board-nav--menu"><i className="fas fa-ellipsis-h"></i>Show Menu</button>
        {
          showNameMenu && (
            <BoardTitleMenu
              handleShowMenu={this.handleShowMenu}
              handleNameSubmit={this.handleNameSubmit}
              BoardName={BoardName}
            />
          )}
      </div>
    )
  }
}

export default BoardNav;