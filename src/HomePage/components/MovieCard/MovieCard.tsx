import React, {useState} from 'react';
import './MovieCard.css'
import '../Popup/Popup.css'
import Popup from "../Popup/Popup";
import {useModalContext} from "../../../modal.context";
import Image from '../../../assets/more-actions.svg'

export interface MovieCardInterface {
    title: string,
    popularity: number,
    index: number,
    onCardClick: () => void
}

export function MovieCard(props: MovieCardInterface) {
    const [isOpen, setIsOpen] = useState(false);

    const contextData = useModalContext();

    return (<div className='card' onClick={props.onCardClick}>
        <div>{props.title}</div>

        <div>{props.popularity}</div>
        <Image className='more-actions-icon' width={30} height={30} onClick={(e) => {
            e.stopPropagation();
            setIsOpen((isOpen: boolean) => !isOpen)
        }}/>

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