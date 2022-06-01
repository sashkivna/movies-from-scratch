import React from 'react';
import Sorter from '../Sorter/Sorter';
import { NavBar } from "../NavBar/NavBar";
import './Header.css'

export function Header () {
    return <div className="header">
        <NavBar categories={ ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'] } />
        <Sorter/>
    </div>
}