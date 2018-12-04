import React from "react";

const CardForm = ({
  cardVal,
  handleCardValChange,
  addToCard,
  toggleCardForm
}) => (
  <form className="card--form" onSubmit={addToCard}>
    <textarea
      rows="3"
      value={cardVal}
      onChange={handleCardValChange}
      placeholder="Enter a title for this card..."
    />
    <button type="submit">Add Card</button>
    <button className="cancel-btn" onClick={toggleCardForm}>
      X
    </button>
  </form>
);

export default CardForm;
