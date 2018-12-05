import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import CheckList from './CheckList';

export default class Card extends React.Component {
    
    addCheckListItem = itemToAdd => {
        if (itemToAdd) {
        this.props.addCheckListItem(this.props.cardId, itemToAdd);
        }
    }

  onChangeCheckListItem = itemClicked => {
      console.log(itemClicked);
    this.props.onChangeCheckListItem(this.props.cardId, itemClicked);
  }
    
  render() {
      const { content, deleteCard, cardId, list} = this.props;
        return (
            <Draggable draggableId={this.props.cardId} index={this.props.index}>
                {provided => (
                    <li 
                        className="card"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                      {content}
                      {this.props.checkListItems && 
                        (<CheckList 
                            id={this.props.cardId}
                            items={this.props.checkListItems}
                            addCheckListItem={this.addCheckListItem}
                            onChangeCheckListItem={this.onChangeCheckListItem}
                        />)}
                      <button 
                        className="btn btn--delete-card"
                        onClick={() => deleteCard(cardId, list)}
                      >
                        X
                      </button>
                    </li>
                )}
            </Draggable>
        )
    }
}
