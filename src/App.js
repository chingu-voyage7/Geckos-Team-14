import React, { Component } from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import logo from "./logo.svg";
import "./App.scss";

// use uuid to generate random id's
import uuid from "uuid";

import "./App.scss";
import BoardNav from "./Components/BoardNav/BoardNav.js";
import MainMenu from "./Components/MainMenu.js";
import TrelloNav from "./Components/TrelloNav.js";

import List from "./Component/List/List";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: {},
      lists: {},
      listOrder: []
    };

    this.onDragEnd = this.onDragEnd.bind(this);
  }
  

  addList = () => {
    const { lists } = this.state;
    const listId = uuid().replace(/-/g, "");
    const newList = Object.assign(lists, {
      [listId]: {
        id: listId,
        title: "",
        taskIds: []
      }
    });
    this.setState({
      lists: newList
    });
    console.log(lists);

    // add the created list inside the listOrder array
    for (let list in lists) {
      this.setState({
        listOrder: [...this.state.listOrder, list]
      });
    }
    console.log(lists);
  };

  // edit list title
  handleTitleChange = (id, e) => {
    const { lists } = this.state;
    for (let list in lists) {
      if (lists[list].id == id) {
        lists[list].title = e;
      }
    }
    this.setState({
      lists: lists
    });
  };

  addCard = (id, e) => {
    const { cards, lists } = this.state;
    // generate card id
    const cardId = uuid().replace(/-/g, "");
    // make a new card
    const newCard = {
      [cardId]: {
        id: cardId,
        content: e
      }
    };

    // add the new card inside the cards object
    Object.assign(cards, newCard);

    this.setState({
      cards
    });
    // loop through lists object
    for (let list in lists) {
      if (lists.hasOwnProperty(list)) {
        // check if id's are equal
        if (lists[list].id === id) {
          // loop through cards object
          for (let card in newCard) {
            // add card to taskIds array
            lists[list].taskIds = [...lists[list].taskIds, card];
          }
        }
      }
    }
    this.setState({
      lists
    });
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const dropId = source.droppableId;
    const list = this.state.lists[dropId];
    var newCardIds = Array.from(list.taskIds);
    newCardIds.splice(source.index, 1);
    newCardIds.splice(destination.index, 0, draggableId);
    let lists = this.state.lists;
    lists[dropId].taskIds = newCardIds;
    this.setState({
      lists
    })
  }

  render() {
    const { lists, cards, listOrder } = this.state;
    return (
      <div className="App">
        <TrelloNav />
        <BoardNav />
        <header className="App-header">
          {listOrder.map(listId => {
            const list = lists[listId];
            const cardList = list.taskIds.map(id => cards[id]);
            return (
              <DragDropContext onDragEnd={this.onDragEnd}>
                <List
                  key={list.id}
                  listId={list.id}
                  list={list}
                  cardList={cardList}
                  handleTitleChange={this.handleTitleChange}
                  addCard={this.addCard}
                />
              </DragDropContext>
            );
          })}

          <button className="add-list-btn" onClick={this.addList}>
            + Add another list
          </button>
        </header>
      </div>
    );
  }
}

export default App;
