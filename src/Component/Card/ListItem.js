import React, { Component } from 'react';

class ListItem extends Component {

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
                <p className="checklist__name">{item}</p>
                <button onClick={()=>onDeleteCheckListItem(index)}>X</button>
            </li>
        );
    }
}

export default ListItem;