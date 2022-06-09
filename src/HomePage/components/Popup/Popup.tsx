import React from "react";

const Popup = (props: any) => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <div className="list">{props.content}</div>
            </div>
        </div>
    );
};

export default Popup;