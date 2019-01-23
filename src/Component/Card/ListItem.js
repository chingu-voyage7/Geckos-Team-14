import React, { Component } from 'react';

class ListItem extends Component {

    state = {
        isEditable: false,
        textValue:'',
        itemPosition:''
    }

    componentDidMount = () => {
        if (this.props.item !== this.state.textValue) {
            this.setState({ textValue : this.props.item });
        }
    }    

    onClickTextField = (textValue) => {
        this.setState({ isEditable : true });
    }

    onChangeTextField = (textValue) => {
        this.setState({ textValue });
    }

    handleTextFormSubmit = (index, complete) => {
        if (this.state.textValue === '') {
            this.props.onDeleteCheckListItem(this.props.index);
        } else {
        const editedChecklistItem = {item: this.state.textValue, complete}
        this.props.editCheckListItem(index, editedChecklistItem);
        }
        this.setState({ isEditable: false });
    }

    render() {
        const {item, complete, onDeleteCheckListItem, onToggleCheckBox, index} = this.props;
        return (
            <li className="checklist__item">
                <input 
                        type="checkbox" name="item" 
                        value={item} 
                        checked={complete} 
                        onChange={()=>onToggleCheckBox(index)}
                        className="checklist__complete"
                />
                {(this.state.isEditable ? (
                    <form onSubmit={(e)=> {
                        e.preventDefault();
                        this.handleTextFormSubmit(index, complete);
                        }}>
                        <input 
                            type='text' 
                            value={this.state.textValue} 
                            onChange={(e)=> {
                                this.onChangeTextField(e.target.value);
                            }}
                        />
                    </form>
                ) : (
                    <p className="checklist__name" onClick={()=> {this.onClickTextField(item)}}>{item}</p>
                ))}
                <button className="btn btn--checklist-delete" onClick={()=>onDeleteCheckListItem(index)}><i className="fas fa-times close-item"></i></button>
            </li>
        );
    }
}

export default ListItem;