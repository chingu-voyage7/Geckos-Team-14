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
  // state = {
  //   lists: []
  // };
  state = {
      cards: {
        "task-1": { id: "task-1", content: "Take out the garbage" },
        "task-2": { id: "task-2", content: "Watch my favorite show" },
        "task-3": { id: "task-3", content: "Charge my phone" },
        "task-4": { id: "task-4", content: "Cook dinner" },
        "task-5": { id: "task-5", content: "Refactor Code" },
        "task-6": { id: "task-6", content: "learn to code" }
      },
      lists: {
        one: {
          id: uuid(),
          title: "To do",
          taskIds: ["task-3", "task-4"]
        },
        two: {
          id: uuid(),
          title: "Done",
          taskIds: ["task-1", "task-2"]
        },
        three: {
          id: uuid(),
          title: "Coding",
          taskIds: ["task-5", "task-6"]
        }
      },
      listOrder: ["one", "two", "three"]
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
    const { cards, lists, listOrder } = this.state;
    // const { lists } = this.state;
    // // if lists array is not empty, show and map over it. else, don't show
    // const listComponent = lists.length
    //   ? lists.map(list => (
    //       <List key={list.id} {...list} editTitle={this.editTitle} />
    //     ))
    //     : "";
    return (
      <div className="App">
        <TrelloNav />
        <BoardNav />
        <div className="list-board">
           {listOrder && listOrder.map(key=> (
             <List key={lists[key].id} {...lists[key]} 
              cardList={lists[key].taskIds.map(taskName => cards[taskName])}/>
           ))}
         </div>
      </div>
    );
  }
  

//   render() {
//     const { lists } = this.state;
//     // if lists array is not empty, show and map over it. else, don't show
//     const listComponent = lists.length
//       ? lists.map(list => (
//           <List key={list.id} {...list} editTitle={this.editTitle} />
//         ))
//       : "";
//     return (
//       <div className="App">
//         <TrelloNav />
//         <BoardNav />
//         <header className="App-header">
//           {listComponent}
//           <button className="add-list-btn" onClick={this.addList}>
//             + Add another list
//           </button>
//         </header>
//       </div>
//     );
//   }
}

export default App;
