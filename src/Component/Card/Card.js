import React, { Fragment } from "react";
import { Draggable } from 'react-beautiful-dnd';
import CheckList from './CheckList';
import { faTextHeight } from "@fortawesome/free-solid-svg-icons";

import CardModal from "../CardModal/CardModal"

export default class Card extends React.Component {

    state = {
        isModalOpen: false
    }
    
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
        this.props.onChangeCheckListItem(this.props.cardId, itemClicked);
    }

    onDeleteCheckListItem = index => {
        const editedCheckList = this.props.card.checkListItems.filter((item, currIndex) => currIndex !== index);
        const editedCard = {
          ...this.props.card,
          checkListItems : editedCheckList
          }
        this.props.editCard(this.props.cardId, editedCard);
        console.log(editedCheckList); 
    }

  onToggleCheckBox = index => {
      const toggledCheckListItem = this.props.card.checkListItems[index];
      const editedCheckListItem = {item: toggledCheckListItem.item, complete: !toggledCheckListItem.complete};
      const editedCheckList = this.props.card.checkListItems.map((item, currIndex) =>{
          return (currIndex === index ? editedCheckListItem : item);
      });
      const editedCard = {
        ...this.props.card,
        checkListItems : editedCheckList
        }
      this.props.editCard(this.props.cardId, editedCard);
      console.log(editedCheckList);
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
                    {provided => (

                        <li
                            className="card"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            onClick={this.toggleModal}
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
                <CardModal content={content} toggleModal={this.toggleModal} isModalOpen={isModalOpen} />
            </Fragment>
        )
    }
}
