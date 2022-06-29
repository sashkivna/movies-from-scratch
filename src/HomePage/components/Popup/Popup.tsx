import React from "react";

const Popup = (props: any) => {
    return (
        <div className = {`popup ${props.mode === 'full' ? 'big' : 'dynamic'}`}>
            <span className="close-icon" onClick={(e) => {
                e.stopPropagation();
                props.handleClose();
            }}>x</span>
            <div className="content">{props.content}</div>
        </div>
    );
};

export default Popup;