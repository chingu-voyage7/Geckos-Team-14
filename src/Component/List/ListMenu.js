import React, { Component } from 'react'

class ListMenu extends Component {

  state = {
    menuDisplay: 'default'
  }
  
  displayCopyList = () => {
    this.setState({ menuDisplay : 'copyList' });
  }



  render = () => {
    const { toggleListMenu, deleteList, listId } = this.props

    switch (this.state.menuDisplay) {
      case 'copyList':
        return (
          <div className="list-menu">
            <header className="list-menu__header">
              <p className="list-menu__header-title">List Actions</p>
              <button onClick={toggleListMenu} className="list-menu__header-close-btn"><i className="fas fa-times"></i></button>
            </header>
            <section className="action-list">   
              <p>Copy List options</p>
            </section>
          </div>
        )
        break;
      default:
        return (
          <div className="list-menu">
            <header className="list-menu__header">
              <p className="list-menu__header-title">List Actions</p>
              <button onClick={toggleListMenu} className="list-menu__header-close-btn"><i className="fas fa-times"></i></button>
            </header>
            <section className="action-list">
              <button className="action-list__btn"
                onClick={this.displayCopyList}
              >Copy List...</button>
              <button className="action-list__btn"
                onClick={() => {
                  deleteList(listId);
                }}
              >Delete List...</button>
            </section>
          </div>
        )
    }
  }
}

export default ListMenu