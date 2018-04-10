import React from 'react';

export default (props) => {
    return (
        <div className="modal-overlay-container" style={{...props.style.overlayContainer, display: props.isModalOpen ? 'block' : 'none'}}>
            <div className="modal-overlay" style={{...props.style.modalOverlay}} onClick={props.closeModal}></div>
            <div className="new-target-modal" style={{...props.style.modal}}>
                {props.children}
            </div>
        </div>
    )
}