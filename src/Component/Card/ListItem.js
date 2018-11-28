import React from 'react';

const ListItem = (props) => {
    return (
        <li className="checklist__item">
           <input 
                type="checkbox" name="item" 
                value={props.item} 
                checked={props.complete} 
                onChange={()=>props.onChangeCheckListItem(props.checklistItem)}
                className="checklist__complete"
           />
           <p className="checklist__name">{props.item}</p>
        </li>
    );
}

export default ListItem;