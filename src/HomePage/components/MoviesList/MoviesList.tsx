import React from 'react';
import { MovieCard } from "../MovieCard/MovieCard";
import './MoviesList.css'
import {Movie} from "../../../Mocks";

export interface MoviesListInterface {
    movies: any,
    onCardClick: (movie: any) => void
}

export function MoviesList({ movies, onCardClick } : MoviesListInterface) {

    return (<div className='cards'>
        {movies?.map( (movie: Movie, index: number) => <MovieCard
            onCardClick={() => onCardClick(movie)}
            key={movie.original_title}
            title={movie.original_title}
            index={index}
            popularity={movie.popularity}/>)}
    </div>)
}