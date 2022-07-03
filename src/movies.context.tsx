import React, {FC, useState, useContext, Dispatch, SetStateAction} from "react";
import {mockedMovies, Movie, Movies} from "./Mocks";
import {InnerState} from "./HomePage/components/AddMovie/AddMovieForm";

export const MoviesContext = React.createContext<{
    movies: Movies,
    setMovies: Dispatch<SetStateAction<Movies>>
}>({movies: mockedMovies, setMovies: () => {}});

const MoviesProvider: FC = ({children}) => {
    const [movies, setMovies] = useState<Movies>([]);

    return <MoviesContext.Provider value={{movies: movies, setMovies: (...args: any[]) => {
        debugger;
        // @ts-ignore
            setMovies(...args);
    }
    }}> {children} </MoviesContext.Provider>
}


const useMoviesContext = () => {
    const moviesData = useContext(MoviesContext);

    const {movies, setMovies} = moviesData;

    const addMovie = (movie: InnerState) => {
        debugger
        setMovies(movies => [...movies, movie])
    };
    const deleteMovie = (index: number) => setMovies((movies) => movies.filter((_movie: any, movieIndex: number) => movieIndex !== index));
    const editMovie = (movie: Movie, editedIndex: number) => {
        const nextMovies = [...movies];
        nextMovies[editedIndex] = movie;
        setMovies(nextMovies);
    };
    const searchMovies = (searchField: string) => {
        setMovies(movies => searchField ? movies.filter(
            movie => {
                return (
                    movie
                        .original_title
                        .toLowerCase()
                        .includes(searchField.toLowerCase())
                );
            }
        ) : movies)
    };

    return {
        movies,
        setMovies,
        addMovie,
        deleteMovie,
        editMovie,
        searchMovies
    }
}
export {MoviesProvider, useMoviesContext}