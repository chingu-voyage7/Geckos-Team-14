import React from 'react';
import ListItem from './ListItem';

const CheckList = (props) => {

    let tasksDone = props.items.reduce((acc, item)=> item.complete ? acc+1 : acc,0);
    let progressPct = parseInt((tasksDone / props.items.length) * 100);
    const percentageComplete = { width: `${progressPct}%` };

    return (
        <div className="checklist">
            <h2 className="checklist__title">CheckList Title</h2>
            <div className="progress-bar">
                <div class="progress-bar__inner" style={percentageComplete}>{progressPct}</div>
            </div>
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