import React from 'react';
import ListItem from './ListItem';

const CheckList = (props) => {

    return (
        <div className="checklist">
            <h2 className="checklist__title">CheckList Title</h2>
            <ul className="checklist__items">
                {props.items && props.items.map((checklistItem, index) => <ListItem 
                        key={index}
                        checklistItem={checklistItem}
                        item={checklistItem.item}
                        complete={checklistItem.complete}
                        onChangeCheckListItem={()=> {props.onChangeCheckListItem(checklistItem.item)}}
                    />)
                }
            </ul>
            <form onSubmit={(e)=>{
                e.preventDefault();
                props.addCheckListItem({item: e.target.elements.addItem.value, complete: false}, props.id);
            }}>
                <input type="text" name="addItem"/>
                <button className="btn btn--submit">Add</button>
            </form>
        </div>
    );
};

export default CheckList;