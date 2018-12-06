import React from 'react'

const CardModal = ({ content, isModalOpen, toggleModal }) => (
    <div className="card-modal" style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div className="card-modal__content">
            <div className="card-modal__content-title">
                <h4>{content}</h4>
                <button onClick={toggleModal}>x</button>
            </div>
            <div className="row">
                <section className="col double-col">
                    <div className="descripton">
                        <h5 className="description__title">Description</h5>
                        <form className="description__form">
                            <textarea
                                rows="5"
                                className="description__form-textarea"></textarea>
                        </form>
                    </div>
                </section>
                <aside className="col">
                    <p>add to card</p>
                    <button><i className="fa fa-check-square"></i> <span>Checklist</span></button>
                    <button><i className="fa fa-clock"></i> <span>Due Date</span></button>
                    <p>actions</p>
                    <button><i className="fa fa-trash"></i> <span>Delete</span></button>
                </aside>
            </div>
        </div>
    </div>
)

export default CardModal