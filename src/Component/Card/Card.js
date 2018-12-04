import React from "react";
import { Draggable } from 'react-beautiful-dnd';

export default class Card extends React.Component {
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
