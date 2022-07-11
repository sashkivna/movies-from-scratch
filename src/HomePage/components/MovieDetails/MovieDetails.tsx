import React from "react";
import Image from '../../../assets/search-svg.svg'
import './MovieDetails.css'
import {Movie} from "../../../Mocks";

interface MovieDetailsInterface {
    movie: Movie,
    onSearchToggle: () => void
}

export function MovieDetails({ movie, onSearchToggle } : MovieDetailsInterface) {
    return (<div className='movie-details'>
        <div className='movie-details-row'>
            <span>logo</span>
            <Image className='movie-details-search-icon' width={15} height={15} onClick={onSearchToggle}/>

        </div>
        <div className='movie-details-content'>
            <div className='movie-details-img'> mocked img </div>
            <div className='movie-details-description'>
                <div className='movie-details-field'>{movie.original_title}</div>
                <div className='movie-details-field'>Comedy</div>
                <div className='movie-details-field'>1993</div>
                <div className='movie-details-field'>{movie.popularity}</div>
                <div className='movie-details-field'>{movie.overview}</div>
            </div>
        </div>
    </div>)
}