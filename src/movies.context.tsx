import React, {FC, useState, useContext, Dispatch, SetStateAction} from "react";
import {mockedMovies, Movie, Movies} from "./Mocks";
import {InnerState} from "./HomePage/components/AddMovie/AddMovieForm";
import {filterOutPosition} from "./utils";

export const MoviesContext = React.createContext<{
    moviesList: Movies,
    setMovies: Dispatch<SetStateAction<Movies>>
}>({moviesList: mockedMovies, setMovies: () => {}});

const MoviesProvider: FC = ({children}) => {
    const [moviesList, setMoviesList] = useState<Movies>([]);

    return <MoviesContext.Provider value={{moviesList: moviesList, setMovies: (...args: any[]) => {
        // @ts-ignore
            setMoviesList(...args);
    }
    }}> {children} </MoviesContext.Provider>
}


const useMoviesContext = () => {
    const moviesData = useContext(MoviesContext);

    const {moviesList, setMovies} = moviesData;

    const addMovie = (movie: InnerState) => {
        setMovies(movies => [...movies, movie])
    };
    const deleteMovie = (index: number) => setMovies((moviesList) => filterOutPosition(moviesList, index));
    const editMovie = (movie: Movie | InnerState, editedIndex: number) => {
        const updatedMovies = [...moviesList];
        updatedMovies[editedIndex] = movie;
        setMovies(() => updatedMovies);
    };
    const searchMovies = (searchValue: string) => {
        if(!searchValue) return;
        setMovies(movies => movies.filter(
            movie => movie
                .original_title
                .toLowerCase()
                .includes(searchValue.toLowerCase())
        ));
    };

    return {
        moviesList: moviesList,
        setMovies,
        addMovie,
        deleteMovie,
        editMovie,
        searchMovies
    }
}
export {MoviesProvider, useMoviesContext}