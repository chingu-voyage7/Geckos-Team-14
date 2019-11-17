import uuid from "uuid";
import {
  ADD_LIST,
  DELETE_LIST,
  HANDLE_LIST_TITLE,
  COPY_LIST,
  ADD_CARD,
  DELETE_CARD,
  HANDLE_DRAG_AND_DROP,
  EDIT_CARD
} from "../actions/types";

const initialState = {
  cards: {
    // sample_card: {
    //   id: "sample_card",
    //   content: "Sample Card"
    // }
  },
  lists: {
    // sample_list: {
    //   id: "sample_list",
    //   title: "Sample List",
    //   taskIds: ["sample_card"]
    // }
  },
  listOrder: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST: {
      const { lists } = state;
      const listId = uuid().replace(/-/g, "");
      const newList = Object.assign(lists, {
        [listId]: {
          id: listId,
          title: "",
          taskIds: []
        }
      });
      let newListOrder = "";
      // adds the created list inside the listOrder array
      for (let list in lists) {
        newListOrder = [...state.listOrder, list];
      }
      return {
        ...state,
        lists: newList,
        listOrder: newListOrder
      };
    }
    case DELETE_LIST: {
      const { cards, lists, listOrder } = state;
      const taskIds = lists[action.id].taskIds;
      const newCards = { ...cards };
      taskIds.forEach(taskId => delete newCards[taskId]);
      const newLists = { ...lists };
      delete newLists[action.id];
      let index = listOrder.indexOf(action.id);
      let newListOrder = [...listOrder];
      newListOrder.splice(index, 1);
      return {
        ...state,
        cards: newCards,
        lists: newLists,
        listOrder: newListOrder
      };
    }
    case HANDLE_LIST_TITLE: {
      const { lists } = state;
      for (let list in lists) {
        if (lists[list].id === action.id) {
          lists[list].title = action.titleText;
        }
      }
      return {
        ...state,
        lists
      };
    }
    case COPY_LIST: {
      // We need to make copies of the cards from the original List, and add those to the list copy.
      const copyCards = cardsToCopy => {
        const cards = { ...state.cards };
        const taskIds = [];
        cardsToCopy.forEach(card => {
          const id = uuid().replace(/-/g, "");
          cards[id] = { ...cards[card] };
          cards[id].id = id;
          taskIds.push(id);
        });
        return { cards, taskIds };
      };

      const id = uuid().replace(/-/g, "");
      const listCopy = { ...state.lists[action.idToCopy] };
      listCopy.id = id;
      if (action.title) {
        listCopy.title = action.title;
      }
      const index = state.listOrder.indexOf(action.idToCopy);
      const lists = { ...state.lists, [id]: listCopy };
      const { cards, taskIds } = copyCards(listCopy.taskIds);
      lists[id].taskIds = taskIds;
      const listOrder = state.listOrder
        .slice(0, index + 1)
        .concat(id)
        .concat(state.listOrder.slice(index + 1));
      return {
        ...state,
        cards,
        lists,
        listOrder
      };
    }
    case ADD_CARD: {
      const { cards, lists } = state;
      // generate new card id
      const cardId = uuid().replace(/-/g, "");
      // make a new card
      const newCard = {
        [cardId]: {
          id: cardId,
          content: action.cardContent
        }
      };
      // add the new card inside the cards object
      Object.assign(cards, newCard);

      for (let list in lists) {
        if (lists.hasOwnProperty(list)) {
          if (lists[list].id === action.id) {
            for (let card in newCard) {
              lists[list].taskIds = [...lists[list].taskIds, card];
            }
          }
        }
      }
      return {
        ...state,
        cards,
        lists
      };
    }
    // case ADD_CARD_DESCRIPTION: {
    //   const { cards } = state;
    //   for (let card in cards) {
    //     if (cards[card].id === action.id) {
    //       Object.assign(cards[card], { description: action.description });
    //     }
    //   }
    //   return {
    //     ...state,
    //     cards: { ...cards }
    //   };
    // }
    case DELETE_CARD: {
      const newTaskIds = action.list.taskIds.filter(
        task => task !== action.cardName
      );
      const newCards = { ...state.cards };
      delete newCards[action.cardName];
      const listCopy = { ...state.lists };
      for (let key in listCopy) {
        if (listCopy[key].id === action.list.id) {
          listCopy[key] = { ...action.list, taskIds: newTaskIds };
        }
      }
      return {
        ...state,
        cards: newCards,
        lists: listCopy
      };
    }
    case EDIT_CARD: {
      const cards = { ...state.cards };
      const { id, editedCard } = action;
      cards[id] = editedCard;
      return {
        ...state,
        cards
      };
    }
    case HANDLE_DRAG_AND_DROP: {
      const { destination, source, draggableId, type } = action.payload;

      if (type === "column") {
        const newListOrder = Array.from(state.listOrder);
        newListOrder.splice(source.index, 1);
        newListOrder.splice(destination.index, 0, draggableId);

        const newState = {
          ...state,
          listOrder: newListOrder
        };
        return newState;
      }
      const home = state.lists[source.droppableId];
      const foreign = state.lists[destination.droppableId];

      if (home === foreign) {
        const newCardIds = Array.from(home.taskIds);
        newCardIds.splice(source.index, 1);
        newCardIds.splice(destination.index, 0, draggableId);

        const newList = {
          ...home,
          taskIds: newCardIds
        };
        const newState = {
          ...state,
          lists: {
            ...state.lists,
            [newList.id]: newList
          }
        };
        return newState;
      }

      // Moving from one list to another
      const homeTaskIds = Array.from(home.taskIds);
      homeTaskIds.splice(source.index, 1);

      const newHome = {
        ...home,
        taskIds: homeTaskIds
      };

      const foreignTaskIds = Array.from(foreign.taskIds);
      foreignTaskIds.splice(destination.index, 0, draggableId);

      const newForegin = {
        ...foreign,
        taskIds: foreignTaskIds
      };

      const newState = {
        ...state,
        lists: {
          ...state.lists,
          [newHome.id]: newHome,
          [newForegin.id]: newForegin
        }
      };

      return newState;

      //   return {
      //     ...state
      //   };
    }
    default:
      return state;
  }
}
