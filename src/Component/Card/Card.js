import React, { Fragment } from "react";
import { Draggable } from 'react-beautiful-dnd';
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
        const { content, deleteCard, cardId, list } = this.props;
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
                                onClick={() => deleteCard(cardId, list)}
                            >
                                X
                      </button>
                        {/* </li> */}
                        </li>
                    )}
                    
                </Draggable>
                <CardModal content={content} toggleModal={this.toggleModal} isModalOpen={isModalOpen} />
            </Fragment>
        )
    }
}
