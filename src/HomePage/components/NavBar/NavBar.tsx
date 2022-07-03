import React from 'react';
import './NavBar.css'
import {CATEGORIES} from "../../../App";

export const NavBar = () => {
    return <div>
        {CATEGORIES.map((category: string) => <span key={category} className='movie-category'>{category}</span>)}
        </div>;
}