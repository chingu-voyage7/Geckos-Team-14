import React from "react";

const CardForm = ({
  cardInputVal,
  handleCardInputValChange,
  handleSubmitCardForm,
  handleToggleCardForm
}) => (
  <form onSubmit={handleSubmitCardForm}>
    <textarea
      cols="30"
      rows="10"
      value={cardInputVal}
      onChange={handleCardInputValChange}
      placeholder="Enter a title for this card..."
    />
    <button type="submit">Add Card</button>
    <button onClick={handleToggleCardForm}>X</button>
  </form>
);

export default CardForm;
