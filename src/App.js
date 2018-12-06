import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

// use uuid to generate random id's
import uuid from "uuid";

import "./App.scss";
import BoardNav from "./Components/BoardNav/BoardNav.js";

import TrelloNav from "./Components/TrelloNav.js";

import List from "./Component/List/List";
import BackgroundSelection from "./Components/Background/BackgroundSelection";



class App extends Component {
  state = {
    cards: {},
    lists: {},
    listOrder: [],


    backgroundColor: 'purple',
    backgroundImage: 'url(https://cdn-images-1.medium.com/max/1600/1*mONNI1lG9VuiqovpnYqicA.jpeg)',


    updateBkImage: false,
    updateBkColor: true,
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

  handleBackgroundChange(color, image) {
    this.setState({
    backgroundColor: color,
    backgroundImage: image,
    })
  }

  render() {

    // var backgroundColor = 'backgroundColor'
    // var backgroundType = ''
    // console.log(colorImage);
    // var BackgroundStyle = this.state.updateBkColor ? ('backgroundColor:' + colorImage) : ('backgroundImage:' + colorImage)
    // console.log(BackgroundStyle);

    const { lists, cards, listOrder, updateBkColor, backgroundColor, backgroundImage } = this.state;
    return (
      <div className="App" style={{ backgroundColor, backgroundImage }}>
        <TrelloNav />
        <BoardNav 
          handleBackgroundChange={this.handleBackgroundChange}
          backgroundColor={this.state.backgroundColor}
          backgroundImage={this.state.backgroundImage}
           />
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
