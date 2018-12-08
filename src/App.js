import React, { Component } from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import logo from "./logo.svg";
import "./App.scss";

// use uuid to generate random id's
import uuid from "uuid";

import "./App.scss";
import BoardNav from "./Components/BoardNav/BoardNav.js";

import TrelloNav from "./Components/TrelloNav.js";

import List from "./Component/List/List";
import BackgroundSelection from "./Components/Background/BackgroundSelection";

import Scene1 from './Components/Background/images/scene1.jpg';
import Scene2 from './Components/Background/images/scene2.jpg';
import Scene3 from './Components/Background/images/scene3.jpg';
import Scene4 from './Components/Background/images/scene4.jpg';
import Scene5 from './Components/Background/images/scene5.jpg';
import Scene6 from './Components/Background/images/scene6.jpg';
import Scene7 from './Components/Background/images/scene7.jpg';
import Scene8 from './Components/Background/images/scene8.jpg';
import Scene9 from './Components/Background/images/scene9.jpg';
import Dragon from './sass/images/dragon.jpg';
import { faImages } from "@fortawesome/free-solid-svg-icons";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: {},
      lists: {},
      listOrder: [],

      styleType: '',
      type: 'Images',
      backgroundColor: '',
      backgroundImage: Dragon,


    };

    this.onDragEnd = this.onDragEnd.bind(this);
  }


  // handleBackgroundChange = (backgroundColor, backgroundImage) => {
  //   let styleType;
  //   if (this.state.type === 'Colors') {
  //     styleType = `backgroundColor: ${backgroundColor}`
  //   } else if (this.state.type === 'Images') {
  //     styleType = `backgroundImage: ${backgroundImage}`
  //   }
  //   this.setState({ styleType })
  // }

  handleBackgroundChange = (backgroundColor, backgroundImage) => {
    // let styleType;
    // if (type === 'Colors') {
    //   styleType = `backgroundColor: ${backgroundColor}`
    // } else if (type === 'Images') {
    //   styleType = `backgroundImage: ${backgroundImage}`
    // }
    this.setState({ backgroundColor, backgroundImage })
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
    const newCards = { ...cards };
    taskIds.forEach(taskId => delete newCards[taskId]);
    const newLists = { ...lists };
    delete newLists[id];
    let index = listOrder.indexOf(id);
    const newListOrder = [...listOrder];
    newListOrder.splice(index, 1);
    this.setState({
      cards: newCards,
      lists: newLists,
      listOrder: newListOrder
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
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
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

    

    const { lists, cards, listOrder, backgroundColor, backgroundImage } = this.state;
    return (
      <div className="App" style={{ backgroundColor, backgroundImage: `url(${backgroundImage})` }}>
        <TrelloNav />
        <BoardNav
          handleBackgroundChange={this.handleBackgroundChange}
        />
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
                  deleteCard={this.deleteCard}
                  deleteList={this.deleteList}
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
