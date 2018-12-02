import React, { Component } from "react";
import { Droppable } from 'react-beautiful-dnd';
import CardForm from "../Card/CardForm";
import { Droppable } from 'react-beautiful-dnd';

import Card from "../Card/Card";

class List extends Component {
  state = {
    isEdit: false,
    isSubmitted: false,
    showCardForm: false,
    cardVal: ""
  };

  toggleTitleForm = () => {
    const { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit
    });
  };

  saveListTitle = e => {
    e.preventDefault();
    // if empty alert user
    if (!this.props.list.title) {
      alert("List cannot be blank");
    }
    // else set isEdit to false
    else {
      this.setState({
        isEdit: false,
        isSubmitted: true
      });
    }
  };

  // CARD
  toggleCardForm = () => {
    const { showCardForm } = this.state;
    this.setState({
      showCardForm: !showCardForm
    });
  };

  handleCardValChange = e => {
    this.setState({
      cardVal: e.target.value
    });
  };

  addToCard = e => {
    e.preventDefault();
    const { cardVal } = this.state;
    // if cardVal is empty, alert user
    if (!cardVal) {
      alert("please add a card");
    } else {
      this.props.addCard(this.props.list.id, cardVal);
      this.setState({
        cardVal: ""
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
    const { isEdit, isSubmitted, showCardForm, cardVal } = this.state;
    const { id, title } = this.props.list;
    const { handleTitleChange, cardList } = this.props;
    return (
      <div className="list">
        <div className="list--title">
          {// if form has not been submitted, show form. Also, show form if isEdit is true
          !isSubmitted || isEdit ? (
            <form onSubmit={this.saveListTitle}>
              <input
                type="text"
                value={title}
                onChange={e => handleTitleChange(id, e.target.value)}
              />
              {// if editing list title, no need to show "Add List" button
              !isEdit && <button>Add List</button>}
            </form>
          ) : (
            <h3 onClick={this.toggleTitleForm}>{title}</h3>
          )}
        </div>
<<<<<<< HEAD

        {
          <Droppable droppableId={this.props.listId}>
            {provided => (
=======
        
        {// if cards array is not empty, show cards and map over them
        cards.length ? (
          <Droppable droppableId={id}>
              {(provided) => (
>>>>>>> e043e9b54a0fe58c4180ecaf52a23782cdb5ad6a
              <ul 
                className="card-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
<<<<<<< HEAD
                {cardList.map((card, index)=> (
                  <Card key={card.id} cardId={card.id} content={card.content} index={index} />
                ))}
                {provided.placeholder}
              </ul>)
          }
          </Droppable>
        }

        {// if showCardForm is true, show form
        showCardForm && (
=======
                {cards.map((card, index) => (
                  <Card key={card.id} cardId={card.id} index={index} {...card} />
                ))}
                {provided.placeholder}
              </ul>)}
          
        </Droppable>
        ) : (
          // else, dont' show
          ""
        )}
        {// if toggleCardForm is true, show form
        toggleCardForm && (
>>>>>>> e043e9b54a0fe58c4180ecaf52a23782cdb5ad6a
          <CardForm
            cardVal={cardVal}
            handleCardValChange={this.handleCardValChange}
            addToCard={this.addToCard}
            toggleCardForm={this.toggleCardForm}
          />
        )}

        {// if isSubmitted is true, user can click "Add a card" to toggle form
        isSubmitted && !showCardForm && (
          <p className="add-card-btn" onClick={this.toggleCardForm}>
            + <span>Add a card...</span>
          </p>
        )}
      </div>
    );
  }
}

export default List;
