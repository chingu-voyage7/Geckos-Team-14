import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

// use uuid to generate random id's
import uuid from "uuid";

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
