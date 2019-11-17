import React, { Component } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import SimpleStorage from "react-simple-storage";
import "normalize.css";
import "./App.scss";

import "./App.scss";
import BoardNav from "./Component/BoardNav/BoardNav.js";
import TrelloNav from "./Component/TrelloNav.js";

import List from "./Component/List/List";

import Scene3 from "./Component/Background/images/scene3.jpg";

import { connect } from "react-redux";
import { addList } from "./actions/listActions";
import { editCard } from "./actions/cardActions";
import { handleDragAndDrop } from "./actions/dragAndDropActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleType: { backgroundImage: `url(${Scene3})` },
      backgroundType: ""
    };
  }

  handleBackgroundColor = () => {
    this.setState({ backgroundType: "Colors" });
  };

  handleBackgroundImage = () => {
    this.setState({ backgroundType: "Images" });
  };

  handleBackgroundChange = newBackground => {
    let styleType =
      this.state.backgroundType === "Colors"
        ? { backgroundColor: `${newBackground}` }
        : { backgroundImage: `url(${newBackground})` };
    this.setState({ styleType });
  };

  addList = () => {
    this.props.addList();
  };

  editCard = (id, editedCard) => {
    this.props.editCard(id, editedCard);
  };

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    this.props.handleDragAndDrop(destination, source, draggableId, type);
  };

  render() {
    const { styleType } = this.state;
    const { lists, cards, listOrder } = this.props.state.state;
    return (
      <div className="App" style={styleType}>
        <SimpleStorage parent={this} prefix={"Geckos14_Trello_Clone"} />
        <TrelloNav />
        <BoardNav
          handleBackgroundChange={this.handleBackgroundChange}
          handleBackgroundColor={this.handleBackgroundColor}
          handleBackgroundImage={this.handleBackgroundImage}
        />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
            key={lists.id}
          >
            {provided => (
              <div
                className="App-header"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {listOrder.map((listId, index) => {
                  const list = lists[listId];
                  const cardList = list.taskIds.map(id => cards[id]);
                  return (
                    <List
                      isSubmitted={list.title === "" ? false : true}
                      key={list.id}
                      listId={list.id}
                      list={list}
                      cardList={cardList}
                      editCard={this.editCard}
                      index={index}
                    >
                      {provided.placeholder}
                    </List>
                  );
                })}

                <button className="add-list-btn" onClick={this.addList}>
                  + Add another list
                </button>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, {
  addList,
  editCard,
  handleDragAndDrop
})(App);
