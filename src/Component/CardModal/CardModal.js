import React, { Component } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../CardModal/datepicker.css';
import moment from 'moment';
import CheckList from '../Card/CheckList';

export default class CardModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calendarFocused: false,
            isSubmitted: false,
            isEdit: false,
            descripton: ""
        }
    }

    onDateChange = (createdAt) => {
        const editedCard = { ...this.props.card, dueDate: createdAt };
        this.props.editCard(this.props.card.id, editedCard);
    }

    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }
    createNewCheckList = () => {
        const newCheckList = {
            title: "New CheckList",
            tasks: []
        }
        const editedCard = {
            ...this.props.card,
            checkList : newCheckList
        } 
        this.props.editCard(this.props.cardId, editedCard);
    }

    deleteCheckList = () => {
        const editedCard = {
            ...this.props.card
        }
        delete editedCard.checkList;
        this.props.editCard(this.props.cardId, editedCard);
    }

    addCheckListItem = (itemToAdd) => {
        if (itemToAdd) {
            const tasks = [...this.props.card.checkList.tasks, itemToAdd];
            const newCheckList = {...this.props.card.checkList, tasks};
            const editedCard = {
                ...this.props.card,
                checkList : newCheckList
            }
            this.props.editCard(this.props.cardId, editedCard);
        }
    }

    changeCheckListTitle = (title) => {
        const checkList = {
            ...this.props.card.checkList,
            title
        }
        const editedCard = {
            ...this.props.card,
            checkList
        }
        this.props.editCard(this.props.cardId, editedCard);
    }

    editCheckListItem = (position, editedCheckList) => {
        const tasks = this.props.card.checkList.tasks.map((checklistItem, index) => (index !== position ? checklistItem : editedCheckList ));
        
        const editedCard = {
            ...this.props.card,
            checkList : {
                title : this.props.card.checkList.title,
                tasks
            }
        }
        this.props.editCard(this.props.cardId, editedCard);
    }

    // onChangeCheckListItem = itemClicked => {
    //     this.props.onChangeCheckListItem(this.props.cardId, itemClicked);
    // }

    onDeleteCheckListItem = index => {
        const tasks = this.props.card.checkList.tasks.filter((item, currIndex) => currIndex !== index);
        const editedCard = {
          ...this.props.card,
            checkList : {
                title: this.props.card.checkList.title,
                tasks
            }
        }
        this.props.editCard(this.props.cardId, editedCard); 
    }


    onToggleCheckBox = index => {
        const toggledCheckListItem = this.props.card.checkList.tasks[index];
        const editedCheckListItem = {item: toggledCheckListItem.item, complete: !toggledCheckListItem.complete};
        const tasks = this.props.card.checkList.tasks.map((item, currIndex) =>{
            return (currIndex === index ? editedCheckListItem : item);
        });
        const editedCard = {
            ...this.props.card,
            checkList : {
                title: this.props.card.checkList.title,
                tasks
            }
        }
        this.props.editCard(this.props.cardId, editedCard);
    }

    handleDescriptionChange = e => {
        const description = e.target.value
        this.setState({ description })
    }

    submitDescription = e => {
        e.preventDefault()
        const { id } = this.props.card
        const { description } = this.state
        this.props.addCardDescription(id, description)
        this.setState({
            isSubmitted: true,
            isEdit: true
        })
    }

    editDescription = () => {
        this.setState({
            isSubmitted: false,
            isEdit: true
        })
    }

    render() {
        const currentDate = moment();
        const { card, isModalOpen, toggleModal, cardId, list, deleteCard, content } = this.props;
        const { description, isSubmitted, isEdit } = this.state
        return (
            <div className="card-modal" style={{ display: isModalOpen ? 'block' : 'none' }}>
                <div className="card-modal__content">
                    <div className="card-modal__content-title">
                        <h4>{card.content}</h4>
                        <button onClick={toggleModal}>x</button>
                    </div>
                    <div className="card__details">
                        {card.dueDate && (
                            <div className="card__due-date">
                                <h3 className="due-date__title">Due Date</h3>
                                <p className={(card.dueDate > currentDate ? "due-date__date" : "due-date__date due-date__date--overdue")}>
                                    {moment(card.dueDate).format('MMM Do YYYY')}
                                </p>
                            </div>)}
                    </div>
                    <div className="row">
                        <section className="col double-col">
                            <div className="description">
                                <h5 className="description__title">Description {
                                    // show edit button when isSubmited is false and isEdit is true
                                    !isSubmitted || isEdit && (<span onClick={this.editDescription}>Edit</span>)}</h5>
                                {// if isSubmitted is false, show form. Else, hide form and show description
                                    !isSubmitted && <form className="description__form" onSubmit={this.submitDescription}>
                                        <textarea
                                            rows="5"
                                            className="description__form-textarea"
                                            value={description}
                                            onChange={this.handleDescriptionChange}
                                        ></textarea>
                                        <button>Add Description</button>
                                    </form>
                                }
                                {
                                    isSubmitted && <p>{description}</p>
                                }
                            </div>
                            {card.checkList && (
                            <CheckList 
                                checkList={card.checkList} 
                                onToggleCheckBox={this.onToggleCheckBox} 
                                addCheckListItem={this.addCheckListItem}
                                onDeleteCheckListItem={this.onDeleteCheckListItem}
                                editCheckListItem={this.editCheckListItem}
                                deleteCheckList={this.deleteCheckList}
                                changeCheckListTitle={this.changeCheckListTitle}
                            />
                        )}
                        </section>
                        <aside className="col">
                            <p>add to card</p>
                            <button onClick={this.createNewCheckList} disabled={card.checkList}><i className="fa fa-check-square"></i> <span>Checklist</span></button>

                            <SingleDatePicker
                                placeholder={'Due Date'}
                                readOnly={true}
                                date={this.state.createdAt}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onCalendarFocusChange}
                                hideKeyboardShortcutsPanel={true}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                            <p>actions</p>
                            <button onClick={() => {
                                if(window.confirm("Delete " + content + "?")) {
                                    deleteCard(cardId, list);
                                }
                            }

                            }><i className="fa fa-trash"></i> <span>Delete</span></button>
                        </aside>
                    </div>
                </div>
            </div>
        )
    }
}
