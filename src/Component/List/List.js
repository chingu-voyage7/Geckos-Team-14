import React, { Component, Fragment } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import CardForm from "../Card/CardForm";
import Card from "../Card/Card";
import ListMenu from "./ListMenu";

class List extends Component {
  state = {
    isEdit: false,
    isSubmitted: true,
    showCardForm: false,
    cardVal: "",
    listMenuOpen: false
  };

  // componentDidMount = () => {
  //   if(this.props.list.title != "") {
  //     this.setState({ isSubmitted: true });
  //   }
  // }
  componentDidMount = (prevProps) => {
    if (prevProps !== this.props) {
      if (!this.props.isSubmitted) {
        console.log("setting List Form Up");
        this.setState({  isSubmitted: false });
      }
    }
  }

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
    this.setState({
      showCardForm: !this.state.showCardForm
    })
  };

  toggleListMenu = () => {
    this.setState({
      listMenuOpen: !this.state.listMenuOpen
    })
  }


  // WILL USE FUNCTION INSIDE OF MODAL TO DELETE CARD
  // deleteCard = id => {
  //   const filteredCards = this.state.cards.filter(card => card.id !== id);
  //   this.setState({
  //     cards: filteredCards
  //   });
  // };

  render() {
    const { isEdit, isSubmitted, showCardForm, cardVal, listMenuOpen } = this.state;
    const { id, title } = this.props.list;
    const { handleTitleChange, cardList, addCardDescription } = this.props;
    return (
      <Draggable
        draggableId={this.props.listId}
        index={this.props.index}
      >
        {(provided) => (
          <div
            className="list"
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
          >
            <div className="list--title">
              {// if form has not been submitted, show form. Also, show form if isEdit is true
                !isSubmitted || isEdit ? (
                  <form onSubmit={this.saveListTitle} className="list--form" >
                    <input
                      type="text"
                      className="list--form-input"
                      autofocus="true"
                      value={title}
                      onChange={e => handleTitleChange(id, e.target.value)}
                    />
                    {// if editing list title, no need to show "Add List" button
                      !isEdit && <button>Add List</button>}
                      {
                      isEdit && <button>Edit List</button>}
                  </form>
                ) : (
                    <Fragment>
                      <h3 onClick={this.toggleTitleForm}>{title}</h3>
                      <button className="open-list-menu-btn" onClick={this.toggleListMenu}><i className="fas fa-ellipsis-h fa-sm"></i></button>
                      {
                        listMenuOpen &&
                        <ListMenu

                          toggleListMenu={this.toggleListMenu}
                          copyList={this.props.copyList}
                          deleteList={this.props.deleteList}
                          listId={id}
                          title={title}
                        />
                      }

                    </Fragment>
                  )}
            </div>
            {provided.placeholder}

            {
              <Droppable
                droppableId={this.props.listId}
                type="task"
              >

                {(provided) => (
                  <ul
                    className="card-list"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {provided.placeholder}
                    {cardList.map((card, index) => (
                      <Card
                        key={card.id}
                        cardId={card.id}
                        content={card.content}
                        index={index}
                        card={card}
                        deleteCard={this.props.deleteCard}
                        list={this.props.list}
                        editCard={this.props.editCard}
                        addCardDescription={addCardDescription}
                      >
                        {/* {provided.placeholder} */}
                      </Card>
                    ))}
                    {/* </ul> */}
                  </ul>
                )}
              </Droppable>
            }

            {// if showCardForm is true, show form
              showCardForm && (
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
            {/* <button
              className="btn btn--delete-list"
              onClick={e => {
                e.preventDefault();
                if(window.confirm('Are you sure you want to delete ' + title + '?')) {
                  alert("List " + title + " deleted.");
                  this.props.deleteList(id);
                } else {}
                // this.props.deleteList(id);
              }}
            >
              Delete List
        </button> */}
          </div>)}

      </Draggable>
    );
  }
}

export default List;
