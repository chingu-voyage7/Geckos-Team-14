import React from "react";
import { Draggable } from 'react-beautiful-dnd';

//const Card = ({ content }) => <li className="card">{content}</li>;

//export default Card;

export default class Card extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.cardId} index={this.props.index}>
                {provided => (
                    <li 
                        className="card"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                    {
                        this.props.content
                    }
                        
                    </li>
                )}
            </Draggable>
        )
    }
}