import React from "react";

const CardForm = ({
  cardInputVal,
  handleCardInputValChange,
  handleSubmitCardForm,
  handleToggleCardForm
}) => (
  <form class="card--form" onSubmit={handleSubmitCardForm}>
    <textarea
      rows="3"
      value={cardInputVal}
      onChange={handleCardInputValChange}
      placeholder="Enter a title for this card..."
    />
    <button type="submit">Add Card</button>
    <button className="cancel-btn" onClick={handleToggleCardForm}>
      X
    </button>
  </form>
);

export default CardForm;
