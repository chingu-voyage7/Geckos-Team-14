import React from 'react';

const ListItem = (props) => {
    return (
        <li className="checklist__item">
           <input 
                type="checkbox" name="item" 
                value={props.item} 
                checked={props.complete} 
                onChange={()=>props.onToggleCheckBox(props.index)}
                className="checklist__complete"
           />
           <p className="checklist__name">{props.item} <button onClick={()=>props.onDeleteCheckListItem(props.index)}>X</button></p>
        </li>
    );
}

export default ListItem;