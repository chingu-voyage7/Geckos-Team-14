import React from "react";
// import { prependOnceListener } from "cluster";

// const menuLabels = {
//   title: 'RenameBoard',
//   inputLabel: 'Name',
//   placeholder: BoardName,
//   buttonLabel: 'Rename'
// }


const BoardTitleMenu = ({
  
  handleShowMenu,
  handleNameSubmit,
  
  placeholder,
  title,
  inputLabel,
  buttonLabel

}) => (
    <div className="board-menu">
      <div className="board-menu--header">
        <h2 className="board-menu--title">{title}</h2>
        <button className="board-menu--x" onClick={handleShowMenu}><i className="fas fa-times"></i></button>
      </div>

      <div className="board-menu--form">
        <form onSubmit={handleNameSubmit}>
          <label>{inputLabel}</label>
          <input
            className="board-menu--input"
            type="text"
            name="name"
            placeholder={placeholder}
          />
          <button className="menu-btn button-green">{buttonLabel}</button>
        </form>
      </div>
    </div>
  );

export default BoardTitleMenu;
