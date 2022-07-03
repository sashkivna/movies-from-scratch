import React, {useState} from 'react';
import './MovieCard.css'
import '../Popup/Popup.css'
import Popup from "../Popup/Popup";
import {useModalContext} from "../../../modal.context";

export interface MovieCardInterface {
    title: string,
    popularity: number,
    index: number,
}

export function MovieCard(props: MovieCardInterface) {
    const [isOpen, setIsOpen] = useState(false);

    const contextData = useModalContext();

    return (<div className='card' onClick={() => setIsOpen(!isOpen)}>
        <div>{props.title}</div>

        <div>{props.popularity}</div>

        {isOpen && <Popup
            mode={'small'}
            content={<>
                <button className="modify-btn" onClick={() => contextData.openEditModal(props.index)}>Edit</button>
                <button className="modify-btn" onClick={() => contextData.openDeleteModal(props.index)}>Delete</button>
            </>}
            handleClose={contextData.closeModal}
        />}
    </div>)
}