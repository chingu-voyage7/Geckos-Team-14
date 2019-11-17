import React, { Fragment } from "react";
import { Draggable } from "react-beautiful-dnd";
import CardModal from "../CardModal/CardModal";

export default class Card extends React.Component {
  render() {
    const {
      toggleModal,
      isModalOpen,
      content,
      editCard,
      cardId,
      list,
      card
    } = this.props;
    return (
      <Fragment>
        <Draggable draggableId={this.props.cardId} index={this.props.index}>
          {provided => (
            <li
              className="card"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onClick={() => {
                toggleModal(this.props.cardId);
              }}
            >
              {provided.placeholder}
              {content}
              {/* </li> */}
            </li>
          )}
        </Draggable>
        <CardModal
          disableInteractiveElementBlocking={true}
          isDragDisabled={isModalOpen !== "" ? false : true}
          draggableProps={null}
          dragHandleProps={null}
          content={content}
          cardId={cardId}
          list={list}
          card={card}
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
          editCard={editCard}
        />
      </Fragment>
    );
  }
}
