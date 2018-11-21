import React from "react";

const Card = ({ id, text, deleteCard }) => (
  <li>
    {text} <button onClick={() => deleteCard(id)}>delete</button>{" "}
  </li>
);

export default Card;
