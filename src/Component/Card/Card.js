import React from "react";

const Card = ({ id, text, deleteCard }) => (
  <li>
    {text}
    <button onClick={() => deleteCard(id)} />
  </li>
);

export default Card;
