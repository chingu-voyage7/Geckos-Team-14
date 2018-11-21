import React from "react";

const ListForm = ({ listName, handleListNameChange, handleSubmitListName }) => (
  <form onSubmit={handleSubmitListName}>
    <input
      type="text"
      placeholder="Enter list title..."
      value={listName}
      onChange={handleListNameChange}
    />
    <button type="submit">Add List</button>
  </form>
);

export default ListForm;
