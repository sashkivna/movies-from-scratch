import React, { FunctionComponent } from 'react';
import './NavBar.css'

export const NavBar: FunctionComponent<{categories: Array<string>}> = ({ categories }) => {
    return <div>
        {categories.map((category: string) => <span key={category} className='movie-category'>{category}</span>)}
        </div>;
}