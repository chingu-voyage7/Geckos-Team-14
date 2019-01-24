import React, { Fragment } from "react";
import { Draggable } from 'react-beautiful-dnd';
import { faTextHeight } from "@fortawesome/free-solid-svg-icons";
import CardModal from "../CardModal/CardModal"
import { fstat } from "fs";

export default class Card extends React.Component {


    /* MOVED ISMODALOPEN AND TOGGLEMODAL FROM CARD TO LIST FOR THE MODAL DRAGGABLE ISSUE */

    
    // state = {
    //     isModalOpen: false
    // }
    

    // toggleModal = () => {
    //     const { isModalOpen } = this.state
    //     this.setState({
    //         isModalOpen: !isModalOpen
    //     })
    // }

    render() {
        // const { isModalOpen } = this.props
        const { toggleModal, isModalOpen, content, editCard, deleteCard, cardId, list, card, addCardDescription } = this.props;
        return (
            <Fragment>
                <Draggable draggableId={this.props.cardId} index={this.props.index}>
                    {(provided) => (
                        <li
                            className="card"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            onClick={toggleModal}
                        >
                            {provided.placeholder}
                            {content}
                        {/* </li> */}
                        </li>
                    )}
                    
                </Draggable>
                <CardModal disableInteractiveElementBlocking={true} isDragDisabled={isModalOpen ? false : true} draggableProps={null} dragHandleProps={null} content={content} deleteCard={deleteCard} cardId={cardId} list={list} card={card} toggleModal={toggleModal} isModalOpen={isModalOpen} editCard={editCard} addCardDescription={addCardDescription} />
            </Fragment>
        )
    }
}
