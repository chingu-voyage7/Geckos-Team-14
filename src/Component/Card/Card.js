import React from "react";
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 2px;
    background-color: white;
`;

export default class Card extends React.Component {
    render() {
        return (
            <Draggable 
                draggableId={this.props.cardId}
                index={this.props.index}
            >
                {(provided) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <li>{this.props.text}</li>
                    </Container>
                )}
            </Draggable>
        )
    }
}


/*
const Card = ({ text }) => (
    <Container>
        <li>{text}</li>
    </Container>
);

export default Card;
*/