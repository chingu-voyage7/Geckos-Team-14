import React, { Component } from "react";
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
  state = {
    cards: {},
    lists: {},
    listOrder: []
  };

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

    // add the created list inside the listOrder array
    for (let list in lists) {
      this.setState({
        listOrder: [...this.state.listOrder, list]
      });
    }
  };

  // const newTaskIds = list.taskIds.filter(task => task !== cardName);
  //   const newCards = { ...this.state.cards };
  //   delete newCards[cardName];
  //   const list_copy = { ...this.state.lists };
  //   for (let key in list_copy) {
  //     if (list_copy[key].id === list.id) {
  //       list_copy[key] = { ...list, taskIds: newTaskIds };
  //     }
  //   }
  //   console.log(newCards, this.state.cards);
  //   this.setState({ cards: newCards, lists: list_copy });

  deleteList = id => {
    const { cards, lists, listOrder } = this.state;
    const taskIds = lists[id].taskIds;
    const newCards = {...cards};
    taskIds.forEach(taskId => delete newCards[taskId]);
    const newLists = {...lists};
    delete newLists[id];
    let index = listOrder.indexOf(id);
    const newListOrder = [...listOrder];
    newListOrder.splice(index, 1);
    this.setState({
      cards: newCards,
      lists: newLists,
      listOrder : newListOrder
    });
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

  deleteCard = (cardName, list) => {
    const newTaskIds = list.taskIds.filter(task => task !== cardName);
    const newCards = { ...this.state.cards };
    delete newCards[cardName];
    const list_copy = { ...this.state.lists };
    for (let key in list_copy) {
      if (list_copy[key].id === list.id) {
        list_copy[key] = { ...list, taskIds: newTaskIds };
      }
    }
    this.setState({ cards: newCards, lists: list_copy });
  };

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
              <List
                key={list.id}
                list={list}
                cardList={cardList}
                handleTitleChange={this.handleTitleChange}
                addCard={this.addCard}
                deleteCard={this.deleteCard}
                deleteList={this.deleteList}
              />
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
