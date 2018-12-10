import React, { Fragment } from "react";
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import CardModal from "../CardModal/CardModal"

const Container = styled.li`
     background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};

`;

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
                    {(provided, snapshot) => (
                        <Container
                            className="card"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            onClick={this.toggleModal}
                            isDragging={snapshot.isDragging}
                        >
                            {content}
                            <button
                                className="btn btn--delete-card"
                                onClick={() => deleteCard(cardId, list)}
                            >
                                X
                      </button>
                        {/* </li> */}
                        </Container>
                    )}
                    
                </Draggable>
                <CardModal content={content} toggleModal={this.toggleModal} isModalOpen={isModalOpen} />
            </Fragment>
        )
    }
}
