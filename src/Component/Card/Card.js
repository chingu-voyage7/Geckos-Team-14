import React, { Fragment } from "react";
import { Draggable } from 'react-beautiful-dnd';
import { faTextHeight } from "@fortawesome/free-solid-svg-icons";
import CardModal from "../CardModal/CardModal"
import { fstat } from "fs";

export default class Card extends React.Component {

    state = {
        isModalOpen: false
    }
    

    toggleModal = () => {
        const { isModalOpen } = this.state
        this.setState({
            isModalOpen: !isModalOpen
        })
    }

    render() {
        const { isModalOpen } = this.state
        const { content, editCard, deleteCard, cardId, list, card, addCardDescription } = this.props;
        return (
            <Fragment>
                <Draggable draggableId={this.props.cardId} index={this.props.index}>
                    {(provided) => (
                        <li
                            className="card"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            onClick={this.toggleModal}
                        >
                            {provided.placeholder}
                            {content}
                            <button
                                className="btn btn--delete-card"
                                onClick={e => {
                                    if(window.confirm("Delete " + content + "?")) {
                                        deleteCard(cardId, list);
                                    } else {
                                        e.stopPropagation();
                                    }
                                }}
                            >
                                X
                      </button>
                        {/* </li> */}
                        </li>
                    )}
                    
                </Draggable>
                <CardModal content={content} deleteCard={deleteCard} cardId={cardId} list={list} card={card} toggleModal={this.toggleModal} isModalOpen={isModalOpen} editCard={editCard} addCardDescription={addCardDescription} />
            </Fragment>
        )
    }
}
