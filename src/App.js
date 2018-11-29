import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

// use uuid to generate random id's
import uuid from "uuid";

import './App.scss';
import BoardNav from './Components/BoardNav/BoardNav.js';
import MainMenu from './Components/MainMenu.js';
import TrelloNav from './Components/TrelloNav.js';

class App extends Component {
  state = {
    cards: [],
    toggleCardForm: false,
    cardInputVal: ""
  };

  // CARD
  handleToggleCardForm = () => {
    this.setState({
      toggleCardForm: !this.toggleCardForm
    });
  };
  handleCardInputValChange = e => {
    this.setState({
      cardInputVal: e.target.value
    });
  };
  handleSubmitCardForm = e => {
    // prevent form from submitting
    e.preventDefault();
    // if value is empty, alert user
    if (!this.state.cardInputVal) {
      alert("Please add a card");
    } else {
      const newCard = [
        { id: uuid(), text: this.state.cardInputVal },
        ...this.state.cards
      ];
      this.setState({
        cards: newCard,
        cardInputVal: "",
        toggleCardForm: false
      });
    }
  };

  deleteCard = id => {
    const filteredCards = this.state.cards.filter(card => card.id !== id);
    this.setState({
      cards: filteredCards
    });
  };

  render() {
    return (
      <div className="App">
        <MainMenu menuState={false} />
        <TrelloNav />
        <BoardNav />
        <header className="App-header">


        </header>
      </div>
    );
  }
}

export default App;

