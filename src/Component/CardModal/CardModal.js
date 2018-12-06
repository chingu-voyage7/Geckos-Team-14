import React from 'react'

const CardModal = ({ content, isModalOpen, toggleModal }) => (
    <div className="card-modal" style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div className="card-modal__content">
            <div className="card-modal__content-title">
                <h4>{content}</h4>
                <button onClick={toggleModal}>x</button>
            </div>
            <div className="card-modal__content-row">
                <section className="card-modal__content-col double-col"></section>
                <aside className="card-modal__content-col"></aside>
            </div>
        </div>
    </div>
)

export default CardModal