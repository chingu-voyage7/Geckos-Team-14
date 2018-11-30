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
    lists: []
  };

  // edit list title
  editTitle = (id, title) => {
    const { lists } = this.state;
    lists.map(list => {
      if (list.id === id) {
        list.title = title;
      }
    });
    this.setState({ lists });
  };

  // WILL USE ON MODAL
  // deleteList = id => {
  //   const { lists } = this.state;
  //   const newList = lists.filter(list => list.id !== id);
  //   this.setState({
  //     lists: newList
  //   });
  // };

  addList = () => {
    const { lists } = this.state;
    this.setState({
      lists: [...lists, { id: uuid(), title: "" }]
    });
  };

  render() {
    const { lists } = this.state;
    // if lists array is not empty, show and map over it. else, don't show
    const listComponent = lists.length
      ? lists.map(list => (
          <List key={list.id} {...list} editTitle={this.editTitle} />
        ))
      : "";
    return (
      <div className="App">
        <TrelloNav />
        <BoardNav />
        <header className="App-header">
          {listComponent}
          <button className="add-list-btn" onClick={this.addList}>
            + Add another list
          </button>
        </header>
      </div>
    );
  }
}

export default App;
