import { ADD_CARD, DELETE_CARD, EDIT_CARD } from "./types";

export const addCard = (id, cardContent) => {
  return {
    type: ADD_CARD,
    id,
    cardContent
  };
};

export const deleteCard = (cardName, list) => {
  return {
    type: DELETE_CARD,
    cardName,
    list
  };
};

export const editCard = (id, editedCard) => {
  return {
    type: EDIT_CARD,
    id,
    editedCard
  };
};
