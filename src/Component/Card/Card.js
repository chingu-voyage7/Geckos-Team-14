import React from "react";

const Card = ({ content, deleteCard, id, list }) => {

    return (
      <div className="card">
        <p>{content}</p>
        <button
          className="btn btn--delete-card"
          onClick={() => deleteCard(id, list)}
        >
          X
        </button>
      </div>
    );
}

export default Card;
