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
    <span className="cancel-btn" onClick={toggleCardForm}>
    <i className="fas fa-times"></i>
    </span>
  </form>
);

export default CardForm;
