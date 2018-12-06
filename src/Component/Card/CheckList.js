import React from 'react';
import ListItem from './ListItem';

const CheckList = (props) => {

    return (
        <div className="checklist">
            <h2 className="checklist__title">CheckList Title</h2>
            <ul className="checklist__items">
                {props.items && props.items.map((checklistItem, index) => <ListItem 
                        key={index}
                        index={index}
                        checklistItem={checklistItem}
                        item={checklistItem.item}
                        complete={checklistItem.complete}
                        onToggleCheckBox={props.onToggleCheckBox}
                        onDeleteCheckListItem={props.onDeleteCheckListItem}
                    />)
                }
            </ul>
            <form onSubmit={(e)=>{
                e.preventDefault();
                if (e.target.elements.addItem.value) {
                    props.addCheckListItem({item: e.target.elements.addItem.value, complete: false});
                    e.target.elements.addItem.value='';
                }
            }}>
                <input type="text" name="addItem"/>
                <button className="btn btn--submit btn--full">Add CheckList Item</button>
            </form>
        </div>
    );
};

export default CheckList;