import React from 'react';
import "./SearchStyles.css"

type SearchProps = {
    onSearchMovie: (input: string) => void;
};

export function Search(props: SearchProps) {
    const handleChange = (e: React.FormEvent<EventTarget>) => {
        props.onSearchMovie((e.target as HTMLInputElement).value);
    };

    return (
        <div className='search'>
            <div className="first-row">
                <span>netflix-logo</span>
                <button type="button" className="">ADD MOVIE</button>
            </div>
            <div className='label'>FIND YOUR MOVIE</div>
            <div className="search-control">
                <div>
                    <input type="text" className="search-input" onChange={handleChange}/>
                </div>
                <button type="button" className="search-button">Search</button>
            </div>
        </div>
    )
}