import React from "react";

const BoardTitleMenu = ({
  BoardName,
  handleShowMenu,
  handleNameSubmit,
}) => (
    <div className="board-menu">
      <div className="board-menu--header">
        <h2 className="board-menu--title">Rename Board</h2>
        <button className="board-menu--x" onClick={handleShowMenu}><i className="fas fa-times"></i></button>
      </div>

      <div className="board-menu--form">
        <form onSubmit={handleNameSubmit}>
          <label>Name</label>
          <input
            className="board-menu--input"
            type="text"
            name="name"
            placeholder={BoardName}
          />
          <button className="button-green">Rename</button>
        </form>
      </div>
    </div>
  );

export default BoardTitleMenu;
