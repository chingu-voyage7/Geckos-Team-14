import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import CheckList from './CheckList';
import { faTextHeight } from "@fortawesome/free-solid-svg-icons";

export default class Card extends React.Component {
    
    addCheckListItem = (itemToAdd) => {
        if (itemToAdd) {
            const newCheckList = [...this.props.card.checkListItems, itemToAdd];
            const editedCard = {
                ...this.props.card,
                checkListItems : newCheckList
            }
            this.props.editCard(this.props.cardId, editedCard);
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
                      {(this.props.card && this.props.card.checkListItems) && 
                        (<CheckList 
                            id={this.props.cardId}
                            items={this.props.card.checkListItems}
                            addCheckListItem={this.addCheckListItem}
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
