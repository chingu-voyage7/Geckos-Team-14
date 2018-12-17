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
            calendarFocused: false
        }
    }

    onDateChange = (createdAt) => {
        const editedCard = {...this.props.card, dueDate:createdAt};
        this.props.editCard(this.props.card.id, editedCard);
    }

    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused : focused }));
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

    render () {
        const currentDate = moment();
        const { card, isModalOpen, toggleModal } = this.props;
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
                        <div className="descripton">
                            <h5 className="description__title">Description</h5>
                            <form className="description__form">
                                <textarea
                                    rows="5"
                                    className="description__form-textarea"></textarea>
                            </form>
                        </div>
                        {card.checkListItems && (
                            <CheckList 
                                items={card.checkListItems} 
                                onToggleCheckBox={this.onToggleCheckBox} 
                                addCheckListItem={this.addCheckListItem}
                                onDeleteCheckListItem={this.onDeleteCheckListItem}
                            />
                        )}
                    </section>
                    <aside className="col">
                        <p>add to card</p>
                        <button><i className="fa fa-check-square"></i> <span>Checklist</span></button>
           
                        <SingleDatePicker
                        placeholder={'Due Date'}
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        hideKeyboardShortcutsPanel={true}
                        numberOfMonths={1}
                        isOutsideRange={()=> false}
                        />
                        <p>actions</p>
                        <button><i className="fa fa-trash"></i> <span>Delete</span></button>
                    </aside>
                </div>
            </div>
        </div>
        )
    }
}
