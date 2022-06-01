import React, {useMemo, useState} from 'react';
import {MoviesList} from "./components/MoviesList/MoviesList";
import Scroll from './components/Scroll';
import {Search} from "./components/Search/Search";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Fotter";
import debounce from 'lodash.debounce';
import {mockedMovies} from "../Mocks";

export function HomePage() {
    const [searchField, setSearchField] = useState("");

    const movies = mockedMovies.filter(
        movie => {
            return (
                movie
                    .original_title
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    const debouncedChangeHandler = useMemo(
        () => debounce(setSearchField, 300)
        , []);

    return(
        <>
            <Search onSearchMovie={debouncedChangeHandler} />
            <Header/>
            <Scroll>
                <MoviesList movies={movies} />
            </Scroll>
            <Footer/>
        </>
    )}