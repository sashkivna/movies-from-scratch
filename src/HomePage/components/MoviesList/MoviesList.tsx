import React from 'react';
import { MovieCard } from "../MovieCard/MovieCard";
import './MoviesList.css'
import {Movie} from "../../../Mocks";

export interface MoviesListInterface {
    movies: any}

export function MoviesList({ movies } : MoviesListInterface) {
    console.log('movies', movies)
    return (<div className='cards'>
        {movies?.map( (movie: Movie, index: number) => <MovieCard
            key={movie.original_title}
            title={movie.original_title}
            index={index}
            popularity={movie.popularity}/>)}
    </div>)
}