import React, { Component } from "react";
import "./App.scss";

import List from "./Component/List/List";

// import Card from "./Component/Card/Card";

// use uuid to generate random id's
import uuid from "uuid";

class App extends Component {
  state = {
    lists: []
  };

  editListTitle = (id, title) => {
    this.state.lists.map(list => {
      if (list.id === id) {
        list.title = title;
      }
    });
    this.setState({ lists: this.state.lists });
  };

  deleteList = id => {
    const newList = this.state.lists.filter(list => list.id !== id);
    this.setState({
      lists: newList
    });
  };

  addList = () => {
    this.setState({
      lists: [...this.state.lists, { id: uuid(), title: "" }]
    });
  };

  render() {
    const { lists } = this.state;
    return (
      <div className="board">
        {// map over lists array
        lists.map(list => (
          <List
            key={list.id}
            {...list}
            editListTitle={this.editListTitle}
            deleteList={this.deleteList}
          />
        ))}
        <button onClick={this.addList}>+ Add List</button>
      </div>
    );
  }
}

export default App;
