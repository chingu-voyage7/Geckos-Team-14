import React from "react";

const CardForm = ({
  cardInputVal,
  handleCardInputValChange,
  handleSubmitCardInput,
  handleToggleCardInput
}) => (
  <form onSubmit={handleSubmitCardInput}>
    <textarea
      rows="5"
      value={cardInputVal}
      onChange={handleCardInputValChange}
      placeholder="Enter a title for this card..."
    />
    <button type="submit">Add Card</button>
    <button className="cancel-btn" onClick={handleToggleCardInput}>
      X
    </button>
  </form>
);

export default CardForm;
