import React from 'react';
import { MovieCard } from "../MovieCard/MovieCard";
import './MoviesList.css'
import {Movie} from "../../../Mocks";

export function MoviesList({ movies } : any) {
    return (<div className='cards'>
        {movies.map( (movie: Movie) => <MovieCard key={movie.original_title} title={movie.original_title} popularity={movie.popularity}/>)}
    </div>)
}