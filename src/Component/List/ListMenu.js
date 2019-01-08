import React from 'react'

const ListMenu = ({ closeListMenu, deleteList, listId }) => (
  <div className="list-menu">
    <header className="list-menu__header">
      <p className="list-menu__header-title">List Actions</p>
      <button onClick={closeListMenu} className="list-menu__header-close-btn"><i className="fas fa-times"></i></button>
    </header>
    <section className="action-list">
      <button className="action-list__btn"
        onClick={() => {
          deleteList(listId);
        }}
      >Delete List...</button>
    </section>
  </div>
)

export default ListMenu