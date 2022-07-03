import React, {useMemo} from 'react';
import "./SearchStyles.css"
import {useModalContext} from "../../../modal.context";
import {debounce} from "lodash";
import {useMoviesContext} from "../../../movies.context";

type SearchProps = {
    logo: string;
    title: string;
};

export function Search(props: SearchProps) {
    const moviesData = useMoviesContext();
    const handleChange = (e: React.FormEvent<EventTarget>) => {
        moviesData.searchMovies((e.target as HTMLInputElement).value);
    };

    const debouncedHandleChange = useMemo(
        () => debounce(handleChange, 300)
        , []);
    const contextData = useModalContext();

    return (
        <div>
        <div className='search'>
            <div className="first-row">
                <span>{props.logo}</span>
                <button type="button" className="" onClick={contextData.openAddModal}>ADD MOVIE</button>
            </div>
            <div className='label'>{props.title}</div>
            <div className="search-control">
                <div>
                    <input type="text" className="search-input" onChange={debouncedHandleChange}/>
                </div>
                <button type="button" className="search-button">Search</button>
            </div>
        </div>
        </div>
    )
}