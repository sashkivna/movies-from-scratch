import React from 'react';
import Popup from "../Popup/Popup";
import './MovieCard.css'
import '../Popup/Popup.css'
import {useTogglerState} from "./Hooks";

interface MovieCardInterface {
    title: string,
    popularity: number
}

export function MovieCard(props: MovieCardInterface) {
    const [isOpen, toggleIsOpen] = useTogglerState(false);
    const [isEdited, toggleIsEdited] = useTogglerState(false);
    const [isDeleted, toggleIsDeleted] = useTogglerState(false);

    const togglePopup = () => {
        toggleIsOpen();
    }

    const toggleEdit = () => {
        toggleIsEdited();
    }

    const toggleDelete = () => {
        toggleIsDeleted();
    }

    return (<div className='card' onClick={togglePopup}>
        <div>{props.title}</div>

        <div>{props.popularity}</div>
        {isOpen && <Popup
            content={<>
                <button className="modify-btn" onClick={toggleEdit}>Edit</button> {isEdited}
                <button className="modify-btn" onClick={toggleDelete}>Delete</button> {isDeleted}
            </>}
            handleClose={togglePopup}
        />}
    </div>)
}