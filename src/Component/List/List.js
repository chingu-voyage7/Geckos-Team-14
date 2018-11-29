import React, { Component } from "react";
import CardForm from "../Card/CardForm";

import uuid from "uuid";
import Card from "../Card/Card";

class List extends Component {
  state = {
    isEdit: false,
    submittedListTitle: false,
    cards: [],
    toggleCardForm: false,
    cardInputVal: ""
  };

  handleEditListTitle = () => {
    this.setState({
      submittedListTitle: false,
      isEdit: true
    });
  };

  handleSubmitListTitle = e => {
    // prevent form from submitting
    e.preventDefault();
    // if value is empty, alert user
    if (!this.props.title) {
      alert("Please name your list");
    } else {
      this.setState({
        submittedListTitle: true,
        isEdit: false
      });
    }
  };

  // CARD
  handleToggleCardForm = () => {
    this.setState({
      toggleCardForm: !this.state.toggleCardForm
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

  // WILL USE FUNCTION INSIDE OF MODAL TO DELETE CARD
  // deleteCard = id => {
  //   const filteredCards = this.state.cards.filter(card => card.id !== id);
  //   this.setState({
  //     cards: filteredCards
  //   });
  // };

  render() {
    const {
      isEdit,
      submittedListTitle,
      cards,
      cardInputVal,
      toggleCardForm
    } = this.state;
    const { id, title, editListTitle } = this.props;
    return (
      <div className="list">
        <div className="list--title">
          {// if form has not been submitted, show form. Also, show form if isEdit is true
          !submittedListTitle || isEdit ? (
            <form onSubmit={this.handleSubmitListTitle}>
              <input
                type="text"
                value={title}
                onChange={e => editListTitle(id, e.target.value)}
              />
              {// if editing list title, no need to show "Add List" button
              !isEdit && <button>Add List</button>}
            </form>
          ) : (
            <h3 onClick={this.handleEditListTitle}>{title}</h3>
          )}
        </div>
        {// if cards array is not empty, show cards and map over them
        cards.length ? (
          <ul className="card-list">
            {cards.map(card => (
              <Card key={card.id} {...card} />
            ))}
          </ul>
        ) : (
          // else, dont' show
          ""
        )}
        {// if toggleCardForm is true, show form
        toggleCardForm && (
          <CardForm
            cardInputVal={cardInputVal}
            handleCardInputValChange={this.handleCardInputValChange}
            handleSubmitCardForm={this.handleSubmitCardForm}
            handleToggleCardForm={this.handleToggleCardForm}
          />
        )}

        {// if form is not visible, user can click "Add a card" to toggle form
        !toggleCardForm && (
          <p style={{ cursor: "pointer" }} onClick={this.handleToggleCardForm}>
            + <span>Add a card...</span>
          </p>
        )}
      </div>
    );
  }
}

export default List;
