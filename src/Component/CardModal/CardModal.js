import React, { Component } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../CardModal/datepicker.css';

export default class CardModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createdAt : '',
            calendarFocused: false
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(()=> ({ createdAt }));
        }
    }

    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused : focused }));
    }

    render () {

        const { content, isModalOpen, toggleModal } = this.props;
        return (
            <div className="card-modal" style={{ display: isModalOpen ? 'block' : 'none' }}>
            <div className="card-modal__content">
                <div className="card-modal__content-title">
                    <h4>{content}</h4>
                    <button onClick={toggleModal}>x</button>
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
                        numberOfMonths={1}
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
