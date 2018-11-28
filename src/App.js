import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import MainMenu from './Component/MainMenu';
import CheckList from './Component/Card/CheckList';

// use uuid to generate random id's
import uuid from "uuid";

class App extends Component {
  state = {
    cards: [],
    toggleCardForm: false,
    cardInputVal: "",
    checkListItems: [{item:"Item1", complete:true}]
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

  addCheckListItem = itemToAdd => {
    if (itemToAdd) {
      this.setState((prevState)=> ({checkListItems : [...prevState.checkListItems, {item: itemToAdd, complete:false}]}))
    }
  }

  onChangeCheckListItem = itemClicked => {
    const itemChanged = {item:itemClicked.item, complete:!itemClicked.complete}
    itemClicked.complete = !itemClicked.complete;
    this.setState((prevState) => ({
      checkListItems: [...prevState.checkListItems.filter(item => item !== itemClicked), itemChanged]
    }));
  }

  render() {
    return (
      <div className="App">
        <MainMenu menuState={false}/>
        <CheckList 
          items={this.state.checkListItems}
          onChangeCheckListItem={this.onChangeCheckListItem}
          addCheckListItem={this.addCheckListItem}
        />
      </div>
    );
  }
}

export default App;
