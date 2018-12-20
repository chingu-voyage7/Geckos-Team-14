import React from 'react';
import ListItem from './ListItem';

const _calculatePercent =(items) => {
    let tasksDone = items.reduce((acc, item)=> item.complete ? acc+1 : acc,0);
    let progressPct = parseInt((tasksDone / items.length) * 100);
    return progressPct;

}

const CheckList = (props) => {
    let progressPct = props.items.length !==0 ? _calculatePercent(props.items) : false;
    let percentageComplete = progressPct ? { width: `${progressPct}%` } : {};
    return (
        <div className="checklist">
            <div className="checklist__heading">
                <h2 className="checklist__title">CheckList Title</h2>
                <button class="btn" onClick={props.deleteCheckList}>X</button>
            </div>
            {progressPct && <div className="progress-bar">
                 <div class="progress-bar__inner" style={percentageComplete}>{progressPct}</div>
            </div>}
            <ul className="checklist__items">
                {props.items && props.items.map((checklistItem, index) => <ListItem 
                        key={index}
                        index={index}
                        checklistItem={checklistItem}
                        item={checklistItem.item}
                        complete={checklistItem.complete}
                        onToggleCheckBox={props.onToggleCheckBox}
                        editCheckListItem={props.editCheckListItem}
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
                <button className="btn btn--submit">Add CheckList Item</button>
            </form>
        </div>
    );
};

export default CheckList;