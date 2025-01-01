import React from 'react';

const Modal = ({ isOpen, closeModal, project }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-title">{project?.title}</div>

                {project?.categories && (
                    <div className="modal-cards">
                        {project.categories.map((category, index) => (
                            <div key={index} className="modal-card">
                                <h3>{category.title}</h3>
                                <p>{category.content}</p>
                            </div>
                        ))}
                    </div>
                )}

                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
