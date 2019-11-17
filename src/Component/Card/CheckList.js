import React, { Component } from "react";
import ListItem from "./ListItem";

const _calculatePercent = items => {
  let tasksDone = items.reduce(
    (acc, item) => (item.complete ? acc + 1 : acc),
    0
  );
  let progressPct = parseInt((tasksDone / items.length) * 100);
  return progressPct;
};

class CheckList extends Component {
  state = {
    addingNewItem: false,
    editingTitle: false,
    checkListTitle: ""
  };

  componentDidMount = () => {
    if (this.props.checkList.title !== this.state.checkListTitle) {
      this.setState({ checkListTitle: this.props.checkList.title });
    }
  };

  handleTitleSubmitForm = () => {
    this.props.changeCheckListTitle(this.state.checkListTitle);
    this.setState({ editingTitle: false });
  };

  addNewCheckListItem = listItem => {
    if (listItem) {
      this.props.addCheckListItem({ item: listItem, complete: false });
    }
    this.setState({ addingNewItem: false });
  };

  onChangeTitleForm = title => {
    if (title) this.setState({ checkListTitle: title });
  };

  toggleCheckListTitle = () => this.setState({ editingTitle: true });
  toggleNewItem = () => this.setState({ addingNewItem: true });

  render() {
    const {
      checkList,
      deleteCheckList,
      onToggleCheckBox,
      editCheckListItem,
      onDeleteCheckListItem
    } = this.props;
    const checkListExists = checkList && checkList.tasks;
    let progressPct =
      checkList.tasks.length !== 0 ? _calculatePercent(checkList.tasks) : false;
    let percentageComplete = progressPct ? { width: `${progressPct}%` } : {};
    return (
      <div className="checklist">
        <div className="checklist__heading">
          {!this.state.editingTitle ? (
            <h2
              className="checklist__title"
              // onClick={this.toggleCheckListTitle}
            >
              <i className="far fa-check-square left-side-icons"></i>
              {checkList.title}
            </h2>
          ) : (
            <form
              onSubmit={e => {
                e.preventDefault();
                this.handleTitleSubmitForm();
              }}
            >
              <input
                type="text"
                value={this.state.checkListTitle}
                onChange={e => {
                  e.preventDefault();
                  this.onChangeTitleForm(e.target.value);
                }}
              />
            </form>
          )}
          <button
            className="btn btn--checklist-edit"
            onClick={this.toggleCheckListTitle}
          >
            Edit...
          </button>
          <button
            className="btn btn--checklist-delete"
            onClick={deleteCheckList}
          >
            Delete...
          </button>
        </div>
        <div className="checklist-content">
          {
            // progressPct != 0 &&
            <div className="progress-bar">
              <div className="progress-bar__inner" style={percentageComplete}>
                <span className="progress-percent-display">
                  {progressPct == 0 ? "\xa0" : progressPct + "%"}
                </span>
              </div>
            </div>
          }
          <ul className="checklist__items">
            {checkListExists &&
              checkList.tasks.map((checklistItem, index) => (
                <ListItem
                  key={index}
                  index={index}
                  checklistItem={checklistItem}
                  item={checklistItem.item}
                  complete={checklistItem.complete}
                  onToggleCheckBox={onToggleCheckBox}
                  editCheckListItem={editCheckListItem}
                  onDeleteCheckListItem={onDeleteCheckListItem}
                />
              ))}
          </ul>
          {!this.state.addingNewItem ? (
            <p
              className="add-new-checkList__placeholder"
              onClick={this.toggleNewItem}
            >
              Add an item...
            </p>
          ) : (
            <form
              className="add-new-checkList"
              placeholder="Add an item..."
              onSubmit={e => {
                e.preventDefault();
                this.addNewCheckListItem(e.target.elements.addItem.value);
              }}
            >
              <input type="text" name="addItem" />
              <button className="btn btn--submit">Add</button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default CheckList;
